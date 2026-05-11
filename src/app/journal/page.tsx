import { PageShell } from "@/components/site/page-shell";
import { Eyebrow, Section } from "@/components/site/section";
import { NewsletterForm } from "@/components/newsletter-form";
import { journalIdeas } from "@/lib/site-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Reflective journal from The Healing Ground Geneva on burnout, nervous system regulation, expat wellbeing, chronic stress, and emotional overwhelm."
};

export default function JournalPage() {
  return (
    <PageShell>
      <main className="bg-ivory text-ink">
        <Section>
          <div className="max-w-4xl">
            <Eyebrow>Journal</Eyebrow>
            <h1 className="mt-5 font-serif text-[clamp(3rem,7vw,6rem)] font-semibold leading-[0.92]">
              Notes on stress, body, belonging, and steadiness.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-ink/72">
              Long-form writing will live here: reflective, educational, and
              gentle enough to read when your system is tired.
            </p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {journalIdeas.map((idea) => (
              <article key={idea} className="rounded-[8px] border border-stone/15 bg-mist/55 p-5">
                <p className="text-sm font-semibold leading-6">{idea}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section tone="mist">
          <div className="mx-auto max-w-3xl">
            <Eyebrow>A gentle letter</Eyebrow>
            <h2 className="mt-4 font-serif text-[clamp(2rem,4vw,3rem)] font-medium leading-tight text-balance">
              When a piece is published, it arrives quietly.
            </h2>
            <div className="mt-8">
              <NewsletterForm />
            </div>
          </div>
        </Section>
      </main>
    </PageShell>
  );
}
