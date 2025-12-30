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

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "QuantumCusp",
        "url": "https://quantumcusp.co",
        "logo": "https://quantumcusp.co/LogoDark.svg",
        "description": "Custom software development company in India specializing in business automation, inventory systems, and AI-enabled tools for SMBs",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "IN"
        },
        "sameAs": [
          "https://www.linkedin.com/company/quantumcusp"
        ]
      },
      {
        "@type": "WebSite",
        "name": "QuantumCusp",
        "url": "https://quantumcusp.co",
        "description": "Custom software development India for SMBs - Inventory systems, business automation, WhatsApp CRM",
        "publisher": {
          "@type": "Organization",
          "name": "QuantumCusp"
        }
      },
      {
        "@type": "SoftwareApplication",
        "name": "QuantumCusp Custom Software Solutions",
        "description": "Custom software development India for SMBs. Inventory systems, business automation, WhatsApp CRM.",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "provider": {
          "@type": "Organization",
          "name": "QuantumCusp",
          "url": "https://quantumcusp.co"
        }
      }
    ]
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Custom Software Development India | QuantumCusp</title>
        <meta 
          name="description" 
          content="QuantumCusp builds custom software development in India for SMBs. Inventory systems, business automation, WhatsApp CRM. Smart technology for real business growth." 
        />
        <link rel="canonical" href="https://quantumcusp.co/" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://quantumcusp.co/" />
        <meta property="og:title" content="Custom Software Development India | QuantumCusp" />
        <meta 
          property="og:description" 
          content="QuantumCusp builds custom software development in India for SMBs. Inventory systems, business automation, WhatsApp CRM." 
        />
        <meta property="og:image" content="https://quantumcusp.co/LogoDark.svg" />
        <meta property="og:site_name" content="QuantumCusp" />
        <meta property="og:locale" content="en_IN" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://quantumcusp.co/" />
        <meta name="twitter:title" content="Custom Software Development India | QuantumCusp" />
        <meta 
          name="twitter:description" 
          content="QuantumCusp builds custom software development in India for SMBs. Inventory systems, business automation, WhatsApp CRM." 
        />
        <meta name="twitter:image" content="https://quantumcusp.co/LogoDark.svg" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="keywords" content="custom software development India, business automation India, inventory management system, WhatsApp CRM, SMB software solutions, AI-enabled tools India" />
        <meta name="author" content="QuantumCusp" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="India" />
        
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
        <Contact />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
