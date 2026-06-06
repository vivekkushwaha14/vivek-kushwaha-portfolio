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
    <SectionWrapper id="home" className="min-h-screen flex items-center pt-32 pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        {/* Text Content */}
        <div className="space-y-8 order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-accent font-medium mb-2 tracking-wide uppercase text-sm">
              Available for Freelance & Full-time
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold text-text mb-4 leading-tight">
              Hi, I&apos;m <span className="text-accent">{developerInfo.name}</span>
            </h1>
            
            <div className="h-12 md:h-16 flex items-center">
              <AnimatePresence mode="wait">
                <motion.p
                  key={roles[roleIndex]}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="text-2xl md:text-4xl text-muted font-semibold"
                >
                  {roles[roleIndex]}
                </motion.p>
              </AnimatePresence>
            </div>

            <p className="text-muted text-lg max-w-xl mt-6 leading-relaxed">
              {developerInfo.tagline} Focused on creating pixel-perfect, 
              responsive, and highly interactive user interfaces.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <a
              href="#projects"
              className="bg-accent text-background px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:scale-105 transition-transform group"
            >
              View Projects
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="border border-accent text-accent px-8 py-4 rounded-full font-bold hover:bg-accent hover:text-background transition-all"
            >
              Contact Me
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center gap-6 pt-6"
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
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            {/* Animated Background Rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-2 border-dashed border-accent/20 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 border border-dashed border-accent/10 rounded-full"
            />
            
            {/* Profile Placeholder */}
            <div className="absolute inset-4 bg-secondary rounded-full overflow-hidden border-4 border-accent/30 shadow-2xl flex items-center justify-center glass">
               <span className="text-8xl font-black text-accent opacity-20 select-none">{"VK"}</span>
               {/* When user adds real image: 
               <Image src="/profile.jpg" fill className="object-cover" alt={developerInfo.name} /> 
               */}
            </div>

            {/* Floating Badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 glass px-4 py-2 rounded-xl flex items-center gap-2 shadow-lg"
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-xs font-bold text-text uppercase">Available Now</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Hero;
