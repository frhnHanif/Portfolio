"use client";

import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import { honors } from "@/data/experience";

export default function Honors() {
  return (
    <section id="honors" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50/50 via-white to-gray-100/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
            Honors & Awards
          </h2>

          <div className="space-y-3">
            {honors.map((honor, i) => (
              <motion.div
                key={honor.title + honor.year}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
                className="flex items-start gap-3 p-4 bg-white rounded-lg border border-gray-200/50 shadow-sm"
              >
                <Trophy
                  size={18}
                  className="text-yellow-500 shrink-0 mt-0.5"
                />
                <div>
                  <p className="text-sm font-medium text-gray-800">
                    {honor.title}
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">
                    {honor.event} — {honor.year}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
