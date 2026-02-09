import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Rocket, 
  Database, 
  Zap, 
  ShieldCheck, 
  FileJson, 
  RefreshCcw,
  Code2,
  Cpu,
  Clock
} from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function Caassure() {
  const { elementRef: heroRef, isVisible: heroVisible } = useIntersectionObserver();
  const { elementRef: contentRef, isVisible: contentVisible } = useIntersectionObserver();

  const features = [
    {
      icon: <Database className="w-6 h-6 text-primary" />,
      title: "High-Precision Bank Parsers",
      description: "Purpose-built logic for major banks (HDFC, ICICI, Kotak, Union Bank, and more) to handle complex, multi-line transaction remarks."
    },
    {
      icon: <Zap className="w-6 h-6 text-primary" />,
      title: "Real-Time Streaming Intelligence",
      description: "Unlike other tools that make you wait, CAassure streams data back to your screen page-by-page. Watch the extraction in real-time."
    },
    {
      icon: <FileJson className="w-6 h-6 text-primary" />,
      title: "Tally-Ready XML Export",
      description: "Generate specialized Tally XML files, allowing users to import hundreds of transactions into Tally in seconds without manual entry."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-primary" />,
      title: "Financial Integrity Engine",
      description: "Automatically cross-references balances and transaction sums to provide an 'Accuracy Metric', ensuring 100% reliable data."
    },
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: "30-Second Process",
      description: "Transform a task that used to take hours of manual entry into a 30-second automated process you can trust."
    },
    {
      icon: <Rocket className="w-6 h-6 text-primary" />,
      title: "Secure & Lightweight",
      description: "Handles password-protected PDFs and large files (up to 50MB) with ease, all within a sleek, modern UI."
    }
  ];

  const techStack = [
    { name: "Python", desc: "High-performance microservice for PDF structure analysis", icon: <Cpu className="w-5 h-5" /> },
    { name: "Node.js/Express", desc: "Secure transaction and user management backend", icon: <Database className="w-5 h-5" /> },
    { name: "Vite/React", desc: "Premium, interactive user experience frontend", icon: <Code2 className="w-5 h-5" /> }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>CAassure - Revolutionizing Bank Statement Automation | QuantumCusp</title>
        <meta 
          name="description" 
          content="CAassure is an enterprise-grade SaaS platform that automates manual data entry from bank statements into accounting software with near-perfect accuracy." 
        />
        <link rel="canonical" href="https://quantumcusp.co/products/caassure" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section 
          ref={heroRef}
          className={`relative py-20 overflow-hidden transition-all duration-1000 transform ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10 bg-[radial-gradient(circle_at_50%_-20%,hsl(var(--primary)/0.15),transparent_70%)]" />
          
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[0.8fr_1.2fr] md:grid-cols-2 gap-12 items-center">
            <div className="relative z-10">
              <Badge variant="outline" className="mb-4 py-1 px-4 border-primary/20 bg-primary/5 text-primary">
                Featured Product
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
                CAassure Revolutionizing <span className="text-primary">Bank Automation</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                An enterprise-grade SaaS platform that automates the tedious process of manual data entry from bank statements into accounting software like Tally or Excel.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://caassure.quantumcusp.co/" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="px-8 text-lg font-semibold group">
                    Get Started Now
                    <Rocket className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
                <Button size="lg" variant="outline" className="px-8 text-lg font-semibold" onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}>
                  Explore Features
                </Button>
              </div>
            </div>
            
            <div className="relative w-full">
              <div className="absolute inset-0 bg-primary/20 blur-[120px] -z-10 rounded-full" />
              <img 
                src="/images/caassure.png" 
                alt="CAassure Dashboard Showcase" 
                className="rounded-2xl shadow-2xl border border-border/50 w-full transform hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>
        </section>

        {/* Problem & Solution */}
        <section id="features" className="py-20 bg-card/50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
              <div className="order-2 md:order-1">
                <div className="p-8 rounded-2xl bg-primary/5 border border-primary/10">
                  <h2 className="text-3xl font-bold mb-6">The Problem It Solves</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Accountants and tax professionals often receive bank statements in PDF format, which are notorious for being difficult to copy-paste. Standard OCR tools often fail on complex table layouts, leading to "broken" data.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                    CAassure solves this by looking past the visual layer and interpreting the internal structure of the PDF, ensuring every decimal and date is captured correctly.
                  </p>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-4xl font-bold mb-6">Automation You Can Trust</h2>
                <p className="text-lg text-muted-foreground leading-relaxed italic border-l-4 border-primary pl-6">
                  "In the world of accounting, time is money. CAassure transforms a task that used to take hours of data entry into a 30-second automated process."
                </p>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="border-border/50 hover:border-primary/50 transition-colors bg-background/50 backdrop-blur-sm">
                  <CardContent className="pt-6">
                    <div className="mb-4 inline-block p-3 rounded-xl bg-primary/10">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="py-20 border-y border-border">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-12 text-foreground/80">Built with Modern Tech Stack</h2>
            <div className="grid sm:grid-cols-3 gap-8">
              {techStack.map((tech, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                    {tech.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{tech.name}</h3>
                  <p className="text-sm text-muted-foreground max-w-[200px]">
                    {tech.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call To Action */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/5 -z-10" />
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Experience 100% Reliability?</h2>
            <p className="text-xl text-muted-foreground mb-10">
              Join accountants and business owners who have reclaimed their time with CAassure.
            </p>
            <a href="https://caassure.quantumcusp.co/" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="px-12 py-7 text-xl rounded-full shadow-lg shadow-primary/20">
                Try CAassure Now
              </Button>
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
