import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import "./About.css";

export function About() {
  const { elementRef: headerRef, isVisible: headerVisible } = useIntersectionObserver();
  const { elementRef: contentRef, isVisible: contentVisible } = useIntersectionObserver();
  const { elementRef: statsRef, isVisible: statsVisible } = useIntersectionObserver();
  const { elementRef: missionRef, isVisible: missionVisible } = useIntersectionObserver();
  const { elementRef: ceoRef, isVisible: ceoVisible } = useIntersectionObserver();

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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Building the Future, <span className="text-primary">Together</span>
          </h2>
        </div>

        

        {/* Mission Section */}
        <div
          ref={missionRef}
          className={`about-mission ${missionVisible ? "visible" : ""} mt-12 max-w-3xl mx-auto`}
        >
           <h3 className="text-2xl font-bold mb-6 text-foreground">Our Mission</h3>
           <div className="p-8 rounded-2xl bg-primary/5 border border-primary/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <p className="text-xl md:text-2xl font-medium leading-relaxed text-foreground/90 relative z-10">
                Our mission is to turn ambitious ideas into practical digital solutions that automate work, improve decision‑making, and help businesses grow with confidence in a connected world.
              </p>
           </div>
        </div>

        {/* CEO Section */}
        <div
          ref={ceoRef}
          className={`about-ceo ${ceoVisible ? "visible" : ""} mt-24`}
        >
            <div className="bg-gradient-to-br from-card to-background border border-border rounded-3xl p-8 md:p-12 shadow-sm text-left">
              <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
                  {/* Avatar / Image Placeholder */}
                  <div className="flex-shrink-0 mx-auto md:mx-0">
                      <div className="w-60 h-auto rounded-2xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center border-4 border-background shadow-lg ring-1 ring-border overflow-hidden">
                          <img 
                            src="/images/CEO.jpeg" 
                            alt="Ayushi Rao" 
                            className="w-full h-auto object-contain"
                          />
                      </div>
                      <div className="mt-4 text-center">
                          <h4 className="font-bold text-lg">Ayushi Rao</h4>
                          <p className="text-sm text-muted-foreground font-medium">Founder & CEO</p>
                      </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                      <span className="inline-block px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-xs font-semibold uppercase tracking-wider mb-4">
                          Leadership
                      </span>
                      <h3 className="text-2xl font-bold mb-4">Execution Matches Vision</h3>
                      <div className="space-y-4 text-muted-foreground leading-relaxed">
                          <p>
                              QuantumCusp, started in 2023, is led by <strong>Ayushi Rao</strong>, a founder who believes that execution matters as much as vision. With a background in building real systems for real businesses—from manufacturers and exporters to other growing companies—Ayushi started QuantumCusp to close the gap between “good ideas” and working products.
                          </p>
                          <p>
                              She works closely with every client, translating business goals into clear roadmaps and guiding projects from first discussion to final delivery, ensuring the technology always serves the people who use it.
                          </p>
                      </div>
                      
                      {/* Signature or Quote */}
                      <div className="mt-8 pt-6 border-t border-border/50">
                          <p className="text-lg italic text-foreground/80 font-serif">
                              “We don't just build software. We build the engines that drive your business forward.”
                          </p>
                      </div>
                  </div>
              </div>
            </div>
        </div>

        <div
          ref={contentRef}
          className={`about-content mt-12 ${contentVisible ? "visible" : ""} space-y-6 text-lg leading-relaxed text-muted-foreground`}
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
            { value: "10+", label: "Projects Delivered" },
            { value: "98%", label: "Client Satisfaction" },
            { value: "24/7", label: "Support Available" },
            { value: "3+", label: "Years Experience" },
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
