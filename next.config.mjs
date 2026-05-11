import { withSentryConfig } from "@sentry/nextjs";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: __dirname,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      },
      {
        protocol: "https",
        hostname: "thehealing-ground.com"
      }
    ]
  },
  async redirects() {
    return [
      {
        source: "/work-with-me",
        destination: "/services",
        permanent: true
      }
    ];
  }
};

export default withSentryConfig(nextConfig, {
  org: process.env.SENTRY_ORG,
  project: process.env.SENTRY_PROJECT || "the-healing-ground",
  silent: !process.env.CI
});
