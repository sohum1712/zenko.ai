import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { sendContactEmail, testEmailConnection } from "./emailService";

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, phone, businessType, message } = req.body;

      // Basic validation
      if (!name || !email || !message) {
        return res.status(400).json({ 
          error: "Missing required fields: name, email, and message are required" 
        });
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ 
          error: "Invalid email format" 
        });
      }

      // Store the contact form submission
      const contactSubmission = {
        id: Date.now().toString(),
        name,
        email,
        phone: phone || '',
        businessType: businessType || '',
        message,
        timestamp: new Date().toISOString(),
        status: 'new'
      };

      // In a real application, you would save this to a database
      // For now, we'll just log it and return success
      console.log('New contact form submission:', contactSubmission);

      // Send email notification
      const emailSent = await sendContactEmail(contactSubmission);
      
      if (emailSent) {
        console.log('Email notification sent successfully');
      } else {
        console.log('Failed to send email notification, but form submission was recorded');
      }

      res.status(200).json({ 
        message: "Contact form submitted successfully",
        id: contactSubmission.id,
        emailSent: emailSent
      });

    } catch (error) {
      console.error('Error processing contact form:', error);
      res.status(500).json({ 
        error: "Internal server error. Please try again later." 
      });
    }
  });

  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.status(200).json({ 
      status: "ok", 
      timestamp: new Date().toISOString() 
    });
  });

  // Email test endpoint
  app.get("/api/test-email", async (req, res) => {
    try {
      const emailWorking = await testEmailConnection();
      res.status(200).json({ 
        emailService: emailWorking ? "working" : "not configured",
        timestamp: new Date().toISOString() 
      });
    } catch (error) {
      res.status(500).json({ 
        emailService: "error",
        error: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
