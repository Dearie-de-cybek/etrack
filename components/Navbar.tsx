"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import Image from "next/image";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300"
        style={{ boxShadow: scrolled ? "0 1px 0 #F0F0F0, 0 4px 24px rgba(0,0,0,0.04)" : "0 1px 0 #F0F0F0" }}
      >
        <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center shrink-0">
            <Image
              src="/assets/etrack.svg"
              alt="eTrack"
              width={125}
              height={32}
              priority
            />
          </a>

          {/* Desktop links — right side */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-[#666666] hover:text-[#0c0c0c] rounded-lg hover:bg-[#F5F5F5] transition-all"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA — pill with arrow badge */}
          <div className="hidden md:flex items-center">
            <a
              href="#pricing"
              className="inline-flex items-center gap-3 pl-5 pr-1.5 py-1.5 rounded-full bg-[#FF6500] text-white text-sm font-semibold transition-all hover:bg-[#e55c00] active:scale-95"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Get Started
              <span className="w-9 h-9 rounded-full bg-white flex items-center justify-center shrink-0">
                <ArrowRight className="w-4 h-4 text-[#FF6500]" strokeWidth={2.5} />
              </span>
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-[#F5F5F5] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="w-5 h-5 text-[#0c0c0c]" />
            ) : (
              <Menu className="w-5 h-5 text-[#0c0c0c]" />
            )}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-x-0 top-20 z-40 bg-white border-b border-[#E8E8E8] shadow-lg md:hidden"
          >
            <div className="flex flex-col p-4 gap-1">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 rounded-xl text-sm font-medium text-[#666666] hover:text-[#0c0c0c] hover:bg-[#F8F8F8] transition-all"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-2 pt-2 border-t border-[#E8E8E8]">
                <a
                  href="#pricing"
                  className="flex items-center justify-between px-4 py-3 rounded-xl bg-[#0c0c0c] text-white text-sm font-semibold"
                >
                  Get Started
                  <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                    <ArrowRight className="w-3.5 h-3.5 text-[#0c0c0c]" />
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
