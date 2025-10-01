// server/index.ts
import express2 from "express";
import { spawn } from "node:child_process";

// server/routes.ts
import { createServer } from "http";

// server/emailService.ts
import nodemailer from "nodemailer";
var EMAIL_CONFIG = {
  // For Gmail, you can use these settings
  service: "gmail",
  auth: {
    user: "sohamvaghela1712@gmail.com",
    // Your email
    pass: process.env.EMAIL_PASSWORD || ""
    // Your app password (not regular password)
  }
};
var createTransporter = () => {
  return nodemailer.createTransport(EMAIL_CONFIG);
};
var sendContactEmail = async (formData) => {
  try {
    const transporter = createTransporter();
    const mailOptions = {
      from: "sohamvaghela1712@gmail.com",
      to: "sohamvaghela1712@gmail.com",
      subject: `New Contact Form Submission from ${formData.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #D1FF00; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Contact Details:</h3>
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Phone:</strong> ${formData.phone || "Not provided"}</p>
            <p><strong>Business Type:</strong> ${formData.businessType || "Not specified"}</p>
          </div>
          
          <div style="background-color: #fff; padding: 20px; border-left: 4px solid #D1FF00; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6;">${formData.message}</p>
          </div>
          
          <div style="background-color: #e8f5e8; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <p style="margin: 0; color: #2d5a2d;">
              <strong>Reply to:</strong> <a href="mailto:${formData.email}" style="color: #0066FF;">${formData.email}</a>
            </p>
          </div>
          
          <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
          <p style="color: #666; font-size: 12px; text-align: center;">
            This email was sent from the Zenko Digital contact form.
          </p>
        </div>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${formData.name}
        Email: ${formData.email}
        Phone: ${formData.phone || "Not provided"}
        Business Type: ${formData.businessType || "Not specified"}
        
        Message:
        ${formData.message}
        
        Reply to: ${formData.email}
      `
    };
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", info.messageId);
    return true;
  } catch (error) {
    console.error("Failed to send email:", error);
    return false;
  }
};
var testEmailConnection = async () => {
  try {
    const transporter = createTransporter();
    await transporter.verify();
    console.log("Email server connection verified");
    return true;
  } catch (error) {
    console.error("Email server connection failed:", error);
    return false;
  }
};

// server/routes.ts
async function registerRoutes(app2) {
  app2.post("/api/contact", async (req, res) => {
    try {
      const { name, email, phone, businessType, message } = req.body;
      if (!name || !email || !message) {
        return res.status(400).json({
          error: "Missing required fields: name, email, and message are required"
        });
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({
          error: "Invalid email format"
        });
      }
      const contactSubmission = {
        id: Date.now().toString(),
        name,
        email,
        phone: phone || "",
        businessType: businessType || "",
        message,
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        status: "new"
      };
      console.log("New contact form submission:", contactSubmission);
      const emailSent = await sendContactEmail(contactSubmission);
      if (emailSent) {
        console.log("Email notification sent successfully");
      } else {
        console.log("Failed to send email notification, but form submission was recorded");
      }
      res.status(200).json({
        message: "Contact form submitted successfully",
        id: contactSubmission.id,
        emailSent
      });
    } catch (error) {
      console.error("Error processing contact form:", error);
      res.status(500).json({
        error: "Internal server error. Please try again later."
      });
    }
  });
  app2.get("/api/health", (req, res) => {
    res.status(200).json({
      status: "ok",
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    });
  });
  app2.get("/api/test-email", async (req, res) => {
    try {
      const emailWorking = await testEmailConnection();
      res.status(200).json({
        emailService: emailWorking ? "working" : "not configured",
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      });
    } catch (error) {
      res.status(500).json({
        emailService: "error",
        error: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });
  const httpServer = createServer(app2);
  return httpServer;
}

// server/vite.ts
import express from "express";
import fs from "fs";
import path from "path";
import { createServer as createViteServer, createLogger } from "vite";
import { nanoid } from "nanoid";
var viteConfig = {
  plugins: [
    // React plugin will be added by Vite
  ],
  resolve: {
    alias: {
      "@": path.resolve(process.cwd(), "client", "src"),
      "@shared": path.resolve(process.cwd(), "shared"),
      "@assets": path.resolve(process.cwd(), "attached_assets")
    }
  },
  root: path.resolve(process.cwd(), "client"),
  build: {
    outDir: path.resolve(process.cwd(), "dist/public"),
    emptyOutDir: true
  },
  server: {
    port: 5173,
    fs: {
      strict: true,
      deny: ["**/.*"]
    }
  }
};
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...viteConfig,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path.resolve(
        process.cwd(),
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path.resolve(process.cwd(), "dist", "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}

// server/index.ts
var app = express2();
app.use(express2.json());
app.use(express2.urlencoded({ extended: false }));
app.use((req, res, next) => {
  const start = Date.now();
  const path2 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path2.startsWith("/api")) {
      let logLine = `${req.method} ${path2} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
(async () => {
  const server = await registerRoutes(app);
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  const port = parseInt(process.env.PORT || "5173", 10);
  server.on("error", (err) => {
    if (err.code === "EADDRINUSE") {
      log(`Port ${port} is already in use. Trying port ${port + 1}...`);
      server.listen(port + 1, () => {
        const url = `http://localhost:${port + 1}`;
        log(`serving on ${url}`);
        try {
          if (process.platform === "win32") {
            spawn("cmd", ["/c", "start", "", url], { detached: true });
          }
        } catch {
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
      if (process.platform === "win32") {
        spawn("cmd", ["/c", "start", "", url], { detached: true });
      }
    } catch {
    }
  });
})();
