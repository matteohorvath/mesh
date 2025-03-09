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

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out px-4",
        scrolled ? "py-4 bg-black/90 backdrop-blur-md" : "py-8 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link href="/" className="text-white font-mono text-xl font-bold">
          mesh.
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          <NavLink href="/#projects">projects</NavLink>
          <NavLink href="/#events">events</NavLink>
          <NavLink href="/blog">blog</NavLink>
          <NavLink href="/#contact">contact</NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-black flex flex-col items-center justify-center transition-all duration-300 ease-in-out md:hidden",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      >
        <nav className="flex flex-col items-center space-y-8">
          <Link href="/#projects" onClick={toggleMenu}>
            <span className="text-white hover:text-gray-300 transition-colors">
              projects
            </span>
          </Link>
          <Link href="/#events" onClick={toggleMenu}>
            <span className="text-white hover:text-gray-300 transition-colors">
              events
            </span>
          </Link>
          <Link href="/blog" onClick={toggleMenu}>
            <span className="text-white hover:text-gray-300 transition-colors">
              blog
            </span>
          </Link>
          <Link href="/#contact" onClick={toggleMenu}>
            <span className="text-white hover:text-gray-300 transition-colors">
              contact
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
