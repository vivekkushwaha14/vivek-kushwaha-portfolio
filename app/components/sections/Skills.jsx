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
      className="bg-secondary border-y border-[#f3f4f6]"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((category, catIndex) => {
          const Icon = category.icon;
          return (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="glass-card p-7 rounded-2xl group"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-7">
                <div className="p-3 bg-secondary rounded-xl text-text group-hover:bg-text group-hover:text-white transition-colors">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-text">{category.category}</h3>
              </div>

              {/* Skills List */}
              <div className="flex flex-wrap gap-3">
                {category.items.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, y: 6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: (catIndex * 0.1) + (index * 0.05) }}
                    className="px-3.5 py-2 border border-[#e5e7eb] rounded-lg text-muted text-sm font-medium hover:border-text hover:text-text transition-colors bg-white"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>

            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default Skills;
