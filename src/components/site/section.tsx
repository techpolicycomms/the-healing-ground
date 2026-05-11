import { cn } from "@/lib/utils";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  tone?: "ivory" | "mist" | "ink";
};

export function Section({ children, className, id, tone = "ivory" }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "px-5 py-20 sm:px-8 lg:py-28",
        tone === "ivory" && "bg-ivory text-ink",
        tone === "mist" && "bg-mist text-ink",
        tone === "ink" && "bg-ink text-ivory",
        className
      )}
    >
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

export function Eyebrow({
  children,
  light = false,
  className
}: {
  children: React.ReactNode;
  light?: boolean;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "text-sm font-bold uppercase tracking-[0.24em]",
        light ? "text-sage" : "text-clay",
        className
      )}
    >
      {children}
    </p>
  );
}
