import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

/**
 * Server-side request config for next-intl. Pulls messages from the JSON
 * files in messages/. Falls back to the default locale if the requested
 * one isn't recognised. Wired only once [locale]/ routing is enabled in
 * src/middleware.ts.
 */
export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = routing.locales.includes(requested as never)
    ? (requested as string)
    : routing.defaultLocale;

  const messages = (await import(`../messages/${locale}.json`)).default;
  return { locale, messages };
});
