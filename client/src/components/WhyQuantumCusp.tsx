import { Check, Target, Layers, Users, Clock } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import "./WhyQuantumCusp.css";

const differentiators = [
  {
    icon: Target,
    title: "Strategic Thinking",
    description: "Technology decisions aligned with your business goals",
  },
  {
    icon: Layers,
    title: "Scalable Architecture",
    description: "Solutions built to grow with your business",
  },
  {
    icon: Users,
    title: "Long-term Partnerships",
    description: "Committed partners invested in your success",
  },
  {
    icon: Clock,
    title: "Practical AI Adoption",
    description: "AI that delivers real value, not just hype",
  },
];

const benefits = [
  "Business-first approach to every solution",
  "Transparent communication and processes",
  "Proven track record with modern technologies",
  "Dedicated support and ongoing optimization",
  "Flexible engagement models",
];

export function WhyQuantumCusp() {
  const { elementRef: leftRef, isVisible: leftVisible } = useIntersectionObserver();
  const { elementRef: rightRef, isVisible: rightVisible } = useIntersectionObserver();

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div
            ref={leftRef}
            className={`why-content-left ${leftVisible ? "visible" : ""}`}
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
              Why QuantumCusp
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Technology That{" "}
              <span className="text-primary">Drives Results</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              We're not just technology providers — we're strategic partners
              committed to your long-term success. Our approach combines deep
              technical expertise with a genuine understanding of business
              challenges.
            </p>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li
                  key={benefit}
                  className="flex items-center gap-3"
                  data-testid={`text-benefit-${index}`}
                >
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            ref={rightRef}
            className={`why-content-right ${rightVisible ? "visible" : ""} grid grid-cols-1 sm:grid-cols-2 gap-6`}
          >
            {differentiators.map((item, index) => (
              <div
                key={item.title}
                className="group relative p-6 rounded-xl bg-gradient-to-br from-background to-muted/50 border border-border/60 shadow-sm hover:shadow-lg hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
                data-testid={`card-differentiator-${index}`}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 ring-1 ring-primary/20 flex items-center justify-center mb-4 transition-colors group-hover:bg-primary/15 group-hover:ring-primary/40">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold tracking-tight mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
