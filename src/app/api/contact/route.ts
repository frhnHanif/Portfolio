import { NextResponse } from "next/server";
import { Resend } from "resend";

const RECIPIENT_EMAIL = process.env.CONTACT_EMAIL || "farhanhanifr4@gmail.com";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      // Fallback: log to console if Resend is not configured
      console.log("Contact form submission:", { name, email, message });
      return NextResponse.json(
        { message: "Email service not configured. Message logged." },
        { status: 200 }
      );
    }

    const resend = new Resend(apiKey);

    await resend.emails.send({
      from: `Portfolio Contact <onboarding@resend.dev>`,
      to: RECIPIENT_EMAIL,
      subject: `New message from ${name} via Portfolio`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
