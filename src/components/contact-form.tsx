"use client";

import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { useState } from "react";

type FormState = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("sending");
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const response = await fetch("/api/resend/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message")
      })
    });

    if (!response.ok) {
      const body = (await response.json().catch(() => null)) as { error?: string } | null;
      setError(body?.error || "Something went wrong. Please email Rita directly.");
      setState("error");
      return;
    }

    form.reset();
    setState("sent");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-5 rounded-[8px] border border-stone/15 bg-ivory p-5 shadow-soft sm:p-7"
    >
      <div>
        <label htmlFor="name" className="text-sm font-semibold text-ink">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="mt-2 min-h-12 w-full rounded-[8px] border border-stone/25 bg-white px-4 text-base text-ink shadow-sm transition focus:border-cedar"
        />
      </div>
      <div>
        <label htmlFor="email" className="text-sm font-semibold text-ink">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="mt-2 min-h-12 w-full rounded-[8px] border border-stone/25 bg-white px-4 text-base text-ink shadow-sm transition focus:border-cedar"
        />
      </div>
      <div>
        <label htmlFor="message" className="text-sm font-semibold text-ink">
          What would you like support with?
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="mt-2 w-full rounded-[8px] border border-stone/25 bg-white px-4 py-3 text-base text-ink shadow-sm transition focus:border-cedar"
        />
      </div>
      <Button
        type="submit"
        disabled={state === "sending"}
      >
        <Send aria-hidden="true" size={18} />
        {state === "sending" ? "Sending..." : "Send enquiry"}
      </Button>
      <p aria-live="polite" className="min-h-6 text-sm text-cedar">
        {state === "sent" ? "Thank you. Celia will respond within 1-2 days." : null}
        {state === "error" ? error : null}
      </p>
    </form>
  );
}
