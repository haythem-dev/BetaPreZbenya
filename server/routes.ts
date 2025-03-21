import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import multer from "multer";
import { 
  sendApplicationEmail, 
  sendApplicantConfirmation, 
  sendContactEmail 
} from "./services/emailService";

// Configure multer for file uploads
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 10 * 1024 * 1024, // limit file size to 10MB
  },
  fileFilter: (req, file, cb) => {
    // Allow only PDF, DOC, and DOCX files for CV uploads
    if (
      file.mimetype === "application/pdf" ||
      file.mimetype === "application/msword" ||
      file.mimetype === "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Only PDF, DOC, and DOCX files are allowed"));
    }
  },
});

export async function registerRoutes(app: Express): Promise<Server> {
  // API route for job application submissions
  app.post("/api/apply", upload.single("cv"), async (req: Request, res: Response) => {
    try {
      const { name, email, position, message } = req.body;
      
      if (!name || !email || !message) {
        return res.status(400).json({ error: "Missing required fields" });
      }

      // Handle file attachment if provided
      let cvAttachment;
      if (req.file) {
        cvAttachment = {
          filename: req.file.originalname,
          content: req.file.buffer,
          contentType: req.file.mimetype,
        };
      }

      // Send application email to company
      await sendApplicationEmail(name, email, message, position, cvAttachment);
      
      // Send confirmation email to applicant
      await sendApplicantConfirmation(name, email, position);
      
      return res.status(200).json({ success: true, message: "Application submitted successfully" });
    } catch (error) {
      console.error("Error submitting application:", error);
      return res.status(500).json({ error: "Failed to submit application" });
    }
  });

  // API route for contact form submissions
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      const { name, email, subject, message } = req.body;
      
      if (!name || !email || !subject || !message) {
        return res.status(400).json({ error: "Missing required fields" });
      }
      
      // Send contact form email
      await sendContactEmail(name, email, subject, message);
      
      return res.status(200).json({ success: true, message: "Message sent successfully" });
    } catch (error) {
      console.error("Error sending contact message:", error);
      return res.status(500).json({ error: "Failed to send message" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
