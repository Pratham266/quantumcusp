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
