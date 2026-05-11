import { PHRASE_LIBRARY, BRAND_TAGLINES } from "@/lib/brand";

/**
 * Server-rendered. Picks one phrase from PHRASE_LIBRARY per page-load,
 * deterministically — using the request's day-of-year as a seed so the
 * site rotates daily without any client-side JS, layout shift, or
 * hydration mismatch. Below the main EN line we surface the FR and ES
 * brand taglines quietly, in ink-muted.
 */
export function PhraseRotator() {
  const now = new Date();
  const start = Date.UTC(now.getUTCFullYear(), 0, 0);
  const dayOfYear = Math.floor((now.getTime() - start) / 86_400_000);
  const phrase = PHRASE_LIBRARY[dayOfYear % PHRASE_LIBRARY.length];

  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="pull-quote">
        <span aria-hidden="true" className="mr-2 text-olive">
          “
        </span>
        {phrase}
        <span aria-hidden="true" className="ml-2 text-olive">
          ”
        </span>
      </p>
      <p className="mt-6 font-serif italic text-base leading-7 text-ink-muted">
        {BRAND_TAGLINES.fr}
      </p>
      <p className="mt-1 font-serif italic text-base leading-7 text-ink-muted">
        {BRAND_TAGLINES.es}
      </p>
    </div>
  );
}
