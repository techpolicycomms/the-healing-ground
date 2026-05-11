import { PageShell } from "@/components/site/page-shell";
import { Eyebrow, Section } from "@/components/site/section";
import { legalDisclaimers, site } from "@/lib/site-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal Notice",
  description: "Legal notice and professional disclaimer for The Healing Ground Geneva."
};

export default function LegalNoticePage() {
  return (
    <PageShell>
      <main className="bg-ivory text-ink">
        <Section>
          <div className="mx-auto max-w-3xl">
            <Eyebrow>Legal</Eyebrow>
            <h1 className="mt-5 font-serif text-[clamp(3rem,7vw,5.5rem)] font-semibold leading-none">
              Legal Notice
            </h1>
            <div className="mt-8 space-y-6 leading-8 text-ink/72">
              <p>
                {site.name} is a Geneva-based holistic mind-body practice led by {site.founder}.
                Final legal entity details, registered address, UID if
                applicable, and professional credentials should be added before
                launch.
              </p>
              {legalDisclaimers.map((disclaimer) => (
                <p key={disclaimer}>{disclaimer}</p>
              ))}
            </div>
          </div>
        </Section>
      </main>
    </PageShell>
  );
}
