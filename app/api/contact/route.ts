// API route: POST /api/contact
// Sends an email using Nodemailer when the contact form is submitted.
//
// Setup:
//   1. Copy .env.local.example to .env.local
//   2. Fill in your Gmail credentials (use an App Password, not your real password)
//   3. Restart the dev server

import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

// Expected request body shape
interface ContactBody {
  name: string
  email: string
  subject: string
  message: string
}

export async function POST(req: NextRequest) {
  try {
    const body: ContactBody = await req.json()
    const { name, email, subject, message } = body

    // Basic server-side validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 })
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 })
    }

    // Check that environment variables are set
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.warn("[Contact] EMAIL_USER or EMAIL_PASS is not set in .env.local")
      // In development without credentials, return a mock success so the UI works
      if (process.env.NODE_ENV === "development") {
        console.log("[Contact] Mock email (no credentials configured):")
        console.log(`  From: ${name} <${email}>`)
        console.log(`  Subject: ${subject}`)
        console.log(`  Message: ${message}`)
        return NextResponse.json({ success: true, mock: true })
      }
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 503 }
      )
    }

    // Create Gmail transporter using App Password
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Email to portfolio owner
    const ownerEmail = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
          <body style="font-family: sans-serif; background: #09090f; color: #f8fafc; padding: 24px;">
            <div style="max-width: 600px; margin: 0 auto; background: #0f0f1a; border: 1px solid #1e1e3a; border-radius: 16px; padding: 32px;">
              <h2 style="color: #f59e0b; margin-top: 0;">New Contact Form Submission</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; color: #94a3b8; width: 100px;">Name:</td>
                  <td style="padding: 8px 0; color: #f8fafc; font-weight: 600;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #94a3b8;">Email:</td>
                  <td style="padding: 8px 0; color: #22d3ee;">${email}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #94a3b8;">Subject:</td>
                  <td style="padding: 8px 0; color: #f8fafc;">${subject}</td>
                </tr>
              </table>
              <hr style="border-color: #1e1e3a; margin: 20px 0;" />
              <h4 style="color: #94a3b8; margin: 0 0 12px;">Message:</h4>
              <div style="background: #141428; border-radius: 8px; padding: 16px; color: #f8fafc; line-height: 1.7; white-space: pre-wrap;">${message}</div>
              <p style="color: #94a3b8; font-size: 12px; margin-top: 24px; margin-bottom: 0;">
                Sent from Asif Hossain's portfolio
              </p>
            </div>
          </body>
        </html>
      `,
    }

    // Auto-reply to sender
    const autoReply = {
      from: `"Asif Hossain" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Re: ${subject} - Thanks for reaching out!`,
      html: `
        <!DOCTYPE html>
        <html>
          <body style="font-family: sans-serif; background: #09090f; color: #f8fafc; padding: 24px;">
            <div style="max-width: 600px; margin: 0 auto; background: #0f0f1a; border: 1px solid #1e1e3a; border-radius: 16px; padding: 32px;">
              <h2 style="color: #f59e0b; margin-top: 0;">Thanks for reaching out, ${name}! 👋</h2>
              <p style="color: #94a3b8; line-height: 1.7;">
                I've received your message and will get back to you within 24 hours.
              </p>
              <p style="color: #94a3b8; line-height: 1.7;">
                In the meantime, feel free to check out my work on
                <a href="https://github.com/Rafin31" style="color: #22d3ee;">GitHub</a>.
              </p>
              <hr style="border-color: #1e1e3a; margin: 20px 0;" />
              <p style="color: #f8fafc; margin: 0; font-weight: 600;">Asif Hossain</p>
              <p style="color: #94a3b8; font-size: 12px; margin-top: 4px; margin-bottom: 0;">
                Full-Stack Developer | asifhossain976@gmail.com
              </p>
            </div>
          </body>
        </html>
      `,
    }

    // Send both emails in parallel
    await Promise.all([
      transporter.sendMail(ownerEmail),
      transporter.sendMail(autoReply),
    ])

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("[Contact] Failed to send email:", err)
    return NextResponse.json(
      { error: "Failed to send your message. Please try again later." },
      { status: 500 }
    )
  }
}
