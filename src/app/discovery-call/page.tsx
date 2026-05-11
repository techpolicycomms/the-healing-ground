import { ContactForm } from "@/components/contact-form";
import { PageShell } from "@/components/site/page-shell";
import { Eyebrow, Section } from "@/components/site/section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Discovery Call",
  description:
    "Book a calm discovery call with Celia de Mestral to explore trauma-informed, holistic mind-body practice for stress, burnout, and nervous system support."
};

export default function DiscoveryCallPage() {
  return (
    <PageShell>
      <main className="bg-ivory text-ink">
        <Section>
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <Eyebrow>Discovery call</Eyebrow>
              <h1 className="mt-5 font-serif text-[clamp(3rem,7vw,6rem)] font-semibold leading-[0.92]">
                A gentle first conversation.
              </h1>
              <div className="mt-7 space-y-5 text-lg leading-8 text-ink/72">
                <p>
                  You do not need to explain everything perfectly. The call is a
                  calm space to name what is happening, what you are hoping for,
                  and whether trauma-informed, holistic mind-body practice feels like the right next
                  step.
                </p>
                <p>
                  You are welcome to share only what feels relevant. There is no
                  pressure to disclose trauma history or make a decision on the
                  spot.
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
