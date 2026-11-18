import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Nodemailer Transporter Configuration
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'kasploengine.com',
    port: parseInt(process.env.SMTP_PORT || '587', 10),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER || 'mailclass-trans@trans.kasplo.in',
      pass: process.env.SMTP_PASS || 'K^&g#hj$!',
    },
    tls: {
      rejectUnauthorized: false
    }
  });
};

// API Endpoint: Contact Us Form Submission
app.post('/api/contact', async (req, res) => {
  try {
    const {
      name,
      email,
      country,
      city,
      company,
      mobile,
      message,
      authorize,
      recaptchaToken
    } = req.body;

    // Validate Required Fields
    if (!name || !email || !country || !city || !company || !mobile || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields marked with an asterisk (*) are required.'
      });
    }

    if (!authorize) {
      return res.status(400).json({
        success: false,
        message: 'Notification authorization is mandatory.'
      });
    }

    if (!recaptchaToken) {
      return res.status(400).json({
        success: false,
        message: 'reCAPTCHA verification is required.'
      });
    }

    // Build the Official Adcanopus HTML Email Template
    // const recipientEmail = process.env.CONTACT_MAIL_TO || 'info@adcanopus.com';
    const recipientEmail = 'satwika.g@kasplo.com';
    const senderEmail = process.env.SMTP_FROM || '"Adcanopus Contact Portal" <info@adcanopus.com>';

    const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>New Contact Submission</title>
    </head>
    <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 24px;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="background-color: #ffffff; border-radius: 16px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);">
        <!-- Header with Adcanopus Logo -->
        <tr>
          <td align="center" style="padding: 28px 24px 20px 24px; border-bottom: 2px solid #2f55d4; background-color: #ffffff;">
            <img src="https://adcanopus-website.s3.ap-south-1.amazonaws.com/assets/images/logo.png" alt="Adcanopus" width="180" style="display: block; border: 0;" />
          </td>
        </tr>

        <!-- Title -->
        <tr>
          <td style="padding: 24px 32px 8px 32px;">
            <h2 style="margin: 0; font-size: 20px; font-weight: 800; color: #0f172a;">New Strategic Growth Inquiry</h2>
            <p style="margin: 6px 0 0 0; font-size: 13px; color: #64748b;">A potential client has requested campaign consultation via the website contact form.</p>
          </td>
        </tr>

        <!-- Details Table -->
        <tr>
          <td style="padding: 16px 32px 24px 32px;">
            <table width="100%" cellpadding="0" cellspacing="0" style="font-size: 13px; color: #1e293b; border-collapse: collapse;">
              <tbody>
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 10px 0; width: 30%; font-weight: 600; color: #64748b;">Client Name</td>
                  <td style="padding: 10px 0; font-weight: 700; color: #0f172a;">${name}</td>
                </tr>
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 10px 0; font-weight: 600; color: #64748b;">Email Address</td>
                  <td style="padding: 10px 0;"><a href="mailto:${email}" style="color: #2f55d4; text-decoration: none; font-weight: 600;">${email}</a></td>
                </tr>
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 10px 0; font-weight: 600; color: #64748b;">Mobile Number</td>
                  <td style="padding: 10px 0;"><a href="tel:${mobile}" style="color: #0f172a; text-decoration: none; font-weight: 600;">${mobile}</a></td>
                </tr>
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 10px 0; font-weight: 600; color: #64748b;">Company Name</td>
                  <td style="padding: 10px 0; font-weight: 600; color: #0f172a;">${company}</td>
                </tr>
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 10px 0; font-weight: 600; color: #64748b;">Location</td>
                  <td style="padding: 10px 0; color: #0f172a;">${city}, ${country}</td>
                </tr>
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 10px 0; font-weight: 600; color: #64748b;">Notification Consent</td>
                  <td style="padding: 10px 0; color: #059669; font-weight: 600;">Authorized (SMS/RCS/Call/Email/WhatsApp)</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0 6px 0; font-weight: 600; color: #64748b; vertical-align: top;">Message</td>
                  <td style="padding: 12px 0 6px 0; color: #334155; line-height: 1.6; white-space: pre-wrap;">${message}</td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="padding: 16px 32px 24px 32px; background-color: #f8fafc; border-top: 1px solid #e2e8f0; font-size: 11px; color: #94a3b8; text-align: center;">
            Directly dispatched from Adcanopus Website • Timestamp: ${new Date().toUTCString()}
          </td>
        </tr>
      </table>
    </body>
    </html>
    `;

    const transporter = createTransporter();

    const mailOptions = {
      from: senderEmail,
      to: recipientEmail,
      replyTo: email, // Clicking "Reply" in inbox replies straight to the client
      subject: `Contact Form Submission from ${name} - ${company}`,
      html: htmlContent
    };

    console.log(`[SMTP] Sending contact email to ${recipientEmail} from ${senderEmail}...`);
    const info = await transporter.sendMail(mailOptions);
    console.log(`[SMTP] Email sent successfully: ${info.messageId}`);

    return res.status(200).json({
      success: true,
      message: 'Your message has been sent successfully.'
    });
  } catch (error) {
    console.error('[SMTP Error]:', error);
    return res.status(500).json({
      success: false,
      message: 'Unable to deliver message at this time.',
      error: error.message
    });
  }
});

// Serve frontend build in production
const distPath = path.join(__dirname, 'dist');
app.use(express.static(distPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Adcanopus Server running on port ${PORT}`);
  // console.log(`📧 SMTP Target: ${process.env.CONTACT_MAIL_TO || 'info@adcanopus.com'}`);
  console.log(`📧 SMTP Target: ${process.env.CONTACT_MAIL_TO || 'satwika.g@kasplo.com'}`);
});
