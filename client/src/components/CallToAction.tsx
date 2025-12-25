import { Button } from "@/components/ui/button";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import "./CallToAction.css";

export const CallToAction = () => {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <div ref={elementRef} className={`cta-container ${isVisible ? 'in-view' : ''}`}>
      {/* Animated Background Shapes */}
      <div className="cta-shape shape-circle" />
      <div className="cta-shape shape-square" />
      <div className="cta-shape shape-arc" />
      <div className="cta-shape shape-triangle" />
      <div className="cta-shape shape-cross" />
      <div className="cta-shape shape-ring" />

      {/* Content */}
      <div className="cta-content">
        <h2 className="cta-heading">
         We partner with growing brands and businesses to build powerful digital solutions.
        </h2>
        <p className="cta-subheading">
           Ready to begin your next project? Reach out today and let’s get it moving.
        </p>
        <Button
              size="lg"
              onClick={() => {
                const element = document.querySelector("#contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="bg-primary border-primary-border"
              data-testid="button-cta-contact"
            >
          Contact Us
        </Button>
      </div>
    </div>
  );
};
