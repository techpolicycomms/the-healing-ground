import {
  Anchor,
  BookOpen,
  BriefcaseBusiness,
  Compass,
  HeartHandshake,
  Leaf,
  Mail,
  MapPin,
  MessageCircle,
  Moon,
  PenLine,
  ShieldCheck,
  Sparkles,
  Waves
} from "lucide-react";

export const site = {
  name: "The Healing Ground Geneva",
  founder: "Celia de Mestral",
  domain: "https://www.thehealinggroundgeneva.com",
  email: "hello@thehealinggroundgeneva.com",
  descriptor:
    "Trauma-informed coaching for stress, burnout, nervous system dysregulation, emotional overwhelm, and persistent stress-related symptoms.",
  tagline: "Come home to your body.",
  taglines: {
    en: "Come home to your body.",
    fr: "Revenez a vous, en douceur.",
    es: "Vuelve a ti, con suavidad."
  }
};

export const navItems = [
  { label: "About", href: "/about" },
  { label: "Work With Me", href: "/work-with-me" },
  { label: "Expats", href: "/expats-geneva" },
  { label: "Workshops", href: "/workshops" },
  { label: "Journal", href: "/journal" }
];

export const trustSignals = [
  "Trauma-informed and consent-led",
  "English, French, and Spanish welcome",
  "Geneva-based, internationally aware",
  "Coaching, not diagnosis or medical treatment"
];

export const homeServices = [
  {
    href: "/burnout-support",
    icon: BriefcaseBusiness,
    eyebrow: "Burnout support",
    title: "For the high-functioning professional who feels quietly depleted.",
    text: "A slower, more honest way to understand stress patterns, restore capacity, and relate to work without abandoning yourself."
  },
  {
    href: "/nervous-system-regulation",
    icon: Waves,
    eyebrow: "Nervous system regulation",
    title: "For bodies living in urgency, vigilance, freeze, or overwhelm.",
    text: "Gentle practices and reflective coaching that help your system notice safety, choice, rhythm, and ground."
  },
  {
    href: "/persistent-symptoms",
    icon: HeartHandshake,
    eyebrow: "Persistent symptoms",
    title: "For stress-related symptoms that deserve to be listened to.",
    text: "Support for the emotional and nervous-system dimensions of fatigue, tension, sleep disruption, digestive sensitivity, and hormonal stress."
  }
];

export const approach = [
  {
    icon: ShieldCheck,
    title: "Safety before insight",
    text: "The work moves at the pace your system can metabolise. There is no pressure to disclose, relive, or perform vulnerability."
  },
  {
    icon: Anchor,
    title: "Grounded, not mystical",
    text: "Celia uses emotionally intelligent coaching, nervous-system education, and practical integration rather than grand promises."
  },
  {
    icon: Compass,
    title: "Culturally sensitive",
    text: "The work respects international lives, complex identities, multilingual realities, and the pressure of Geneva's professional ecosystem."
  }
];

export const servicePages = {
  "/burnout-support": {
    title: "Burnout Support in Geneva",
    meta:
      "Trauma-informed burnout support in Geneva for expats, UN professionals, NGO workers, diplomats, and emotionally exhausted high achievers.",
    eyebrow: "Burnout support",
    headline: "When achievement has cost more than you expected.",
    intro:
      "Burnout is not only tiredness. It can feel like distance from yourself: a nervous system that cannot fully switch off, a mind that keeps pushing, and a body that has been asking for attention for a long time.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85",
    sections: [
      {
        title: "This work may support you if",
        items: [
          "you look functional from the outside but feel thin, irritable, or emotionally absent inside",
          "rest no longer feels restorative",
          "you carry responsibility for teams, family, relocation, or mission-driven work",
          "you struggle to know what you need until your body forces you to stop"
        ]
      },
      {
        title: "How we work",
        items: [
          "map the patterns that keep your system in pressure",
          "build language for your limits without shame",
          "create a sustainable rhythm of recovery, boundaries, and embodied cues",
          "support choices that protect your energy in real life, not only in theory"
        ]
      }
    ],
    cta: "Book a gentle discovery call"
  },
  "/nervous-system-regulation": {
    title: "Nervous System Regulation Geneva",
    meta:
      "Nervous system regulation coaching in Geneva for chronic stress, emotional overwhelm, freeze, hypervigilance, and sensitive professionals.",
    eyebrow: "Nervous system regulation",
    headline: "Your body is not overreacting. It is trying to protect you.",
    intro:
      "Regulation is not about becoming permanently calm. It is about developing enough inner safety and capacity to notice what is happening, return to choice, and meet life with more steadiness.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=85",
    sections: [
      {
        title: "Together we explore",
        items: [
          "signals of fight, flight, freeze, appease, shutdown, and over-functioning",
          "simple grounding practices that do not require perfection or performance",
          "how your history, culture, work, and relationships shape your stress response",
          "ways to build capacity before making major life decisions"
        ]
      },
      {
        title: "The experience",
        items: [
          "quiet, structured sessions with space to pause",
          "psychoeducation in plain language",
          "body-aware coaching without forcing bodywork",
          "integration prompts between sessions"
        ]
      }
    ],
    cta: "Begin with a discovery call"
  },
  "/persistent-symptoms": {
    title: "Persistent Stress-Related Symptoms Geneva",
    meta:
      "Coaching support in Geneva for persistent stress-related symptoms, emotional overwhelm, fatigue, sleep disruption, and hormonal stress.",
    eyebrow: "Persistent symptoms",
    headline: "When the body keeps speaking, it deserves a compassionate response.",
    intro:
      "Persistent symptoms can be frightening and frustrating, especially when tests are inconclusive or advice feels fragmented. Coaching does not replace medical care; it offers a calm place to understand the stress patterns, emotions, and nervous-system load around your symptoms.",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1400&q=85",
    sections: [
      {
        title: "Areas often explored",
        items: [
          "fatigue, tension, sleep disturbance, and emotional overwhelm",
          "digestive sensitivity, hormonal stress, and cyclical depletion",
          "the impact of long-term stress on self-trust and body trust",
          "how to communicate needs to doctors, partners, and workplaces"
        ]
      },
      {
        title: "Ethical boundaries",
        items: [
          "no diagnosis, prescriptions, or promises of symptom resolution",
          "collaboration with your existing healthcare providers when appropriate",
          "focus on capacity, agency, emotional safety, and daily support",
          "clear referral if therapy or medical assessment is the better next step"
        ]
      }
    ],
    cta: "Talk with Celia"
  }
} as const;

