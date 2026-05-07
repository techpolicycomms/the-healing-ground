import { navItems, site } from "@/lib/site-content";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-stone/10 bg-ivory/92 backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8"
      >
        <Link href="/" className="max-w-[13rem] font-serif text-2xl font-semibold leading-none">
          {site.name}
        </Link>
        <div className="hidden items-center gap-7 text-sm font-semibold text-ink/68 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-ink">
              {item.label}
            </Link>
          ))}
        </div>
        <Link
          href="/discovery-call"
          className="inline-flex min-h-11 items-center gap-2 rounded-full bg-ink px-5 text-sm font-semibold text-ivory transition hover:bg-cedar"
        >
          Discovery call
          <ArrowRight aria-hidden="true" size={16} />
        </Link>
      </nav>
    </header>
  );
}
