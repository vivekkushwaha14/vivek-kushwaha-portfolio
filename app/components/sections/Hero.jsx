"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { developerInfo } from "@/app/data/portfolio";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import SectionWrapper from "../ui/SectionWrapper";


const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  

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
            <h1 className="text-5xl md:text-7xl lg:text-7xl font-semibold tracking-tight text-text mb-5 leading-[1.05]">
              Hi, I&apos;m <span>{developerInfo.name}</span>
            </h1>
            
            <div className="h-10 md:h-14 flex text-2xl items-center">
              Full Stack Web Developer
            </div>

            <p className="text-muted text-lg max-w-[700px] mt-7 leading-8">
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
              className="bg-text text-white px-6 py-3.5 rounded-lg font-semibold flex items-center gap-2 hover:bg-black/80 transition-colors group"
            >
              View Projects
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="border border-[#e5e7eb] text-text px-6 py-3.5 rounded-lg font-semibold hover:border-text transition-colors"
            >
              Contact Me
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center gap-7 pt-5 "
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
          transition={{ duration: 0.45, delay: 0.1 }}
          className="order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-secondary border border-[#e5e7eb] rounded-2xl overflow-hidden flex items-center justify-center">
            {/* Profile Placeholder */}
            <div className="absolute inset-5 bg-white rounded-xl border border-[#e5e7eb] flex items-center justify-center">
               <span className="text-8xl md:text-9xl font-semibold tracking-tight text-text opacity-10 select-none">{"VK"}</span>
               {/* When user adds real image: 
               <Image src="/profile.jpg" fill className="object-cover" alt={developerInfo.name} /> 
               */}
            </div>

            {/* Floating Badges */}
            <div className="absolute bottom-5 left-5 bg-white border border-[#e5e7eb] px-3 py-2 rounded-lg flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full" />
              <span className="text-xs font-bold text-text uppercase">Available Now</span>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Hero;
