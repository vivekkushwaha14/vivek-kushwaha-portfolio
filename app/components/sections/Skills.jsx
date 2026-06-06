"use client";

import { motion } from "framer-motion";
import { skills } from "@/app/data/portfolio";
import SectionWrapper from "../ui/SectionWrapper";

const Skills = () => {
  return (
    <SectionWrapper 
      id="skills" 
      title="My Skills" 
      subtitle="The technologies and tools I use to bring ideas to life."
      className="bg-secondary/30"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((category, catIndex) => {
          const Icon = category.icon;
          return (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="glass-card p-8 rounded-3xl relative overflow-hidden group "
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-accent/10 rounded-2xl text-accent group-hover:bg-accent group-hover:text-background transition-all duration-300">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-text">{category.category}</h3>
              </div>

              {/* Skills List */}
              <div className="flex flex-wrap gap-3">
                {category.items.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: (catIndex * 0.1) + (index * 0.05) }}
                    className="px-4 py-2  border border-accent/10 rounded-xl text-muted text-m font-medium hover:border-accent/30 hover:text-accent transition-colors bg-accent/30"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>

              {/* Decorative Accent */}
              <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/10 transition-colors" />
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default Skills;
