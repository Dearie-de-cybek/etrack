"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (d = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: d },
  }),
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">

      {/* ── Animated blobs ── */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 640,
          height: 640,
          top: "5%",
          left: "-12%",
          background: "radial-gradient(circle, rgba(68,213,204,0.32) 0%, transparent 68%)",
          filter: "blur(72px)",
          zIndex: 1,
        }}
        animate={{ x: [0, 90, -50, 110, 0], y: [0, -70, 90, -40, 0], scale: [1, 1.12, 0.88, 1.08, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 520,
          height: 520,
          top: "8%",
          right: "-8%",
          background: "radial-gradient(circle, rgba(255,101,0,0.22) 0%, transparent 68%)",
          filter: "blur(72px)",
          zIndex: 1,
        }}
        animate={{ x: [0, -110, 70, -90, 0], y: [0, 90, -60, 70, 0], scale: [1, 0.82, 1.18, 0.93, 1] }}
        transition={{ duration: 19, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      />
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 420,
          height: 420,
          top: "45%",
          left: "35%",
          background: "radial-gradient(circle, rgba(255,101,0,0.18) 0%, transparent 68%)",
          filter: "blur(60px)",
          zIndex: 1,
        }}
        animate={{ x: [0, 70, -90, 50, 0], y: [0, -50, 70, -25, 0], scale: [1, 1.2, 0.85, 1.1, 1] }}
        transition={{ duration: 17, repeat: Infinity, ease: "easeInOut", delay: 7 }}
      />

      {/* ── Text area ── */}
      <div className="relative z-10 max-w-4xl mx-auto px-5 text-center pt-44 pb-16">

        {/* Badge */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="mb-6 w-fit mx-auto inline-flex items-center gap-2.5 px-1.5 py-1.5 pr-4 rounded-full text-sm font-semibold"
          style={{
            background: "linear-gradient(90deg, rgb(68,213,204), rgb(255,101,0))",
            boxShadow: "0 4px 20px rgba(255,101,0,0.3)",
            color: "#ffffff",
          }}
        >
          <span
            className="w-7 h-7 rounded-full bg-white flex items-center justify-center shrink-0 text-base"
            style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.12)" }}
          >
            🌍
          </span>
          Trusted by 12,000+ businesses across Africa
        </motion.div>

        {/* H1 */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.08}
          style={{ fontSize: 64, fontWeight: 500, lineHeight: "76.8px", color: "#0c0c0c" }}
          className="mb-5"
        >
          One App for
          <br />
          <span style={{ color: "#FF6500" }}>Every</span> Business Need
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.16}
          className="max-w-[480px] mx-auto mb-10 text-[#0c0c0c] text-base leading-relaxed"
        >
          POS, inventory, accounting, and mobile sales — all connected in real
          time. Built for SMEs, Traders, Artisans, and Cooperatives.{" "}
          <span className="font-semibold">Works offline too.</span>
        </motion.p>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.22}
          className="flex justify-center"
        >
          <a
            href="#pricing"
            className="inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full bg-[#FF6500] text-white font-semibold text-sm transition-all hover:bg-[#e55c00] active:scale-95 shadow-lg shadow-[#FF6500]/25"
          >
            Start Free Trial
            <span className="w-9 h-9 rounded-full bg-white flex items-center justify-center shrink-0">
              <ArrowRight className="w-4 h-4 text-[#FF6500]" strokeWidth={2.5} />
            </span>
          </a>
        </motion.div>
      </div>

      {/* ── Dashboard — teal+orange bg, no height cap ── */}
      <div
        className="relative z-10"
        style={{
          backgroundImage: "url('/assets/asset 68.png')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        {/* White gradient bleeding into image from top */}
        <div
          className="absolute top-0 left-0 right-0 pointer-events-none z-10"
          style={{ height: "100px", background: "linear-gradient(to bottom, #ffffff 0%, transparent 100%)" }}
        />

        {/* Dashboard card — full width, no px clipping */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          className="relative z-20 max-w-6xl mx-auto px-4 pt-12"
        >
          <div
            style={{
              padding: "5px",
              borderRadius: "24px",
              background: "rgba(255,255,255,0.2)",
              border: "2px solid rgba(255,255,255,0.65)",
            }}
          >
            <div
              style={{
                borderRadius: "20px",
                border: "2px solid rgba(255,255,255,0.9)",
                overflow: "hidden",
                boxShadow: "0 32px 100px rgba(0,0,0,0.22)",
              }}
            >
              <img
                src="/assets/asset 4.webp"
                alt="eTrack Dashboard"
                className="w-full block"
                style={{ display: "block", minHeight: 0 }}
              />
            </div>
          </div>
        </motion.div>

        {/* White blur dissolve at the very bottom of the hero */}
        <div
          className="absolute bottom-0 left-0 right-0 pointer-events-none z-30"
          style={{
            height: "160px",
            background: "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.5) 55%, #ffffff 100%)",
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
            maskImage: "linear-gradient(to bottom, transparent 0%, black 60%)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 60%)",
          }}
        />
      </div>
    </section>
  );
}
