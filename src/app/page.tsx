import { PageShell } from "@/components/site/page-shell";
import { Eyebrow, Section } from "@/components/site/section";
import { PullQuote } from "@/components/site/pull-quote";
import { ContactForm } from "@/components/contact-form";
import { approach, homeServices, site, trustSignals } from "@/lib/site-content";
import { ArrowRight, Check, Globe2, Languages, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    url: site.domain,
    areaServed: "Geneva, Switzerland",
    founder: site.founder,
    description: site.descriptor,
    serviceType: "Trauma-informed coaching"
  };

  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="bg-ivory text-ink">
        <section className="relative overflow-hidden border-b border-stone/10">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2200&q=86"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ivory via-ivory/88 to-ivory/42" />
            <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-ivory to-transparent" />
          </div>
          <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.02fr_0.98fr] lg:py-24">
            <div className="max-w-3xl">
              <Eyebrow>Trauma-informed coaching in Geneva</Eyebrow>
              <h1 className="mt-5 font-serif text-[clamp(3rem,7vw,6.4rem)] font-semibold leading-[0.92] tracking-normal">
                Come home to your body.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-ink/72 sm:text-xl">
                A calm, sophisticated coaching space for stress, burnout,
                nervous system dysregulation, emotional overwhelm, and persistent
                stress-related symptoms.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 text-sm text-ink/70">
                <span className="inline-flex min-h-10 items-center gap-2 rounded-full border border-stone/20 bg-ivory/75 px-4">
                  <Globe2 aria-hidden="true" size={17} />
                  Geneva and online
                </span>
                <span className="inline-flex min-h-10 items-center gap-2 rounded-full border border-stone/20 bg-ivory/75 px-4">
                  <Languages aria-hidden="true" size={17} />
                  English, French, Spanish
                </span>
              </div>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/discovery-call"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-ink px-7 text-sm font-semibold text-ivory transition hover:bg-cedar"
                >
                  Book a discovery call
                  <ArrowRight aria-hidden="true" size={18} />
                </Link>
                <Link
                  href="/work-with-me"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-stone/28 bg-ivory/80 px-7 text-sm font-semibold text-ink transition hover:bg-white"
                >
                  Explore the work
                </Link>
              </div>
            </div>
          </div>
        </section>

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
                The Healing Ground Geneva offers trauma-informed coaching with
                Celia de Mestral for people who want to understand their stress
                responses without shame and rebuild a steadier relationship with
                their body, emotions, work, and life in Geneva.
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
            <Eyebrow>Ways to be supported</Eyebrow>
            <h2 className="mt-4 font-serif text-[clamp(2.4rem,5vw,4.7rem)] font-semibold leading-none">
              Gentle structure for stress, burnout, and nervous-system repair.
            </h2>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {homeServices.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group rounded-[8px] border border-stone/15 bg-ivory p-6 transition hover:-translate-y-1 hover:shadow-soft"
              >
                <service.icon aria-hidden="true" className="text-clay" size={28} />
                <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-stone">
                  {service.eyebrow}
                </p>
                <h3 className="mt-3 text-2xl font-semibold leading-tight">
                  {service.title}
                </h3>
                <p className="mt-4 leading-7 text-ink/68">{service.text}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cedar">
                  Learn more
                  <ArrowRight aria-hidden="true" size={16} />
                </span>
              </Link>
            ))}
          </div>
        </Section>

        <Section>
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[8px] bg-mist shadow-soft">
              <Image
                src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=85"
                alt="A quiet table with a notebook, tea, and soft daylight"
                fill
                sizes="(min-width: 1024px) 44vw, 100vw"
                className="object-cover"
              />
            </div>
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
                  Her approach is trauma-informed, culturally sensitive, and
                  carefully paced. It is especially attuned to internationally
                  mobile adults, expats, diplomats, NGO workers, and people in
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
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>Phrases that feel true</Eyebrow>
            <div className="mt-12 space-y-12">
              <PullQuote>Healing happens at the pace of safety.</PullQuote>
              <PullQuote>Your body is not working against you.</PullQuote>
              <PullQuote>Rest is necessary, not selfish.</PullQuote>
            </div>
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
                  If coaching is not the right container, Celia will name that
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
