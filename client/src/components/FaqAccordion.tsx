import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  faqs: FaqItem[];
  /** Emit FAQPage structured data for SEO. Defaults to true. */
  includeSchema?: boolean;
}

/**
 * Reusable, data-driven FAQ accordion. Pass a list of questions/answers and
 * it renders the branded accordion plus (optionally) FAQPage JSON-LD.
 */
export function FaqAccordion({ faqs, includeSchema = true }: FaqAccordionProps) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      {includeSchema && (
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      )}

      <Accordion type="single" collapsible className="w-full space-y-4">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={faq.question}
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
    </>
  );
}
