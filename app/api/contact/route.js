import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, service, message } = body;

    if (!firstName || !email || !message) {
      return NextResponse.json(
        { error: "First name, email, and message are required." },
        { status: 400 }
      );
    }

    // Resend integration — set RESEND_API_KEY in your .env.local to enable.
    // Sign up free at https://resend.com (3,000 emails/month, no credit card).
    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);

      await resend.emails.send({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: "nabiladib70@gmail.com",
        subject: `New message from ${firstName} ${lastName} — ${service || "General"}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
          ${service ? `<p><strong>Service:</strong> ${service}</p>` : ""}
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br/>")}</p>
        `,
      });
    } else {
      // No API key set — log locally for development
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
