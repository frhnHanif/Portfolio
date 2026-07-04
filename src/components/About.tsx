"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { siteConfig } from "@/data/site";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50/60 via-white to-gray-100/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
            About
          </h2>

          <p className="text-gray-600 leading-relaxed text-base sm:text-lg mb-10">
            {siteConfig.aboutSummary}
          </p>

          {/* Education */}
          <div className="flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-200/50 shadow-sm">
            <div className="p-2 bg-gray-100 rounded-lg shrink-0">
              <GraduationCap size={20} className="text-gray-700" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">
                {siteConfig.education.degree}
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                {siteConfig.education.university}
              </p>
              <div className="flex flex-wrap gap-3 mt-2 text-sm text-gray-400">
                <span>{siteConfig.education.period}</span>
                <span className="text-gray-300">•</span>
                <span className="font-medium text-gray-600">
                  GPA: {siteConfig.education.gpa}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
