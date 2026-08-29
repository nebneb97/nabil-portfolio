import { NextResponse } from "next/server";

const MAX_LENGTHS = {
  firstName: 100,
  lastName: 100,
  email: 254,
  phone: 20,
  service: 100,
  message: 5000,
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function validateField(value, name, required = false) {
  if (required && !value?.trim()) return `${name} is required.`;
  if (value && value.length > MAX_LENGTHS[name])
    return `${name} must be under ${MAX_LENGTHS[name]} characters.`;
  return null;
}

export async function POST(req) {
  try {
    let body;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
    }

    const { firstName, lastName, email, phone, service, message } = body;

    const errors = [
      validateField(firstName, "firstName", true),
      validateField(lastName, "lastName"),
      validateField(email, "email", true),
      validateField(phone, "phone"),
      validateField(service, "service"),
      validateField(message, "message", true),
    ].filter(Boolean);

    if (errors.length) {
      return NextResponse.json({ error: errors[0] }, { status: 400 });
    }

    if (!EMAIL_RE.test(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);

      // All user-supplied values are escaped before being placed in HTML
      await resend.emails.send({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: "nabiladib70@gmail.com",
        subject: `New message from ${escapeHtml(firstName)} ${escapeHtml(lastName)} — ${escapeHtml(service || "General")}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${escapeHtml(firstName)} ${escapeHtml(lastName)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          ${phone ? `<p><strong>Phone:</strong> ${escapeHtml(phone)}</p>` : ""}
          ${service ? `<p><strong>Service:</strong> ${escapeHtml(service)}</p>` : ""}
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
        `,
      });
    } else {
      console.log("Contact form submission (no RESEND_API_KEY set):", {
        firstName,
        lastName,
        email,
        phone,
        service,
        message,
      });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
