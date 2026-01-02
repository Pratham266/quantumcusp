import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
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
        "@type": "SoftwareApplication",
        "name": "QuantumCusp",
        "alternateName": "Quantum Cusp",
        "url": "https://quantumcusp.co",
        "logo": "https://quantumcusp.co/LogoDark.svg",
        "description": "QuantumCusp delivers scalable software development, AI solutions, WhatsApp automation for SMBs worldwide.",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "Organization",
        "name": "QuantumCusp",
        "url": "https://quantumcusp.co",
        "sameAs": [
          "https://www.linkedin.com/company/quantumcusp"
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        {/* Primary Meta Tags */}
        <title>QuantumCusp: Custom Software Development & AI Solutions</title>
        <meta 
          name="description" 
          content="QuantumCusp delivers scalable software development, AI solutions, WhatsApp automation for SMBs worldwide. Custom engineering, generative intelligence, product delivery." 
        />
        <link rel="canonical" href="https://quantumcusp.co" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://quantumcusp.co" />
        <meta property="og:title" content="QuantumCusp: Custom Software Development & AI Solutions" />
        <meta 
          property="og:description" 
          content="QuantumCusp delivers scalable software development, AI solutions, WhatsApp automation for SMBs worldwide. Custom engineering, generative intelligence, product delivery." 
        />
        <meta property="og:image" content="https://quantumcusp.co/LogoDark.svg" />
        <meta property="og:site_name" content="QuantumCusp" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://quantumcusp.co" />
        <meta name="twitter:title" content="QuantumCusp: Custom Software Development & AI Solutions" />
        <meta 
          name="twitter:description" 
          content="QuantumCusp delivers scalable software development, AI solutions, WhatsApp automation for SMBs worldwide. Custom engineering, generative intelligence, product delivery." 
        />
        <meta name="twitter:image" content="https://quantumcusp.co/LogoDark.svg" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="keywords" content="QuantumCusp, quantum cusp, software development, custom software, AI solutions, WhatsApp automation, scalable SaaS, digital engineering, business solutions" />
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
        <Services />
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
