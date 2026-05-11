# The Healing Ground Geneva

Website for The Healing Ground Geneva — the holistic, naturopathic, and
mind-body practice of Celia de Mestral. Consultations in English, French,
and Spanish, in person in Geneva or online.

> **GitHub repo description (one-time update via the UI):**
> *Website for The Healing Ground Geneva — holistic, naturopathic, and mind-body practice with Celia de Mestral. EN / FR / ES.*

## Brand source of truth

All brand-level strings live in [`src/lib/brand.ts`](src/lib/brand.ts):

- `PRACTITIONER_TITLE_LONG` / `PRACTITIONER_TITLE_SHORT`
- `BRAND_TAGLINES` (en / fr / es)
- `FOUR_PILLARS` — naturopathy, nutrition, phytotherapy, mind-body
- `PHRASE_LIBRARY` — for the deterministic daily rotator
- `COMPLEMENTARY_LINE` — the mandatory scope statement

Editing any of these updates the whole site in one place.

## Brand voice guard

A grep-based ban check, ready to wire to a pre-commit hook:

```bash
./scripts/check-bans.sh
```

It fails non-zero if the hard-ban list (`coach`, `coaching`, `best version`,
`unlock your`, `biohack`, `crush it`, `high vibration`, `manifest`,
`game-changer`, `optimize your`) appears in user-facing copy, or if
`trauma-informed` exceeds the soft cap of 12 occurrences.

## Stack

- Next.js App Router + TypeScript
- Tailwind CSS with the brand-DNA palette (cream, ink, sage, olive, terracotta…)
- Fraunces (variable) + Inter via `next/font`
- Clerk middleware/provider
- Supabase clients via `@supabase/ssr`
- PostHog EU analytics
- Sentry
- Resend + React Email — contact form and newsletter signup
- Stripe SDK ready for future checkout flows
- next-intl scaffolded for EN / FR / ES; URL routing migration deferred to a follow-up PR

## Pages

- `/` — home
- `/about` — Celia’s story (full personal-story rewrite pending Celia’s questionnaire)
- `/approach` — the four pillars in depth
- `/services` — consultations, pricing, scope (was `/work-with-me`, 308 redirected)
- `/burnout-support`, `/nervous-system-regulation`, `/persistent-symptoms` — symptom landing pages, framed as “threads of the whole” that route back to /services
- `/expats-geneva`, `/workshops`, `/journal`, `/discovery-call`, `/book`, `/contact`, `/faq`
- `/legal/medical-disclaimer`, `/privacy-policy`, `/legal-notice`, `/cookie-policy`

## Optional environment variables

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_BOOKING_EMBED_URL` | When set, `/book` renders the URL as a calendar iframe (Cal.com / SimplyBook / similar). Falls back to an email CTA when empty. |
| `NEXT_PUBLIC_SITE_URL` | Overrides the default canonical site origin in metadata/sitemap. |
| `RESEND_AUDIENCE_ID` | When set, the newsletter form adds the contact to that Resend audience. Otherwise it sends a notification email to `CONTACT_TO_EMAIL`. |

## Trilingual (EN / FR / ES) — current state

Already shipped:

- `BRAND_TAGLINES` in all three languages (used in footer, hero, OG image, phrase rotator).
- `LanguageSwitcher` in the header — calm EN · FR · ES pill that opens a localised popover explaining current site state.
- Trilingual hero pill ("English · Français · Español").
- FAQ answer about languages.
- `messages/{en,fr,es}.json` scaffolded with nav, footer, language, and hero strings.

Deferred to a follow-up PR (clearly scoped):

- Move `src/app/<route>` → `src/app/[locale]/<route>` for every page.
- Wrap `clerkMiddleware()` with next-intl’s `createMiddleware()` in `src/middleware.ts`.
- Rewrite every `<Link href="/...">` to use the i18n-aware Link from `i18n/routing.ts`.
- hreflang alternates in the sitemap.
- Fill `messages/{fr,es}.json` with deep page bodies (with Celia’s review).

## Launch Materials

- [Agency blueprint](docs/agency-blueprint.md)
- [Brand launch strategy](docs/brand-launch-strategy.md)

## Local Development

```bash
pnpm install
pnpm dev
```

Copy `.env.example` to `.env.local` and fill in the project keys.

## Items to confirm before launch

- **Practice address** — `/contact` shows `[TBD — Celia to provide the practice street address]`.
- **Credentials** — `/about` gets a full personal-story rewrite and credentials block once the questionnaire is provided.
- **Short Support Series pricing** — `src/content/services.json` has a `tbd: true` flag; set when bundle pricing is decided.
- **Newsletter audience** — set `RESEND_AUDIENCE_ID` once the journal list is created.
- **Booking URL** — set `NEXT_PUBLIC_BOOKING_EMBED_URL` once a calendar tool is chosen.
- **GitHub repo description** — update via the GitHub UI to the one quoted at the top of this README.
