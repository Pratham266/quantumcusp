import { Check, Target, Layers, Users, Clock } from "lucide-react";
import { motion } from "framer-motion";

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
  return (
    <section id="why-us" className="py-20 lg:py-28 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
              Why QuantumCusp
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Technology That{" "}
              <span className="text-primary">Drives Results</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              We're not just technology providers — we're strategic partners committed
              to your long-term success. Our approach combines deep technical expertise
              with a genuine understanding of business challenges.
            </p>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                  data-testid={`text-benefit-${index}`}
                >
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {differentiators.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="p-6 rounded-lg bg-background border border-border"
                data-testid={`card-differentiator-${index}`}
              >
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
