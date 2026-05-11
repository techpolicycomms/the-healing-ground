/**
 * The Healing Ground Geneva — brand constants.
 *
 * Import from here everywhere you need to render Celia's title, the tagline,
 * or the trilingual taglines. Single source of truth so the brand can never
 * drift again. Don't add new strings here unless they're truly brand-level;
 * page copy lives in messages or in the page itself.
 */

export const PRACTITIONER_TITLE_LONG =
  "Holistic Practitioner — Naturopathic & Mind-Body Practitioner";

export const PRACTITIONER_TITLE_SHORT = "Holistic Practitioner";

export const BRAND_TAGLINE_EN = "Healing happens at the pace of safety.";
export const BRAND_TAGLINE_FR = "La guérison se fait au rythme de la sécurité.";
export const BRAND_TAGLINE_ES = "La sanación ocurre al ritmo de la seguridad.";

export const BRAND_TAGLINES = {
  en: BRAND_TAGLINE_EN,
  fr: BRAND_TAGLINE_FR,
  es: BRAND_TAGLINE_ES
} as const;

/** The four pillars — exact one-liners. Imported by the home page and /approach. */
export const FOUR_PILLARS = [
  {
    key: "naturopathy",
    title: "Naturopathy",
    body: "A grounded assessment of root causes — symptoms, history, stress, sleep, digestion — viewed as a connected whole."
  },
  {
    key: "nutrition",
    title: "Nutrition",
    body: "Personalised, gentle nutritional guidance. Plant-aware, sustainable, never restrictive or prescriptive of a single diet."
  },
  {
    key: "phytotherapy",
    title: "Phytotherapy",
    body: "Plant-based support and considered supplementation when it serves the work — never as a quick fix."
  },
  {
    key: "mind-body",
    title: "Mind-Body & Nervous System",
    body: "Emotional inquiry, nervous-system regulation, and embodiment practices — so the body finally feels heard."
  }
] as const;

/**
 * Phrases that feel true — rotates per page-load, deterministic per session.
 * Keep this list short and edited; do not add filler.
 */
export const PHRASE_LIBRARY = [
  "Healing happens at the pace of safety.",
  "Your body is not working against you.",
  "Rest is necessary, not selfish.",
  "You do not have to carry everything alone.",
  "The body remembers what the mind tries to forget.",
  "Healing is not perfection — it is reconnection.",
  "Compassion creates space for change."
] as const;

/** The mandatory boundary line that appears on every services / health page. */
export const COMPLEMENTARY_LINE =
  "Trauma-informed and complementary to medical care. Never a replacement for it.";
