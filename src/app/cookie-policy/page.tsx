import { PageShell } from "@/components/site/page-shell";
import { Eyebrow, Section } from "@/components/site/section";
import { site } from "@/lib/site-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Cookie policy for The Healing Ground Geneva."
};

export default function CookiePolicyPage() {
  return (
    <PageShell>
      <main className="bg-ivory text-ink">
        <Section>
          <div className="mx-auto max-w-3xl">
            <Eyebrow>Cookies</Eyebrow>
            <h1 className="mt-5 font-serif text-[clamp(3rem,7vw,5.5rem)] font-semibold leading-none">
              Cookie Policy
            </h1>
            <div className="mt-8 space-y-6 leading-8 text-ink/72">
              <p>
                This website may use essential cookies for site functionality and
                privacy-conscious analytics to understand how visitors use the
                site.
              </p>
              <p>
                If marketing, retargeting, or non-essential tracking is added in
                the future, a consent banner and preference controls should be
                implemented before those tools are activated.
              </p>
              <p>For questions, contact {site.email}.</p>
            </div>
          </div>
        </Section>
      </main>
    </PageShell>
  );
}
