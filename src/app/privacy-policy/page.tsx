import { PageShell } from "@/components/site/page-shell";
import { Eyebrow, Section } from "@/components/site/section";
import { site } from "@/lib/site-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for The Healing Ground Geneva."
};

export default function PrivacyPolicyPage() {
  return (
    <PageShell>
      <main className="bg-ivory text-ink">
        <Section>
          <div className="mx-auto max-w-3xl">
            <Eyebrow>Privacy</Eyebrow>
            <h1 className="mt-5 font-serif text-[clamp(3rem,7vw,5.5rem)] font-semibold leading-none">
              Privacy Policy
            </h1>
            <div className="mt-8 space-y-6 leading-8 text-ink/72">
              <p>
                {site.name} collects only the information needed to respond to
                enquiries, manage client relationships, and improve the
                website experience.
              </p>
              <p>
                Contact form submissions may include your name, email address,
                and the message you choose to send. Please avoid sending highly
                sensitive medical details through the form.
              </p>
              <p>
                Website analytics may be used in a privacy-conscious way to
                understand page performance and improve the site. Email and
                analytics providers should be configured with appropriate data
                processing terms before launch.
              </p>
              <p>
                For privacy questions, contact {site.email}. This page should be
                reviewed by a Swiss legal professional before public launch.
              </p>
            </div>
          </div>
        </Section>
      </main>
    </PageShell>
  );
}
