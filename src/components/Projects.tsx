"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";

const featuredProject = projects.find((p) => p.featured);
const otherProjects = projects.filter((p) => !p.featured);

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15 },
  }),
};

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl font-bold text-gray-900 mb-12"
        >
          Projects
        </motion.h2>

        <div className="space-y-4">
          {/* Top: Horizontal featured card */}
          {featuredProject && (
            <motion.div
              custom={0}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ scale: 1.01 }}
              className="group bg-white rounded-2xl border border-gray-200/60 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col sm:flex-row"
            >
              {/* Mockup — left side on desktop, top on mobile */}
              <div className="sm:w-1/2 bg-gray-100 overflow-hidden shrink-0">
                <div className="h-8 bg-gray-200/80 flex items-center px-3 gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                </div>
                <div className="aspect-[16/9] relative">
                  <img
                    src={featuredProject.image}
                    alt={featuredProject.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content — right side */}
              <div className="p-5 sm:p-6 flex flex-col justify-center flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {featuredProject.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  {featuredProject.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {featuredProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-xs text-gray-500 bg-gray-100 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  {featuredProject.link && (
                    <a
                      href={featuredProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-gray-700 hover:text-gray-900 transition-colors"
                    >
                      <ExternalLink size={14} /> Demo
                    </a>
                  )}
                  {featuredProject.github && (
                    <a
                      href={featuredProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-gray-700 hover:text-gray-900 transition-colors"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg> Source
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          )}

          {/* Bottom: Two cards side by side */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {otherProjects.map((project, i) => (
              <motion.div
                key={project.id}
                custom={i + 1}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ scale: 1.02 }}
                className="group relative bg-white rounded-2xl border border-gray-200/60 shadow-sm hover:shadow-md transition-all overflow-hidden"
              >
                {/* Mockup area */}
                <div className="relative bg-gray-100 overflow-hidden">
                  <div className="h-6 bg-gray-200/80 flex items-center px-3 gap-1">
                    <div className="w-2 h-2 rounded-full bg-red-400" />
                    <div className="w-2 h-2 rounded-full bg-yellow-400" />
                    <div className="w-2 h-2 rounded-full bg-green-400" />
                  </div>
                  <div className="aspect-[16/9] relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gray-900/0 group-hover:bg-gray-900/10 transition-colors flex items-center justify-center">
                    <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
                        >
                          <ExternalLink size={16} className="text-gray-700" />
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900">{project.title}</h3>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-1.5 py-0.5 text-[10px] text-gray-400 bg-gray-100 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="text-[10px] text-gray-400">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
