/**
 * next-intl routing configuration.
 *
 * Scaffolded but not yet wired to [locale]/ routes. See README.
 * The eventual migration will:
 *   1. Move every src/app/<route>/page.tsx under src/app/[locale]/<route>/
 *   2. Wrap Clerk's clerkMiddleware() with createMiddleware() from
 *      next-intl/middleware in src/middleware.ts.
 *   3. Update every <Link href="..."> to import from this file's
 *      Link export so navigation respects the active locale.
 *   4. Replace hardcoded English strings in nav, footer, hero, and
 *      services with t(...) reads from messages/{en,fr,es}.json.
 *
 * Until then, the messages files exist and the header's
 * LanguageSwitcher surfaces an honest "site primarily in English;
 * consultations in EN / FR / ES" interim message.
 */
import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  locales: ["en", "fr", "es"],
  defaultLocale: "en",
  localePrefix: "as-needed"
});

export type Locale = (typeof routing.locales)[number];

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
