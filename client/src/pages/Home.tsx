import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { StatsBar } from "@/components/StatsBar";
import { Services } from "@/components/Services";
import { HowWeWork } from "@/components/HowWeWork";
import { TestimonialsStrip } from "@/components/TestimonialsStrip";
import { WhyQuantumCusp } from "@/components/WhyQuantumCusp";
import { Solutions } from "@/components/Solutions";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { CallToAction } from "@/components/CallToAction";
import { FAQ } from "@/components/FAQ";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "name": "QuantumCusp",
        "alternateName": "Quantum Cusp",
        "url": "https://quantumcusp.co",
        "logo": "https://quantumcusp.co/LogoDark.svg",
        "description": "QuantumCusp builds custom software, AI agents, workflow automation, and SaaS products for startups and growing businesses. Architecture-first engineering, clear milestones, no surprises.",
        "founder": { "@type": "Person", "name": "Ayushi Rao" },
        "foundingDate": "2023",
        "address": { "@type": "PostalAddress", "addressCountry": "IN" },
        "email": "support@quantumcusp.co",
        "priceRange": "$$",
        "areaServed": ["IN", "AE", "US", "GB", "AU"],
        "knowsAbout": ["Custom Software Development", "Web Application Development", "AI Agents", "Workflow Automation", "SaaS Development", "UI/UX Design", "Cloud Architecture"],
        "sameAs": [
          "https://www.linkedin.com/company/112546920",
          "https://www.instagram.com/quantumcusp",
          "https://www.facebook.com/profile.php?id=61585557312594"
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        {/* Primary Meta Tags */}
        <title>QuantumCusp — Custom Software Development, AI Agents & SaaS Engineering</title>
        <meta
          name="description"
          content="QuantumCusp builds custom software, AI agents, workflow automation, and SaaS products for startups and growing businesses. Architecture-first engineering, clear milestones, no surprises."
        />
        <link rel="canonical" href="https://quantumcusp.co" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://quantumcusp.co" />
        <meta property="og:title" content="QuantumCusp — Custom Software Development, AI Agents & SaaS Engineering" />
        <meta
          property="og:description"
          content="QuantumCusp builds custom software, AI agents, workflow automation, and SaaS products for startups and growing businesses. Architecture-first engineering, clear milestones, no surprises."
        />
        <meta property="og:image" content="https://quantumcusp.co/LogoDark.svg" />
        <meta property="og:site_name" content="QuantumCusp" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://quantumcusp.co" />
        <meta name="twitter:title" content="QuantumCusp — Custom Software Development, AI Agents & SaaS Engineering" />
        <meta
          name="twitter:description"
          content="QuantumCusp builds custom software, AI agents, workflow automation, and SaaS products for startups and growing businesses. Architecture-first engineering, clear milestones, no surprises."
        />
        <meta name="twitter:image" content="https://quantumcusp.co/LogoDark.svg" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="keywords" content="custom software development, AI agents development, workflow automation, SaaS development company, web application development, software engineering partner, AI automation, custom web apps, SaaS product development, QuantumCusp" />
        <meta name="author" content="QuantumCusp" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <Navigation />
      <main>
        <Hero />
        <StatsBar />
        <Services />
        <HowWeWork />
        <TestimonialsStrip />
        <WhyQuantumCusp />
        <Solutions />
        <FAQ />
        <Contact />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
