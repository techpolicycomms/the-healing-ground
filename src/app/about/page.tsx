import { PageShell } from "@/components/site/page-shell";
import { Eyebrow, Section } from "@/components/site/section";
import { PullQuote } from "@/components/site/pull-quote";
import { BrandGradient } from "@/components/site/brand-gradient";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Celia de Mestral",
  description:
    "Celia de Mestral — Holistic Practitioner, Naturopathic & Mind-Body, in Geneva. Naturopathy, nutrition, phytotherapy, emotional inquiry, and mind-body connection to help people reconnect with themselves."
};

export default function AboutPage() {
  return (
    <PageShell>
      <main className="bg-ivory text-ink">
        {/* HERO: portrait + opening line */}
        <Section>
          <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <BrandGradient
              tone="paper"
              rounded
              className="aspect-[4/5] shadow-soft"
              caption="Celia de Mestral · Geneva"
            />
            <div>
              <Eyebrow>About</Eyebrow>
              <h1 className="mt-5 font-serif text-[clamp(2.6rem,5.5vw,4.8rem)] font-medium leading-[1.02] text-balance">
                Celia de Mestral.
              </h1>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-ink-muted">
                Holistic Practitioner — Naturopathic & Mind-Body
              </p>
              <p className="mt-8 font-serif text-xl italic font-light leading-snug text-ink/85 text-pretty">
                I am a holistic practitioner who supports healing through
                nutrition, phytotherapy, emotional inquiry, and mind-body
                connection — to help people reconnect with themselves.
              </p>
            </div>
          </div>
        </Section>

        {/* STORY — Why this work matters to me */}
        <Section>
          <div className="mx-auto max-w-[680px]">
            <Eyebrow>Why this work matters to me</Eyebrow>
            <div className="mt-8 space-y-6 text-lg leading-8 text-ink/75 text-pretty">
              <p>
                I came to this work by living it. We are fortunate to have
                advanced medicine and knowledgeable doctors, and I don’t
                believe healing is one-size-fits-all. Every person, body,
                story, nervous system, and emotional experience is different.
              </p>
              <p>
                For many years I lived the consequences of ignoring my body,
                disconnecting from myself, and staying in survival mode while
                still appearing functional from the outside. I was diagnosed
                along the way with an autoimmune condition (Sjögren’s
                syndrome), ADHD, depression, chronic stress, insomnia, IBS,
                leaky gut, hormonal imbalance, emotional suppression, and
                nervous-system dysregulation.
              </p>
              <p>
                I had also moved through major emotional and cultural
                transitions — Paraguay, New York, Geneva — adapting to
                different cultures, building community, trying to fit in.
                Functional on the surface, exhausted underneath.
              </p>
              <p>
                Before cancer, I had already experienced burnout. I didn’t
                fully listen. I kept pushing, adapting, taking care of
                everyone else, people-pleasing, and ignoring the deeper signs
                because survival mode had become normal.
              </p>
              <p>
                Then, at thirty, I was diagnosed with breast cancer.
              </p>
              <p>
                That was the moment that changed everything. Cancer asked me
                to stop, pause, and look honestly at my life, my body, my
                emotions, my nervous system, my relationships, and the way I
                had abandoned myself for years.
              </p>
            </div>
          </div>
        </Section>

        {/* Mid-page environmental image to break the column */}
        <Section className="!py-12">
          <BrandGradient
            tone="sand"
            rounded
            caption="A quiet table — Geneva"
            className="mx-auto aspect-[5/2] max-w-[920px] shadow-soft"
          />
        </Section>

        {/* PULL-QUOTE — Q8 verbatim */}
        <Section tone="mist">
          <PullQuote>
            I now understand that my body, nervous system, and emotional world
            were trying to communicate with me for years.
          </PullQuote>
        </Section>

        {/* STORY — What I learned along the way */}
        <Section>
          <div className="mx-auto max-w-[680px]">
            <Eyebrow>What I learned along the way</Eyebrow>
            <div className="mt-8 space-y-6 text-lg leading-8 text-ink/75 text-pretty">
              <p>
                Most of the people I now sit with are not weak. They are
                strong, sensitive, capable people who have spent years quietly
                abandoning themselves — performing, caretaking, adapting,
                surviving.
              </p>
              <p>
                People are not broken. They are simply disconnected from
                themselves after years of adapting, surviving, suppressing,
                and carrying more than their nervous system was ever meant to
                hold alone.
              </p>
              <p>
                The work, then, isn’t usually about learning something new.
                More often, it’s about gently undoing the strategies that
                once protected us — and letting the body remember that it’s
                allowed to rest, to feel, and to belong.
              </p>
            </div>
          </div>
        </Section>

        <Section tone="mist">
          <PullQuote>
            You are not broken. You are disconnected. And reconnection is
            possible.
          </PullQuote>
        </Section>

        {/* STORY — Where I am now */}
        <Section>
          <div className="mx-auto max-w-[680px]">
            <Eyebrow>Where I am now</Eyebrow>
            <div className="mt-8 space-y-6 text-lg leading-8 text-ink/75 text-pretty">
              <p>
                Transitioning from IT support into naturopathy and holistic
                healing did not feel like a random career change. It felt like
                coming home to what I was meant to do.
              </p>
              <p>
                Today my practice is in Geneva. I work in person and online,
                in English, French, and Spanish. The people who find their
                way here are often expats, professionals, parents, and quietly
                exhausted humans who sense that there is more space available
                to them than they have been allowed.
              </p>
              <p>
                My role is not to fix anyone. It is to offer steady,
                well-prepared company while the body finds its way back to
                itself.
              </p>
            </div>
          </div>
        </Section>

        {/* INFLUENCES — Q24 verbatim list */}
        <Section tone="mist">
          <div className="mx-auto max-w-[680px]">
            <Eyebrow>What informs the work</Eyebrow>
            <h2 className="mt-4 font-serif text-[clamp(1.8rem,3.5vw,2.6rem)] font-medium leading-tight text-balance">
              Several approaches, woven into one.
            </h2>
            <p className="mt-6 leading-8 text-ink/75 text-pretty">
              Healing is multidimensional. The approaches that inform my work
              include trauma-informed care, somatics, mindfulness, neuroscience,
              spirituality, naturopathy, nervous-system science, emotional
              intelligence, embodiment, attachment theory, and mind-body
              healing. None of them stand alone; they support each other.
            </p>
          </div>
        </Section>

        {/* CREDENTIALS — TBD placeholder */}
        <Section>
          <div className="mx-auto max-w-[680px]">
            <Eyebrow>Training & credentials</Eyebrow>
            <h2 className="mt-4 font-serif text-[clamp(1.8rem,3.5vw,2.6rem)] font-medium leading-tight">
              Said plainly.
            </h2>
            <p className="mt-6 leading-8 text-ink/75">
              A full credentials list will be added here once finalised. For
              current training details — naturopathy and phytotherapy schools,
              nutrition, mind-body and nervous-system modalities — please
              contact Celia directly.
            </p>
            <p className="mt-3 text-sm italic text-ink-muted">
              [TBD — Celia to provide the formal credentials list]
            </p>

            <div className="mt-10 rounded-[10px] border border-stone/15 bg-paper p-6 text-sm leading-7 text-ink/70 sm:p-7">
              I am not a medical doctor, psychologist, or psychiatrist. My
              work is complementary to medical care, never a replacement.
              Please continue working with your physician on all medical
              matters.{" "}
              <Link
                href="/legal/medical-disclaimer"
                className="underline underline-offset-4 hover:text-ink"
              >
                Full medical disclaimer
              </Link>
              .
            </div>
          </div>
        </Section>

        {/* MISSION / VISION / PROMISE — kept, moved below the personal story */}
        <Section tone="mist">
          <div className="grid gap-8 lg:grid-cols-3">
            {[
              [
                "Mission",
                "To accompany people reconnecting with themselves — body, emotions, nervous system, and inner life — through holistic, naturopathic, and mind-body practice."
              ],
              [
                "Vision",
                "A Geneva healing culture where sensitivity, stress, and burnout are met with nuance and compassion, never shame."
              ],
              [
                "Promise",
                "A grounded space where you can slow down, be heard, and make sense of your body without being rushed or pathologised."
              ]
            ].map(([title, text]) => (
              <article key={title} className="rounded-[8px] bg-ivory p-6 shadow-soft">
                <h2 className="font-serif text-3xl font-semibold">{title}</h2>
                <p className="mt-4 leading-7 text-ink/70">{text}</p>
              </article>
            ))}
          </div>
        </Section>

        {/* CTA */}
        <Section>
          <div className="mx-auto max-w-[680px] text-center">
            <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-medium leading-tight text-balance">
              If something here meets you,
            </h2>
            <p className="mx-auto mt-5 max-w-prose text-base leading-8 text-ink/72">
              you can read about consultations and pricing, or simply book a
              first one when you are ready.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/book"
                className="inline-flex min-h-12 items-center gap-2 rounded-full bg-ink px-6 text-sm font-semibold text-ivory transition hover:bg-cedar"
              >
                Book a first consultation
                <ArrowRight aria-hidden="true" size={17} />
              </Link>
              <Link
                href="/services"
                className="inline-flex min-h-12 items-center gap-2 rounded-full border border-stone/28 px-6 text-sm font-semibold text-ink transition hover:bg-mist"
              >
                See services & pricing
              </Link>
            </div>
          </div>
        </Section>
      </main>
    </PageShell>
  );
}
