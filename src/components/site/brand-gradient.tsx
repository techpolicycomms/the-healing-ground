import { cn } from "@/lib/utils";

type Tone = "cream" | "paper" | "sand" | "beige" | "sage" | "rose-dust";

const toneMap: Record<Tone, string> = {
  cream: "from-cream via-paper to-sand",
  paper: "from-paper via-sand to-beige",
  sand: "from-sand via-beige to-paper",
  beige: "from-beige via-sand to-paper",
  sage: "from-sage/30 via-paper to-cream",
  "rose-dust": "from-rose-dust via-paper to-cream"
};

const NOISE_BG =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.16  0 0 0 0 0.15  0 0 0 0 0.14  0 0 0 0.5 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")";

export function BrandGradient({
  tone = "cream",
  className,
  caption,
  rounded = false,
}: {
  tone?: Tone;
  className?: string;
  caption?: string;
  rounded?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden",
        rounded && "rounded-[12px]",
        className,
      )}
      aria-hidden="true"
    >
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-br",
          toneMap[tone],
        )}
      />
      <div
        className="absolute inset-0 mix-blend-multiply opacity-25"
        style={{ backgroundImage: NOISE_BG }}
      />
      {caption ? (
        <span className="eyebrow absolute bottom-4 left-4 text-ink-soft">
          {caption}
        </span>
      ) : null}
    </div>
  );
}
