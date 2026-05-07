import { PageShell } from "@/components/site/page-shell";
import { Eyebrow, Section } from "@/components/site/section";
import { workshopIdeas } from "@/lib/site-content";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Workshops",
  description:
    "Calm, trauma-informed workshops in Geneva for nervous system education, burnout prevention, expat wellbeing, and emotionally intelligent teams."
};

export default function WorkshopsPage() {
  return (
    <PageShell>
      <main className="bg-ivory text-ink">
        <Section>
          <div className="max-w-4xl">
            <Eyebrow>Workshops</Eyebrow>
            <h1 className="mt-5 font-serif text-[clamp(3rem,7vw,6rem)] font-semibold leading-[0.92]">
              Nervous system education for people and organisations moving fast.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-ink/72 sm:text-xl">
              Workshops are designed for Geneva communities, expat groups,
              international organisations, NGOs, and small private gatherings
              that want emotional intelligence without performance.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {workshopIdeas.map((workshop) => (
              <article key={workshop.title} className="rounded-[8px] border border-stone/15 bg-mist/55 p-6">
                <workshop.icon aria-hidden="true" className="text-clay" size={28} />
                <h2 className="mt-5 text-2xl font-semibold">{workshop.title}</h2>
                <p className="mt-3 leading-7 text-ink/70">{workshop.text}</p>
              </article>
            ))}
          </div>
          <Link
            href="/contact"
            className="mt-10 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-ink px-7 text-sm font-semibold text-ivory transition hover:bg-cedar"
          >
            Discuss a workshop
            <ArrowRight aria-hidden="true" size={18} />
          </Link>
        </Section>
      </main>
    </PageShell>
  );
}
