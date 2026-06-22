"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Award, X } from "lucide-react";
import { certificates } from "@/app/data/portfolio";
import SectionWrapper from "../ui/SectionWrapper";

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <>
      {" "}
      <SectionWrapper
        id="certificates"
        title="Certificates"
        subtitle="Formal recognition of my skills and learning."
        className="bg-secondary/20"
      >
        {" "}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              onClick={() => setSelectedCert(cert)}
              className="glass-card rounded-2xl overflow-hidden cursor-pointer group hover:-translate-y-1"
            >
              {" "}
              <div className="relative h-56 w-full">
                {" "}
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-cover"
                />{" "}
              </div>
              <div className="p-6">
                <div className="mb-4 inline-flex p-3 rounded-lg bg-accent/10 text-accent">
                  <Award size={24} />
                </div>

                <h3 className="text-xl font-bold mb-2">{cert.title}</h3>

                <p className="text-muted text-sm">{cert.issuer}</p>

                <p className="text-accent text-xs font-bold mt-2">
                  {cert.date}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="fixed inset-0 z-[9999] bg-black/85 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              className="relative max-w-5xl w-full"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute -top-12 right-0 text-white"
              >
                <X size={32} />
              </button>

              <div className="relative w-full h-[80vh]">
                <Image
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  fill
                  className="object-contain rounded-xl"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
