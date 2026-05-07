import { PageShell } from "@/components/site/page-shell";
import { Eyebrow, Section } from "@/components/site/section";
import { ArrowRight, Check } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "For Expats in Geneva",
  description:
    "Trauma-informed coaching for expats in Geneva, UN professionals, NGO workers, diplomats, and internationally mobile adults experiencing stress or burnout."
};

const groups = [
  "UN ecosystem professionals carrying complex mandates and invisible emotional load",
  "NGO workers navigating urgency, compassion fatigue, and mission-driven pressure",
  "Diplomats and international civil servants balancing discretion, performance, and transition",
  "Expat spouses and partners rebuilding identity, belonging, and agency",
  "Internationally mobile adults moving between languages, homes, roles, and cultures"
];

export default function ExpatsGenevaPage() {
  return (
    <PageShell>
      <main className="bg-ivory text-ink">
        <Section>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <Eyebrow>For expats in Geneva</Eyebrow>
              <h1 className="mt-5 font-serif text-[clamp(3rem,7vw,6rem)] font-semibold leading-[0.92]">
                The nervous system impact of starting over, again and again.
              </h1>
            </div>
            <div className="space-y-5 text-lg leading-8 text-ink/72">
              <p>
                Geneva can be beautiful, meaningful, and lonely at the same
                time. International life often asks people to be adaptable,
                articulate, diplomatic, and resilient long after their bodies
                need stability.
              </p>
              <p>
                The Healing Ground Geneva offers a culturally sensitive coaching
                space for the stress of relocation, high-responsibility work,
                identity shifts, language fatigue, belonging, and emotional
                overwhelm.
              </p>
            </div>
          </div>
        </Section>
        <Section tone="mist">
          <div className="grid gap-4 lg:grid-cols-5">
            {groups.map((group) => (
              <div key={group} className="rounded-[8px] bg-ivory p-5 shadow-soft">
                <Check aria-hidden="true" className="text-clay" size={19} />
                <p className="mt-4 text-sm font-semibold leading-6">{group}</p>
              </div>
            ))}
          </div>
        </Section>
        <Section>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>Local and international</Eyebrow>
            <h2 className="mt-4 font-serif text-[clamp(2.4rem,5vw,4.7rem)] font-semibold leading-none">
              A Geneva practice for people living between worlds.
            </h2>
            <p className="mt-6 text-lg leading-8 text-ink/70">
              This is not generic wellness copy pasted onto expat life. It is
              support that understands mobility, discretion, professional
              pressure, cross-cultural belonging, and the particular loneliness
              that can exist inside international communities.
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
