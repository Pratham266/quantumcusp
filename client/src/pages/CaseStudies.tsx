import { Link } from "wouter";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { caseStudies } from "@/lib/data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function CaseStudies() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <section className="py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
                Case Studies
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                Client <span className="text-primary">Success Stories</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                See how we've helped businesses across industries achieve
                measurable results through strategic technology solutions.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              {caseStudies.map((study, index) => (
                <motion.div key={study.id} variants={itemVariants}>
                  <Link href={`/case-studies/${study.slug}`}>
                    <Card
                      className="hover-elevate transition-all duration-300 cursor-pointer"
                      data-testid={`card-case-study-${index}`}
                    >
                      <CardHeader className="pb-4">
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          <Badge variant="secondary">{study.industry}</Badge>
                          <span className="text-sm text-muted-foreground">
                            {study.client}
                          </span>
                        </div>
                        <h2 className="text-2xl font-bold">{study.title}</h2>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                          {study.challenge}
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                          {study.metrics.map((metric, i) => (
                            <div
                              key={i}
                              className="text-center p-4 rounded-md bg-card border border-border"
                            >
                              <div className="text-2xl font-bold text-primary mb-1">
                                {metric.value}
                              </div>
                              <div className="text-xs text-muted-foreground">
                                {metric.label}
                              </div>
                            </div>
                          ))}
                        </div>
                        <span className="text-primary text-sm font-medium flex items-center gap-1">
                          Read Full Case Study <ArrowRight className="w-4 h-4" />
                        </span>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
