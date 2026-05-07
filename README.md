# The Healing Ground Geneva

Website for The Healing Ground Geneva, a trauma-informed coaching practice led by Celia de Mestral.

## Stack

- Next.js App Router + TypeScript
- Tailwind CSS + shadcn/ui-style components
- Clerk middleware/provider
- Supabase clients via `@supabase/ssr`
- PostHog EU analytics
- Sentry
- Resend + React Email
- Stripe SDK ready for future checkout flows

## Local Development

```bash
pnpm install
pnpm dev
```

Copy `.env.example` to `.env.local` and fill in the project keys before using integrations.
