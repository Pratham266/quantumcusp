import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { About } from "@/components/About";

export default function AboutUs() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "QuantumCusp",
      "url": "https://quantumcusp.co",
      "description": "Technology company focused on helping businesses operate smarter, grow faster, and prepare for the future through custom software development",
      "founder": {
        "@type": "Person",
        "name": "Ayushi Rao",
        "jobTitle": "Founder & CEO",
        "description": "Founder who believes that execution matters as much as vision, with a background in building real systems for real businesses"
      },
      "foundingDate": "2023",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IN"
      }
    }
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>About Us - Building the Future Together | QuantumCusp</title>
        <meta 
          name="description" 
          content="Learn about QuantumCusp, founded in 2023 by Ayushi Rao. We combine strategic thinking with technical excellence to deliver custom software solutions that create real, measurable value for businesses." 
        />
        <link rel="canonical" href="https://quantumcusp.co/about-us" />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://quantumcusp.co/about-us" />
        <meta property="og:title" content="About Us - Building the Future Together | QuantumCusp" />
        <meta property="og:description" content="Learn about QuantumCusp, founded in 2023 by Ayushi Rao. Custom software solutions that create real, measurable value." />
        <meta property="og:image" content="https://quantumcusp.co/images/CEO.jpeg" />
        <meta property="og:site_name" content="QuantumCusp" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us - Building the Future Together | QuantumCusp" />
        <meta name="twitter:description" content="Learn about QuantumCusp, founded in 2023 by Ayushi Rao. Custom software solutions that create real, measurable value." />
        <meta name="twitter:image" content="https://quantumcusp.co/images/CEO.jpeg" />
        
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <Navigation />
      <main className="pt-20">
        <About />
      </main>
      <Footer />
    </div>
  );
}
