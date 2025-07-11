import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";

// Utility function for conditional class names
const cn = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

const NavLink = ({ href, children, onClick }) => {
  const router = useRouter();
  const isInternalLink = href.startsWith("/#");
  const isHomePage = router.pathname === "/";

  const handleClick = (e) => {
    if (isInternalLink) {
      e.preventDefault();

      if (!isHomePage) {
        // If we're not on the home page, navigate to home first
        router.push("/").then(() => {
          // After navigation, scroll to the target section
          setTimeout(() => {
            const targetId = href.substring(2);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
              targetElement.scrollIntoView({ behavior: "smooth" });
              window.history.pushState(null, null, href);
            }
          }, 100);
        });
      } else {
        // If we're already on the home page, just scroll
        const targetId = href.substring(2);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
          window.history.pushState(null, null, href);
        }
      }

      // Call the original onClick handler if provided
      if (onClick) onClick();
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <Link
      href={href}
      className="text-white text-sm font-monda tracking-wider uppercase hover:text-gray-300 transition-colors duration-300 link-underline"
      onClick={handleClick}
    >
      {children}
    </Link>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Effect to handle scrolling state
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initialize scroll state
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle navigation clicks
  const handleNavClick = () => {
    setIsOpen(false);
  };

  // Handle overlay click to close menu
  const handleOverlayClick = (e) => {
    // Only close if clicking directly on the overlay, not on its children
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 w-full transition-all duration-300 ease-in-out px-4 z-40",
          scrolled ? "py-4 bg-black/90 backdrop-blur-md" : "py-8 bg-transparent"
        )}
      >
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <Link
            href="/"
            className="text-white font-monda font-bold text-xl tracking-wider"
          >
            <span className="text-white">dream it. build it.</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <NavLink href="/#projects">
              <span className="font-monda uppercase tracking-wider text-sm">
                projects
              </span>
            </NavLink>
            <NavLink href="/#events">
              <span className="font-monda uppercase tracking-wider text-sm">
                events
              </span>
            </NavLink>
            <NavLink href="/blog">
              <span className="font-monda uppercase tracking-wider text-sm">
                blog
              </span>
            </NavLink>
            <NavLink href="/#contact">
              <span className="font-monda uppercase tracking-wider text-sm">
                contact
              </span>
            </NavLink>
            <Link
              href="https://growmesh.notion.site/5af905687aec4e759c55744f5c08c7eb"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="font-monda uppercase tracking-wider text-sm bg-gradient-to-r from-mesh-blue to-mesh-teal px-4 py-2 rounded-md text-white hover:from-mesh-teal hover:to-mesh-blue transition-all duration-300">
                join us
              </span>
            </Link>
          </nav>

          {/* Mobile Menu Button - Highest z-index */}
          <button
            className="md:hidden text-white focus:outline-none relative z-50"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu - Full screen overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-black/95 flex flex-col items-center justify-center transition-all duration-300 ease-in-out md:hidden z-40",
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        )}
        onClick={handleOverlayClick}
      >
        <nav className="flex flex-col items-center space-y-8 p-8">
          <NavLink href="/#projects" onClick={handleNavClick}>
            <span className="text-white text-lg font-monda uppercase tracking-wider hover:text-mesh-teal transition-colors">
              projects
            </span>
          </NavLink>
          <NavLink href="/#events" onClick={handleNavClick}>
            <span className="text-white text-lg font-monda uppercase tracking-wider hover:text-mesh-teal transition-colors">
              events
            </span>
          </NavLink>
          <NavLink href="/blog" onClick={handleNavClick}>
            <span className="text-white text-lg font-monda uppercase tracking-wider hover:text-mesh-teal transition-colors">
              blog
            </span>
          </NavLink>
          <NavLink href="/#contact" onClick={handleNavClick}>
            <span className="text-white text-lg font-monda uppercase tracking-wider hover:text-mesh-teal transition-colors">
              contact
            </span>
          </NavLink>
          <Link
            href="https://growmesh.notion.site/5af905687aec4e759c55744f5c08c7eb"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="font-monda uppercase tracking-wider text-sm bg-gradient-to-r from-mesh-blue to-mesh-teal px-4 py-2 rounded-md text-white hover:from-mesh-teal hover:to-mesh-blue transition-all duration-300">
              join us
            </span>
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
