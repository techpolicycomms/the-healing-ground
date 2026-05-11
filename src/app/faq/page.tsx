import { PageShell } from "@/components/site/page-shell";
import { Eyebrow, Section } from "@/components/site/section";
import { faqs } from "@/lib/site-content";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about Celia's holistic, mind-body practice — sessions, languages, online/in-person, ethical boundaries, and crisis support."
};

export default function FAQPage() {
  return (
    <PageShell>
      <main className="bg-ivory text-ink">
        <Section>
          <div className="mx-auto max-w-3xl">
            <Eyebrow>FAQ</Eyebrow>
            <h1 className="mt-5 font-serif text-[clamp(2.6rem,5.5vw,4.8rem)] font-medium leading-[1.02] text-balance">
              Clear answers. No pressure.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-ink/72 text-pretty">
              The five questions that come up most often. For anything else,{" "}
              <Link
                href="/contact"
                className="underline underline-offset-4 hover:text-ink"
              >
                write to Celia directly
              </Link>
              .
            </p>

            <div className="mt-12 divide-y divide-stone/15 border-y border-stone/15">
              {faqs.map((faq) => (
                <details key={faq.question} className="group py-6">
                  <summary className="flex cursor-pointer items-start justify-between gap-6 list-none">
                    <h2 className="font-serif text-2xl font-medium leading-snug">
                      {faq.question}
                    </h2>
                    <span
                      aria-hidden="true"
                      className="mt-2 inline-block h-[1px] w-6 shrink-0 bg-ink-soft transition-transform duration-calm ease-calm group-open:rotate-90"
                    />
                  </summary>
                  <p className="mt-4 max-w-prose leading-8 text-ink/72">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </Section>
      </main>
    </PageShell>
  );
}
