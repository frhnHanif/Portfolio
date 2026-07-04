"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import {
  technicalSkills,
  toolsAndLanguages,
  certifications,
} from "@/data/skills";

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, delay: i * 0.05 },
  }),
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-bl from-gray-50/40 via-white to-gray-100/20">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl font-bold text-gray-900 mb-12"
        >
          Skills & Certifications
        </motion.h2>

        {/* Technical Skills */}
        <div className="mb-10">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
            {technicalSkills[0].category}
          </h3>
          <div className="flex flex-wrap gap-2">
            {technicalSkills[0].items.map((skill, i) => (
              <motion.span
                key={skill}
                custom={i}
                variants={badgeVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="px-3 py-1.5 text-sm text-gray-700 bg-white border border-gray-200 rounded-full shadow-sm hover:shadow transition-shadow"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Tools & Languages */}
        <div className="mb-10">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
            {toolsAndLanguages[0].category}
          </h3>
          <div className="flex flex-wrap gap-2">
            {toolsAndLanguages[0].items.map((skill, i) => (
              <motion.span
                key={skill}
                custom={i + 10}
                variants={badgeVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="px-3 py-1.5 text-sm font-medium text-gray-900 bg-gray-100 border border-gray-200 rounded-full shadow-sm hover:shadow transition-shadow"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Award size={18} className="text-gray-500" />
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
              Certifications
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.name}
                custom={i}
                variants={badgeVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200/50 shadow-sm"
              >
                <Award size={16} className="text-gray-400 shrink-0" />
                <div>
                  <p className="text-sm font-medium text-gray-800">
                    {cert.name}
                  </p>
                  <p className="text-xs text-gray-400">{cert.issuer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
