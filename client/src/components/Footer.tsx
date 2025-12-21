import { Link } from "wouter";
import { SiLinkedin, SiX, SiGithub } from "react-icons/si";
import { Button } from "@/components/ui/button";


const quickLinks = [
  { label: "Services", href: "/#services", isAnchor: true },
  { label: "Solutions", href: "/#solutions", isAnchor: true },
  { label: "Testimonials", href: "/testimonials", isAnchor: false },
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
    <footer className="bg-card border-t border-border bg-gradient-to-br from-[#070033] via-[#070033] to-[#1a0d66] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6632]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FBAC41]/10 rounded-full blur-3xl"></div>
      <div className="max-w-7xl mx-auto px-6 py-16 relative z-index-1">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-md bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">Q</span>
              </div>
              <span className="font-bold text-xl tracking-tight text-white">QuantumCusp</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6" data-testid="text-footer-tagline">
              Smart technology solutions for modern businesses. Strategic, reliable,
              and future-ready.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 hover:bg-gradient-to-br hover:from-[#FF6632] hover:to-[#FBAC41] rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all"
                  aria-label={social.label}
                  data-testid={`link-social-${social.label.toLowerCase()}`}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  {link.isAnchor ? (
                    <button
                      onClick={() => handleAnchorClick(link.href)}
                      className="text-sm text-gray-400 hover:text-[#FF6632] transition-colors"
                      data-testid={`link-footer-${link.label.toLowerCase().replace(" ", "-")}`}
                    >
                      {link.label}
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-[#FF6632] transition-colors"
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
            <h4 className="font-semibold mb-4 text-white">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@quantumcusp.co"
                  className="text-sm text-gray-400 hover:text-[#FF6632] transition-colors"
                  data-testid="link-footer-email"
                >
                  hello@quantumcusp.co
                </a>
              </li>
              <li>
                <span className="text-sm text-gray-400" data-testid="text-footer-domain">
                  quantumcusp.co
                </span>
              </li>
              <li>

               

                <Button
                        type="submit"
                        onClick={() => {
                          window.location.href = "/estimator";
                        }}
                        className="h-14 text-lg font-semibold rounded-2xl bg-gradient-to-r from-[#FF7A30] to-[#FFB347] hover:from-[#FF7A30] hover:to-[#FF9933] shadow-lg shadow-orange-500/20 transition-all hover:scale-[1.01] active:scale-[0.99]"
                        data-testid="button-submit-contact"
                      >
                          <span className="flex items-center text-white">
                            Get a Project Quote
                          </span>
                      </Button>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400" data-testid="text-copyright">
            &copy; {new Date().getFullYear()} QuantumCusp. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <button className="text-sm text-gray-400 hover:text-[#FF6632] transition-colors" data-testid="link-privacy">
              Privacy Policy
            </button>
            <button className="text-sm text-gray-400 hover:text-[#FF6632] transition-colors" data-testid="link-terms">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
