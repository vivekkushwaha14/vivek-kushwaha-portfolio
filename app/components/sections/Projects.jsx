"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { projects } from "@/app/data/portfolio";
import { ExternalLink, X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import { GitHubSVG } from "../ui/Icons";
import SectionWrapper from "../ui/SectionWrapper";

const ProjectCard = ({ project, index, onImageClick }) => {
  const [currentImg, setCurrentImg] = useState(0);

  const nextImg = (e) => {
    e.stopPropagation();
    setCurrentImg((prev) => (prev + 1) % project.images.length);
  };

  const prevImg = (e) => {
    e.stopPropagation();
    setCurrentImg((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: index * 0.2 }}
      className="glass-card rounded-3xl overflow-hidden group flex flex-col h-full hover:shadow-2xl hover:shadow-accent/5 transition-all duration-500"
    >
      {/* Project Image Carousel */}
      <div className="relative overflow-hidden bg-secondary/50 border-b border-accent/10">
        <div 
          className={`relative cursor-zoom-in ${project.isApp ? "aspect-[9/16] max-h-[500px] mx-auto" : "aspect-video"}`}
          onClick={() => onImageClick(project.images[currentImg])}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImg}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-full"
            >
              <Image 
                src={project.images[currentImg]} 
                alt={`${project.title} screenshot ${currentImg + 1}`}
                fill
                className={`${project.isApp ? "object-contain" : "object-cover"} group-hover:scale-105 transition-transform duration-700`}
              />
            </motion.div>
          </AnimatePresence>
          
          {/* Overlay info */}
          <div className="absolute top-4 right-4 bg-background/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-accent border border-accent/20 z-10">
            {currentImg + 1} / {project.images.length}
          </div>
        </div>

        {/* Carousel Controls */}
        {project.images.length > 1 && (
          <>
            <button 
              onClick={prevImg}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/10 backdrop-blur-md rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-accent hover:text-background z-20"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={nextImg}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/10 backdrop-blur-md rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-accent hover:text-background z-20"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-2xl font-bold text-text group-hover:text-accent transition-colors">
              {project.title}
            </h3>
            {project.isApp && (
              <span className="text-[10px] uppercase tracking-widest font-black text-accent mt-1 block">Mobile Application</span>
            )}
          </div>
        </div>
        
        <p className="text-muted mb-6 leading-relaxed flex-grow">
          {project.description}
        </p>
        <p className="text-muted mb-6 leading-relaxed flex-grow">
          {project.features.map((feature, idx) => (
            <span key={idx} className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 bg-accent rounded-full inline-block"></span>
              {feature}
            </span>
          ))}
        </p>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-accent/5 border border-accent/10 rounded-full text-accent text-xs font-bold"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4 pt-4 border-t border-accent/10">
           <a 
             href={project.liveUrl} 
             target="_blank"
             rel="noopener noreferrer"
             className="flex-1 text-center py-3 bg-accent text-background rounded-xl font-bold text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
           >
             Live Demo <ExternalLink size={16} />
           </a>
           <a 
             href={project.githubUrl}
             target="_blank"
             rel="noopener noreferrer"
             className="flex-1 text-center py-3 border border-accent/10 rounded-xl font-bold text-sm hover:bg-accent/5 transition-colors flex items-center justify-center gap-2"
           >
             <GitHubSVG size={18} /> GitHub
           </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <SectionWrapper id="projects" title="Featured Projects" subtitle="A showcase of some of my recent work.">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            index={index} 
            onImageClick={setSelectedImage} 
          />
        ))}
      </div>

      {/* Lightbox / Popout Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/95 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full h-full max-h-[90vh] overflow-hidden shadow-2xl rounded-3xl border border-accent/20 bg-background/50"
              onClick={(e) => e.stopPropagation()}
            >
              <Image 
                src={selectedImage} 
                alt="Project Preview" 
                fill 
                className="object-contain"
                priority
              />
              <button
                className="absolute top-6 right-6 p-2 bg-accent text-background rounded-full hover:scale-110 transition-transform z-10"
                onClick={() => setSelectedImage(null)}
              >
                <X size={24} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
};

export default Projects;
