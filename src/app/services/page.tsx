import { PageShell } from "@/components/site/page-shell";
import { Eyebrow, Section } from "@/components/site/section";
import { PricingCard } from "@/components/site/pricing-card";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import services from "@/content/services.json";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Holistic, naturopathic, and mind-body consultations with Celia de Mestral. Geneva or online — English, French, Spanish."
};

export default function ServicesPage() {
  return (
    <PageShell>
      <main className="bg-ivory text-ink">
        <Section>
          <div className="max-w-3xl">
            <Eyebrow>Consultations · Geneva & online</Eyebrow>
            <h1 className="mt-5 font-serif text-[clamp(2.6rem,5.5vw,4.8rem)] font-medium leading-[1.02] text-balance">
              Working together.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-ink/72 sm:text-xl text-pretty">
              Sessions are unhurried by design. The first consultation is the
              start of a relationship, not a transaction.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <PricingCard
              title={services.firstConsultation.title}
              duration={services.firstConsultation.duration}
              price={services.firstConsultation.price}
              formats={services.firstConsultation.formats}
              languages={services.firstConsultation.languages}
              includes={services.firstConsultation.includes}
              cta={{ href: "/book", label: "Book a first consultation" }}
            />
            <PricingCard
              title={services.followUp.title}
              duration={services.followUp.duration}
              price={services.followUp.price}
              formats={services.followUp.formats}
              languages={services.followUp.languages}
              blurb={services.followUp.blurb}
              cta={{ href: "/book", label: "Book a follow-up" }}
              variant="subdued"
            />
          </div>

          <div className="mt-8">
            <PricingCard
              title={services.shortSupportSeries.title}
              blurb={services.shortSupportSeries.blurb}
              pricingNote={services.shortSupportSeries.pricingNote}
              tbd={services.shortSupportSeries.tbd}
              cta={{ href: "/contact", label: "Ask about a series" }}
              variant="subdued"
            />
          </div>

          <div className="mt-12 rounded-[10px] border border-stone/15 bg-paper px-6 py-7 sm:px-8">
            <Eyebrow>Workshops</Eyebrow>
            <p className="mt-3 leading-7 text-ink/72">
              Small-group and organisational formats — for Geneva community
              groups, international organisations and NGOs, and private
              retreat-style gatherings. New workshops are announced gently,
              through the journal.
            </p>
            <Link
              href="/workshops"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-olive underline-offset-[6px] hover:underline"
            >
              About workshops
              <ArrowRight aria-hidden="true" size={16} />
            </Link>
          </div>
        </Section>

        <Section tone="mist">
          <div className="mx-auto max-w-3xl rounded-[10px] border border-stone/15 bg-paper px-6 py-7 text-sm leading-7 text-ink/70 sm:px-8 sm:py-8">
            <Eyebrow>A note on scope</Eyebrow>
            <p className="mt-3">
              Celia is not a medical doctor, psychologist, or psychiatrist. She
              does not diagnose, treat, or prescribe medication. Her work is
              complementary to medical care, never a replacement for it. Please
              continue working with your physician on all medical matters.
            </p>
            <Link
              href="/legal/medical-disclaimer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-olive underline-offset-[6px] hover:underline"
            >
              Full medical disclaimer
              <ArrowRight aria-hidden="true" size={16} />
            </Link>
          </div>
        </Section>
      </main>
    </PageShell>
  );
}
