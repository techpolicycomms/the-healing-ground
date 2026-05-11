import { getResendClient } from "@/lib/resend";
import { NextResponse } from "next/server";
import { z } from "zod";

const newsletterSchema = z.object({
  name: z.string().max(120).optional(),
  email: z.string().email().max(160)
});

/**
 * Newsletter signup. Two paths:
 *
 * 1) If RESEND_AUDIENCE_ID is set, we add the contact to Resend's audience
 *    via the audiences/contacts API. This is the production path.
 * 2) Otherwise (dev / no audience configured), we send a notification email
 *    to CONTACT_TO_EMAIL so Celia can add the person manually until the
 *    audience is wired up.
 *
 * Either way, the user sees the same calm confirmation in the UI.
 */
export async function POST(request: Request) {
  const payload = newsletterSchema.safeParse(await request.json());

  if (!payload.success) {
    return NextResponse.json(
      { error: "Could you double-check this email address?" },
      { status: 400 }
    );
  }

  const resend = getResendClient();
  if (!resend) {
    return NextResponse.json(
      { error: "Newsletter is not configured yet." },
      { status: 503 }
    );
  }

  const { name, email } = payload.data;
  const audienceId = process.env.RESEND_AUDIENCE_ID;

  try {
    if (audienceId) {
      await resend.contacts.create({
        audienceId,
        email,
        firstName: name,
        unsubscribed: false
      });
    } else {
      await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL || "hello@send.thehealinggroundgeneva.com",
        to: process.env.CONTACT_TO_EMAIL || "hello@thehealinggroundgeneva.com",
        subject: "New newsletter signup",
        text: `${name ? name + " — " : ""}${email}\n\nAdd to the journal list when you have a moment.`
      });
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json(
      { error: "Something didn't go through. Please try again in a moment." },
      { status: 500 }
    );
  }
}
