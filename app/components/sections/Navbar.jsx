"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { cn } from "@/app/lib/utils";
import { developerInfo } from "@/app/data/portfolio";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const handleMobileNavigation = (e, href) => {
    e.preventDefault();

    setIsOpen(false);

    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 300);
  };
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-200 px-6 py-5",
        scrolled ? "glass border-b border-white/[0.08] py-3" : "bg-transparent",
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#home"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-bold text-accent tracking-tight"
        >
          VK.<span className="text-text"></span>
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-muted hover:text-text transition-colors text-sm font-medium"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.a
            href={developerInfo.resumeUrl}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 bg-accent text-background px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#2dd4bf] transition-colors"
          >
            <Download size={16} />
            Resume
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-text p-2 rounded-lg hover:bg-white/[0.06]"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass mt-3 rounded-xl overflow-hidden"
          >
            <div className="flex flex-col p-5 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleMobileNavigation(e, link.href)}
                  className="text-text hover:text-accent transition-colors text-base font-medium"
                >
                  {link.name}
                </a>
              ))}
              <a
                href={developerInfo.resumeUrl}
                className="flex items-center justify-center gap-2 bg-accent text-background px-5 py-3 rounded-lg text-base font-semibold"
              >
                <Download size={18} />
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
