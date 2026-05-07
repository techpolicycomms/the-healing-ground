import { ContactNotification } from "@/emails/contact-notification";
import { getResendClient } from "@/lib/resend";
import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2).max(120),
  email: z.string().email().max(160),
  message: z.string().min(10).max(3000)
});

export async function POST(request: Request) {
  const payload = contactSchema.safeParse(await request.json());

  if (!payload.success) {
    return NextResponse.json(
      { error: "Please check your details and try again." },
      { status: 400 }
    );
  }

  const resend = getResendClient();

  if (!resend) {
    return NextResponse.json(
      { error: "Email is not configured yet." },
      { status: 503 }
    );
  }

  const { name, email, message } = payload.data;

  await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL || "hello@send.thehealinggroundgeneva.com",
    to: process.env.CONTACT_TO_EMAIL || "hello@thehealinggroundgeneva.com",
    replyTo: email,
    subject: `New enquiry from ${name}`,
    react: ContactNotification({ name, email, message })
  });

  return NextResponse.json({ ok: true });
}
