import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageShell } from "@/components/site/page-shell";
import { Eyebrow, Section } from "@/components/site/section";
import { PullQuote } from "@/components/site/pull-quote";
import { FOUR_PILLARS, COMPLEMENTARY_LINE } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Approach",
  description:
    "How Celia works — naturopathy, nutrition, phytotherapy, and mind-body practice woven together. A first consultation lasts ~2 hours and considers your whole story."
};

const sessions = [
  {
    title: "A first consultation",
    duration: "~2 hours",
    body: "We meet for around two hours. There is no rush. We move through your history — physical, emotional, relational — at the pace you can hold. Celia listens for the patterns, not just the symptoms."
  },
  {
    title: "What you leave with",
    duration: "Within a week",
    body: "A personalised written protocol — nutrition, phytotherapy, supplementation only when it serves the work, nervous-system practices, and any next steps. Sent in writing within a week. No sales pitch, no upsell."
  },
  {
    title: "Follow-up consultations",
    duration: "~1 hour",
    body: "Follow-ups are where the work deepens. We refine, adjust, listen for what has shifted and what is asking for more attention. Most people return every three to six weeks, at a rhythm that supports — and never pressures — the system."
  }
];

const isNot = [
  "A medical consultation, and does not replace one.",
  "Psychotherapy, and does not treat psychiatric conditions.",
  "A quick fix, a cleanse, or a protocol you complete and leave.",
  "Spiritual performance or self-optimisation.",
  "Pressure to become someone you are not."
];

export default function ApproachPage() {
  return (
    <PageShell>
      <main className="bg-ivory text-ink">
        <Section>
          <div className="mx-auto max-w-3xl">
            <Eyebrow>Approach</Eyebrow>
            <h1 className="mt-5 font-serif text-[clamp(2.6rem,5.5vw,4.8rem)] font-medium leading-[1.02] text-balance">
              How I work, in plain language.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-ink/72 text-pretty">
              The body, the nervous system, the emotions, the mind, and daily
              life are not separate territories. They speak to each other
              constantly. The work is to listen — and to respond with care.
            </p>
          </div>
        </Section>

        <Section tone="mist">
          <div className="mx-auto max-w-3xl">
            <Eyebrow>The four pillars, in depth</Eyebrow>
            <h2 className="mt-4 font-serif text-[clamp(2rem,4vw,3rem)] font-medium leading-tight">
              Four threads, woven together.
            </h2>
          </div>
          <div className="mx-auto mt-12 grid max-w-4xl gap-5 sm:grid-cols-2">
            {FOUR_PILLARS.map((p) => (
              <article
                key={p.key}
                className="rounded-[8px] border border-stone/15 bg-ivory p-7"
              >
                <p className="eyebrow text-olive">{p.title}</p>
                <p className="mt-4 leading-7 text-ink/72">{p.body}</p>
              </article>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-3xl text-sm leading-7 text-ink-muted">
            {COMPLEMENTARY_LINE}
          </p>
        </Section>

        <Section>
          <div className="mx-auto max-w-3xl">
            <Eyebrow>What sessions look like</Eyebrow>
            <h2 className="mt-4 font-serif text-[clamp(2rem,4vw,3rem)] font-medium leading-tight">
              Unhurried, written, returned to.
            </h2>
            <ol className="mt-12 space-y-10">
              {sessions.map((s, i) => (
                <li key={s.title} className="grid grid-cols-[3.5rem_1fr] gap-4">
                  <span
                    aria-hidden="true"
                    className="font-serif text-3xl italic text-olive"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="font-serif text-2xl font-medium leading-snug">
                      {s.title}{" "}
                      <span className="text-ink-muted italic text-base">
                        — {s.duration}
                      </span>
                    </p>
                    <p className="mt-3 leading-7 text-ink/72">{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Section>

        <Section tone="mist">
          <PullQuote>Compassion creates space for change.</PullQuote>
        </Section>

        <Section>
          <div className="mx-auto max-w-3xl">
            <Eyebrow>Honest boundaries</Eyebrow>
            <h2 className="mt-4 font-serif text-[clamp(2rem,4vw,3rem)] font-medium leading-tight">
              What this work is not.
            </h2>
            <ul className="mt-8 space-y-4 leading-8 text-ink/72">
              {isNot.map((item) => (
                <li key={item} className="flex gap-4">
                  <span
                    aria-hidden="true"
                    className="mt-3 inline-block h-[1px] w-6 shrink-0 bg-stone"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-10 text-sm leading-7 text-ink-muted">
              For the full boundary statement and Swiss emergency lines, see the{" "}
              <Link
                href="/legal/medical-disclaimer"
                className="underline underline-offset-4 hover:text-ink"
              >
                medical disclaimer
              </Link>
              .
            </p>
          </div>
        </Section>

        <Section tone="mist">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-medium leading-tight text-balance">
              If this sounds like the kind of care you’ve been looking for,
            </h2>
            <p className="mt-5 max-w-2xl mx-auto text-base leading-8 text-ink/72">
              you can read about consultations and pricing, or simply book a
              first consultation when you are ready.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/book"
                className="inline-flex min-h-12 items-center gap-2 rounded-full bg-ink px-6 text-sm font-semibold text-ivory transition hover:bg-cedar"
              >
                Book a first consultation
                <ArrowRight aria-hidden="true" size={17} />
              </Link>
              <Link
                href="/services"
                className="inline-flex min-h-12 items-center gap-2 rounded-full border border-stone/28 px-6 text-sm font-semibold text-ink transition hover:bg-mist"
              >
                See services & pricing
              </Link>
            </div>
          </div>
        </Section>
      </main>
    </PageShell>
  );
}
