import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

// Utility function for conditional class names
const cn = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

const NavLink = ({ href, children, onClick }) => {
  return (
    <a
      href={href}
      className="text-white text-sm font-mono tracking-wider uppercase hover:text-gray-300 transition-colors duration-300 link-underline"
      onClick={onClick}
    >
      {children}
    </a>
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-mesh-blue to-mesh-teal">
              mesh.
            </span>
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
          <Link href="/#projects" onClick={handleNavClick}>
            <span className="text-white text-lg font-monda uppercase tracking-wider hover:text-mesh-teal transition-colors">
              projects
            </span>
          </Link>
          <Link href="/#events" onClick={handleNavClick}>
            <span className="text-white text-lg font-monda uppercase tracking-wider hover:text-mesh-teal transition-colors">
              events
            </span>
          </Link>
          <Link href="/blog" onClick={handleNavClick}>
            <span className="text-white text-lg font-monda uppercase tracking-wider hover:text-mesh-teal transition-colors">
              blog
            </span>
          </Link>
          <Link href="/#contact" onClick={handleNavClick}>
            <span className="text-white text-lg font-monda uppercase tracking-wider hover:text-mesh-teal transition-colors">
              contact
            </span>
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
