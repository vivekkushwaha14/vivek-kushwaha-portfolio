"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { developerInfo } from "@/app/data/portfolio";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import SectionWrapper from "../ui/SectionWrapper";

const roles = ["Full Stack Developer", "React Developer", "MERN Stack Developer"];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <SectionWrapper id="home" className="min-h-screen flex items-center pt-32 pb-20 md:pt-36">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
        {/* Text Content */}
        <div className="space-y-9 order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-accent font-semibold mb-4 tracking-[0.14em] uppercase text-xs">
              Available for Freelance & Full-time
            </h2>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-text mb-5 leading-[1.05]">
              Hi, I&apos;m <span className="text-accent">{developerInfo.name}</span>
            </h1>
            
            <div className="h-10 md:h-14 flex items-center">
              <AnimatePresence mode="wait">
                <motion.p
                  key={roles[roleIndex]}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="text-xl md:text-3xl text-muted font-medium"
                >
                  {roles[roleIndex]}
                </motion.p>
              </AnimatePresence>
            </div>

            <p className="text-muted text-lg max-w-xl mt-7 leading-8">
              {developerInfo.tagline} Focused on creating pixel-perfect, 
              responsive, and highly interactive user interfaces.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-3 pt-3"
          >
            <a
              href="#projects"
              className="bg-accent text-background px-6 py-3.5 rounded-lg font-semibold flex items-center gap-2 hover:bg-[#2dd4bf] transition-colors group"
            >
              View Projects
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="border border-white/[0.12] text-text px-6 py-3.5 rounded-lg font-semibold hover:border-accent hover:text-accent transition-colors"
            >
              Contact Me
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center gap-5 pt-5"
          >
            {developerInfo.socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-accent transition-colors"
                  aria-label={social.name}
                >
                  <Icon size={24} />
                </a>
              );
            })}
          </motion.div>
        </div>

        {/* Profile Image / Abstract Shape */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 border border-accent/30 rounded-full" />
            <div className="absolute -inset-4 border border-white/[0.08] rounded-full" />
            
            {/* Profile Placeholder */}
            <div className="absolute inset-4 bg-secondary rounded-full overflow-hidden border border-white/[0.08] shadow-2xl shadow-black/30 flex items-center justify-center">
               <span className="text-8xl font-black text-accent opacity-25 select-none">{"VK"}</span>
               {/* When user adds real image: 
               <Image src="/profile.jpg" fill className="object-cover" alt={developerInfo.name} /> 
               */}
            </div>

            {/* Floating Badges */}
            <div
              className="absolute -top-4 -right-4 glass px-4 py-2 rounded-lg flex items-center gap-2 shadow-lg"
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-xs font-bold text-text uppercase">Available Now</span>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Hero;
