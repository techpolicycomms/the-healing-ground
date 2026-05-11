import { ContactForm } from "@/components/contact-form";
import { PageShell } from "@/components/site/page-shell";
import { Eyebrow, Section } from "@/components/site/section";
import { contactCards } from "@/lib/site-content";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact The Healing Ground Geneva for holistic, mind-body consultations, workshops, discovery calls, and expat wellbeing support in Geneva."
};

export default function ContactPage() {
  return (
    <PageShell>
      <main className="bg-ivory text-ink">
        <Section>
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <Eyebrow>Contact</Eyebrow>
              <h1 className="mt-5 font-serif text-[clamp(3rem,7vw,6rem)] font-semibold leading-[0.92]">
                Write when you are ready.
              </h1>
              <p className="mt-7 text-lg leading-8 text-ink/72">
                For individual sessions, workshops, partnerships, or thoughtful
                questions, send a note. A simple message is enough.
              </p>
              <div className="mt-8 grid gap-4">
                {contactCards.map((card) => (
                  <Link
                    key={card.title}
                    href={card.href}
                    className="flex gap-4 rounded-[8px] border border-stone/15 bg-mist/55 p-4"
                  >
                    <card.icon aria-hidden="true" className="mt-1 shrink-0 text-clay" size={21} />
                    <span>
                      <span className="block font-semibold">{card.title}</span>
                      <span className="mt-1 block text-sm text-ink/68">{card.text}</span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
            <ContactForm />
          </div>
        </Section>
      </main>
    </PageShell>
  );
}
