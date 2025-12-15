import { Link } from "wouter";
import { SiLinkedin, SiX, SiGithub } from "react-icons/si";

const quickLinks = [
  { label: "Services", href: "/#services", isAnchor: true },
  { label: "Solutions", href: "/#solutions", isAnchor: true },
  { label: "Case Studies", href: "/case-studies", isAnchor: false },
  { label: "Blog", href: "/blog", isAnchor: false },
  { label: "Team", href: "/team", isAnchor: false },
];

const socialLinks = [
  { icon: SiLinkedin, label: "LinkedIn", href: "#" },
  { icon: SiX, label: "X", href: "#" },
  { icon: SiGithub, label: "GitHub", href: "#" },
];

export function Footer() {
  const handleAnchorClick = (href: string) => {
    if (window.location.pathname !== "/") {
      window.location.href = href;
    } else {
      const element = document.querySelector(href.replace("/", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-md bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">Q</span>
              </div>
              <span className="font-bold text-xl tracking-tight">QuantumCusp</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6" data-testid="text-footer-tagline">
              Smart technology solutions for modern businesses. Strategic, reliable,
              and future-ready.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-9 h-9 rounded-md bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
                  aria-label={social.label}
                  data-testid={`link-social-${social.label.toLowerCase()}`}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  {link.isAnchor ? (
                    <button
                      onClick={() => handleAnchorClick(link.href)}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      data-testid={`link-footer-${link.label.toLowerCase().replace(" ", "-")}`}
                    >
                      {link.label}
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      data-testid={`link-footer-${link.label.toLowerCase().replace(" ", "-")}`}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@quantumcusp.co"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-footer-email"
                >
                  hello@quantumcusp.co
                </a>
              </li>
              <li>
                <span className="text-sm text-muted-foreground" data-testid="text-footer-domain">
                  quantumcusp.co
                </span>
              </li>
              <li>
                <Link
                  href="/estimator"
                  className="text-sm text-primary hover:text-primary/80 transition-colors font-medium"
                  data-testid="link-footer-estimator"
                >
                  Get a Project Quote
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground" data-testid="text-copyright">
            &copy; {new Date().getFullYear()} QuantumCusp. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <button className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-privacy">
              Privacy Policy
            </button>
            <button className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-terms">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
