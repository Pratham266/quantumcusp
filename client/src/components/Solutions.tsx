import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Package, Sparkles, Rocket } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import "./Solutions.css";

const solutions = [
  {
    icon: Sparkles,
    audience: "Startups & Founders",
    title: "Go From Idea to Launched Product",
    description:
      "You have a vision. We have the team to make it real. Whether it's your first MVP or a full SaaS platform, we move fast without cutting corners — so you can validate, iterate, and grow.",
    outcomes: [
      "MVP in weeks, not months",
      "Scalable architecture from day one",
      "UI/UX design included",
      "API-first, integration-ready builds",
      "Ongoing dev support post-launch",
      "Clear milestones, no surprises",
    ],
  },
  {
    icon: Package,
    audience: "Growing Businesses",
    title: "Replace Spreadsheets With Real Systems",
    description:
      "Your business has grown past what manual processes and off-the-shelf tools can handle. We build custom software that fits your actual workflows — not the other way around.",
    outcomes: [
      "Custom web applications & portals",
      "Workflow automation & process digitisation",
      "AI agents embedded into your operations",
      "Third-party integrations & data pipelines",
      "Internal tools your team will actually use",
      "Ongoing maintenance & feature delivery",
    ],
  },
  {
    icon: Rocket,
    audience: "Product & Tech Teams",
    title: "Extend Your Engineering Capacity",
    description:
      "When your in-house team needs more hands or specialised skills, we integrate as a natural extension — matching your stack, your standards, and your shipping velocity.",
    outcomes: [
      "Dedicated developers, designers & architects",
      "Full-stack & AI engineering expertise",
      "Seamless integration with your existing team",
      "Code reviews, pair programming & documentation",
      "DevOps, CI/CD & cloud infrastructure",
      "Flexible engagement — sprint by sprint or long-term",
    ],
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
            Who We Work With
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Built for Where{" "}
            <span className="text-primary">You Are Right Now</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Whether you're launching your first product, scaling past manual processes, or extending an existing team — we have a model that fits.
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
