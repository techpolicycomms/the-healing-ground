import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/site/page-shell";
import { Eyebrow, Section } from "@/components/site/section";

export const metadata: Metadata = {
  title: "Medical disclaimer",
  description:
    "The scope, boundaries, and ethics of The Healing Ground Geneva — Celia de Mestral. Coaching is complementary to, never a replacement for, medical or psychiatric care."
};

const crisisLines = [
  {
    number: "144",
    label: "Medical emergencies (Switzerland) — 24/7"
  },
  {
    number: "143",
    label: "La Main Tendue — emotional support, 24/7"
  },
  {
    number: "147",
    label: "Pro Juventute — support line for young people"
  }
];

export default function MedicalDisclaimerPage() {
  return (
    <PageShell>
      <main className="bg-ivory text-ink">
        <Section className="border-b border-stone/10">
          <div className="mx-auto max-w-3xl">
            <Eyebrow>Medical disclaimer</Eyebrow>
            <h1 className="mt-5 font-serif text-[clamp(2.6rem,5.5vw,4.8rem)] font-semibold leading-[0.95]">
              On scope, boundaries, and honesty.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-ink/72">
              The Healing Ground Geneva offers trauma-informed coaching and
              educational support. This page explains, plainly, what that means —
              and what it does not.
            </p>
          </div>
        </Section>

        <Section>
          <div className="mx-auto max-w-3xl space-y-12">
            <section>
              <h2 className="font-serif text-3xl font-semibold leading-tight">
                Coaching, not medicine
              </h2>
              <p className="mt-4 leading-8 text-ink/72">
                Celia de Mestral is a trauma-informed practitioner working in a
                coaching and educational capacity. She is not a medical doctor,
                psychologist, or psychiatrist. The work offered through The
                Healing Ground Geneva does not diagnose, treat, cure, or prescribe
                medication for any disease, disorder, or condition.
              </p>
              <p className="mt-4 leading-8 text-ink/72">
                This work is complementary to — and never a replacement for —
                medical care, psychiatric care, or emergency mental-health
                services. Please continue working with your physician on all
                medical matters.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-3xl font-semibold leading-tight">
                Information on this website
              </h2>
              <p className="mt-4 leading-8 text-ink/72">
                The information shared in sessions, on this website, in the
                journal, and in any related material is for educational and
                supportive purposes only. It is not medical advice, and it should
                not be relied upon as a substitute for advice from a licensed
                healthcare professional.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-3xl font-semibold leading-tight">
                If you are in crisis
              </h2>
              <p className="mt-4 leading-8 text-ink/72">
                If you are in immediate distress or danger, please contact one of
                the Swiss emergency lines below, or go to the nearest emergency
                department.
              </p>
              <ul className="mt-8 space-y-4">
                {crisisLines.map((line) => (
                  <li
                    key={line.number}
                    className="flex flex-col gap-2 rounded-[10px] border border-stone/15 bg-mist/60 p-5 sm:flex-row sm:items-center sm:gap-6"
                  >
                    <span className="font-serif text-3xl italic text-olive">
                      {line.number}
                    </span>
                    <span className="leading-7 text-ink/75">{line.label}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-3xl font-semibold leading-tight">
                Scope of the practice
              </h2>
              <p className="mt-4 leading-8 text-ink/72">
                The practice operates in accordance with Swiss and Geneva
                cantonal expectations regarding coaching and complementary
                support. No claim is made, on this website or in session, to
                cure illness or to perform acts reserved for licensed medical
                professionals. Where a referral to medical, psychiatric, or
                psychological care is appropriate, it will be offered openly.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-3xl font-semibold leading-tight">
                Questions
              </h2>
              <p className="mt-4 leading-8 text-ink/72">
                If anything on this page is unclear, please feel free to{" "}
                <Link
                  href="/contact"
                  className="underline underline-offset-4 hover:text-ink"
                >
                  contact Celia directly
                </Link>
                . You can also read the{" "}
                <Link
                  href="/privacy-policy"
                  className="underline underline-offset-4 hover:text-ink"
                >
                  privacy policy
                </Link>{" "}
                or{" "}
                <Link
                  href="/legal-notice"
                  className="underline underline-offset-4 hover:text-ink"
                >
                  legal notice
                </Link>
                .
              </p>
            </section>

            <p className="text-sm italic text-ink/55">
              Last updated:{" "}
              {new Date().toLocaleDateString("en-GB", {
                year: "numeric",
                month: "long"
              })}
              . This page is reviewed periodically and updated as needed.
            </p>
          </div>
        </Section>
      </main>
    </PageShell>
  );
}
