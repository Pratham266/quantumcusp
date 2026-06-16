import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const faqs = [
  {
    question: "What kinds of software does QuantumCusp build?",
    answer: "We build custom web applications, SaaS platforms, AI agents and intelligent systems, workflow automation tools, and UI/UX-led product experiences. Our work spans greenfield products for founders, internal tools for growing teams, and AI-native features for existing products. If it involves writing code and shipping software, we can help.",
  },
  {
    question: "How is QuantumCusp different from a typical dev agency?",
    answer: "Most agencies take a spec and build it. We push back when something won't work, suggest a better technical approach when one exists, and stay engaged until the software is doing what it needs to do for your business. Every project starts with an architecture review and a clear milestone plan — before any code is written. You get weekly demos, documented code, and a team that communicates like a colleague, not a contractor.",
  },
  {
    question: "What does working with AI agents actually mean?",
    answer: "AI agents are software systems that can reason, plan, and take multi-step actions autonomously — connecting to your tools, reading data, making decisions, and executing tasks without constant human input. We build custom agents for use cases like document processing, intelligent routing, automated research, and workflow orchestration — integrated directly into your product or internal systems using frameworks like LangChain, OpenAI, and Anthropic's API.",
  },
  {
    question: "How long does a typical project take?",
    answer: "A focused MVP or internal tool typically ships in 4–8 weeks. A full SaaS product or AI-integrated platform is 8–16 weeks depending on scope. We work in short sprints with weekly demos, so you see real progress throughout — not just at the end. We'll give you a timeline estimate in our first conversation, and we stick to it.",
  },
  {
    question: "Can you work with our existing engineering team?",
    answer: "Yes — this is one of the most common ways we engage. We integrate as an extension of your existing team, matching your stack, your code style, and your shipping cadence. We can take ownership of a specific product area, work on a new feature, or help you move faster on a project that's been stuck. We're used to jumping into existing codebases and contributing from day one.",
  },
  {
    question: "How do you handle pricing?",
    answer: "We work on both fixed-scope projects and ongoing retainers. For well-defined projects, we give a fixed quote after a scoping call. For longer-term product development or team extension, we offer monthly retainers with a defined team and delivery structure. We don't do vague T&M billing — every engagement has clear deliverables and expectations. Book a free consultation to get a no-obligation estimate for your project.",
  },
  {
    question: "Do you build SaaS products from scratch?",
    answer: "Yes — end to end. That means product architecture, UI/UX design, frontend, backend, API development, database design, cloud infrastructure, and DevOps. We handle multi-tenancy, subscription and billing integration, authentication, and everything else that comes with launching a production SaaS. We've helped founders go from idea to live product, and we know where the hidden complexity lives before it surprises you.",
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
            Questions We Get Asked
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Straight answers about how we work, what we build, and what it's like to partner with us.
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
