import { PageShell } from "@/components/site/page-shell";
import { Eyebrow, Section } from "@/components/site/section";
import { BrandGradient } from "@/components/site/brand-gradient";
import { ArrowRight, Check } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

type ServicePageTone = "sand" | "paper" | "sage" | "rose-dust" | "beige";

type ServicePageProps = {
  page: {
    title: string;
    meta: string;
    eyebrow: string;
    headline: string;
    intro: string;
    image: string;
    imageCaption?: string;
    imageTone?: ServicePageTone;
    sections: readonly { title: string; items: readonly string[] }[];
    cta: string;
  };
};

export function serviceMetadata(page: ServicePageProps["page"]): Metadata {
  return {
    title: page.title,
    description: page.meta
  };
}

export function ServicePage({ page }: ServicePageProps) {
  return (
    <PageShell>
      <main className="bg-ivory text-ink">
        <Section className="border-b border-stone/10">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <Eyebrow>{page.eyebrow}</Eyebrow>
              <h1 className="mt-5 font-serif text-[clamp(3rem,7vw,6rem)] font-semibold leading-[0.92]">
                {page.headline}
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-ink/72 sm:text-xl">
                {page.intro}
              </p>
              <Link
                href="/discovery-call"
                className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-ink px-7 text-sm font-semibold text-ivory transition hover:bg-cedar"
              >
                {page.cta}
                <ArrowRight aria-hidden="true" size={18} />
              </Link>
            </div>
            <BrandGradient
              tone={page.imageTone ?? "sand"}
              rounded
              className="aspect-[4/5] shadow-soft"
              caption={page.imageCaption ?? "Geneva · in person & online"}
            />
          </div>
        </Section>

        <Section tone="mist">
          <div className="grid gap-6 lg:grid-cols-2">
            {page.sections.map((section) => (
              <article key={section.title} className="rounded-[8px] bg-ivory p-6 shadow-soft sm:p-8">
                <h2 className="font-serif text-4xl font-semibold">{section.title}</h2>
                <div className="mt-6 grid gap-4">
                  {section.items.map((item) => (
                    <div key={item} className="flex gap-3">
                      <Check aria-hidden="true" className="mt-1 shrink-0 text-clay" size={18} />
                      <p className="leading-7 text-ink/72">{item}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>Next step</Eyebrow>
            <h2 className="mt-4 font-serif text-[clamp(2.4rem,5vw,4.7rem)] font-semibold leading-none">
              You do not need to wait until everything is unbearable.
            </h2>
            <p className="mt-6 text-lg leading-8 text-ink/70">
              A discovery call is a low-pressure conversation to understand what
              is happening, what you are looking for, and whether this work is a
              suitable container.
            </p>
            <Link
              href="/discovery-call"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-ink px-7 text-sm font-semibold text-ivory transition hover:bg-cedar"
            >
              Book a discovery call
              <ArrowRight aria-hidden="true" size={18} />
            </Link>
          </div>
        </Section>
      </main>
    </PageShell>
  );
}
