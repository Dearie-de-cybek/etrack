"use client";

import { motion } from "framer-motion";
import { Sparkles, Store, Zap, BarChart2, TrendingUp, Package, Tag, Users, Check } from "lucide-react";

/* ── Slide-in setup checklist for the tall card ── */
const checklistItems = [
  { Icon: Package, label: "240 products added",       color: "#44D5CC" },
  { Icon: Tag,     label: "Pricing rules configured", color: "#FF6500" },
  { Icon: Users,   label: "3 team members invited",   color: "#44D5CC" },
];

function SetupAnimation() {
  return (
    <div className="mt-auto pt-8 flex flex-col gap-3">
      {checklistItems.map(({ Icon, label, color }, i) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.35 + i * 0.18 }}
          className="flex items-center gap-3.5 rounded-2xl px-4 py-3.5"
          style={{ background: "#ffffff", boxShadow: "0 2px 14px rgba(0,0,0,0.07)" }}
        >
          {/* Brand-colored icon bubble */}
          <span
            className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
            style={{ background: `${color}18` }}
          >
            <Icon style={{ width: 16, height: 16, color }} />
          </span>

          <span style={{ fontSize: 14, fontWeight: 600, color: "#0c0c0c", flex: 1 }}>
            {label}
          </span>

          {/* Check badge */}
          <span
            className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
            style={{ background: `${color}20` }}
          >
            <Check style={{ width: 12, height: 12, color }} strokeWidth={3} />
          </span>
        </motion.div>
      ))}
    </div>
  );
}

/* ── Step card ── */
const steps = [
  {
    icon: Store,
    title: "Set Up Your Store",
    description:
      "Add your products, set prices, configure taxes, and invite your team. Full setup in under 10 minutes — no technical skills needed.",
    extra: <SetupAnimation />,
  },
  {
    icon: Zap,
    title: "Start Selling Everywhere",
    description:
      "Use the POS at your counter, your phone at the market, or both at once. Accept cash, card, transfer, and mobile money.",
  },
  {
    icon: BarChart2,
    title: "Track Everything Live",
    description:
      "Monitor stock levels, view daily sales, and get low-stock alerts in real time — from any device.",
  },
  {
    icon: TrendingUp,
    title: "Grow with Insights",
    description:
      "Use automated reports and purchase order tools to make smarter decisions and scale your business faster.",
  },
];

type Step = typeof steps[0];

function StepCard({
  step,
  delay,
  className = "",
  style = {},
}: {
  step: Step;
  delay: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const Icon = step.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
      className={`rounded-3xl p-7 ${className}`}
      style={{ background: "#F5F5F5", ...style }}
    >
      {/* Double-ring icon */}
      <div
        className="w-14 h-14 rounded-full flex items-center justify-center mb-6"
        style={{ background: "rgba(255,101,0,0.1)" }}
      >
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center"
          style={{ background: "rgba(255,101,0,0.18)" }}
        >
          <Icon style={{ width: 18, height: 18, color: "#FF6500" }} />
        </div>
      </div>

      <h3 className="text-xl font-bold mb-2" style={{ color: "#0c0c0c" }}>
        {step.title}
      </h3>
      <p className="text-sm leading-relaxed" style={{ color: "#888888" }}>
        {step.description}
      </p>

      {step.extra}
    </motion.div>
  );
}

/* ── Section ── */
export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5">

        {/* Left-aligned header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5"
            style={{
              background: "rgba(255,101,0,0.07)",
              border: "1px solid rgba(255,101,0,0.18)",
            }}
          >
            <Sparkles style={{ width: 13, height: 13, color: "#FF6500" }} />
            <span style={{ fontSize: 12, fontWeight: 700, color: "#FF6500", letterSpacing: "0.1em" }}>
              HOW IT WORKS
            </span>
          </div>

          <h2
            style={{
              fontSize: 44,
              fontWeight: 500,
              lineHeight: "52px",
              color: "#0c0c0c",
              maxWidth: 560,
            }}
          >
            Why Businesses{" "}
            <span style={{ color: "#FF6500" }}>Love</span>{" "}
            Using eTrack
          </h2>
        </motion.div>

        {/* Asymmetric layout */}
        <div className="flex gap-5 items-stretch">

          {/* Left — tall single card with checklist animation */}
          <div style={{ flex: "0 0 38%" }} className="flex">
            <StepCard
              step={steps[0]}
              delay={0}
              className="flex flex-col w-full"
            />
          </div>

          {/* Right — top wide + bottom two */}
          <div style={{ flex: 1 }} className="flex flex-col gap-5">
            <StepCard step={steps[1]} delay={0.1} />

            <div className="grid grid-cols-2 gap-5 flex-1">
              <StepCard step={steps[2]} delay={0.2} className="h-full" />
              <StepCard step={steps[3]} delay={0.3} className="h-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
