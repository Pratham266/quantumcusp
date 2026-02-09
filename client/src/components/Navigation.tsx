import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { HiBars3 } from "react-icons/hi2";
import { HiX } from "react-icons/hi";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Rocket } from "lucide-react";
import "./Navigation.css";


const navLinks = [
  { label: "Home", href: "/home", isAnchor: false },
  { 
    label: "Products", 
    isDropdown: true, 
    children: [
      { 
        label: "Caassure", 
        href: "/products/caassure", 
        externalHref: "https://caassure.quantumcusp.co/", 
        description: "Automated Bank Statement Parsing" 
      }
    ]
  },
  { label: "About", href: "/about-us", isAnchor: false },
  { label: "Services", href: "/#services", isAnchor: true },
  { label: "Solutions", href: "/#solutions", isAnchor: true },
  { label: "Testimonials", href: "/testimonials", isAnchor: false },
  { label: "Blog", href: "/blog", isAnchor: false },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location, setLocation] = useLocation();
  const [viewChanges,setViewChanges]  = useState(false);

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
        
        setLocation(href);
        // Add a small delay to allow Home page to mount before scrolling
        setTimeout(() => {
          const element = document.querySelector(href.replace("/", ""));
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      } else {
        setViewChanges(!viewChanges)
        window.history.pushState(null, "", href);
        const element = document.querySelector(href.replace("/", ""));
        if (element) {
          setTimeout(()=>{
          element.scrollIntoView({ behavior: "smooth" });
          },0)
        }
      }
    }
  };

  const handleGetStarted = () => {
    setIsMobileMenuOpen(false);
    if (location !== "/") {
      setLocation("/#contact");
      setTimeout(() => {
          const element = document.querySelector("#contact");
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
    } else {
      const element = document.querySelector("#contact");
      if (element) {
        setTimeout(()=>{
            element.scrollIntoView({ behavior: "smooth" });
        },100)
      }
    }
  };

  const navBarFontColor = !isScrolled && ['/','/home'].includes(location) ? "text-white" : "";
  
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-md"
          : "bg-transparent"
      }
      ${!!navBarFontColor ? "light-header":"dark-header"}`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-4">
        <Link
          href="/"
          className="flex items-center gap-2 shrink-0"
          data-testid="link-logo"
        >
          <img 
            src={navBarFontColor ? "/LogoDark.svg" : "/LogoLight.svg"} 
            alt="QuantumCusp Logo" 
            className="w-10 h-10 object-contain" 
          />
          <span
            className={`font-serif font-bold text-3xl tracking-tight ${navBarFontColor}`}
          >
            Quantum<span className="text-primary">Cusp</span>
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link: any) => {
            const [open, setOpen] = useState(false);
            return link.isDropdown ? (
              <div 
                key={link.label}
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
                className="relative"
              >
                <DropdownMenu open={open} onOpenChange={setOpen}>
                  <DropdownMenuTrigger
                    className={`nav-link-underline text-lg font-medium text-muted-foreground transition-colors flex items-center gap-1 outline-none
                    ${navBarFontColor}`}
                  >
                    {link.label}
                    <ChevronDown className="w-4 h-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent 
                    className="w-72 p-2" 
                    align="start"
                    onMouseEnter={() => setOpen(true)}
                  >
                    {link.children.map((child: any) => (
                      <div key={child.label} className="flex items-center group/item">
                        <DropdownMenuItem 
                          asChild 
                          className="flex-1 flex flex-col items-start gap-1 p-3 cursor-pointer focus:bg-primary/5"
                          onClick={() => setOpen(false)}
                        >
                          <Link href={child.href} className="w-full">
                            <span className="font-bold text-base">{child.label}</span>
                            {child.description && (
                              <span className="text-xs text-muted-foreground leading-tight block">
                                {child.description}
                              </span>
                            )}
                          </Link>
                        </DropdownMenuItem>
                        {child.externalHref && (
                          <a 
                            href={child.externalHref} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-3 text-muted-foreground hover:text-primary transition-colors border-l border-border/50"
                            title="Open App"
                            onClick={(e) => {
                              e.stopPropagation();
                              setOpen(false);
                            }}
                          >
                            <Rocket className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ) : link.isAnchor ? (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href, link.isAnchor)}
                className={`nav-link-underline text-lg font-medium text-muted-foreground  transition-colors  
                ${window.location.href.includes(link.href) ? "text-primary":`${navBarFontColor}`}`}
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
                className={`nav-link-underline text-lg font-medium text-muted-foreground  transition-colors 
                ${window.location.href.includes(link.href) ? "text-primary":`${navBarFontColor}`}`}
                data-testid={`link-nav-${link.label
                  .toLowerCase()
                  .replace(" ", "-")}`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <Link href="/estimator">
            <Button
              variant={`${navBarFontColor ? "outlineLight" : "outline"}`}
              data-testid="button-get-quote"
              className={`${navBarFontColor}`}
            >
              Start Now
            </Button>
          </Link>
          <Button onClick={handleGetStarted} data-testid="button-get-started">
            Get Started
          </Button>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
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

      {isMobileMenuOpen && (
        <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''} lg:hidden bg-background/95 backdrop-blur-lg border-b border-border`}>
          <div className="px-6 py-6 flex flex-col gap-2">
            {navLinks.map((link: any) =>
              link.isDropdown ? (
                <div key={link.label} className="flex flex-col gap-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground px-3 pt-2 pb-1">
                    {link.label}
                  </span>
                  {link.children.map((child: any) => (
                    <div key={child.label} className="flex flex-col gap-1 mb-2">
                      <Link
                        href={child.href}
                        className={`mobile-menu-item text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-all py-3 px-3 rounded-lg flex items-center justify-between ${window.location.href.includes(child.href) ? "text-primary":""}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <span>{child.label}</span>
                        {child.externalHref && (
                          <a 
                            href={child.externalHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => {
                              e.stopPropagation();
                              setIsMobileMenuOpen(false);
                            }}
                            className="p-1 hover:text-primary"
                          >
                            <Rocket className="w-4 h-4" />
                          </a>
                        )}
                      </Link>
                    </div>
                  ))}
                </div>
              ) : link.isAnchor ? (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href, link.isAnchor)}
                  className={`mobile-menu-item text-left text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-all py-3 px-3 rounded-lg ${window.location.href.includes(link.href) ? "text-primary":""}`}
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
                  className={`mobile-menu-item text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-all py-3 px-3 rounded-lg ${window.location.href.includes(link.href) ? "text-primary":""}`}
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
                className={"mobile-menu-item w-full"}
                onClick={() => setIsMobileMenuOpen(false)}
                data-testid="button-mobile-get-quote"
              >
                Start Now
              </Button>
            </Link>
            <Button
              onClick={handleGetStarted}
              className="mobile-menu-item w-full"
              data-testid="button-mobile-get-started"
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
