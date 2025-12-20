import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import "./CallToAction.css";

export const CallToAction = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress relative to the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Define transformations based on scroll progress
  // Adjust output ranges to control speed and direction of movement

  // Circle: moves up
  const circleY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  
  // Square: moves down and rotates
  const squareY = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const squareRotate = useTransform(scrollYProgress, [0, 1], [15, 45]);

  // Arc: rotates
  const arcRotate = useTransform(scrollYProgress, [0, 1], [-45, 45]);
  const arcY = useTransform(scrollYProgress, [0, 1], [0, -30]);

  return (
    <div ref={containerRef} className="cta-container">
      {/* Animated Background Shapes */}
      <motion.div
        className="cta-shape shape-circle"
        style={{ y: circleY }}
      />
      <motion.div
        className="cta-shape shape-square"
        style={{ y: squareY, rotate: squareRotate }}
      />
      <motion.div
        className="cta-shape shape-arc"
        style={{ rotate: arcRotate, y: arcY }}
      />

      {/* Content */}
      <div className="cta-content">
        <h2 className="cta-heading">
          We've helped brands of all kinds and businesses of every size grow their
          online revenue
        </h2>
        <p className="cta-subheading">
          Are you ready to start your project? Contact us today and get started!
        </p>
        <Button
              size="lg"
              onClick={() => {
                //todo
              }}
              className="bg-primary border-primary-border"
              data-testid="button-hero-get-started"
            >
          Contact Us
        </Button>
      </div>
    </div>
  );
};
