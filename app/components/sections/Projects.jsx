"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { projects } from "@/app/data/portfolio";
import {
  ExternalLink,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
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
    setCurrentImg(
      (prev) => (prev - 1 + project.images.length) % project.images.length,
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.45, delay: index * 0.1 }}
      className="glass-card group rounded-2xl overflow-hidden flex flex-col h-full hover:-translate-y-1"
    >
      {/* Project Image Carousel */}
      <div className="relative overflow-hidden bg-secondary border-b border-[#e5e7eb] group">
        <div
          className={`relative cursor-zoom-in ${project.isApp ? "aspect-[9/16] max-h-[500px] mx-auto" : "aspect-video"}`}
          onClick={() => onImageClick(project, currentImg)}
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
                sizes="(max-width: 768px) 100vw, 50vw"
                className={`${project.isApp ? "object-contain" : "object-cover"} group-hover:scale-[1.02] transition-transform duration-500`}
              />
            </motion.div>
          </AnimatePresence>

          {/* Overlay info */}
          <div className="absolute top-4 right-4 bg-white/95 px-3 py-1 rounded-md text-[10px] font-semibold text-text border border-[#e5e7eb] z-10">
            {currentImg + 1} / {project.images.length}
          </div>
        </div>

        {/* Carousel Controls */}
        {project.images.length > 1 && (
          <>
            <button
              onClick={prevImg}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full text-text opacity-0 group-hover:opacity-100 transition-opacity hover:bg-text hover:text-white z-50 cursor-pointer border border-[#e5e7eb]"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextImg}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full text-text opacity-0 group-hover:opacity-100 transition-opacity hover:bg-text hover:text-white z-50 cursor-pointer border border-[#e5e7eb]"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}
      </div>

      {/* Content */}
      <div className="p-7 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight text-text">
              {project.title}
            </h3>
            {project.isApp && (
              <span className="text-[10px] uppercase tracking-widest font-semibold text-muted mt-1 block">
                Mobile Application
              </span>
            )}
          </div>
        </div>

        <p className="text-muted mb-6 leading-relaxed flex-grow">
          {project.description}
        </p>
        <div className="mb-6 space-y-2">
          {project.features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-2 text-muted">
              <span className="w-2 h-2 bg-accent rounded-full"></span>
              <span>{feature}</span>
            </div>
          ))}
        </div>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-secondary border border-[#e5e7eb] rounded-md text-text text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 pt-5 border-t border-[#e5e7eb]">
          {project.getApk && (
            <a
              href={project.getApk}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-3 bg-text text-white rounded-lg font-semibold text-sm hover:bg-black/80 transition-colors flex items-center justify-center gap-2"
            >
              Get APK <ExternalLink size={16} />
            </a>
          )}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${project.liveUrl !== "#" ? "flex-1" : "w-full"} text-center py-3 border border-[#e5e7eb] rounded-lg font-semibold text-sm hover:border-text transition-colors flex items-center justify-center gap-2`}
          >
            <GitHubSVG size={18} /> GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const nextModalImage = () => {
    if (!selectedProject) return;

    setSelectedIndex((prev) => (prev + 1) % selectedProject.images.length);
  };

  const prevModalImage = () => {
    if (!selectedProject) return;

    setSelectedIndex(
      (prev) =>
        (prev - 1 + selectedProject.images.length) %
        selectedProject.images.length,
    );
  };
  return (
    <SectionWrapper
      id="projects"
      title="Featured Projects"
      subtitle="A showcase of some of my recent work."
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            onImageClick={(project, imageIndex) => {
              setSelectedProject(project);
              setSelectedIndex(imageIndex);
            }}
          />
        ))}
      </div>

      {/* Lightbox / Popout Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 12, opacity: 0 }}
              className="relative max-w-5xl w-full h-full max-h-[90vh] overflow-hidden rounded-2xl border border-[#e5e7eb] bg-white"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Previous */}
              <button
              onClick={(e) => {
  e.stopPropagation();
  prevModalImage();
}}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-text text-white p-3 rounded-full hover:bg-black/80 transition-colors"
              >
                <ChevronLeft size={24} />
              </button>

              <Image
                src={selectedProject.images[selectedIndex]}
                alt="Project Preview"
                fill
                className="object-contain"
                priority
              />

              {/* Next */}
              <button
               onClick={(e) => {
  e.stopPropagation();
  nextModalImage();
}}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-text text-white p-3 rounded-full hover:bg-black/80 transition-colors"
              >
                <ChevronRight size={24} />
              </button>

              {/* Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-full text-sm font-semibold z-20 border border-[#e5e7eb]">
                {selectedIndex + 1} / {selectedProject.images.length}
              </div>

              {/* Close */}
              <button
                className="absolute top-6 right-6 p-2 bg-text text-white rounded-full hover:bg-black/80 transition-colors z-20"
                onClick={() => setSelectedProject(null)}
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
