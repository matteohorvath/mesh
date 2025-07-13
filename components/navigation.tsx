"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems: Array<{ name: string; href: string; external?: boolean }> = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Philosophy", href: "#philosophy" },
    { name: "The Deal", href: "#agreement" },
    { name: "Projects", href: "#projects" },
    { name: "Events", href: "#events" },
    { name: "Blog", href: "/blog", external: true },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string, external?: boolean) => {
    if (external) {
      window.location.href = href;
      return;
    }

    const isOnMainPage = window.location.pathname === "/";

    if (isOnMainPage) {
      // If on main page, scroll to section
      const element = document.querySelector(href);
      if (element) {
        const elementPosition =
          element.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({
          top: elementPosition,
          behavior: "smooth",
        });
      }
    } else {
      // If not on main page, navigate to index page with hash
      window.location.href = `/${href}`;
    }

    setIsOpen(false);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection("#home")}
              className="text-2xl font-bold text-primary hover:text-accent transition-colors"
            >
              mesh.
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href, item.external)}
                  className="text-muted-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block mx-16">
            <Button
              onClick={() => {
                scrollToSection("#join", false);
              }}
              className="bg-primary hover:bg-accent text-primary-foreground font-medium"
            >
              Join mesh
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background/95 backdrop-blur-md border-b border-border">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href, item.external)}
                className="text-muted-foreground hover:text-primary block px-3 py-2 text-base font-medium w-full text-left transition-colors"
              >
                {item.name}
              </button>
            ))}
            <div className="pt-4">
              <Button
                onClick={() => {
                  scrollToSection("#join", false);
                }}
                className="w-full bg-primary hover:bg-accent text-primary-foreground font-medium"
              >
                Join mesh
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
