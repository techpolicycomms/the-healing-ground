import { PageShell } from "@/components/site/page-shell";
import { Eyebrow, Section } from "@/components/site/section";
import { PullQuote } from "@/components/site/pull-quote";
import { BrandGradient } from "@/components/site/brand-gradient";
import { site } from "@/lib/site-content";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Celia de Mestral",
  description:
    "Meet Celia de Mestral, founder of The Healing Ground Geneva — holistic, naturopathic, and mind-body practice for stress, burnout, and nervous system support."
};

export default function AboutPage() {
  return (
    <PageShell>
      <main className="bg-ivory text-ink">
        <Section>
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <BrandGradient
              tone="paper"
              rounded
              className="aspect-[4/5] shadow-soft"
              caption="Portrait of Celia — Geneva"
            />
            <div>
              <Eyebrow>Founder</Eyebrow>
              <h1 className="mt-5 font-serif text-[clamp(3rem,7vw,6rem)] font-semibold leading-[0.92]">
                Celia de Mestral.
              </h1>
              <div className="mt-7 space-y-5 text-lg leading-8 text-ink/72">
                <p>
                  Celia founded {site.name} as a calm, intelligent space for
                  people whose lives look capable from the outside, while their
                  bodies and emotions are asking for something gentler.
                </p>
                <p>
                  Trauma-informed care is one of several approaches that inform
                  her work, alongside naturopathy, nutrition, phytotherapy,
                  somatics, mindfulness, and nervous-system science. Together
                  they support stress, burnout, nervous-system dysregulation,
                  emotional overwhelm, and the stress-related symptoms that
                  often accompany long periods of pressure.
                </p>
                <p>
                  The tone of the work is steady and humane: no fixing, no
                  forcing, no dramatic promises. Just a clear, compassionate
                  container for understanding what your system has been carrying
                  and what it may need now.
                </p>
              </div>
              <Link
                href="/discovery-call"
                className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-ink px-7 text-sm font-semibold text-ivory transition hover:bg-cedar"
              >
                Meet Celia in a discovery call
                <ArrowRight aria-hidden="true" size={18} />
              </Link>
            </div>
          </div>
        </Section>
        <Section>
          <PullQuote>
            You are not broken. You are disconnected. And reconnection is possible.
          </PullQuote>
        </Section>
        <Section tone="mist">
          <div className="grid gap-8 lg:grid-cols-3">
            {[
              ["Mission", "To help internationally minded adults rebuild safety, capacity, and self-trust through holistic, naturopathic, and mind-body practice."],
              ["Vision", "A Geneva wellness culture where sensitivity, stress, and burnout are met with nuance instead of shame."],
              ["Promise", "A grounded space where you can slow down, be heard, and make sense of your body without being pathologised."]
            ].map(([title, text]) => (
              <article key={title} className="rounded-[8px] bg-ivory p-6 shadow-soft">
                <h2 className="font-serif text-4xl font-semibold">{title}</h2>
                <p className="mt-4 leading-7 text-ink/70">{text}</p>
              </article>
            ))}
          </div>
        </Section>
      </main>
    </PageShell>
  );
}
