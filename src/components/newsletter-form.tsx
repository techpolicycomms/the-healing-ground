"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Tone = "light" | "dark";

export function NewsletterForm({
  tone = "light",
  blurb = "A gentle letter, every few weeks. Reflections on healing, nervous-system care, and reconnecting with yourself. No pressure, no perfection — just honesty."
}: {
  tone?: Tone;
  blurb?: string;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  const isDark = tone === "dark";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email.includes("@")) {
      setError("Could you double-check this email address?");
      return;
    }
    setError(null);
    setState("submitting");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ name: name || undefined, email })
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data.error ?? "Something didn't go through. Please try again.");
        setState("error");
        return;
      }
      setState("success");
    } catch {
      setError("Something didn't go through. Please try again.");
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <p className={cn("text-sm leading-7", isDark ? "text-ivory/85" : "text-olive")}>
        Thank you. A gentle letter will reach you soon.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-3">
      {blurb ? (
        <p className={cn("max-w-prose text-sm leading-7", isDark ? "text-ivory/72" : "text-ink/65")}>
          {blurb}
        </p>
      ) : null}
      <div className="grid gap-3 sm:grid-cols-[1fr_1.4fr_auto]">
        <label className="grid gap-1">
          <span className={cn("text-xs uppercase tracking-[0.16em]", isDark ? "text-ivory/55" : "text-ink-muted")}>Name (optional)</span>
          <input
            type="text"
            autoComplete="given-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={cn(
              "min-h-11 rounded-md border px-3 text-sm",
              isDark
                ? "border-ivory/20 bg-ivory/5 text-ivory placeholder:text-ivory/40 focus:border-ivory/40"
                : "border-stone/25 bg-cream text-ink placeholder:text-ink-muted focus:border-olive"
            )}
          />
        </label>
        <label className="grid gap-1">
          <span className={cn("text-xs uppercase tracking-[0.16em]", isDark ? "text-ivory/55" : "text-ink-muted")}>Email</span>
          <input
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className={cn(
              "min-h-11 rounded-md border px-3 text-sm",
              isDark
                ? "border-ivory/20 bg-ivory/5 text-ivory placeholder:text-ivory/40 focus:border-ivory/40"
                : "border-stone/25 bg-cream text-ink placeholder:text-ink-muted focus:border-olive"
            )}
          />
        </label>
        <button
          type="submit"
          disabled={state === "submitting"}
          className={cn(
            "mt-auto inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition disabled:opacity-60",
            isDark
              ? "bg-ivory text-ink hover:bg-ivory/90"
              : "bg-ink text-ivory hover:bg-cedar"
          )}
        >
          {state === "submitting" ? "Sending…" : "Subscribe"}
          <ArrowRight aria-hidden="true" size={16} />
        </button>
      </div>
      {error ? (
        <p className="text-sm text-clay" role="alert">
          {error}
        </p>
      ) : null}
      <p className={cn("text-xs leading-6", isDark ? "text-ivory/45" : "text-ink-muted")}>
        Your email is gently held, never shared. Unsubscribe any time, without ceremony.
      </p>
    </form>
  );
}
