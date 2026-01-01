import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const faqs = [
  {
    question: "What is custom software development?",
    answer: "Custom software development refers to creating tailored software solutions specifically designed for your business needs. Unlike off-the-shelf software, custom software is built from scratch to match your unique workflows, processes, and requirements. At QuantumCusp, we specialize in building inventory management systems, AI automation, WhatsApp business automation, and SaaS products for growing SMBs globally.",
  },
  {
    question: "How much does inventory management software cost in India?",
    answer: "The cost of inventory management software in India varies based on features, complexity, and scale. Basic inventory systems start from ₹50,000, while advanced solutions with multi-location support, barcode scanning, and real-time tracking range from ₹1-5 lakhs. We offer affordable custom inventory management software tailored to Indian SMBs with flexible pricing and payment plans.",
  },
  {
    question: "Can you build WhatsApp business automation for small businesses?",
    answer: "Yes! We specialize in WhatsApp business automation for SMBs in and across India. Our solutions include automated order confirmations, payment reminders, customer support chatbots, broadcast messaging, and WhatsApp CRM integration. This helps small businesses streamline customer communication, reduce manual work, and boost sales through automated WhatsApp messaging.",
  },
  {
    question: "Can you build AI automation and intelligent workflows?",
    answer: "Yes! We specialize in AI-powered automation for SMBs. Our solutions include WhatsApp business automation, intelligent chatbots, automated document processing, predictive analytics, and custom AI integrations. We help businesses automate repetitive tasks, gain data-driven insights, and implement smart workflows that save time and reduce operational costs.",
  },
  {
    question: "What is the timeline for custom software development?",
    answer: "Project timelines depend on complexity and scope. Simple automation tools or MVPs take 4-8 weeks, while comprehensive inventory systems or SaaS products take 8-16 weeks. We follow an agile development process with regular updates and demos. Contact us for a free consultation to get an accurate timeline for your custom software development project.",
  },
  {
    question: "Do you build SaaS products and MVPs for startups?",
    answer: "Absolutely! We specialize in SaaS product development for startups and product companies. Our services include MVP development, cloud-native architecture, multi-tenant systems, subscription management, API development, and DevOps setup. We help startups launch scalable products quickly with modern tech stacks and best practices for fast-growing businesses.",
  },
];

export function FAQ() {
  const { elementRef: headerRef, isVisible: headerVisible } = useIntersectionObserver();
  const { elementRef: contentRef, isVisible: contentVisible } = useIntersectionObserver();

  // FAQ Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-muted/30">
      {/* FAQ Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>

      <div className="max-w-4xl mx-auto px-6">
        <div
          ref={headerRef}
          className={`faq-header ${headerVisible ? "visible" : ""} text-center mb-12`}
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Common questions about custom software development, pricing, and our services.
          </p>
        </div>

        <div
          ref={contentRef}
          className={`faq-content ${contentVisible ? "visible" : ""}`}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 shadow-sm"
                data-testid={`faq-item-${index}`}
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
