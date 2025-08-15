import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import nodemailer from "nodemailer";

export async function registerRoutes(app: Express): Promise<Server> {
  
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body
      const validatedData = insertContactMessageSchema.parse(req.body);
      
      // Store the message
      const message = await storage.createContactMessage(validatedData);
      
      // Configure nodemailer transporter
      const transporter = nodemailer.createTransporter({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER || 'your.email@gmail.com',
          pass: process.env.EMAIL_PASS || 'your-app-password'
        }
      });

      // Email content
      const mailOptions = {
        from: process.env.EMAIL_USER || 'your.email@gmail.com',
        to: 'shambhavi260802@gmail.com',
        subject: `Portfolio Contact: ${validatedData.subject}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
              New Contact Form Submission
            </h2>
            
            <div style="background-color: #f8fafc; padding: 20px; border-radius: 10px; margin: 20px 0;">
              <p><strong>Name:</strong> ${validatedData.name}</p>
              <p><strong>Email:</strong> ${validatedData.email}</p>
              <p><strong>Subject:</strong> ${validatedData.subject}</p>
            </div>
            
            <div style="background-color: white; padding: 20px; border-left: 4px solid #10b981; margin: 20px 0;">
              <h3 style="color: #1e293b; margin-top: 0;">Message:</h3>
              <p style="line-height: 1.6; color: #334155;">${validatedData.message}</p>
            </div>
            
            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
              <p style="color: #64748b; font-size: 14px;">
                This message was sent from your portfolio website contact form.
              </p>
            </div>
          </div>
        `,
        replyTo: validatedData.email
      };

      // Send email
      await transporter.sendMail(mailOptions);
      
      res.json({ 
        success: true, 
        message: "Message sent successfully!",
        id: message.id 
      });
      
    } catch (error) {
      console.error('Contact form error:', error);
      res.status(400).json({ 
        success: false, 
        message: "Failed to send message. Please try again." 
      });
    }
  });

  // Get all contact messages (for admin purposes)
  app.get("/api/contact-messages", async (req, res) => {
    try {
      const messages = await storage.getContactMessages();
      res.json(messages);
    } catch (error) {
      console.error('Get messages error:', error);
      res.status(500).json({ message: "Failed to retrieve messages" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
