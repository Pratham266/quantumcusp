import type { ReactNode } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Info, ArrowRight } from "lucide-react";

export interface PricingPlan {
  icon: ReactNode;
  name: string;
  price: string;
  pricePeriod?: string;
  priceNote?: string;
  tagline: string;
  features: string[];
  notes?: string[];
  ctaLabel: string;
  /** When set (and starting with "/"), the CTA renders as an internal link. */
  ctaHref?: string;
  featured?: boolean;
  badgeLabel?: string;
}

interface PricingCardProps {
  plan: PricingPlan;
  onCtaClick?: () => void;
}

/**
 * Reusable pricing card used on the Website & Software Solutions page.
 * Content is driven entirely by the `plan` prop so pricing and feature
 * copy can be updated from a single data array.
 */
export function PricingCard({ plan, onCtaClick }: PricingCardProps) {
  const cta = (
    <Button
      size="lg"
      onClick={plan.ctaHref ? undefined : onCtaClick}
      className={`w-full font-semibold group/cta ${
        plan.featured ? "" : "bg-primary border-primary-border"
      }`}
      data-testid={`button-plan-${plan.name.toLowerCase().replace(/\s+/g, "-")}`}
    >
      {plan.ctaLabel}
      <ArrowRight className="w-4 h-4 ml-2 group-hover/cta:translate-x-1 transition-transform" />
    </Button>
  );

  return (
    <Card
      className={`relative flex flex-col h-full rounded-2xl transition-all duration-300 hover:-translate-y-1 ${
        plan.featured
          ? "border-primary ring-2 ring-primary/30 shadow-xl shadow-primary/10 lg:scale-[1.03] bg-card"
          : "border-border hover:border-primary/40 hover:shadow-lg bg-background"
      }`}
    >
      {plan.badgeLabel && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-wider shadow-md shadow-primary/30">
            {plan.badgeLabel}
          </span>
        </div>
      )}

      <CardContent className="flex flex-col h-full p-8">
        <div className="mb-6">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 ring-1 ring-primary/20 text-primary mb-5">
            {plan.icon}
          </div>
          <h3 className="text-xl font-bold tracking-tight mb-2">{plan.name}</h3>
          <div className="flex items-baseline gap-1 mb-3">
            <span className="text-4xl font-bold font-serif tracking-tight">
              {plan.price}
            </span>
            {plan.pricePeriod && (
              <span className="text-muted-foreground font-medium">
                {plan.pricePeriod}
              </span>
            )}
          </div>
          <p className="text-muted-foreground leading-relaxed">{plan.tagline}</p>
        </div>

        <div className="h-px bg-border mb-6" />

        <ul className="space-y-3 mb-6">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <span className="mt-0.5 flex items-center justify-center w-5 h-5 rounded-full bg-primary/10 shrink-0">
                <Check className="w-3.5 h-3.5 text-primary" strokeWidth={3} />
              </span>
              <span className="text-sm leading-relaxed text-foreground/90">
                {feature}
              </span>
            </li>
          ))}
        </ul>

        {plan.notes && plan.notes.length > 0 && (
          <div className="rounded-xl bg-muted/50 border border-border p-4 mb-6">
            <div className="flex items-center gap-2 mb-2 text-foreground/80">
              <Info className="w-4 h-4 text-primary shrink-0" />
              <span className="text-xs font-semibold uppercase tracking-wider">
                Good to know
              </span>
            </div>
            <ul className="space-y-1.5">
              {plan.notes.map((note) => (
                <li
                  key={note}
                  className="text-xs text-muted-foreground leading-relaxed pl-6 relative before:content-['•'] before:absolute before:left-2 before:text-primary"
                >
                  {note}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-auto pt-2">
          {plan.ctaHref ? <Link href={plan.ctaHref}>{cta}</Link> : cta}
        </div>
      </CardContent>
    </Card>
  );
}
