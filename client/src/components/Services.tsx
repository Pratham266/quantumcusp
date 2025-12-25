import { Card, CardContent } from "@/components/ui/card";
import { Monitor, Cpu, Zap, Cloud, TrendingUp, Shield } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import "./Services.css";

const services = [
  {
    icon: Monitor,
    title: "Digital Product Development",
    description:
      "Build exceptional digital products from concept to launch. Web applications, mobile apps, and enterprise platforms designed for scale.",
  },
  {
    icon: Cpu,
    title: "AI-Enabled Tools",
    description:
      "Integrate artificial intelligence where it creates real value. Smart automation, data insights, and intelligent workflows.",
  },
  {
    icon: Zap,
    title: "Business Automation",
    description:
      "Streamline operations with custom automation solutions. Reduce manual work and increase efficiency across your organization.",
  },
  {
    icon: Cloud,
    title: "SaaS & Platform Solutions",
    description:
      "Launch scalable software-as-a-service products. Cloud-native architecture built for growth and reliability.",
  },
  {
    icon: TrendingUp,
    title: "Growth & Optimization",
    description:
      "Data-driven strategies to accelerate your business growth. Performance optimization and conversion improvement.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Protect your business with robust security measures. Compliance-ready solutions for modern enterprises.",
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
            Services Built for Growth
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            We provide comprehensive technology solutions that help businesses
            innovate, automate, and scale with confidence.
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
                  <h3 className="text-lg font-semibold tracking-tight mb-1">
                    {service.title}
                  </h3>
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
