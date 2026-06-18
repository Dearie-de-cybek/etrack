"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

function AnimatedNumber({ value, prefix = "", suffix = "", decimals = 0 }: {
  value: number; prefix?: string; suffix?: string; decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { stiffness: 55, damping: 18, mass: 1 });

  useEffect(() => { if (inView) mv.set(value); }, [inView, mv, value]);

  useEffect(() => {
    return spring.on("change", (v) => {
      if (ref.current) ref.current.textContent = prefix + v.toFixed(decimals) + suffix;
    });
  }, [spring, prefix, suffix, decimals]);

  return <span ref={ref}>{prefix}0{suffix}</span>;
}

const stats = [
  { value: 12000, prefix: "", suffix: "+", label: "Businesses Onboarded", sub: "SMEs, Traders & Cooperatives" },
  { value: 4.2, prefix: "₦", suffix: "B+", label: "Total Processed", sub: "In transactions to date", decimals: 1 },
  { value: 99.9, prefix: "", suffix: "%", label: "Uptime Guarantee", sub: "Monitored 24/7", decimals: 1 },
  { value: 18, prefix: "", suffix: "+", label: "Countries Active", sub: "Across Africa & beyond" },
];

export default function Stats() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(180deg, #ffffff 0%, #FFF0E8 100%)" }}>
      <div className="max-w-7xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          <h2
            style={{ fontSize: 44, fontWeight: 500, lineHeight: "52px", color: "#0c0c0c", fontFamily: "var(--font-sans)" }}
            className="mb-3"
          >
            Numbers that <span className="gradient-text">speak for themselves</span>
          </h2>
          <p className="body-text">Real results from real businesses using eTrack.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#E8E8E8] rounded-2xl overflow-hidden border border-[#E8E8E8]">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="bg-white px-8 py-10 text-center"
            >
              <div
                className="text-5xl font-black mb-2 gradient-text"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                <AnimatedNumber
                  value={s.value}
                  prefix={s.prefix}
                  suffix={s.suffix}
                  decimals={s.decimals ?? 0}
                />
              </div>
              <p
                className="text-base font-semibold mb-1"
                style={{ color: "#0c0c0c", fontFamily: "var(--font-sans)" }}
              >
                {s.label}
              </p>
              <p className="text-sm text-[#999999]">{s.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
