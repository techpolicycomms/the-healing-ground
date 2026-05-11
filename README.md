# The Healing Ground Geneva

Website for The Healing Ground Geneva — the holistic, mind-body practice of
Celia de Mestral. Trauma-informed support for stress, burnout, nervous-system
regulation, and persistent stress-related symptoms.

## Stack

- Next.js App Router + TypeScript
- Tailwind CSS — brand-DNA palette (cream, ink, sage, olive, terracotta…)
- Fraunces (variable, italic) + Inter — self-hosted via `next/font`
- Clerk middleware/provider
- Supabase clients via `@supabase/ssr`
- PostHog EU analytics
- Sentry
- Resend + React Email (contact form)
- Stripe SDK ready for future checkout flows

## Brand tokens

Defined in `tailwind.config.ts` and `src/app/globals.css`:

- Background: `bg-cream` / `bg-paper` / `bg-sand` (never pure white)
- Body text: `text-ink` (never pure black)
- Accents (use sparingly): `sage`, `olive`, `terracotta`, `rose-dust`, `honey`
- Legacy aliases (`ivory`, `mist`, `clay`, `cedar`, `oat`) continue to work and
  map onto brand hues for components that haven't been migrated yet.

## Launch Materials

- [Agency blueprint](docs/agency-blueprint.md): full brand, copy, SEO, multilingual,
  Instagram, newsletter, workshop, discovery-call, compliance, expat, tech, and
  launch strategy.
- [Brand launch strategy](docs/brand-launch-strategy.md): concise operating plan and
  positioning reference.

## Local Development

```bash
pnpm install
pnpm dev
```

Copy `.env.example` to `.env.local` and fill in the project keys before using
integrations.

## Optional environment variables

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_BOOKING_EMBED_URL` | When set, `/book` renders the URL as a calendar iframe (Cal.com / SimplyBook / similar). Falls back to an email CTA when empty. |
| `NEXT_PUBLIC_SITE_URL` | Overrides the default canonical site origin in metadata/sitemap. |

## Trilingual (EN / FR / ES) — planned

The brand promises sessions in English, French, and Spanish. This is signalled
visibly on the home page (hero pill, trilingual tagline band) and in the FAQ.

Full URL-level localisation via `next-intl` (`/en`, `/fr`, `/es` routes,
extracted messages files, hreflang alternates) is **planned as a separate PR**.
It requires wrapping the Clerk middleware and moving 17 pages under `[locale]/`,
which is too large a refactor to land alongside the brand-DNA pass.
