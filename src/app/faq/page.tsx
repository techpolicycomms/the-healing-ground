import { PageShell } from "@/components/site/page-shell";
import { Eyebrow, Section } from "@/components/site/section";
import { faqs } from "@/lib/site-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about holistic, mind-body practice —, burnout support, nervous system regulation, sessions, languages, and ethical boundaries."
};

export default function FAQPage() {
  return (
    <PageShell>
      <main className="bg-ivory text-ink">
        <Section>
          <div className="max-w-3xl">
            <Eyebrow>FAQ</Eyebrow>
            <h1 className="mt-5 font-serif text-[clamp(3rem,7vw,6rem)] font-semibold leading-[0.92]">
              Clear answers. No pressure.
            </h1>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {faqs.map((faq) => (
              <article key={faq.question} className="rounded-[8px] border border-stone/15 bg-mist/55 p-6">
                <h2 className="text-xl font-semibold">{faq.question}</h2>
                <p className="mt-3 leading-7 text-ink/70">{faq.answer}</p>
              </article>
            ))}
          </div>
        </Section>
      </main>
    </PageShell>
  );
}
