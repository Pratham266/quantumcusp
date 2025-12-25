import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import "./About.css";

export function About() {
  const { elementRef: headerRef, isVisible: headerVisible } = useIntersectionObserver();
  const { elementRef: contentRef, isVisible: contentVisible } = useIntersectionObserver();
  const { elementRef: statsRef, isVisible: statsVisible } = useIntersectionObserver();

  return (
    <section id="about" className="py-20 lg:py-28 bg-card">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div
          ref={headerRef}
          className={`about-header ${headerVisible ? "visible" : ""}`}
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
            About Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-8">
            Building the Future, <span className="text-primary">Together</span>
          </h2>
        </div>

        <div
          ref={contentRef}
          className={`about-content ${contentVisible ? "visible" : ""} space-y-6 text-lg leading-relaxed text-muted-foreground`}
        >
          <p data-testid="text-about-1">
            QuantumCusp is a technology company focused on helping businesses operate
            smarter, grow faster, and prepare for the future. We combine strategic
            thinking with technical excellence to deliver solutions that create real,
            measurable value.
          </p>
          <p data-testid="text-about-2">
            Our team brings together expertise across digital product development,
            cloud architecture, artificial intelligence, and business automation.
            We believe in technology that serves business goals — not technology
            for its own sake.
          </p>
          <p data-testid="text-about-3">
            Founded on the principle that every business deserves access to
            enterprise-grade technology solutions, we partner with organizations
            of all sizes to build the digital capabilities they need to thrive
            in an increasingly connected world.
          </p>
        </div>

        <div
          ref={statsRef}
          className={`about-stats ${statsVisible ? "visible" : ""} mt-12 grid grid-cols-2 md:grid-cols-4 gap-8`}
        >
          {[
            { value: "50+", label: "Projects Delivered" },
            { value: "98%", label: "Client Satisfaction" },
            { value: "24/7", label: "Support Available" },
            { value: "5+", label: "Years Experience" },
          ].map((stat, index) => (
            <div key={stat.label} data-testid={`stat-${index}`}>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
