import { Card, CardContent } from "@/components/ui/card";
import { Code2, Globe, Bot, GitMerge, Cloud, Palette } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import "./Services.css";

const services = [
  {
    icon: Code2,
    title: "Custom Software Development",
    description:
      "Purpose-built software engineered around your exact business logic — not a template stretched to fit. From complex backends and APIs to internal tools and admin systems, we build it right the first time.",
  },
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Fast, modern web applications built with React, Next.js, and best-in-class frontend technologies. Pixel-perfect UIs, seamless performance, and clean architecture that your team can own and extend.",
  },
  {
    icon: Bot,
    title: "AI Agents & Intelligent Systems",
    description:
      "Custom AI agents that reason, plan, and act across your tools and data. From document intelligence and autonomous workflows to LLM-powered features embedded directly into your product.",
  },
  {
    icon: GitMerge,
    title: "Workflow Automation",
    description:
      "End-to-end automation that eliminates manual handoffs, reduces errors, and gives your team their time back. We map your processes, identify the bottlenecks, and build automation that actually holds.",
  },
  {
    icon: Cloud,
    title: "SaaS Product Development",
    description:
      "From MVP to multi-tenant platform — we architect, build, and launch SaaS products designed to scale. Cloud-native infrastructure, subscription systems, API design, and DevOps all under one roof.",
  },
  {
    icon: Palette,
    title: "UI/UX Design & Prototyping",
    description:
      "Design that converts. We prototype your product before a single line of code is written — so you validate the experience, not just the idea. Clean systems thinking from day one.",
  },
];

export function Services() {
  const { elementRef: headerRef, isVisible: headerVisible } = useIntersectionObserver();
  const { elementRef: gridRef, isVisible: gridVisible } = useIntersectionObserver();

  return (
    <section id="services" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={headerRef}
          className={`services-header ${headerVisible ? "visible" : ""} text-center mb-16`}
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Everything You Need to{" "}
            <span className="text-primary">Build & Ship</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Full-spectrum software engineering — from the first wireframe to production deployment. We cover every layer so you don't have to juggle multiple vendors.
          </p>
        </div>

        <div
          ref={gridRef}
          className={`services-grid ${gridVisible ? "visible" : ""} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`}
        >
          {services.map((service, index) => (
            <div key={service.title} className="service-card">
              <Card className="group relative overflow-hidden h-full bg-gradient-to-br from-primary/5 via-secondary/10 to-accent/10 hover:shadow-lg hover:-translate-y-1 hover:border-primary/40 hover:ring-1 hover:ring-primary/20 hover-elevate transition-all duration-300">
                <CardContent className="p-6 lg:p-7">
                  <div className="w-12 h-12 rounded-full bg-primary/10 ring-1 ring-primary/20 flex items-center justify-center mb-4 transition-colors group-hover:bg-primary/15 group-hover:ring-primary/40">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-lg font-semibold tracking-tight mb-1">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
