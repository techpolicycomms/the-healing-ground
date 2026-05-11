import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export type PricingCardProps = {
  title: string;
  duration?: string;
  price?: string;
  formats?: readonly string[];
  languages?: readonly string[];
  blurb?: string;
  includes?: readonly string[];
  pricingNote?: string;
  tbd?: boolean;
  cta?: { href: string; label: string };
  variant?: "primary" | "subdued";
  className?: string;
};

export function PricingCard({
  title,
  duration,
  price,
  formats,
  languages,
  blurb,
  includes,
  pricingNote,
  tbd = false,
  cta,
  variant = "primary",
  className
}: PricingCardProps) {
  const isSubdued = variant === "subdued";
  return (
    <article
      className={cn(
        "rounded-[10px] border p-7 sm:p-8",
        isSubdued ? "border-stone/15 bg-paper" : "border-stone/15 bg-ivory shadow-soft",
        className
      )}
    >
      <h2 className="font-serif text-3xl font-semibold leading-tight">{title}</h2>

      {duration || price ? (
        <p className="mt-3 flex flex-wrap items-baseline gap-x-3 gap-y-1 text-sm text-ink/70">
          {duration ? <span>{duration}</span> : null}
          {duration && price ? <span aria-hidden="true">·</span> : null}
          {price ? <span className="text-base font-medium text-ink">{price}</span> : null}
          {pricingNote ? (
            <span className="text-ink-muted italic">— {pricingNote}</span>
          ) : null}
        </p>
      ) : null}

      {formats || languages ? (
        <p className="mt-2 flex flex-wrap gap-x-2 text-sm text-ink/65">
          {formats ? <span>{formats.join(" · ")}</span> : null}
          {formats && languages ? <span aria-hidden="true">·</span> : null}
          {languages ? <span>{languages.join(" / ")}</span> : null}
        </p>
      ) : null}

      {blurb ? <p className="mt-5 leading-7 text-ink/72">{blurb}</p> : null}

      {includes ? (
        <ul className="mt-6 grid gap-3">
          {includes.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-6 text-ink/72">
              <Check aria-hidden="true" className="mt-1 shrink-0 text-olive" size={16} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : null}

      {tbd ? (
        <p className="mt-5 text-sm italic text-ink-muted">
          [TBD — Celia to confirm bundle pricing]
        </p>
      ) : null}

      {cta ? (
        <Link
          href={cta.href}
          className="mt-7 inline-flex min-h-12 items-center gap-2 rounded-full bg-ink px-6 text-sm font-semibold text-ivory transition hover:bg-cedar"
        >
          {cta.label}
          <ArrowRight aria-hidden="true" size={17} />
        </Link>
      ) : null}
    </article>
  );
}
