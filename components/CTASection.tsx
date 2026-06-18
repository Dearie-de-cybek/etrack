"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function CTASection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email) setSubmitted(true);
  }

  return (
    <section className="py-24 relative overflow-hidden" style={{ background: "#3D1800" }}>
      {/* Gradient blob top-left */}
      <div
        className="absolute top-0 left-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: "radial-gradient(circle at 0% 0%, rgba(68,213,204,0.15) 0%, transparent 65%)",
        }}
      />
      {/* Gradient blob bottom-right */}
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: "radial-gradient(circle at 100% 100%, rgba(255,101,0,0.2) 0%, transparent 65%)",
        }}
      />

      {/* Top divider */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(255,101,0,0.4), transparent)" }}
      />

      <div className="relative max-w-3xl mx-auto px-5 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            className="pill-orange mb-6 w-fit mx-auto"
            style={{
              background: "rgba(255,101,0,0.15)",
              borderColor: "rgba(255,101,0,0.3)",
              color: "#FF9955",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6500] animate-pulse shrink-0" />
            Free forever • No credit card needed
          </div>

          <h2
            className="mb-5"
            style={{
              fontSize: 56,
              fontWeight: 500,
              lineHeight: "67.2px",
              color: "#ffffff",
              fontFamily: "var(--font-sans)",
            }}
          >
            Start selling smarter{" "}
            <span className="gradient-text">today</span>
          </h2>

          <p className="mb-10 max-w-md mx-auto" style={{ color: "rgba(255,255,255,0.5)", fontSize: 16, lineHeight: "24px" }}>
            Join 12,000+ businesses already using eTrack to sell, track, and grow. Set up takes under 10 minutes.
          </p>

          {/* Form */}
          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-8"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 px-4 py-3.5 rounded-xl text-sm outline-none transition-all"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "#ffffff",
                  fontFamily: "var(--font-sans)",
                }}
              />
              <button
                type="submit"
                className="px-6 py-3.5 rounded-xl text-white font-semibold text-sm transition-all active:scale-95 inline-flex items-center gap-2 whitespace-nowrap gradient-bg hover:opacity-90 shadow-lg"
              >
                Get Started Free
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          ) : (
            <div
              className="flex items-center justify-center gap-2 p-4 rounded-xl max-w-md mx-auto mb-8"
              style={{ background: "rgba(68,213,204,0.1)", border: "1px solid rgba(68,213,204,0.25)" }}
            >
              <CheckCircle2 className="w-5 h-5 text-[#44D5CC]" />
              <p className="text-sm font-medium" style={{ color: "#44D5CC" }}>
                You're in! Check your inbox for your login link.
              </p>
            </div>
          )}

          {/* Trust signals */}
          <div className="flex flex-wrap items-center justify-center gap-5 text-sm" style={{ color: "rgba(255,255,255,0.35)" }}>
            {["Free Starter plan forever", "No credit card required", "Setup in 10 minutes"].map((item) => (
              <span key={item} className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" style={{ color: "rgba(68,213,204,0.7)" }} />
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
