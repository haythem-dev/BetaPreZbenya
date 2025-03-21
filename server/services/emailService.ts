import nodemailer from 'nodemailer';

// Email configuration using the provided credentials
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'contact.beta.zbenyasystems@gmail.com',
    pass: 'rqlhxudokrhveugj' // App password for Gmail
  }
});

interface EmailAttachment {
  filename: string;
  content: Buffer | string;
  contentType?: string;
}

/**
 * Send an email with the given parameters
 * @param to Recipient email address
 * @param subject Email subject
 * @param text Plain text email body
 * @param html HTML formatted email body (optional)
 * @param attachments Array of email attachments (optional)
 * @returns Promise resolving to the nodemailer send info
 */
export async function sendEmail(
  to: string,
  subject: string,
  text: string,
  html?: string,
  attachments?: EmailAttachment[]
) {
  const mailOptions = {
    from: 'Zbenya Systems <contact.beta.zbenyasystems@gmail.com>',
    to,
    subject,
    text,
    html,
    attachments
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}

/**
 * Send an application form submission email
 * @param name Applicant name
 * @param email Applicant email
 * @param message Application message or cover letter
 * @param position Position applied for (optional)
 * @param cvAttachment CV file attachment (optional)
 * @returns Promise resolving to the email send result
 */
export async function sendApplicationEmail(
  name: string,
  email: string,
  message: string,
  position?: string,
  cvAttachment?: EmailAttachment
) {
  const subject = position
    ? `New Application for ${position} from ${name}`
    : `New Spontaneous Application from ${name}`;

  const text = `
    New application received:
    
    Name: ${name}
    Email: ${email}
    ${position ? `Position: ${position}\n` : ''}
    Message:
    ${message}
  `;

  const html = `
    <h2>New Application Received</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    ${position ? `<p><strong>Position:</strong> ${position}</p>` : ''}
    <p><strong>Message:</strong></p>
    <p>${message.replace(/\n/g, '<br>')}</p>
  `;

  const attachments = cvAttachment ? [cvAttachment] : undefined;

  return sendEmail(
    'contact.beta.zbenyasystems@gmail.com', // Send to the company email
    subject,
    text,
    html,
    attachments
  );
}

/**
 * Send a confirmation email to the applicant
 * @param name Applicant name
 * @param email Applicant email
 * @param position Position applied for (optional)
 * @returns Promise resolving to the email send result
 */
export async function sendApplicantConfirmation(
  name: string,
  email: string,
  position?: string
) {
  const subject = 'Application Received - Zbenya Systems';

  const text = `
    Dear ${name},
    
    Thank you for your ${position ? `application for the ${position} position` : 'spontaneous application'} at Zbenya Systems.
    
    We have received your application and will review it shortly. If your profile matches our requirements, we will contact you for the next steps in the recruitment process.
    
    Best regards,
    Zbenya Systems Team
  `;

  const html = `
    <h2>Application Received</h2>
    <p>Dear ${name},</p>
    <p>Thank you for your ${position ? `application for the <strong>${position}</strong> position` : 'spontaneous application'} at Zbenya Systems.</p>
    <p>We have received your application and will review it shortly. If your profile matches our requirements, we will contact you for the next steps in the recruitment process.</p>
    <p>Best regards,<br>Zbenya Systems Team</p>
  `;

  return sendEmail(
    email, // Send to the applicant's email
    subject,
    text,
    html
  );
}

/**
 * Send a contact form email
 * @param name Sender name
 * @param email Sender email
 * @param subject Email subject
 * @param message Contact message
 * @returns Promise resolving to the email send result
 */
export async function sendContactEmail(
  name: string,
  email: string,
  subject: string,
  message: string
) {
  const emailSubject = `Contact Form: ${subject}`;

  const text = `
    New contact message received:
    
    Name: ${name}
    Email: ${email}
    Subject: ${subject}
    
    Message:
    ${message}
  `;

  const html = `
    <h2>New Contact Message</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Subject:</strong> ${subject}</p>
    <p><strong>Message:</strong></p>
    <p>${message.replace(/\n/g, '<br>')}</p>
  `;

  return sendEmail(
    'contact.beta.zbenyasystems@gmail.com', // Send to the company email
    emailSubject,
    text,
    html
  );
}