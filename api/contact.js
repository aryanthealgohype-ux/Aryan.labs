import nodemailer from "nodemailer";

export default async function handler(req, res) {
  const requestOrigin = req.headers.origin;
  const allowedOrigins = (process.env.CORS_ORIGIN || "")
    .split(",")
    .map((o) => o.trim())
    .filter(Boolean);
  const allowOrigin =
    !allowedOrigins.length || allowedOrigins.includes("*")
      ? "*"
      : allowedOrigins.includes(requestOrigin)
        ? requestOrigin
        : "";

  if (allowOrigin) {
    res.setHeader("Access-Control-Allow-Origin", allowOrigin);
  }
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Vary", "Origin");

  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
    const { name, email, phone, subject, message } = body || {};

    if (!name || !email || !phone || !subject || !message) {
      return res.status(400).json({ error: "All fields are required." });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT || 465),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const toEmail = process.env.TO_EMAIL || process.env.SMTP_USER;

    await transporter.sendMail({
      from: `"Aryan Labs Website" <${process.env.SMTP_USER}>`,
      to: toEmail,
      replyTo: email,
      subject: `New Contact Form: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nSubject: ${subject}\n\nMessage:\n${message}`,
    });

    return res.status(200).json({ message: "Message sent successfully." });
  } catch (err) {
    console.error("Email send error:", err);
    return res.status(500).json({ error: "Failed to send message." });
  }
}
