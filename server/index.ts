import express, { type Request, Response, NextFunction } from "express";
import { spawn } from "node:child_process";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  const server = await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  // In development, only serve API routes
  // The client will be served separately on port 5173
  if (app.get("env") !== "development") {
    serveStatic(app);
  }

  // ALWAYS serve the app on the port specified in the environment variable PORT
  // Other ports are firewalled. Use a fixed default port for development.
  // This serves both the API and the client.
  const port = parseInt(process.env.PORT || '8080', 10);
  
  server.on('error', (err: any) => {
    if (err.code === 'EADDRINUSE') {
      log(`Port ${port} is already in use. Trying port ${port + 1}...`);
      server.listen(port + 1, () => {
        const url = `http://localhost:${port + 1}`;
        log(`serving on ${url}`);
        try {
          if (process.platform === 'win32') {
            spawn('cmd', ['/c', 'start', '', url], { detached: true });
          }
        } catch {
          // no-op if opening the browser fails
        }
      });
    } else {
      throw err;
    }
  });

  server.listen(port, () => {
    const url = `http://localhost:${port}`;
    log(`serving on ${url}`);
    try {
      if (process.platform === 'win32') {
        // Open default browser on Windows
        spawn('cmd', ['/c', 'start', '', url], { detached: true });
      }
    } catch {
      // no-op if opening the browser fails
    }
  });
})();
