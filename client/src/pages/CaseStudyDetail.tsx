import { Link, useParams } from "wouter";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, CheckCircle, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { testimonials } from "@/lib/data";

export default function CaseStudyDetail() {
  const params = useParams<{ slug: string }>();
  const study = testimonials.find((s) => s.slug === params.slug);

  if (!study) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <main className="pt-20">
          <div className="max-w-3xl mx-auto px-6 py-20 text-center">
            <h1 className="text-2xl font-bold mb-4">Case Study Not Found</h1>
            <p className="text-muted-foreground mb-6">
              The case study you're looking for doesn't exist.
            </p>
            <Link href="/testimonials">
              <Button variant="outline" data-testid="button-back-to-cases">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Testimonials
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const scrollToContact = () => {
    window.location.href = "/#contact";
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <article className="py-20 lg:py-28">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link href="/testimonials">
                <Button
                  variant="ghost"
                  size="sm"
                  className="mb-8"
                  data-testid="button-back-to-cases"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Testimonials
                </Button>
              </Link>

              <div className="flex flex-wrap items-center gap-2 mb-4">
                <Badge variant="secondary">{study.industry}</Badge>
                <span className="text-sm text-muted-foreground">{study.client}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-8">
                {study.title}
              </h1>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                {study.metrics.map((metric, i) => (
                  <div
                    key={i}
                    className="text-center p-6 rounded-md bg-card border border-border"
                    data-testid={`metric-${i}`}
                  >
                    <div className="text-3xl font-bold text-primary mb-2">
                      {metric.value}
                    </div>
                    <div className="text-sm text-muted-foreground">{metric.label}</div>
                  </div>
                ))}
              </div>

              <div className="space-y-12">
                <section>
                  <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {study.challenge}
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">Our Solution</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {study.solution}
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-6">Results</h2>
                  <ul className="space-y-4">
                    {study.results.map((result, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3"
                        data-testid={`result-${i}`}
                      >
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-lg">{result}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                {study.testimonial && (
                  <section>
                    <Card className="bg-primary/5 border-primary/20">
                      <CardContent className="p-8">
                        <Quote className="w-10 h-10 text-primary/40 mb-4" />
                        <blockquote className="text-xl italic leading-relaxed mb-6">
                          "{study.testimonial.quote}"
                        </blockquote>
                        <div>
                          <p className="font-semibold">{study.testimonial.author}</p>
                          <p className="text-sm text-muted-foreground">
                            {study.testimonial.role}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </section>
                )}

                <section className="pt-8 border-t border-border">
                  <div className="flex flex-wrap gap-4 items-center justify-between">
                    <Link href="/testimonials">
                      <Button variant="outline" data-testid="button-more-cases">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        More Testimonials
                      </Button>
                    </Link>
                    <Button onClick={scrollToContact} data-testid="button-start-project">
                      Start Your Project
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </section>
              </div>
            </motion.div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
