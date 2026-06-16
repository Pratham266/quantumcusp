import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { useState, useEffect } from "react";
import "./Hero.css";

const taglines = [
  "Shipped on time, every time.",
  "Engineered to scale.",
  "Powered by AI agents.",
  "Built for ambitious teams.",
  "From idea to production.",
];

export function Hero() {
  const [currentTagline, setCurrentTagline] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = taglines[currentTagline];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = isDeleting ? 500 : 2000;

    if (!isDeleting && displayedText === currentText) {
      // Pause before deleting
      const timeout = setTimeout(() => setIsDeleting(true), pauseTime);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayedText === "") {
      // Move to next tagline
      setIsDeleting(false);
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayedText((prev) =>
        isDeleting
          ? currentText.substring(0, prev.length - 1)
          : currentText.substring(0, prev.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentTagline]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100vh] flex items-center justify-center overflow-hidden"
      style={{ background: "#0f0f0f" }}
    >
      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,102,50,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,102,50,0.15) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Soft ambient glows */}
      <div className="floating-orb-1 absolute top-20 left-20 w-80 h-80 rounded-full blur-3xl" style={{ background: 'rgba(255,102,50,0.07)' }} />
      <div className="floating-orb-2 absolute bottom-10 right-20 w-96 h-96 rounded-full blur-3xl" style={{ background: 'rgba(251,172,65,0.05)' }} />
      <div className="floating-orb-3 absolute top-1/2 left-1/2 w-72 h-72 rounded-full blur-3xl" style={{ background: 'rgba(255,102,50,0.04)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-32 w-full grid lg:grid-cols-2 gap-12 items-center">
        <div className="hero-content max-w-3xl">
          <div className="hero-badge">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 text-white text-sm font-medium mb-6 backdrop-blur-sm border border-primary/30">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Your Engineering Partner for Digital Products
            </span>
          </div>

          <h1 className="hero-title text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-4">
            We Build Software That{" "}
            <span className="text-primary">Moves Your Business</span>{" "}
            Forward
          </h1>

          <div className="hero-description mb-8">
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl mb-3">
              Custom web applications, SaaS platforms, AI agents, and workflow automation — designed, built, and shipped by a team that treats your product like their own.
            </p>
            <p className="text-primary font-semibold text-lg min-h-[1.75rem]">
              {displayedText}
              <span className="animate-pulse">|</span>
            </p>
          </div>

          <div className="hero-buttons flex flex-wrap gap-4">
            <Button
              size="lg"
              onClick={() => scrollToSection("#contact")}
              className="bg-primary border-primary-border"
              data-testid="button-hero-get-started"
            >
              Start a Project
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("#services")}
              className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20"
              data-testid="button-hero-learn-more"
            >
              <Play className="w-4 h-4 mr-2" />
              Explore Services
            </Button>
          </div>
        </div>

        <div className="hero-image relative lg:block">
          <div className="hero-image-float">
            <img
              src="/images/HeroWelcome.png"
              alt="Custom software development and AI solutions - QuantumCusp India"
              className="w-full h-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
