import { Link, Outlet, useLocation } from "react-router-dom";
import { Phone, Menu, X, Facebook, MapPin, Mail, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "../lib/utils";
import { motion, AnimatePresence } from "motion/react";

const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

export function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-charcoal-dark text-[#F5F5F5]">
      {/* Header */}
      <header className="px-4 md:px-10 pt-10">
        <nav className="flex justify-between items-center border-b border-white/10 pb-6 max-w-7xl mx-auto w-full">
          <Link to="/" className="flex flex-col">
            <span className="text-2xl font-bold tracking-tighter uppercase">Enhanced <span className="text-warm-oak">Flooring</span></span>
            <span className="text-[10px] tracking-[0.3em] uppercase text-white/40 font-semibold mt-1">Quality • Fair Pricing • Lasting Results</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-10 text-xs uppercase tracking-widest font-medium items-center">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "transition-colors",
                  location.pathname === link.path ? "text-warm-oak" : "text-white/80 hover:text-warm-oak"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          <a href="tel:+12083393627" className="hidden md:block bg-white/5 border border-white/20 px-6 py-2.5 text-xs uppercase tracking-widest hover:bg-white/10 transition-all">
            +1 208-339-3627
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-[#F5F5F5] p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-30 bg-white pt-24 pb-8 px-6 md:hidden flex flex-col h-[100dvh]"
          >
            <nav className="flex flex-col gap-6 flex-1 mt-10">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "text-2xl font-sans font-light uppercase tracking-widest border-b border-white/10 pb-4",
                    location.pathname === link.path ? "text-warm-oak" : "text-[#F5F5F5]"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col gap-4 mt-auto">
              <a href="tel:+12083393627" className="flex items-center gap-3 text-lg font-medium text-[#F5F5F5]">
                <div className="w-10 h-10 border border-white/20 flex items-center justify-center text-warm-oak">
                  <Phone size={20} />
                </div>
                +1 208-339-3627
              </a>
              <Link
                to="/contact"
                className="w-full bg-warm-oak text-charcoal-dark text-center py-4 uppercase text-xs tracking-widest font-bold mt-4"
              >
                Request Free Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        <AnimatePresence mode="wait">
          <Outlet />
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-charcoal border-t border-white/10 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16">
          
          {/* Brand Col */}
          <div className="md:col-span-5 lg:col-span-4">
            <Link to="/" className="flex flex-col mb-6 group inline-flex">
              <span className="text-2xl font-bold tracking-tighter uppercase text-[#F5F5F5]">Enhanced <span className="text-warm-oak">Flooring</span></span>
            </Link>
            <p className="text-white/60 mb-6 max-w-sm font-light">
              Quality Floors. Fair Pricing. Lasting Results. Professional LVP flooring installation for homes, offices, and rental properties.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.facebook.com/profile.php?id=61590531925916" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-white/5 transition-all text-white/50 hover:text-white" aria-label="Facebook">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 lg:col-span-2">
            <h4 className="text-white font-sans text-[10px] uppercase tracking-widest mb-6 opacity-40">Quick Links</h4>
            <ul className="flex flex-col gap-3 font-light text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-white/80 hover:text-warm-oak transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-4 lg:col-span-3">
            <h4 className="text-white font-sans text-[10px] uppercase tracking-widest mb-6 opacity-40">Services</h4>
            <ul className="flex flex-col gap-3 font-light text-sm">
              <li>
                <Link to="/services" className="text-white/80 hover:text-warm-oak transition-colors">
                   LVP Installation
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/80 hover:text-warm-oak transition-colors">
                   Residential Flooring
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/80 hover:text-warm-oak transition-colors">
                   Office Flooring
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/80 hover:text-warm-oak transition-colors">
                   Rental Properties
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-12 lg:col-span-3">
            <h4 className="text-white font-sans text-[10px] uppercase tracking-widest mb-6 opacity-40">Contact Us</h4>
            <ul className="flex flex-col gap-4 font-light text-sm">
              <li className="flex items-start gap-3 text-white/80">
                <a href="tel:+12083393627" className="hover:text-warm-oak transition-colors">
                  +1 208-339-3627
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/80">
                <a href="mailto:info@enhancedflooring.com" className="hover:text-warm-oak transition-colors">
                  info@enhancedflooring.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/80">
                <span>
                  Serving the local area<br/>
                  Call for service radius
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 mt-16 pt-8 border-t border-white/10 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] uppercase tracking-widest text-white/40">
            © 2026 Enhanced Flooring. All Rights Reserved.
          </p>
          <div className="text-[10px] uppercase tracking-widest text-white/40 flex gap-4">
             <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
             <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </footer>

      {/* Floating Call Button */}
      <a
        href="tel:+12083393627"
        className="fixed bottom-6 right-6 z-50 bg-[#C19A6B] text-black w-14 h-14 flex items-center justify-center hover:bg-[#a67c52] transition-colors"
        aria-label="Call Now"
      >
        <Phone size={24} className="animate-pulse" />
      </a>
    </div>
  );
}
