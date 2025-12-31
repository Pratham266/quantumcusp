import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { useState, useEffect } from "react";
import "./Hero.css";

const taglines = [
  "Real Business Growth.",
  "Smarter Automation.",
  "Scalable Solutions.",
  "Future-Ready Innovation.",
  "AI-Powered Success.",
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
      className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-slate-950"
    >
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
      
      {/* Floating orbs */}
      <div className="floating-orb-1 absolute top-20 left-20 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl" />
      <div className="floating-orb-2 absolute bottom-20 right-20 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl" />
      <div className="floating-orb-3 absolute top-1/2 left-1/2 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-32 w-full grid lg:grid-cols-2 gap-12 items-center">
        <div className="hero-content max-w-3xl">
          <div className="hero-badge">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary-foreground text-sm font-medium mb-6 backdrop-blur-sm border border-primary/30">
              Ahmedabad-Based Software Development Partner
            </span>
          </div>

          <h1 className="hero-title text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
            QuantumCusp{" "}
            <span className="text-primary">Custom Software Development</span>
          </h1>

          <p className="hero-description text-lg sm:text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl">
            Build inventory management systems, AI-powered automation, and scalable SaaS products for growing SMBs. Transform your business with custom software development, WhatsApp automation, and intelligent workflows.
          </p>

          <div className="hero-buttons flex flex-wrap gap-4">
            <Button
              size="lg"
              onClick={() => scrollToSection("#contact")}
              className="bg-primary border-primary-border"
              data-testid="button-hero-get-started"
            >
             Get Free Consultation
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
              View Our Services
            </Button>
          </div>
        </div>
        
        <div className="hero-image relative lg:block">
          <div className="hero-image-float">
            <img 
              src="/images/HeroWelcome.png" 
              alt="Custom software development India for SMBs - QuantumCusp" 
              className="w-full h-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
