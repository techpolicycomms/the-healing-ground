import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageShell } from "@/components/site/page-shell";
import { Eyebrow, Section } from "@/components/site/section";
import { site } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Book a session",
  description:
    "Book a discovery call or session with Celia de Mestral at The Healing Ground Geneva. Available in person in Geneva and online — English, French, and Spanish."
};

const steps = [
  {
    title: "Choose a time that feels possible",
    body: "Select a slot that doesn’t require you to rush in or out. Sessions are unhurried by design."
  },
  {
    title: "A warm confirmation",
    body: "You’ll receive a gentle confirmation by email — not a transactional receipt — with practical details and a short intake form."
  },
  {
    title: "A simple, honest intake",
    body: "A few open questions, written to help Celia understand what would be most useful in our first conversation."
  },
  {
    title: "We meet",
    body: "In person in Geneva or online. Bring whatever you need — water, a notebook, a soft blanket. There is no preparation required other than being yourself."
  }
];

export default function BookPage() {
  const embedUrl = process.env.NEXT_PUBLIC_BOOKING_EMBED_URL;

  return (
    <PageShell>
      <main className="bg-ivory text-ink">
        <Section className="border-b border-stone/10">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
            <div>
              <Eyebrow>Book a session</Eyebrow>
              <h1 className="mt-5 font-serif text-[clamp(2.6rem,5.5vw,4.8rem)] font-semibold leading-[0.95] text-balance">
                Your space is held.
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-8 text-ink/72">
                Booking is simple. Choose a discovery call or a session, at a time
                that doesn’t require you to rush. You’ll hear from Celia with a
                warm note and a short intake before we meet.
              </p>
              <p className="mt-6 max-w-xl text-sm leading-7 text-ink/60">
                Sessions are available in English, French, and Spanish — in person
                in Geneva or online. Languages can change mid-session if helpful.
              </p>
            </div>

            <div className="rounded-[12px] border border-stone/15 bg-ivory p-6 shadow-soft sm:p-8">
              {embedUrl ? (
                <iframe
                  src={embedUrl}
                  title="Booking calendar"
                  className="h-[680px] w-full rounded-[8px] border-0"
                  loading="lazy"
                />
              ) : (
                <div className="flex flex-col gap-4">
                  <p className="eyebrow text-olive">Booking</p>
                  <p className="font-serif text-3xl font-semibold leading-tight">
                    The calendar is opening soon.
                  </p>
                  <p className="text-base leading-7 text-ink/72">
                    While the calendar is being finalised, the simplest way to
                    arrange a first session is by quiet email. Celia replies
                    personally — usually within two working days.
                  </p>
                  <p className="text-sm italic leading-6 text-ink/55">
                    [TBD — booking tool URL to wire into{" "}
                    <code className="font-mono text-ink/70">
                      NEXT_PUBLIC_BOOKING_EMBED_URL
                    </code>
                    ]
                  </p>
                  <a
                    href={`mailto:${site.email}`}
                    className="mt-2 inline-flex min-h-12 w-fit items-center gap-2 rounded-full bg-ink px-6 text-sm font-semibold text-ivory transition hover:bg-cedar"
                  >
                    Email to arrange a session
                    <ArrowRight aria-hidden="true" size={18} />
                  </a>
                </div>
              )}
            </div>
          </div>
        </Section>

        <Section tone="mist">
          <div className="mx-auto max-w-3xl">
            <Eyebrow>What to expect</Eyebrow>
            <h2 className="mt-4 font-serif text-[clamp(2.2rem,4vw,3.4rem)] font-semibold leading-tight">
              The path between now and our first meeting.
            </h2>
            <ol className="mt-12 space-y-10">
              {steps.map((step, i) => (
                <li key={step.title} className="grid grid-cols-[3.5rem_1fr] gap-4">
                  <span
                    aria-hidden="true"
                    className="font-serif text-3xl italic text-olive"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="font-serif text-2xl font-semibold leading-snug">
                      {step.title}
                    </p>
                    <p className="mt-3 leading-7 text-ink/72">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Section>

        <Section>
          <div className="mx-auto max-w-3xl">
            <Eyebrow>Care & safety</Eyebrow>
            <h2 className="mt-4 font-serif text-[clamp(2.2rem,4vw,3.4rem)] font-semibold leading-tight">
              If you are in crisis
            </h2>
            <p className="mt-6 max-w-2xl leading-8 text-ink/72">
              Booking is not the right step if you are in immediate distress. The{" "}
              <Link href="/legal/medical-disclaimer" className="underline underline-offset-4 hover:text-ink">
                medical disclaimer page
              </Link>{" "}
              lists Swiss emergency lines and crisis support — 144 for medical,
              143 for La Main Tendue. Celia will be here when the most acute
              moment has passed.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/discovery-call"
                className="inline-flex min-h-12 items-center gap-2 rounded-full bg-ink px-6 text-sm font-semibold text-ivory transition hover:bg-cedar"
              >
                Or start with a discovery call
                <ArrowRight aria-hidden="true" size={18} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center gap-2 rounded-full border border-ink px-6 text-sm font-semibold text-ink transition hover:bg-mist"
              >
                Send a quiet email
              </Link>
            </div>
          </div>
        </Section>
      </main>
    </PageShell>
  );
}
