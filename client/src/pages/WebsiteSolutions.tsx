import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Contact } from "@/components/Contact";
import { Button } from "@/components/ui/button";
import { PricingCard, type PricingPlan } from "@/components/PricingCard";
import { FaqAccordion, type FaqItem } from "@/components/FaqAccordion";
import { useEffect } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import {
  Globe,
  LayoutTemplate,
  Boxes,
  Cpu,
  Target,
  Search,
  Gauge,
  LifeBuoy,
  BadgeCheck,
  MessageSquareText,
  SlidersHorizontal,
  Rocket,
  ArrowRight,
  Code2,
  Server,
  ScanSearch,
  Bot,
  MapPin,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Content — edit these arrays to update pricing & service copy.      */
/* ------------------------------------------------------------------ */

const plans: PricingPlan[] = [
  {
    icon: <Globe className="w-7 h-7" />,
    name: "Website Subscription",
    price: "₹499",
    pricePeriod: "/month",
    tagline: "Your Business Deserves a Professional Online Presence.",
    featured: true,
    badgeLabel: "Most Popular",
    ctaLabel: "Get Started",
    features: [
      "Professional business website",
      "Up to 5 website pages",
      "Mobile-responsive design",
      "Domain and hosting management",
      "SSL certificate",
      "Contact form and WhatsApp integration",
      "Basic technical SEO",
      "GEO optimization foundation",
      "Website maintenance",
      "Monthly performance report",
    ],
    notes: [
      "One-time website setup fee applies.",
      "Domain registration and renewal charges are separate.",
      "Hosting and maintenance are available during an active subscription.",
      "Suspension and reactivation are governed by the subscription policy.",
    ],
  },
  {
    icon: <LayoutTemplate className="w-7 h-7" />,
    name: "One-Time Website Development",
    price: "Custom Quote",
    tagline: "Own Your Website. Build Without Limits.",
    ctaLabel: "Get a Free Quote",
    ctaHref: "/estimator",
    features: [
      "Custom website design",
      "Responsive frontend development",
      "Business and corporate websites",
      "Landing pages and portfolio websites",
      "SEO-friendly development",
      "Contact forms and integrations",
      "Performance optimization",
      "Deployment and launch support",
      "Optional ongoing maintenance",
    ],
    notes: [
      "Ideal for businesses that prefer a one-time investment over a monthly subscription.",
    ],
  },
  {
    icon: <Boxes className="w-7 h-7" />,
    name: "Custom Software Development",
    price: "Let's Talk",
    tagline: "Turn Your Business Ideas Into Powerful Software.",
    ctaLabel: "Discuss Your Project",
    features: [
      "Custom web application development",
      "SaaS product development",
      "Business process automation",
      "Admin dashboards and management systems",
      "API development and integrations",
      "CRM and ERP solutions",
      "Third-party integrations",
      "Scalable architecture",
      "Ongoing technical support",
    ],
    notes: [
      "Built for tailored software solutions and complex digital products.",
    ],
  },
];

const whyChoose = [
  {
    icon: Cpu,
    title: "Modern Technology",
    description: "Reliable and scalable development built on a current, future-ready stack.",
  },
  {
    icon: Target,
    title: "Business-Focused",
    description: "Solutions designed around your actual business requirements — not templates.",
  },
  {
    icon: Search,
    title: "SEO & GEO Ready",
    description: "A foundation built for both search engine and AI search visibility.",
  },
  {
    icon: Gauge,
    title: "Performance",
    description: "Fast, responsive, and optimized websites that keep visitors engaged.",
  },
  {
    icon: LifeBuoy,
    title: "Ongoing Support",
    description: "Continuous technical assistance and maintenance whenever you need it.",
  },
  {
    icon: BadgeCheck,
    title: "Transparent Pricing",
    description: "Clear pricing and a well-defined project scope — no surprises.",
  },
];

const howItWorks = [
  {
    icon: MessageSquareText,
    number: "01",
    title: "Share Your Requirements",
    description: "Tell us about your business, goals, and what you want to build. We listen first.",
  },
  {
    icon: SlidersHorizontal,
    number: "02",
    title: "Choose Your Solution",
    description: "Pick the subscription, one-time build, or custom software path that fits you best.",
  },
  {
    icon: Code2,
    number: "03",
    title: "We Design and Develop",
    description: "Our team designs, builds, and refines your solution with regular check-ins.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Launch and Grow",
    description: "We deploy, test, and go live — then support you as your business scales.",
  },
];

const seoCapabilities = [
  { icon: ScanSearch, label: "Technical SEO" },
  { icon: Code2, label: "Search engine-friendly architecture" },
  { icon: Server, label: "Structured data & schema markup" },
  { icon: MapPin, label: "Local SEO foundations" },
  { icon: Bot, label: "AI search optimization (GEO)" },
  { icon: Gauge, label: "Performance & indexing improvements" },
];

const faqs: FaqItem[] = [
  {
    question: "What is included in the ₹499/month website subscription?",
    answer:
      "The subscription includes a professional business website of up to 5 pages with a mobile-responsive design, domain and hosting management, an SSL certificate, contact form and WhatsApp integration, basic technical SEO, a GEO optimization foundation, ongoing website maintenance, and a monthly performance report. A one-time setup fee applies, and domain registration/renewal charges are separate.",
  },
  {
    question: "Is there a one-time setup fee?",
    answer:
      "Yes. The ₹499/month subscription covers hosting, maintenance, and ongoing management, while a one-time website setup fee covers the initial design and development of your website. We'll share the exact setup fee based on your requirements before any work begins.",
  },
  {
    question: "Is the domain included in the subscription?",
    answer:
      "Domain and hosting management are included as a service, but domain registration and renewal charges are billed separately. We're happy to manage the domain on your behalf so everything stays in one place.",
  },
  {
    question: "What happens if I cancel my subscription?",
    answer:
      "Hosting and maintenance are available during an active subscription. If you cancel, your website hosting and ongoing maintenance pause in line with our subscription policy. Suspension and reactivation are governed by that policy, and our team will walk you through your options.",
  },
  {
    question: "Can I reactivate my website later?",
    answer:
      "Yes. A suspended website can be reactivated later, subject to the subscription policy and any applicable reactivation terms. Just reach out and we'll get you back online.",
  },
  {
    question: "Can I request website modifications?",
    answer:
      "Absolutely. You can request content updates and modifications to your website. The scope of included changes depends on your plan, and we'll always confirm anything beyond that scope with you first.",
  },
  {
    question: "Do you provide SEO and GEO services?",
    answer:
      "Yes. We build a strong foundation for discoverability through technical SEO, search engine-friendly architecture, structured data and schema markup, local SEO foundations, and AI search optimization (GEO). We help improve your visibility, but we do not guarantee specific Google rankings or AI search placements.",
  },
  {
    question: "Can QuantumCusp develop custom software?",
    answer:
      "Yes. Beyond websites, we build custom web applications, SaaS products, business process automation, admin dashboards, CRM and ERP solutions, APIs, and third-party integrations — with scalable architecture and ongoing technical support tailored to your project.",
  },
];

/* ------------------------------------------------------------------ */

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Website Development & Custom Software Solutions",
      provider: {
        "@type": "Organization",
        name: "QuantumCusp",
        url: "https://quantumcusp.co",
      },
      areaServed: ["IN", "AE", "US", "GB", "AU"],
      description:
        "Professional business websites, one-time website development, and custom software solutions to help businesses establish, automate, and scale their digital operations.",
      offers: [
        {
          "@type": "Offer",
          name: "Website Subscription",
          price: "499",
          priceCurrency: "INR",
          description:
            "Professional business website subscription with hosting, maintenance, SEO foundation, and monthly performance reports.",
        },
        {
          "@type": "Offer",
          name: "One-Time Website Development",
          description:
            "Custom one-time website design and development with deployment and launch support.",
        },
        {
          "@type": "Offer",
          name: "Custom Software Development",
          description:
            "Custom web applications, SaaS products, automation, and integrations built on scalable architecture.",
        },
      ],
    },
  ],
};

