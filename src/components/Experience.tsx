"use client";

import { motion } from "framer-motion";
import { Briefcase, Users } from "lucide-react";
import { workExperience, organizationExperience } from "@/data/experience";

const timelineItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, delay: i * 0.1 },
  }),
};

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl font-bold text-gray-900 mb-12"
        >
          Experience
        </motion.h2>

        {/* Work Experience */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Briefcase size={18} className="text-gray-500" />
            <h3 className="text-lg font-semibold text-gray-800">
              Work Experience
            </h3>
          </div>
          <div className="relative border-l-2 border-gray-200 pl-6 space-y-8">
            {workExperience.map((exp, i) => (
              <motion.div
                key={exp.id}
                custom={i}
                variants={timelineItemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="relative"
              >
                <div className="absolute -left-[31px] w-3 h-3 bg-gray-900 rounded-full border-2 border-white" />
                <div className="bg-white p-5 rounded-xl border border-gray-200/50 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                    <h4 className="font-semibold text-gray-900">
                      {exp.title}
                    </h4>
                    <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
                      {exp.startDate} — {exp.endDate}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500">{exp.organization}</p>
                  {exp.description && (
                    <p className="text-sm text-gray-400 mt-2 leading-relaxed">
                      {exp.description}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Organization Experience */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Users size={18} className="text-gray-500" />
            <h3 className="text-lg font-semibold text-gray-800">
              Organization
            </h3>
          </div>
          <div className="relative border-l-2 border-gray-200 pl-6 space-y-8">
            {organizationExperience.map((exp, i) => (
              <motion.div
                key={exp.id}
                custom={i + workExperience.length}
                variants={timelineItemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="relative"
              >
                <div className="absolute -left-[31px] w-3 h-3 bg-gray-400 rounded-full border-2 border-white" />
                <div className="bg-white p-5 rounded-xl border border-gray-200/50 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                    <h4 className="font-semibold text-gray-900">
                      {exp.title}
                    </h4>
                    <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
                      {exp.startDate} — {exp.endDate}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500">{exp.organization}</p>
                  {exp.description && (
                    <p className="text-sm text-gray-400 mt-2">{exp.description}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
