"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, MapPin } from "lucide-react";
import { siteConfig } from "@/data/site";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8 pt-16 bg-gradient-to-b from-white via-white to-gray-50/80"
    >
      <div className="max-w-5xl mx-auto w-full flex flex-col items-center sm:flex-row sm:items-center sm:justify-between gap-10 sm:gap-16">
        {/* Photo — top on mobile, right on desktop */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="sm:order-2 shrink-0"
        >
          <div className="relative w-40 h-40 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-gray-100 shadow-xl shadow-gray-200/50">
            <Image
              src={siteConfig.photo}
              alt={siteConfig.name}
              fill
              sizes="(max-width: 640px) 10rem, 14rem"
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Text — centered on mobile, left on desktop */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="sm:order-1 text-center sm:text-left"
        >
          <p className="text-sm text-gray-500 mb-4 flex items-center justify-center sm:justify-start gap-1">
            <MapPin size={14} />
            {siteConfig.location}
          </p>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            {siteConfig.name}
          </h1>

          <p className="mt-4 text-base sm:text-lg text-gray-500 leading-relaxed max-w-lg">
            {siteConfig.headline}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center sm:items-start gap-4">
            <a
              href="#projects"
              className="px-6 py-3 text-sm font-medium text-white bg-gray-900 rounded-full hover:bg-gray-800 transition-colors"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 text-sm font-medium text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={20} className="text-gray-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