export default function WebsiteSolutions() {
  const { elementRef: plansRef, isVisible: plansVisible } = useIntersectionObserver();
  const { elementRef: whyRef, isVisible: whyVisible } = useIntersectionObserver();
  const { elementRef: stepsRef, isVisible: stepsVisible } = useIntersectionObserver();
  const { elementRef: seoRef, isVisible: seoVisible } = useIntersectionObserver();
  const { elementRef: faqRef, isVisible: faqVisible } = useIntersectionObserver();

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  // Scroll to the section referenced by the URL hash (e.g. /website-solutions#pricing).
  // Runs on mount (after ScrollToTop resets position) and whenever the hash changes.
  useEffect(() => {
    const scrollToHash = () => {
      const id = window.location.hash.replace("#", "");
      if (!id) return;
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
      }
    };

    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>
          Website Development & Custom Software Solutions | QuantumCusp
        </title>
        <meta
          name="description"
          content="Professional business websites starting at ₹499/month, one-time website development, and custom software solutions. QuantumCusp helps businesses establish, automate, and scale their digital operations."
        />
        <link rel="canonical" href="https://quantumcusp.co/website-solutions" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://quantumcusp.co/website-solutions" />
        <meta
          property="og:title"
          content="Website Development & Custom Software Solutions | QuantumCusp"
        />
        <meta
          property="og:description"
          content="Professional business websites starting at ₹499/month, one-time website development, and custom software solutions to establish, automate, and scale your business."
        />
        <meta property="og:image" content="https://quantumcusp.co/LogoDark.svg" />
        <meta property="og:site_name" content="QuantumCusp" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://quantumcusp.co/website-solutions" />
        <meta
          name="twitter:title"
          content="Website Development & Custom Software Solutions | QuantumCusp"
        />
        <meta
          name="twitter:description"
          content="Professional business websites starting at ₹499/month, one-time website development, and custom software solutions for growing businesses."
        />
        <meta name="twitter:image" content="https://quantumcusp.co/LogoDark.svg" />

        <meta
          name="keywords"
          content="website development, business website subscription, custom software development, SaaS development, website design India, ₹499 website, SEO website, GEO optimization, QuantumCusp"
        />
        <meta name="robots" content="index, follow" />

        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <Navigation />

      <main className="pt-20">
        {/* ============================= PLANS ============================= */}
        <section
          id="pricing"
          className="relative overflow-hidden py-20 lg:py-28 bg-card/50 border-b border-border"
        >
          {/* Ambient brand glows */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10 bg-[radial-gradient(circle_at_50%_-10%,hsl(var(--primary)/0.14),transparent_70%)]" />
          <div className="absolute bottom-0 right-0 w-[32rem] h-[32rem] -z-10 bg-[radial-gradient(circle,hsl(var(--secondary)/0.10),transparent_70%)] blur-2xl" />

          <div className="max-w-7xl mx-auto px-6">
            <div
              ref={plansRef}
              className={`text-center mb-16 transition-all duration-700 ${
                plansVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
                Our Services
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                Choose the Path That{" "}
                <span className="text-primary">Fits Your Business</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                Three clear ways to work with us — a managed website subscription,
                a one-time build you fully own, or custom software tailored to your
                operations.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
              {plans.map((plan) => (
                <PricingCard
                  key={plan.name}
                  plan={plan}
                  onCtaClick={() => scrollToId("contact")}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ======================= WHY CHOOSE US ========================= */}
        <section className="py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <div
              ref={whyRef}
              className={`text-center mb-16 transition-all duration-700 ${
                whyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
                Why QuantumCusp
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                Built to Move Your{" "}
                <span className="text-primary">Business Forward</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                A partner that combines modern engineering with a clear focus on
                real business outcomes.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChoose.map((item) => (
                <div
                  key={item.title}
                  className="group p-6 rounded-2xl border border-border bg-background hover:border-primary/40 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 ring-1 ring-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================= HOW IT WORKS ========================= */}
        <section className="py-20 lg:py-28 bg-card">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
                How It Works
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                From Idea to Launch in{" "}
                <span className="text-primary">Four Simple Steps</span>
              </h2>
            </div>

            <div
              ref={stepsRef}
              className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-700 ${
                stepsVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              {howItWorks.map((step, index) => (
                <div key={step.number} className="relative group">
                  {index < howItWorks.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-[calc(100%-16px)] w-8 h-[2px] bg-primary/20 z-10" />
                  )}
                  <div className="p-6 rounded-2xl border border-border bg-background hover:border-primary/40 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 ring-1 ring-primary/20 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                        <step.icon className="w-6 h-6 text-primary" />
                      </div>
                      <span className="text-3xl font-bold text-primary/20 font-serif">
                        {step.number}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold mb-2 tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================= SEO & GEO ========================= */}
        <section className="py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <div
              ref={seoRef}
              className={`grid lg:grid-cols-2 gap-14 items-center transition-all duration-700 ${
                seoVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <div>
                <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
                  SEO & GEO
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                  Don't Just Build a Website.{" "}
                  <span className="text-primary">Build Your Online Visibility.</span>
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  A beautiful website only matters if people — and AI assistants —
                  can find it. We lay the technical groundwork that helps your
                  business get discovered across search engines and AI-powered
                  search experiences.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed border-l-4 border-primary/40 pl-4">
                  We focus on building a strong discoverability foundation. We do
                  not guarantee specific Google rankings or AI search placements.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {seoCapabilities.map((cap) => (
                  <div
                    key={cap.label}
                    className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card hover:border-primary/40 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <cap.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-sm font-medium leading-tight">
                      {cap.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================= FAQ ============================= */}
        <section id="faq" className="py-20 lg:py-28 bg-muted/30">
          <div className="max-w-4xl mx-auto px-6">
            <div
              ref={faqRef}
              className={`text-center mb-12 transition-all duration-700 ${
                faqVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
                FAQ
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                Questions, Answered
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                Everything you need to know about our website subscription,
                one-time builds, and custom software.
              </p>
            </div>

            <FaqAccordion faqs={faqs} />
          </div>
        </section>

        {/* ========================= FINAL CTA ========================= */}
        <section className="relative overflow-hidden py-24">
          <div className="absolute inset-0 -z-10 bg-[#070033]" />
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,hsl(var(--primary)/0.25),transparent_60%)]" />
          <div
            className="absolute inset-0 -z-10 opacity-40"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,102,50,0.08) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,102,50,0.08) 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
            }}
          />

          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
              Ready to Take Your Business to the{" "}
              <span className="text-primary">Next Level?</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl mx-auto">
              Let's build something that moves your business forward.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                onClick={() => scrollToId("contact")}
                className="px-8 text-base font-semibold bg-primary border-primary-border group"
                data-testid="button-final-start-website"
              >
                Start Your Website
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToId("contact")}
                className="px-8 text-base font-semibold bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20"
                data-testid="button-final-discuss-project"
              >
                Discuss Your Project
              </Button>
            </div>

            <Link href="/" className="inline-flex flex-col items-center gap-2 group">
              <span className="font-serif font-bold text-2xl tracking-tight text-white">
                Quantum<span className="text-primary">Cusp</span>
              </span>
              <span className="text-sm text-gray-400 group-hover:text-primary transition-colors">
                quantumcusp.co
              </span>
            </Link>
          </div>
        </section>

        {/* ========================= CONTACT ========================= */}
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
