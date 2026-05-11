import { cn } from "@/lib/utils";

export function PullQuote({
  children,
  attribution,
  className
}: {
  children: React.ReactNode;
  attribution?: string;
  className?: string;
}) {
  return (
    <figure className={cn("mx-auto max-w-editorial text-center", className)}>
      <blockquote className="pull-quote text-balance">
        <span aria-hidden="true" className="mr-2 text-olive">
          “
        </span>
        {children}
        <span aria-hidden="true" className="ml-2 text-olive">
          ”
        </span>
      </blockquote>
      {attribution ? (
        <figcaption className="eyebrow mt-6 text-ink-muted">{attribution}</figcaption>
      ) : null}
    </figure>
  );
}
