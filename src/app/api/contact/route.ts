import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Message from "@/models/Message";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Missing fields" },
        { status: 400 }
      );
    }

    await dbConnect();

    // Save to MongoDB
    await Message.create({ name, email, message });

    // Send Email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.OWNER_EMAIL,
      subject: `New message from ${name}`,
      text: message,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p>${message}</p>`,
    });

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    // Narrow unknown to Error type
    const errorMessage =
      err instanceof Error ? err.message : "Unknown server error";
    console.error("❌ Error in contact API:", errorMessage);
    return NextResponse.json(
      { success: false, error: "Server error" },
      { status: 500 }
    );
  }
}
