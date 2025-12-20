import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

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
      {/* Video Background */}
      {/* <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/tech.mp4" type="video/mp4" />
      </video> */}
      
      {/* Animated gradient overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-purple-600/30 to-cyan-600/30 animate-gradient" /> */}
      
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
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-20 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          x: [0, -50, 0],
          y: [0, -50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl"
      />
      
      {/* Gradient overlays for depth */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/40 to-slate-950/80" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" /> */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary-foreground text-sm font-medium mb-6 backdrop-blur-sm border border-primary/30">
              Future-Ready Technology Partner
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-6"
          >
            Smart Technology.{" "}
            <span className="text-primary">
              {displayedText}
              <span className="animate-pulse">|</span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl"
          >
            Digital solutions and AI-enabled tools designed to scale modern businesses.
            We help you operate smarter, grow faster, and prepare for the future.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("#contact")}
              className="bg-primary border-primary-border"
              data-testid="button-hero-get-started"
            >
              Get Started
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
              Learn More
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" /> */}
    </section>
  );
}
