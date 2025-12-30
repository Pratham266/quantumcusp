import { Card, CardContent } from "@/components/ui/card";
import { Package, MessageSquare, LayoutDashboard, Cloud, TrendingUp, Shield } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import "./Services.css";

const services = [
  {
    icon: Package,
    title: "Inventory Management Software India",
    description:
      "Custom inventory management software built for Indian SMBs. Real-time stock tracking, automated reordering, barcode scanning, and multi-location support. Perfect for retailers, manufacturers, and distributors managing inventory across India.",
    keywords: "inventory management software India, stock tracking system, warehouse management",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Business Automation Ahmedabad",
    description:
      "WhatsApp business automation for SMBs to streamline customer communication. Automated order confirmations, payment reminders, customer support chatbots, and broadcast messaging. Boost sales with WhatsApp CRM integration.",
    keywords: "WhatsApp business automation for SMB, WhatsApp CRM India, automated messaging",
  },
  {
    icon: LayoutDashboard,
    title: "Custom Admin Portals",
    description:
      "Build powerful custom admin portals for coaching institutes and businesses. Student management, fee tracking, attendance systems, course management, and parent portals. Tailored admin dashboards for complete business control.",
    keywords: "custom admin portal development, coaching institute software India, student management system",
  },
  {
    icon: Cloud,
    title: "Order Tracking Systems",
    description:
      "Real-time order tracking systems for e-commerce and logistics. Customer order status updates, delivery tracking, automated notifications, and vendor management. Improve customer satisfaction with transparent order management.",
    keywords: "order tracking system India, delivery management software, logistics tracking",
  },
  {
    icon: TrendingUp,
    title: "Business Process Automation",
    description:
      "Automate repetitive business processes to save time and reduce errors. Invoice generation, payment processing, report automation, and workflow management. Custom software development in India for operational efficiency.",
    keywords: "business automation Ahmedabad, process automation India, workflow management",
  },
  {
    icon: Shield,
    title: "Secure Cloud Solutions",
    description:
      "Cloud-based software solutions with enterprise-grade security. Data backup, disaster recovery, scalable infrastructure, and compliance-ready systems. Affordable cloud hosting for Indian businesses.",
    keywords: "cloud software India, secure cloud solutions, SaaS development",
  },
];

export function Services() {
  const { elementRef: headerRef, isVisible: headerVisible } = useIntersectionObserver();
  const { elementRef: gridRef, isVisible: gridVisible } = useIntersectionObserver();

  return (
    <section id="services" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={headerRef}
          className={`services-header ${headerVisible ? "visible" : ""} text-center mb-16`}
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Custom Software Development{" "}
            <span className="text-primary">for Every Business Need</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            From inventory management and AI automation to SaaS products and business intelligence, we deliver tailored solutions for SMBs, product companies, and growing businesses.
          </p>
        </div>

        <div
          ref={gridRef}
          className={`services-grid ${gridVisible ? "visible" : ""} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`}
        >
          {services.map((service, index) => (
            <div key={service.title} className="service-card">
              <Card className="group relative overflow-hidden h-full bg-gradient-to-br from-primary/5 via-secondary/10 to-accent/10 hover:shadow-lg hover:-translate-y-1 hover:border-primary/40 hover:ring-1 hover:ring-primary/20 hover-elevate transition-all duration-300">
                <CardContent className="p-6 lg:p-7">
                  <div className="w-12 h-12 rounded-full bg-primary/10 ring-1 ring-primary/20 flex items-center justify-center mb-4 transition-colors group-hover:bg-primary/15 group-hover:ring-primary/40">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight mb-1">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
