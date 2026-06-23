"use client";

import { motion } from "framer-motion";
import { developerInfo } from "@/app/data/portfolio";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 px-6 md:px-12 lg:px-24 border-t border-[#e5e7eb]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Brand */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold text-text tracking-tight mb-2">
             Vivek Kushwaha<span className="text-text">.</span>
          </h2>
          <p className="text-muted text-sm max-w-xs leading-relaxed">
            {developerInfo.role} based in India, creating digital experiences that matter.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-7 text-sm font-medium">
          <a href="#home" className="text-muted hover:text-accent transition-colors">Home</a>
          <a href="#about" className="text-muted hover:text-accent transition-colors">About</a>
          <a href="#skills" className="text-muted hover:text-accent transition-colors">Skills</a>
          <a href="#projects" className="text-muted hover:text-accent transition-colors">Projects</a>
          <a href="#contact" className="text-muted hover:text-accent transition-colors">Contact</a>
        </div>

        {/* Socials & Top */}
        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="flex gap-4">
            {developerInfo.socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  className="p-3 bg-white rounded-lg text-muted hover:text-text hover:border-[#d1d5db] transition-colors border border-[#e5e7eb]"
                  aria-label={social.name}
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
          <button
            onClick={scrollToTop}
            className="p-3 bg-text text-white rounded-lg hover:bg-black/80 transition-colors group"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-[#e5e7eb] flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-muted text-xs font-medium">
          &copy; {currentYear} {developerInfo.name}. All rights reserved.
        </p>
        <p className="text-muted/70 text-xs">
          Built with <span className="text-accent">Next.js</span> & <span className="text-accent">Tailwind CSS</span>
        </p>
      </div>

    </footer>
  );
};

export default Footer;
