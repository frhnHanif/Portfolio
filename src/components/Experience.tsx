"use client";

import Image from "next/image";
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
    <section id="experience" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
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
                <div className="absolute -left-[26px] sm:-left-[31px] w-3 h-3 bg-gray-900 rounded-full border-2 border-white" />
                <div className="bg-white p-4 sm:p-5 rounded-xl border border-gray-200/50 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    {exp.logo && (
                      <div className="w-9 h-9 sm:w-10 sm:h-10 shrink-0 overflow-hidden">
                        <Image
                          src={exp.logo}
                          alt={exp.organization}
                          width={40}
                          height={40}
                          className="object-contain"
                        />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">
                      {exp.title}
                    </h4>
                    <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full shrink-0">
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
                  </div>
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
          <div className="relative border-l-2 border-gray-200 pl-5 sm:pl-6 space-y-6 sm:space-y-8">
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
                <div className="absolute -left-[26px] sm:-left-[31px] w-3 h-3 bg-gray-400 rounded-full border-2 border-white" />
                <div className="bg-white p-4 sm:p-5 rounded-xl border border-gray-200/50 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    {exp.logo && (
                      <div className="w-9 h-9 sm:w-10 sm:h-10 shrink-0 overflow-hidden">
                        <Image
                          src={exp.logo}
                          alt={exp.organization}
                          width={40}
                          height={40}
                          className="object-contain"
                        />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">
                      {exp.title}
                    </h4>
                    <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full shrink-0">
                      {exp.startDate} — {exp.endDate}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500">{exp.organization}</p>
                  {exp.description && (
                    <p className="text-sm text-gray-400 mt-2">{exp.description}</p>
                  )}
                    </div>
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
