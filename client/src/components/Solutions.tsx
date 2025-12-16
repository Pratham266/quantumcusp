import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Rocket, TrendingUp, Building2 } from "lucide-react";
import { motion } from "framer-motion";

const solutions = [
  {
    icon: Rocket,
    audience: "Startups",
    title: "Launch & Scale Fast",
    description:
      "Get to market quickly with robust, scalable technology that grows with your vision.",
    outcomes: [
      "MVP development in weeks, not months",
      "Scalable architecture from day one",
      "Cost-effective cloud infrastructure",
      "Technical advisory and guidance",
    ],
  },
  {
    icon: TrendingUp,
    audience: "Growing Businesses",
    title: "Accelerate Growth",
    description:
      "Optimize operations and unlock new opportunities with smart technology investments.",
    outcomes: [
      "Process automation and efficiency",
      "Data-driven decision making",
      "Integration of existing systems",
      "Custom tools for your workflow",
    ],
  },
  {
    icon: Building2,
    audience: "Enterprises",
    title: "Transform & Innovate",
    description:
      "Modernize legacy systems and implement enterprise-grade solutions that drive competitive advantage.",
    outcomes: [
      "Digital transformation strategy",
      "Legacy system modernization",
      "Enterprise AI integration",
      "Security and compliance focus",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function Solutions() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="solutions" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
            Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Tailored for Your Stage
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Whether you're launching a startup, scaling a growing business, or
            transforming an enterprise — we have the expertise to help.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {solutions.map((solution, index) => (
            <motion.div key={solution.audience} variants={itemVariants}>
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
                    Learn More <ArrowRight className="w-4 h-4" />
                  </button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
