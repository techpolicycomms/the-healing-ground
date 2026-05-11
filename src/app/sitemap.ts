import { site } from "@/lib/site-content";
import type { MetadataRoute } from "next";

const routes = [
  "",
  "/about",
  "/approach",
  "/services",
  "/burnout-support",
  "/nervous-system-regulation",
  "/persistent-symptoms",
  "/workshops",
  "/expats-geneva",
  "/journal",
  "/discovery-call",
  "/book",
  "/contact",
  "/faq",
  "/privacy-policy",
  "/legal-notice",
  "/legal/medical-disclaimer",
  "/cookie-policy"
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${site.domain}${route}`,
    lastModified: new Date("2026-05-11"),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7
  }));
}
