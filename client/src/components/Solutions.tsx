import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Package, Sparkles, Rocket } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import "./Solutions.css";

const solutions = [
  {
    icon: Package,
    audience: "Retail & E-commerce SMBs",
    title: "Inventory & Order Management Systems",
    description:
      "Complete inventory and order management solutions for growing businesses. Real-time stock tracking, automated reordering, multi-channel order management, and seamless integration with your existing systems.",
    outcomes: [
      "Real-time inventory tracking across locations",
      "Automated low-stock alerts and reordering",
      "Multi-channel order synchronization",
      "Supplier and vendor management",
      "Sales analytics and reporting dashboards",
    ],
    keywords: "inventory management software, order tracking system, warehouse management",
  },
  {
    icon: Sparkles,
    audience: "Growing SMBs",
    title: "AI Automation & Business Intelligence",
    description:
      "Transform your business with AI-powered automation and intelligent workflows. Automate repetitive tasks, gain data-driven insights, implement WhatsApp business automation, and streamline operations with smart AI tools.",
    outcomes: [
      "WhatsApp business automation and chatbots",
      "Automated customer communication workflows",
      "AI-powered data analytics and insights",
      "Intelligent document processing",
      "Predictive analytics for business decisions",
      "Custom AI integrations for your workflows",
    ],
    keywords: "AI automation, WhatsApp business automation, business intelligence, workflow automation",
  },
  {
    icon: Rocket,
    audience: "Product Companies & Startups",
    title: "SaaS Product Development",
    description:
      "Build scalable SaaS products from concept to launch. Cloud-native architecture, multi-tenant systems, subscription management, and modern tech stack for fast-growing product companies and startups.",
    outcomes: [
      "MVP development and rapid prototyping",
      "Scalable cloud-native architecture",
      "Multi-tenant SaaS infrastructure",
      "Subscription and billing management",
      "API development and integrations",
      "DevOps and continuous deployment",
    ],
    keywords: "SaaS development, product development, cloud software, startup MVP",
  },
];

export function Solutions() {
  const { elementRef: headerRef, isVisible: headerVisible } = useIntersectionObserver();
  const { elementRef: gridRef, isVisible: gridVisible } = useIntersectionObserver();

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="solutions" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={headerRef}
          className={`solutions-header ${headerVisible ? "visible" : ""} text-center mb-16`}
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
            Industry Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Built for{" "}
            <span className="text-primary">SMBs & Product Companies</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Custom software development for growing businesses. From inventory management and AI automation to SaaS products and business process automation for modern SMBs.
          </p>
        </div>

        <div
          ref={gridRef}
          className={`solutions-grid ${gridVisible ? "visible" : ""} grid grid-cols-1 md:grid-cols-3 gap-8`}
        >
          {solutions.map((solution, index) => (
            <div key={solution.audience} className="solution-card">
              <Card
                className="group relative overflow-hidden h-full flex flex-col bg-gradient-to-br from-card to-muted/40 border border-card-border hover:border-primary/40 hover:ring-1 hover:ring-primary/20 hover:shadow-lg hover:-translate-y-1 hover-elevate transition-all duration-300 rounded-xl"
                data-testid={`card-solution-${index}`}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 ring-1 ring-primary/20 flex items-center justify-center transition-colors group-hover:bg-primary/15 group-hover:ring-primary/40">
                      <solution.icon className="w-5 h-5 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {solution.audience}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-bold tracking-tight">
                    {solution.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {solution.description}
                  </p>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <ul className="space-y-3 mb-6 flex-1">
                    {solution.outcomes.map((outcome, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-foreground/90"
                        data-testid={`text-outcome-${index}-${i}`}
                      >
                        <ArrowRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={scrollToContact}
                    className="text-primary text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all"
                    data-testid={`link-solution-cta-${index}`}
                  >
                    Connect <ArrowRight className="w-4 h-4" />
                  </button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
