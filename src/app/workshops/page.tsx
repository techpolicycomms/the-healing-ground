import { PageShell } from "@/components/site/page-shell";
import { Eyebrow, Section } from "@/components/site/section";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Workshops",
  description:
    "Workshops at The Healing Ground Geneva — small, gentle, grounded in naturopathy, nervous-system education, and emotional inquiry. Announced as they take shape."
};

export default function WorkshopsPage() {
  return (
    <PageShell>
      <main className="bg-ivory text-ink">
        <Section>
          <div className="mx-auto max-w-3xl">
            <Eyebrow>Workshops</Eyebrow>
            <h1 className="mt-5 font-serif text-[clamp(2.6rem,5.5vw,4.8rem)] font-medium leading-[1.02] text-balance">
              Coming gently.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-ink/72 text-pretty">
              Workshops will be announced as they take shape. They will follow
              the same principles as Celia’s 1:1 work — small groups, gentle
              pacing, no performance, and rooted in naturopathy, nervous-system
              education, and emotional inquiry.
            </p>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-ink/72 text-pretty">
              If you’d like to be notified when the first one is open, you can
              leave your email below.
            </p>

            <div className="mt-10 rounded-[10px] border border-stone/15 bg-paper p-7 sm:p-8">
              <Eyebrow>Notify me when workshops open</Eyebrow>
              <p className="mt-4 text-sm leading-7 text-ink/65">
                {/* Newsletter form is wired in a separate commit; this placeholder
                    matches the brief's content shape and links to the contact route
                    as a graceful fallback. */}
                Newsletter signup will live here. Until then, you can write to
                Celia directly and she will add you to the quiet pre-list for
                workshops.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-full bg-ink px-6 text-sm font-semibold text-ivory transition hover:bg-cedar"
              >
                Write to be added
                <ArrowRight aria-hidden="true" size={17} />
              </Link>
            </div>
          </div>
        </Section>

        <Section tone="mist">
          <div className="mx-auto max-w-3xl">
            <Eyebrow>For organisations</Eyebrow>
            <p className="mt-5 leading-8 text-ink/72">
              Workshops will be offered for Geneva community groups,
              international organisations and NGOs, and private retreat-style
              gatherings. If you are interested in commissioning a workshop for
              your team or community, please get in touch.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-olive underline-offset-[6px] hover:underline"
            >
              Get in touch
              <ArrowRight aria-hidden="true" size={16} />
            </Link>
          </div>
        </Section>
      </main>
    </PageShell>
  );
}
