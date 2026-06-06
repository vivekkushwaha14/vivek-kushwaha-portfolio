"use client";

import { motion } from "framer-motion";
import { aboutInfo } from "@/app/data/portfolio";
import SectionWrapper from "../ui/SectionWrapper";

const About = () => {
  return (
    <SectionWrapper id="about" title="About Me" subtitle="A little bit about my journey and what drives me.">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Bio Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {aboutInfo.bio.map((paragraph, index) => (
            <p key={index} className="text-muted text-lg leading-relaxed">
              {paragraph}
            </p>
          ))}
          
          <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
             <div className="glass-card p-4 rounded-xl border-l-4 border-accent">
                <h4 className="font-bold text-text mb-1">Self-Taught</h4>
                <p className="text-muted text-sm">Learning through documentation & practice.</p>
             </div>
             <div className="glass-card p-4 rounded-xl border-l-4 border-accent">
                <h4 className="font-bold text-text mb-1">Performance Focused</h4>
                <p className="text-muted text-sm">Always optimizing for speed and accessibility.</p>
             </div>
          </div>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6">
          {aboutInfo.stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-card p-8 rounded-3xl text-center lg:text-left relative overflow-hidden group"
            >
              <div className="relative z-10">
                <h3 className="text-4xl md:text-5xl font-black text-accent mb-2">{stat.value}</h3>
                <p className="text-muted font-medium uppercase tracking-wider text-sm">{stat.label}</p>
              </div>
              
              {/* Decorative Gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-accent/10 transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
