"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { projects } from "@/data/projects";

const CARD_WIDTH = 370; // mobile
const CARD_WIDTH_SM = 500; // desktop
const GAP = 20; // gap between cards (gap-5 = 20px)

export default function Projects() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [paddingLeft, setPaddingLeft] = useState(16);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScroll, { passive: true });

    // Calculate initial left padding to center cards
    const calcPadding = () => {
      if (!el) return;
      const isSm = window.innerWidth >= 640;
      const cardW = isSm ? CARD_WIDTH_SM : CARD_WIDTH;
      const totalCardsWidth = projects.length * cardW + (projects.length - 1) * GAP;
      const containerWidth = el.clientWidth;
      if (totalCardsWidth < containerWidth) {
        setPaddingLeft((containerWidth - totalCardsWidth) / 2);
      } else {
        setPaddingLeft(isSm ? 24 : 16);
      }
    };

    calcPadding();
    window.addEventListener("resize", calcPadding);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", calcPadding);
    };
  }, []);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const isSm = window.innerWidth >= 640;
    const w = isSm ? CARD_WIDTH_SM : CARD_WIDTH;
    el.scrollBy({ left: dir === "left" ? -(w + GAP) : w + GAP, behavior: "smooth" });
  };

  return (
    <section id="projects" className="py-16 sm:py-24 bg-white overflow-hidden">
      <div className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto mb-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl font-bold text-gray-900"
        >
          Projects
        </motion.h2>
      </div>

      <div className="relative">
        {canScrollLeft && (
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        )}
        {canScrollRight && (
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-transparent via-white/80 to-white z-10 pointer-events-none" />
        )}

        <button
          onClick={() => scroll("left")}
          className={`absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/90 backdrop-blur rounded-full shadow-lg border border-gray-200/50 flex items-center justify-center hover:bg-white transition-all ${
            canScrollLeft ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          aria-label="Scroll left"
        >
          <ChevronLeft size={18} className="text-gray-700" />
        </button>
        <button
          onClick={() => scroll("right")}
          className={`absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/90 backdrop-blur rounded-full shadow-lg border border-gray-200/50 flex items-center justify-center hover:bg-white transition-all ${
            canScrollRight ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          aria-label="Scroll right"
        >
          <ChevronRight size={18} className="text-gray-700" />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-4 sm:gap-5 overflow-x-auto scroll-smooth pb-4 snap-x snap-mandatory"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            paddingLeft,
            paddingRight: paddingLeft,
            scrollPaddingInline: paddingLeft,
          }}
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group shrink-0 w-[370px] sm:w-[500px] snap-center"
            >
              <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-[16/9] bg-gray-100 relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-600"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />

                  <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/95 backdrop-blur rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all"
                      >
                        <ExternalLink size={16} className="text-gray-700" />
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/95 backdrop-blur rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                      </a>
                    )}
                  </div>
                </div>

                <div className="p-5 sm:p-6">
                  <h4 className="font-semibold text-gray-900 text-base sm:text-lg mb-1.5">
                    {project.title}
                  </h4>
                  <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed mb-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs text-gray-400 bg-gray-100 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
