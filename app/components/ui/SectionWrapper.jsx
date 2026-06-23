"use client";

import { motion } from "framer-motion";
import { cn } from "@/app/lib/utils";

const SectionWrapper = ({ children, id, className, title, subtitle }) => {
  return (
    <section id={id} className={cn("py-24 px-6 md:px-12 lg:px-24 md:py-28", className)}>
      <div className="max-w-7xl mx-auto">
        {(title || subtitle) && (
          <div className="mb-16 text-center">
            {title && (
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl font-semibold tracking-tight text-text mb-5"
              >
                {title}
              </motion.h2>
            )}
            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-muted text-lg leading-relaxed max-w-2xl mx-auto"
              >
                {subtitle}
              </motion.p>
            )}
            <motion.div
              initial={{ opacity: 0, scaleX: 0.6 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="h-px w-12 bg-accent mx-auto mt-6"
            />
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
