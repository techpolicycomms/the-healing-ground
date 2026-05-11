import { PageShell } from "@/components/site/page-shell";
import { Eyebrow, Section } from "@/components/site/section";
import { PullQuote } from "@/components/site/pull-quote";
import { PhraseRotator } from "@/components/site/phrase-rotator";
import { BrandGradient } from "@/components/site/brand-gradient";
import { ContactForm } from "@/components/contact-form";
import { approach, homeServices, site, trustSignals } from "@/lib/site-content";
import { FOUR_PILLARS, COMPLEMENTARY_LINE } from "@/lib/brand";
import { ArrowRight, Check, Globe2, Languages, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
    url: site.domain,
    areaServed: "Geneva, Switzerland",
    founder: { "@type": "Person", name: site.founder },
    description: site.descriptor,
    image: `${site.domain}/opengraph-image`,
    knowsLanguage: ["en", "fr", "es"]
  };

  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="bg-ivory text-ink">
        <section className="relative overflow-hidden border-b border-stone/10">
          <BrandGradient tone="cream" className="absolute inset-0" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[1.02fr_0.98fr] lg:py-28">
            <div className="max-w-3xl">
              <Eyebrow>Holistic, mind-body practice · Geneva</Eyebrow>
              <h1 className="mt-5 font-serif text-[clamp(2.75rem,6vw,4.75rem)] font-medium leading-[1.05] tracking-[-0.02em] text-balance">
                Healing happens at the pace of{" "}
                <em className="font-serif italic text-olive">safety</em>.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-ink/72 sm:text-xl text-pretty">
                A grounded, naturopathic and mind-body space for people who are
                tired of surviving — and ready to reconnect with themselves.
                Gentle, evidence-aware, and complementary to medical care.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 text-sm text-ink/70">
                <span className="inline-flex min-h-10 items-center gap-2 rounded-full border border-stone/20 bg-ivory/75 px-4">
                  <Globe2 aria-hidden="true" size={17} />
                  Geneva and online
                </span>
                <span className="inline-flex min-h-10 items-center gap-2 rounded-full border border-stone/20 bg-ivory/75 px-4">
                  <Languages aria-hidden="true" size={17} />
                  English · Français · Español
                </span>
              </div>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/book"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-ink px-7 text-sm font-semibold text-ivory transition hover:bg-cedar"
                >
                  Book a first session
                  <ArrowRight aria-hidden="true" size={18} />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-stone/28 bg-ivory/80 px-7 text-sm font-semibold text-ink transition hover:bg-white"
                >
                  See services & pricing
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <BrandGradient
                tone="sand"
                className="relative aspect-[4/5] rounded-[12px] shadow-soft"
                caption="Geneva · in person & online"
              />
            </div>
          </div>
        </section>

        <Section tone="mist">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>If this sounds familiar</Eyebrow>
            <div className="mt-8 space-y-5">
              <p className="font-serif text-2xl italic font-light leading-snug text-ink/80 text-balance">
                You are exhausted, but appear strong.
              </p>
              <p className="font-serif text-2xl italic font-light leading-snug text-ink/80 text-balance">
                Your body is asking you to slow down — and you don&apos;t know how.
              </p>
              <p className="font-serif text-2xl italic font-light leading-snug text-ink/80 text-balance">
                You care for everyone, and have forgotten how to care for yourself.
              </p>
              <p className="font-serif text-2xl italic font-light leading-snug text-ink/80 text-balance">
                You sense that something deeper is happening beneath your symptoms.
              </p>
            </div>
            <hr className="hairline mx-auto my-10 max-w-[100px]" />
            <p className="font-serif text-3xl font-medium leading-snug text-ink text-balance">
              You are not broken. You are disconnected.
            </p>
            <p className="mt-2 font-serif text-3xl font-medium leading-snug text-ink text-balance">
              And reconnection is possible.
            </p>
          </div>
        </Section>

        <Section>
          <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <div>
              <Eyebrow>For internationally intense lives</Eyebrow>
              <h2 className="mt-4 font-serif text-[clamp(2.4rem,5vw,4.7rem)] font-semibold leading-none">
                Support for the part of you that has been holding everything together.
              </h2>
            </div>
            <div className="space-y-6 text-lg leading-8 text-ink/72">
              <p>
                Many people who arrive here are not falling apart visibly. They
                are competent, thoughtful, sensitive, and exhausted. They have
                learned to adapt, achieve, translate cultures, meet expectations,
                and keep moving.
              </p>
              <p>
                The Healing Ground Geneva is the holistic, naturopathic and
                mind-body practice of Celia de Mestral — for people who want to
                understand their stress responses without shame and rebuild a
                steadier relationship with their body, emotions, work, and life
                in Geneva.
              </p>
            </div>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-4">
            {trustSignals.map((signal) => (
              <div
                key={signal}
                className="flex min-h-24 items-center gap-3 rounded-[8px] border border-stone/15 bg-mist/55 p-4"
              >
                <Check aria-hidden="true" className="shrink-0 text-clay" size={19} />
                <span className="text-sm font-semibold leading-6">{signal}</span>
              </div>
            ))}
          </div>
        </Section>

        <Section tone="mist">
          <div className="max-w-3xl">
            <Eyebrow>How I work</Eyebrow>
            <h2 className="mt-4 font-serif text-[clamp(2.2rem,4.5vw,3.8rem)] font-medium leading-[1.05] text-balance">
              Four pillars, woven together.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-ink/72 text-pretty">
              A first consultation considers your body, history, nervous
              system, and emotional life as one connected story.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {FOUR_PILLARS.map((pillar) => (
              <article
                key={pillar.key}
                className="rounded-[8px] border border-stone/15 bg-ivory p-6"
              >
                <p className="eyebrow text-olive">{pillar.title}</p>
                <p className="mt-4 leading-7 text-ink/72">{pillar.body}</p>
              </article>
            ))}
          </div>

          <p className="mt-10 max-w-2xl text-sm leading-7 text-ink-muted">
            {COMPLEMENTARY_LINE}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href="/approach"
              className="inline-flex items-center gap-2 text-sm font-semibold text-olive underline-offset-[6px] hover:underline"
            >
              Read the approach in depth
              <ArrowRight aria-hidden="true" size={16} />
            </Link>
            <span className="text-ink-muted" aria-hidden="true">·</span>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-olive underline-offset-[6px] hover:underline"
            >
              See services & pricing
              <ArrowRight aria-hidden="true" size={16} />
            </Link>
          </div>
        </Section>

        <Section>
          <div className="max-w-3xl">
            <Eyebrow>If you arrived for a specific reason</Eyebrow>
            <h2 className="mt-4 font-serif text-[clamp(1.8rem,3vw,2.4rem)] font-medium leading-tight text-balance">
              These threads are often what brings people here. They are met as
              part of the whole, never in isolation.
            </h2>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {homeServices.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group rounded-[8px] border border-stone/15 bg-paper p-6 transition hover:-translate-y-1 hover:shadow-soft"
              >
                <service.icon aria-hidden="true" className="text-olive" size={26} />
                <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-ink-muted">
                  {service.eyebrow}
                </p>
                <h3 className="mt-3 text-xl font-semibold leading-tight">
                  {service.title}
                </h3>
                <p className="mt-3 leading-7 text-ink/68">{service.text}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-olive">
                  Read more
                  <ArrowRight aria-hidden="true" size={16} />
                </span>
              </Link>
            ))}
          </div>
        </Section>

        <Section>
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <BrandGradient
              tone="sand"
              rounded
              className="aspect-[4/5] shadow-soft"
              caption="A quiet table — Geneva"
            />
            <div>
              <Eyebrow>Founder-led care</Eyebrow>
              <h2 className="mt-4 font-serif text-[clamp(2.35rem,5vw,4.6rem)] font-semibold leading-none">
                Meet Celia de Mestral.
              </h2>
              <div className="mt-7 space-y-5 text-lg leading-8 text-ink/72">
                <p>
                  Celia&apos;s work is built for people who need depth without
                  drama, compassion without performance, and practical support
                  that respects complexity.
                </p>
                <p>
                  Her approach is grounded, culturally sensitive, and carefully
                  paced. It is especially attuned to internationally mobile
                  adults, expats, diplomats, NGO workers, and people in
                  demanding professional environments who may be carrying more
                  than they show.
                </p>
              </div>
              <Link
                href="/about"
                className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-ink px-7 text-sm font-semibold text-ivory transition hover:bg-cedar"
              >
                Read Celia&apos;s story
                <ArrowRight aria-hidden="true" size={18} />
              </Link>
            </div>
          </div>
        </Section>

        <Section tone="ink">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <Eyebrow light>How it feels</Eyebrow>
              <h2 className="mt-4 font-serif text-[clamp(2.35rem,5vw,4.6rem)] font-semibold leading-none">
                Quiet, spacious, emotionally precise.
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {approach.map((item) => (
                <article key={item.title} className="rounded-[8px] border border-ivory/12 p-6">
                  <item.icon aria-hidden="true" className="text-sage" size={28} />
                  <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 leading-7 text-ivory/68">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </Section>

        <Section tone="mist" className="py-24 lg:py-32">
          <Eyebrow className="block text-center">A phrase, gently</Eyebrow>
          <div className="mt-12">
            <PhraseRotator />
          </div>
        </Section>

        <Section>
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <Eyebrow>Begin gently</Eyebrow>
              <h2 className="mt-4 font-serif text-[clamp(2.35rem,5vw,4.6rem)] font-semibold leading-none">
                A discovery call is simply a place to see what support might fit.
              </h2>
              <p className="mt-6 text-lg leading-8 text-ink/72">
                You do not need to arrive with a perfect explanation. A few
                honest sentences are enough.
              </p>
              <div className="mt-6 flex items-start gap-3 rounded-[8px] border border-stone/15 bg-mist p-4 text-sm leading-6 text-ink/70">
                <ShieldCheck aria-hidden="true" className="mt-1 shrink-0 text-clay" size={18} />
                <p>
                  If this work is not the right container, Celia will name that
                  clearly and suggest a more appropriate next step.
                </p>
              </div>
            </div>
            <ContactForm />
          </div>
        </Section>
      </main>
    </PageShell>
  );
}
