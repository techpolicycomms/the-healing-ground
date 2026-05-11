import { PageShell } from "@/components/site/page-shell";
import { Eyebrow, Section } from "@/components/site/section";
import { ArrowRight, Check } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Work With Me",
  description:
    "Trauma-informed, holistic mind-body practice formats with Celia de Mestral for stress, burnout, nervous system regulation, and emotional overwhelm in Geneva."
};

const formats = [
  {
    title: "1:1 Consultation",
    text: "A private container for stress, burnout, overwhelm, body awareness, and nervous-system capacity.",
    details: ["60-minute sessions", "Online or Geneva-based when available", "English with French or Spanish nuance where helpful"]
  },
  {
    title: "Short Support Arc",
    text: "A focused series for people who need clarity, steadiness, and a less overwhelming way to begin.",
    details: ["4-session structure", "Gentle intake and integration prompts", "Ideal after relocation, work pressure, or emotional depletion"]
  },
  {
    title: "Workshops",
    text: "Small-group and organisational formats for stress literacy, burnout prevention, and nervous-system education.",
    details: ["Geneva community groups", "International organisations and NGOs", "Private retreat-style formats"]
  }
];

export default function WorkWithMePage() {
  return (
    <PageShell>
      <main className="bg-ivory text-ink">
        <Section>
          <div className="max-w-4xl">
            <Eyebrow>Work with me</Eyebrow>
            <h1 className="mt-5 font-serif text-[clamp(3rem,7vw,6rem)] font-semibold leading-[0.92]">
              Holistic consultations that respect your pace, your body, and your story.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-ink/72 sm:text-xl">
              The work is structured enough to feel containing, spacious enough
              to feel human, and honest enough to name when another form of care
              would be more appropriate.
            </p>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {formats.map((format) => (
              <article key={format.title} className="rounded-[8px] border border-stone/15 bg-mist/55 p-6">
                <h2 className="font-serif text-4xl font-semibold">{format.title}</h2>
                <p className="mt-4 leading-7 text-ink/70">{format.text}</p>
                <div className="mt-6 grid gap-3">
                  {format.details.map((detail) => (
                    <p key={detail} className="flex gap-3 text-sm leading-6 text-ink/72">
                      <Check aria-hidden="true" className="mt-1 shrink-0 text-clay" size={16} />
                      {detail}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <Link
            href="/discovery-call"
            className="mt-10 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-ink px-7 text-sm font-semibold text-ivory transition hover:bg-cedar"
          >
            Start with a discovery call
            <ArrowRight aria-hidden="true" size={18} />
          </Link>
        </Section>
      </main>
    </PageShell>
  );
}
