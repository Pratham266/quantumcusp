import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { testimonials } from "@/lib/data";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 text-primary fill-primary"
          viewBox="0 0 24 24"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

export function TestimonialsStrip() {
  const { elementRef: headerRef, isVisible: headerVisible } = useIntersectionObserver();
  const { elementRef: cardsRef, isVisible: cardsVisible } = useIntersectionObserver();

  return (
    <section id="testimonials-strip" className="py-20 lg:py-28 bg-gradient-to-b from-background to-primary/5">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={headerRef}
          className={`text-center mb-14 transition-all duration-700 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
            Client Success Stories
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            What Clients Say After{" "}
            <span className="text-primary">We Ship</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Real words from real clients — what it's like to work with us and what changed for their business.
          </p>
        </div>

        <div
          ref={cardsRef}
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 transition-all duration-700 ${
            cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {testimonials.map((study) => (
            <Link key={study.id} href={`/testimonials/${study.slug}`}>
              <div className="group h-full bg-card border border-border rounded-2xl p-6 hover:border-primary/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <StarRating count={study.rating || 5} />
                  <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded-full">
                    {study.industry}
                  </span>
                </div>

                <blockquote className="text-sm text-foreground/80 leading-relaxed italic flex-1 mb-5">
                  "{study.testimonial?.quote.length && study.testimonial.quote.length > 200
                    ? study.testimonial.quote.substring(0, 200) + "…"
                    : study.testimonial?.quote}"
                </blockquote>

                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {study.testimonial?.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{study.testimonial?.author}</div>
                    <div className="text-xs text-muted-foreground">{study.testimonial?.role}</div>
                  </div>
                </div>

                <div className="mt-4 text-primary text-xs font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read full case study <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link href="/testimonials">
            <span className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all cursor-pointer">
              View all case studies <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
