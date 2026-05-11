import { legalDisclaimers, navItems, site } from "@/lib/site-content";
import { NewsletterForm } from "@/components/newsletter-form";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="bg-ink px-5 py-12 text-ivory sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="font-serif text-3xl font-semibold">{site.name}</p>
          <p className="mt-4 max-w-xl text-sm leading-7 text-ivory/68">
            {site.descriptor}
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm text-ivory/72">
            <span>{site.taglines.en}</span>
            <span aria-hidden="true">/</span>
            <span>{site.taglines.fr}</span>
            <span aria-hidden="true">/</span>
            <span>{site.taglines.es}</span>
          </div>
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-sage">
              Navigate
            </h2>
            <div className="mt-4 grid gap-3 text-sm text-ivory/75">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="hover:text-ivory">
                  {item.label}
                </Link>
              ))}
              <Link href="/faq" className="hover:text-ivory">
                FAQ
              </Link>
            </div>
          </div>
          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-sage">
              Legal
            </h2>
            <div className="mt-4 grid gap-3 text-sm text-ivory/75">
              <Link href="/legal/medical-disclaimer" className="hover:text-ivory">
                Medical disclaimer
              </Link>
              <Link href="/privacy-policy" className="hover:text-ivory">
                Privacy Policy
              </Link>
              <Link href="/legal-notice" className="hover:text-ivory">
                Legal Notice
              </Link>
              <Link href="/cookie-policy" className="hover:text-ivory">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-ivory/12 pt-10">
        <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-sage">
          A gentle letter
        </h2>
        <div className="mt-5 max-w-2xl">
          <NewsletterForm tone="dark" />
        </div>
        <p className="mt-10 max-w-4xl text-xs leading-6 text-ivory/55">
          {legalDisclaimers[0]}
        </p>
        <p className="mt-5 text-xs text-ivory/50">
          Copyright © 2026 {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
