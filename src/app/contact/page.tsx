import { ContactForm } from "@/components/contact-form";
import { PageShell } from "@/components/site/page-shell";
import { Eyebrow, Section } from "@/components/site/section";
import { contactCards, site } from "@/lib/site-content";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact The Healing Ground Geneva for holistic, mind-body consultations, workshops, and discovery calls in Geneva — English, French, Spanish."
};

export default function ContactPage() {
  return (
    <PageShell>
      <main className="bg-ivory text-ink">
        <Section>
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <Eyebrow>Contact</Eyebrow>
              <h1 className="mt-5 font-serif text-[clamp(2.6rem,5.5vw,4.8rem)] font-medium leading-[1.02] text-balance">
                Write when you are ready.
              </h1>
              <p className="mt-7 text-lg leading-8 text-ink/72 text-pretty">
                For individual sessions, workshops, partnerships, or thoughtful
                questions, send a note. A simple message is enough.
              </p>

              <dl className="mt-10 grid gap-6">
                <div>
                  <dt className="text-xs font-bold uppercase tracking-[0.2em] text-ink-muted">
                    Email
                  </dt>
                  <dd className="mt-2">
                    <a
                      href={`mailto:${site.email}`}
                      className="font-serif text-2xl italic text-olive underline-offset-[6px] hover:underline"
                    >
                      {site.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-[0.2em] text-ink-muted">
                    Practice
                  </dt>
                  <dd className="mt-2 font-serif text-2xl italic text-ink">
                    Geneva — in person & online
                  </dd>
                  <p className="mt-1 text-sm italic text-ink-muted">
                    [TBD — Celia to provide the practice street address]
                  </p>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-[0.2em] text-ink-muted">
                    Languages
                  </dt>
                  <dd className="mt-2 font-serif text-2xl italic text-ink">
                    English · Français · Español
                  </dd>
                </div>
              </dl>

              <div className="mt-10 grid gap-3">
                {contactCards.map((card) => (
                  <Link
                    key={card.title}
                    href={card.href}
                    className="flex gap-4 rounded-[8px] border border-stone/15 bg-paper p-4 transition hover:border-olive/40"
                  >
                    <card.icon aria-hidden="true" className="mt-1 shrink-0 text-olive" size={20} />
                    <span>
                      <span className="block font-semibold">{card.title}</span>
                      <span className="mt-1 block text-sm text-ink/65">{card.text}</span>
                    </span>
                  </Link>
                ))}
              </div>

              <p className="mt-10 text-sm leading-7 text-ink-muted">
                For frequently asked questions, see the{" "}
                <Link href="/faq" className="underline underline-offset-4 hover:text-ink">
                  FAQ
                </Link>
                . For scope and crisis support, see the{" "}
                <Link
                  href="/legal/medical-disclaimer"
                  className="underline underline-offset-4 hover:text-ink"
                >
                  medical disclaimer
                </Link>
                .
              </p>
            </div>

            <ContactForm />
          </div>
        </Section>
      </main>
    </PageShell>
  );
}
