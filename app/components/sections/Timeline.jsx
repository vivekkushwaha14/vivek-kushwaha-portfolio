"use client";

import { motion } from "framer-motion";
import { timeline } from "@/app/data/portfolio";
import SectionWrapper from "../ui/SectionWrapper";

const Timeline = () => {
  return (
    <SectionWrapper id="journey" title="Learning Journey" subtitle="My path as a developer so far.">
      <div className="relative max-w-4xl mx-auto">
        {/* Central Line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-[#e5e7eb] -translate-x-1/2 hidden md:block" />
        <div className="absolute left-4 top-0 bottom-0 w-px bg-[#e5e7eb] md:hidden" />

        <div className="space-y-12">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`relative flex items-center justify-between w-full mb-8 ${
                index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
              }`}
            >
              <div className="hidden md:block w-5/12" />

              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-background border-2 border-text rounded-full -translate-x-1/2 z-10 flex items-center justify-center">
                 <div className="w-2 h-2 bg-text rounded-full" />
              </div>

              {/* Card */}
              <div className="w-full md:w-5/12 pl-12 md:pl-0">
                <div className={`glass-card p-6 rounded-2xl ${
                  index % 2 === 0 ? "md:text-left" : "md:text-right"
                }`}>
                  <span className="text-text font-semibold text-xl mb-1 block">
                    {item.year}
                  </span>
                  <h3 className="text-xl font-bold text-text mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Timeline;
