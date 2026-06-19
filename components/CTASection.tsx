"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

/* ── Fake eTrack widget cards that peek in from the sides ── */
function LeftCards() {
  return (
    <div className="absolute left-0 top-0 bottom-0 w-64 flex flex-col items-start justify-center gap-4 pl-8 pointer-events-none">
      {/* Revenue card */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        style={{
          background: "#ffffff",
          borderRadius: 16,
          padding: "14px 18px",
          boxShadow: "0 8px 28px rgba(0,0,0,0.10)",
          width: 190,
          transform: "rotate(-4deg)",
        }}
      >
        <p style={{ fontSize: 11, color: "#888", fontWeight: 500, marginBottom: 4 }}>Today&apos;s Revenue</p>
        <p style={{ fontSize: 22, fontWeight: 700, color: "#0c0c0c", marginBottom: 6 }}>₦128,500</p>
        <span style={{ fontSize: 11, fontWeight: 600, color: "#22c55e", background: "rgba(34,197,94,0.1)", padding: "2px 8px", borderRadius: 20 }}>
          ● +18% vs yesterday
        </span>
      </motion.div>

      {/* Inventory card */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        style={{
          background: "#ffffff",
          borderRadius: 16,
          padding: "14px 18px",
          boxShadow: "0 8px 28px rgba(0,0,0,0.10)",
          width: 180,
          transform: "rotate(-2deg) translateX(16px)",
        }}
      >
        <div className="flex items-center justify-between mb-1">
          <p style={{ fontSize: 11, color: "#888", fontWeight: 500 }}>Inventory</p>
          <span style={{ fontSize: 11, color: "#44D5CC" }}>↗</span>
        </div>
        <p style={{ fontSize: 20, fontWeight: 700, color: "#0c0c0c", marginBottom: 4 }}>842 items</p>
        <p style={{ fontSize: 11, color: "#888" }}>12 added today</p>
      </motion.div>
    </div>
  );
}

function RightCard() {
  return (
    <div className="absolute right-0 top-0 bottom-0 w-64 flex items-center justify-end pr-8 pointer-events-none">
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        style={{
          background: "#ffffff",
          borderRadius: 18,
          padding: "18px 20px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
          width: 210,
          transform: "rotate(3deg)",
        }}
      >
        <p style={{ fontSize: 11, color: "#888", fontWeight: 500, marginBottom: 2 }}>New Sale</p>
        <p style={{ fontSize: 26, fontWeight: 700, color: "#0c0c0c", marginBottom: 12 }}>₦24,800</p>

        <p style={{ fontSize: 11, color: "#aaa", marginBottom: 4 }}>Pay With</p>
        <div
          className="flex items-center gap-2 rounded-xl px-3 py-2 mb-12"
          style={{ background: "#F5F5F5" }}
        >
          <span style={{ fontSize: 13, fontWeight: 600, color: "#0c0c0c" }}>•••• 8345</span>
        </div>

        <div
          className="w-full text-center rounded-xl py-2.5"
          style={{ background: "#FF6500" }}
        >
          <span style={{ fontSize: 13, fontWeight: 600, color: "#ffffff" }}>Process Payment</span>
        </div>
      </motion.div>
    </div>
  );
}

export default function CTASection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-[40px] overflow-hidden"
          style={{
            background:
              "linear-gradient(to right, rgba(68,213,204,0.28) 0%, rgba(248,248,248,1) 36%, rgba(248,248,248,1) 64%, rgba(255,101,0,0.22) 100%)",
            minHeight: 360,
          }}
        >
          {/* Side widget cards */}
          <LeftCards />
          <RightCard />

          {/* Center content */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center px-8 py-20">
            {/* Tag */}
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6"
              style={{
                background: "rgba(255,101,0,0.08)",
                border: "1px solid rgba(255,101,0,0.2)",
              }}
            >
              <Sparkles style={{ width: 13, height: 13, color: "#FF6500" }} />
              <span style={{ fontSize: 12, fontWeight: 700, color: "#FF6500", letterSpacing: "0.1em" }}>
                GET STARTED
              </span>
            </div>

            {/* Heading */}
            <h2
              style={{
                fontSize: 48,
                fontWeight: 700,
                lineHeight: "56px",
                color: "#0c0c0c",
                marginBottom: 16,
                maxWidth: 520,
              }}
            >
              Ready to Grow Your{" "}
              <span style={{ color: "#FF6500" }}>Business?</span>
            </h2>

            {/* Subtitle */}
            <p
              style={{
                fontSize: 15,
                color: "#666666",
                lineHeight: "24px",
                marginBottom: 36,
                maxWidth: 420,
              }}
            >
              Join 12,000+ businesses already using eTrack to sell faster, track
              stock in real time, and grow with confidence.
            </p>

            {/* CTA button */}
            <a
              href="#pricing"
              className="inline-flex items-center gap-3 pl-7 pr-2 py-2 rounded-full transition-opacity hover:opacity-90 shadow-lg"
              style={{
                background: "#FF6500",
                boxShadow: "0 8px 28px rgba(255,101,0,0.30)",
              }}
            >
              <span style={{ color: "#ffffff", fontWeight: 600, fontSize: 15 }}>
                Start Free Trial
              </span>
              <span
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0"
              >
                <ArrowRight style={{ width: 16, height: 16, color: "#FF6500" }} />
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
