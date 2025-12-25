import { Link } from "wouter";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { testimonials } from "@/lib/data";
import { LiaQuoteRightSolid } from "react-icons/lia";
import "./Testimonials.css";

export default function Testimonials() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <section className="py-20 lg:py-28 relative overflow-hidden">
             {/* Background decoration */}
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl opacity-50 pointer-events-none">
                <div className="absolute top-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
             </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="testimonials-header text-center mb-20">
              <Badge variant="outline" className="mb-4 text-primary border-primary/20 bg-primary/5 px-4 py-1 text-xs uppercase tracking-wider font-semibold">
                Client Success Stories
              </Badge>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-foreground">
                Transforming Businesses with <br />
                <span className="text-primary">Measurable Results</span>
              </h1>
              
              <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-12">
                See how we've helped businesses across industries achieve extraordinary
                outcomes through innovative technology solutions.
              </p>

              {/* Stats Section */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto border-t border-border pt-12">
                <div className="text-center">
                   <div className="text-3xl font-bold text-primary mb-2">500+</div>
                   <div className="text-sm text-muted-foreground font-medium">Projects Delivered</div>
                </div>
                <div className="text-center md:border-l md:border-r border-border/50">
                   <div className="text-3xl font-bold text-primary mb-2">98%</div>
                   <div className="text-sm text-muted-foreground font-medium">Client Satisfaction</div>
                </div>
                <div className="text-center">
                   <div className="text-3xl font-bold text-primary mb-2">12+</div>
                   <div className="text-sm text-muted-foreground font-medium">Years Experience</div>
                </div>
              </div>
            </div>

            <div className="testimonials-list space-y-8">
              {testimonials.map((study, index) => (
                <div key={study.id} className="testimonial-card-wrapper">
                  <Link href={`/testimonials/${study.slug}`}>
                    <Card
                      className="group relative border border-border/40 shadow-sm hover:shadow-xl hover:border-orange-500 transition-all duration-300 cursor-pointer bg-card overflow-hidden"
                      data-testid={`card-case-study-${index}`}
                    >
                      {/* Decorative corner blob */}
                      <div className="absolute -top-24 -right-24 w-64 h-64 bg-orange-100/30 rounded-full blur-3xl group-hover:bg-orange-100/50 transition-colors duration-500" />

                      <CardContent className="p-8 sm:p-10 relative z-10">
                        {/* Header Row */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                            <div className="flex flex-wrap items-center gap-4">
                                <Badge variant="secondary" className="bg-orange-50 text-orange-600 hover:bg-orange-100 border-none px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide">
                                    {study.industry}
                                </Badge>
                                <span className="text-sm font-medium text-muted-foreground">
                                    {study.client}
                                </span>
                            </div>
                            <div className="flex items-center gap-1">
                                {[...Array(study.rating || 5)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 text-orange-400 fill-orange-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round">
                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                    </svg>
                                ))}
                            </div>
                        </div>

                        {/* Title */}
                        <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">{study.title}</h2>
                        <p className="text-muted-foreground leading-relaxed mb-10 text-base max-w-4xl">
                          {study.challenge}
                        </p>

                        {/* Metrics Grid */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                          {study.metrics.map((metric, i) => (
                            <div
                              key={i}
                              className="text-center p-6 rounded-2xl bg-background border border-border/60 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)]"
                            >
                              <div className="text-xl sm:text-2xl font-bold text-orange-500 mb-2">
                                {metric.value}
                              </div>
                              <div className="text-xs font-medium text-muted-foreground">
                                {metric.label}
                              </div>
                            </div>
                          ))}
                        </div>
                        
                        {/* Quote Section */}
                        {study.testimonial && (
                            <div className="relative bg-gradient-to-br from-[#FFF8F3] to-[#FFF5F0] dark:from-orange-950/10 dark:to-orange-900/10 rounded-2xl p-8 mb-10 flex gap-6 overflow-hidden">
                                {/* Accent Bar */}
                                <div className="hidden sm:block shrink-0 w-1.5 bg-orange-500 rounded-full h-auto self-stretch my-1" />
                                <div className="block sm:hidden absolute left-0 top-0 bottom-0 w-1.5 bg-orange-500" />
                                
                                <div className="flex-1 relative z-10 pl-2 sm:pl-0">
                                     <p className="text-lg italic text-slate-700 dark:text-slate-300 mb-8 font-medium leading-relaxed tracking-wide">
                                        {study.testimonial.quote}
                                     </p>
                                     <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-orange-500/20 ring-4 ring-orange-100 dark:ring-orange-900/20">
                                            {study.testimonial.author.charAt(0)}
                                        </div>
                                        <div>
                                            <div className="font-bold text-base text-foreground">{study.testimonial.author}</div>
                                            <div className="text-sm text-muted-foreground">{study.testimonial.role}</div>
                                        </div>
                                     </div>
                                </div>
                                
                                <LiaQuoteRightSolid className="absolute top-10 right-8 w-20 h-20 text-orange-200/50" />
                            </div>
                        )}

                        <span className="inline-flex items-center text-orange-500 font-semibold text-sm hover:translate-x-1 transition-transform cursor-pointer group-hover:text-orange-600">
                          Read Full Case Study <ArrowRight className="w-4 h-4 ml-2" />
                        </span>
                      </CardContent>
                    </Card>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

