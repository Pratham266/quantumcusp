import { Card, CardContent } from "@/components/ui/card";
import { Package, MessageSquare, LayoutDashboard, Cloud, TrendingUp, Shield } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import "./Services.css";

const services = [
  {
    icon: Package,
    title: "Scalable AI Solutions",
    description:
      "Transform your business with Generative Intelligence and custom AI solutions. Automate workflows, enhance decision-making, and build intelligent systems that scale with your growth. Expert software development for the future.",
    keywords: "AI solutions, generative intelligence, custom software, digital engineering",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Automation for SMBs",
    description:
      "Streamline customer communication with powerful WhatsApp Business automation. Automated order updates, intelligent chatbots, and seamless CRM integration. Drive sales and improve engagement.",
    keywords: "WhatsApp automation, business automation, CRM integration, digital solutions",
  },
  {
    icon: LayoutDashboard,
    title: "Custom Engineering Team",
    description:
      "Dedicated custom engineering teams for your specialized projects. From complex admin portals to bespoke business applications, we deliver robust, scalable software tailored to your specific needs.",
    keywords: "custom engineering, software development team, bespoke applications, scalable SaaS",
  },
  {
    icon: Cloud,
    title: "Scalable SaaS Development",
    description:
      "Build market-ready SaaS products with our end-to-end software development services. Cloud-native architecture, secure infrastructure, and rapid deployment for your digital product ideas.",
    keywords: "scalable SaaS, cloud solutions, product development, software engineering",
  },
  {
    icon: TrendingUp,
    title: "Business Process Automation",
    description:
      "Optimize your operations with custom automation tools. Reduce manual effort and increase efficiency with tailored software solutions designed for your unique business processes.",
    keywords: "business solutions, process automation, operational efficiency, custom tools",
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description:
      "Secure software solutions that protect your data and business. Compliance-ready architecture, regular security audits, and robust data protection for peace of mind.",
    keywords: "secure software, enterprise security, data protection, digital safety",
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
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Global Software Solutions{" "}
            <span className="text-primary">for Digital Business</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            From custom software development to AI automation, we deliver scalable digital engineering solutions for SMBs and enterprises worldwide.
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
