"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { siteConfig, navLinks } from "@/data/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Floating capsule — visible before scroll */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={
          scrolled
            ? { y: -120, opacity: 0, pointerEvents: "none" }
            : { y: 0, opacity: 1 }
        }
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
      >
        <nav className="flex items-center gap-3 sm:gap-6 px-4 sm:px-6 py-2.5 sm:py-3 bg-white/70 backdrop-blur-xl border border-gray-200/40 rounded-full shadow-lg shadow-gray-200/20">
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="hidden md:block px-4 py-1.5 text-sm font-medium text-white bg-gray-900 rounded-full hover:bg-gray-800 transition-colors"
          >
            Contact
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1 text-gray-600 hover:text-gray-900"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-3 mx-4 md:hidden bg-white/90 backdrop-blur-xl border border-gray-200/40 rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="py-4 px-5 space-y-3">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-block px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-full hover:bg-gray-800 transition-colors"
                >
                  Contact me
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Top bar — visible after scroll */}
      <motion.header
        initial={{ y: -100, opacity: 0, pointerEvents: "none" }}
        animate={
          scrolled
            ? { y: 0, opacity: 1, pointerEvents: "auto" }
            : { y: -100, opacity: 0, pointerEvents: "none" }
        }
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/30 shadow-sm"
      >
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            <a
              href="#"
              className="text-sm font-bold text-gray-900 hover:text-gray-700 transition-colors"
            >
              {siteConfig.name}
            </a>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="px-4 py-1.5 text-sm font-medium text-white bg-gray-900 rounded-full hover:bg-gray-800 transition-colors"
              >
                Contact
              </a>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-gray-900"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </motion.header>
    </>
  );
}
