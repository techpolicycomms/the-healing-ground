"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Globe } from "lucide-react";

/**
 * Interim trilingual signal.
 *
 * The full next-intl URL routing migration is a separate piece of work (see
 * i18n/routing.ts). Until then, this switcher renders the EN / FR / ES pill
 * in the header and, on selection, opens a small, calm popover that explains
 * — in the chosen language — that the website is primarily in English for
 * now, and that consultations and email run in all three.
 *
 * The text is sourced from the messages/{locale}.json files so the eventual
 * migration can swap in real route navigation with one PR.
 */

type Lang = "en" | "fr" | "es";

const labels: Record<Lang, string> = { en: "EN", fr: "FR", es: "ES" };

const interim: Record<Lang, string> = {
  en: "The website is primarily in English while it grows. Consultations and email are available in English, French, and Spanish.",
  fr: "Le site est principalement en anglais pour l’instant. Les consultations et les e-mails se font en français, anglais et espagnol.",
  es: "El sitio está principalmente en inglés por ahora. Las consultas y los correos se hacen en español, inglés y francés."
};

const close: Record<Lang, string> = {
  en: "Close",
  fr: "Fermer",
  es: "Cerrar"
};

export function LanguageSwitcher({ tone = "light" }: { tone?: "light" | "dark" }) {
  const [open, setOpen] = useState<Lang | null>(null);
  const isDark = tone === "dark";

  return (
    <div className="relative inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em]" role="group" aria-label="Language">
      <Globe aria-hidden="true" size={14} className={isDark ? "text-ivory/50" : "text-ink-muted"} />
      {(Object.keys(labels) as Lang[]).map((lang, i) => (
        <span key={lang} className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setOpen((cur) => (cur === lang ? null : lang))}
            aria-haspopup="dialog"
            aria-expanded={open === lang}
            className={cn(
              "transition-colors duration-calm ease-calm",
              isDark
                ? open === lang
                  ? "text-ivory"
                  : "text-ivory/60 hover:text-ivory"
                : open === lang
                ? "text-ink"
                : "text-ink-muted hover:text-ink"
            )}
          >
            {labels[lang]}
          </button>
          {i < 2 ? (
            <span aria-hidden="true" className={isDark ? "text-ivory/30" : "text-ink-muted"}>
              ·
            </span>
          ) : null}
        </span>
      ))}

      {open ? (
        <div
          role="dialog"
          aria-label="Language note"
          className="absolute right-0 top-[calc(100%+10px)] z-50 w-[min(22rem,calc(100vw-2rem))] rounded-[10px] border border-stone/20 bg-cream p-5 text-left shadow-soft"
        >
          <p className="text-sm leading-7 text-ink/75">{interim[open]}</p>
          <button
            type="button"
            onClick={() => setOpen(null)}
            className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-olive underline-offset-[4px] hover:underline"
          >
            {close[open]}
          </button>
        </div>
      ) : null}
    </div>
  );
}
