import { PostHog } from "posthog-node";

let posthogClient: PostHog | null = null;

export function getPostHogServerClient() {
  if (!process.env.NEXT_PUBLIC_POSTHOG_KEY) {
    return null;
  }

  if (!posthogClient) {
    posthogClient = new PostHog(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
      host: process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://eu.i.posthog.com"
    });
  }

  return posthogClient;
}
