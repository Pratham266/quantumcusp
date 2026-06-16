import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Search, PenTool, Code2, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Discovery",
    description:
      "We start with a free consultation to understand your business goals, workflows, and pain points. No templates — every solution starts from your specific needs.",
  },
  {
    icon: PenTool,
    number: "02",
    title: "Architecture & Design",
    description:
      "We map out the full solution — system architecture, data flows, and UI wireframes — before writing a single line of code. You approve the plan first.",
  },
  {
    icon: Code2,
    number: "03",
    title: "Agile Build",
    description:
      "We build in short sprints with weekly demos so you see progress throughout. Full transparency on what's done, what's next, and why.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Launch & Support",
    description:
      "We handle deployment, testing, and go-live. Post-launch, we stay engaged for optimisation, new features, and ongoing support.",
  },
];

export function HowWeWork() {
  const { elementRef: headerRef, isVisible: headerVisible } = useIntersectionObserver();
  const { elementRef: stepsRef, isVisible: stepsVisible } = useIntersectionObserver();

  return (
    <section id="how-we-work" className="py-20 lg:py-28 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
            Our Process
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            From First Call to{" "}
            <span className="text-primary">Production — Clearly</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            No black boxes. Here's exactly how we work — from the first conversation to the moment your software is live and doing what it's supposed to do.
          </p>
        </div>

        <div
          ref={stepsRef}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-700 ${
            stepsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {steps.map((step, index) => (
            <div key={step.number} className="relative group">
              {/* Connector line between steps */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(100%-16px)] w-8 h-[2px] bg-primary/20 z-10" />
              )}

              <div className="p-6 rounded-2xl border border-border bg-background hover:border-primary/40 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 ring-1 ring-primary/20 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-3xl font-bold text-primary/20 font-serif">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-2 tracking-tight">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
