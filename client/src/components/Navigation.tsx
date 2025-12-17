import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence, color } from "framer-motion";
import { HiBars3 } from "react-icons/hi2";
import { HiX } from "react-icons/hi";


const navLinks = [
  { label: "Services", href: "/#services", isAnchor: true },
  { label: "Solutions", href: "/#solutions", isAnchor: true },
  { label: "Case Studies", href: "/case-studies", isAnchor: false },
  { label: "Blog", href: "/blog", isAnchor: false },
  { label: "Team", href: "/team", isAnchor: false },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string, isAnchor: boolean) => {
    setIsMobileMenuOpen(false);

    if (isAnchor) {
      if (location !== "/") {
        window.location.href = href;
      } else {
        const element = document.querySelector(href.replace("/", ""));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  const handleGetStarted = () => {
    setIsMobileMenuOpen(false);
    if (location !== "/") {
      window.location.href = "/#contact";
    } else {
      const element = document.querySelector("#contact");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const navBarFontColor = !isScrolled && location === "/" ? "text-white" : "";
  console.log({ navBarFontColor });
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-8">
        <Link
          href="/"
          className="flex items-center gap-2"
          data-testid="link-logo"
        >
          <div className="w-10 h-10 rounded-md bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">Q</span>
          </div>
          <span
            className={`font-bold text-xl tracking-tight ${navBarFontColor}`}
          >
            QuantumCusp
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.isAnchor ? (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href, link.isAnchor)}
                className={`text-sm font-medium text-muted-foreground hover:text-foreground transition-colors ${navBarFontColor}`}
                data-testid={`link-nav-${link.label
                  .toLowerCase()
                  .replace(" ", "-")}`}
              >
                {link.label}
              </button>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium text-muted-foreground hover:text-foreground transition-colors ${navBarFontColor}`}
                data-testid={`link-nav-${link.label
                  .toLowerCase()
                  .replace(" ", "-")}`}
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link href="/estimator">
            <Button
              variant={`${navBarFontColor ? "outlineLight" : "outline"}`}
              data-testid="button-get-quote"
              className={`${navBarFontColor}`}
            >
              Get a Quote
            </Button>
          </Link>
          <Button onClick={handleGetStarted} data-testid="button-get-started">
            Get Started
          </Button>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          data-testid="button-mobile-menu"
        >
          {isMobileMenuOpen ? (
           <HiX className={navBarFontColor}/>
          ) : (
            <HiBars3 className={navBarFontColor}/>
          )}
        </Button> 
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border"
          >
            <div className="px-6 py-6 flex flex-col gap-2">
              {navLinks.map((link) =>
                link.isAnchor ? (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href, link.isAnchor)}
                    className={`text-left text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-all py-3 px-3 rounded-lg`}
                    data-testid={`link-mobile-nav-${link.label
                      .toLowerCase()
                      .replace(" ", "-")}`}
                  >
                    {link.label}
                  </button>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-all py-3 px-3 rounded-lg`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    data-testid={`link-mobile-nav-${link.label
                      .toLowerCase()
                      .replace(" ", "-")}`}
                  >
                    {link.label}
                  </Link>
                )
              )}
              
              <div className="h-px bg-border my-3"></div>
              
              <Link href="/estimator">
                <Button
                  variant="outline"
                  className={"w-full"}
                  onClick={() => setIsMobileMenuOpen(false)}
                  data-testid="button-mobile-get-quote"
                >
                  Get a Quote
                </Button>
              </Link>
              <Button
                onClick={handleGetStarted}
                className="w-full"
                data-testid="button-mobile-get-started"
              >
                Get Started
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