export const faqs = [
  {
    question: "Is this therapy?",
    answer:
      "No. This is trauma-informed coaching. It can be emotionally deep and body-aware, but it does not diagnose or treat mental health conditions. If therapy or medical care is more appropriate, Celia will say so."
  },
  {
    question: "Do I need to talk about trauma?",
    answer:
      "No. Trauma-informed means the work respects safety, consent, pacing, choice, and the body's protective responses. You never have to disclose more than feels right."
  },
  {
    question: "Who is this for?",
    answer:
      "The work is especially relevant for expats, internationally mobile adults, UN and NGO professionals, diplomats, and high-functioning people who feel exhausted, overwhelmed, or disconnected from themselves."
  },
  {
    question: "Can sessions happen online?",
    answer:
      "Yes. Sessions can take place online and are designed to feel calm, structured, and private. Geneva-based in-person formats may be offered for workshops and selected sessions."
  },
  {
    question: "Which languages are available?",
    answer:
      "English is the primary website language. French and Spanish are welcome in the brand ecosystem and can be used where appropriate depending on the session or format."
  },
  {
    question: "Will this cure my symptoms?",
    answer:
      "No ethical practitioner can promise that. This work supports nervous-system capacity, stress awareness, emotional regulation, and embodied self-trust. It should sit alongside appropriate medical or therapeutic care when needed."
  }
];

export const journalIdeas = [
  "Burnout in Geneva: why high-functioning professionals often miss the early signs",
  "What nervous system regulation actually means",
  "The quiet stress of international life",
  "When your body says no before your calendar does",
  "Why rest can feel uncomfortable after chronic stress",
  "A trauma-informed approach to emotional overwhelm",
  "How relocation can affect the nervous system",
  "The cost of always being adaptable",
  "Boundaries for people who were praised for coping",
  "Coming home to your body after burnout",
  "The difference between coaching, therapy, and medical care",
  "Why diplomats and NGO workers normalize stress",
  "How to prepare for a discovery call",
  "Gentle grounding practices for busy professionals",
  "Multicultural identity and nervous-system load"
];

export const contactCards = [
  {
    icon: Mail,
    title: "Email",
    text: site.email,
    href: `mailto:${site.email}`
  },
  {
    icon: MapPin,
    title: "Location",
    text: "Geneva, Switzerland and online",
    href: "/expats-geneva"
  },
  {
    icon: MessageCircle,
    title: "Discovery call",
    text: "A calm first conversation",
    href: "/discovery-call"
  }
];

export const workshopIdeas = [
  { icon: Moon, title: "The Gentle Reset", text: "A 90-minute nervous-system workshop for professionals moving through chronic stress." },
  { icon: BriefcaseBusiness, title: "Burnout Without Shame", text: "A reflective workshop for high-functioning teams and mission-driven organisations." },
  { icon: Leaf, title: "Come Home to Your Body", text: "A small-group experience for grounding, body awareness, and emotional steadiness." },
  { icon: BookOpen, title: "The Expat Nervous System", text: "For internationally mobile adults navigating adaptation, identity, and belonging." },
  { icon: PenLine, title: "Boundaries as Nervous System Care", text: "A practical session on limits, language, recovery, and relational safety." },
  { icon: Sparkles, title: "Soft Landing", text: "A seasonal gathering for Geneva newcomers and emotionally aware expats." }
];

export const legalDisclaimers = [
  "The Healing Ground Geneva provides coaching and educational support, not medical diagnosis, psychotherapy, emergency mental health care, or medical treatment.",
  "Information on this website is general and should not replace advice from qualified healthcare or mental health professionals.",
  "If you are in crisis or feel unsafe, contact emergency services in Switzerland or your local crisis support service immediately.",
  "Client information should be handled confidentially and in alignment with applicable Swiss data protection expectations."
];
