"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    badge: null,
    monthlyPrice: 0,
    annualPrice: 0,
    description: "Perfect for solo traders just getting started.",
    cta: "Get Started Free",
    featured: false,
    features: [
      "Up to 200 transactions/month",
      "1 staff account",
      "Basic POS terminal",
      "Inventory tracking (50 products)",
      "Daily sales summary",
      "Email support",
    ],
  },
  {
    name: "Growth",
    badge: "Most Popular",
    monthlyPrice: 5999,
    annualPrice: 4799,
    description: "Everything growing SMEs and shops need.",
    cta: "Start 14-Day Free Trial",
    featured: true,
    features: [
      "Unlimited transactions",
      "Up to 5 staff accounts",
      "Full POS + Mobile POS",
      "Unlimited inventory",
      "Advanced reports & analytics",
      "Purchase orders",
      "Offline mode",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    badge: null,
    monthlyPrice: null,
    annualPrice: null,
    description: "For cooperatives, chains, and large-scale operations.",
    cta: "Contact Sales",
    featured: false,
    features: [
      "Unlimited everything",
      "Unlimited staff accounts",
      "Multi-location management",
      "Custom integrations (API)",
      "Dedicated account manager",
      "Custom onboarding",
      "SLA uptime guarantee",
      "White-label options",
    ],
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          <div className="pill-orange mb-5 w-fit mx-auto">Start free, scale as you grow</div>
          <h2
            style={{ fontSize: 44, fontWeight: 500, lineHeight: "52px", color: "#0c0c0c", fontFamily: "var(--font-sans)" }}
            className="mb-4"
          >
            Simple, honest pricing
          </h2>
          <p className="body-text max-w-sm mx-auto mb-8">
            No hidden fees. No contracts. Cancel anytime.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-1 p-1 rounded-xl border border-[#E8E8E8] bg-[#F8F8F8]">
            {[
              { label: "Monthly", value: false },
              { label: "Annual", value: true, badge: "-20%" },
            ].map((opt) => (
              <button
                key={opt.label}
                onClick={() => setAnnual(opt.value)}
                className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                  annual === opt.value
                    ? "bg-white text-[#0c0c0c] shadow-sm border border-[#E8E8E8]"
                    : "text-[#999999] hover:text-[#666666]"
                }`}
              >
                {opt.label}
                {opt.badge && (
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-[#44D5CC]/10 text-[#1aa8a4] border border-[#44D5CC]/20">
                    {opt.badge}
                  </span>
                )}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-5">
          {plans.map((plan, i) => {
            const price = annual ? plan.annualPrice : plan.monthlyPrice;
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
                className={`relative flex flex-col rounded-2xl border p-7 ${
                  plan.featured
                    ? "border-[#FF6500]/30 shadow-[0_8px_40px_rgba(255,101,0,0.12)]"
                    : "border-[#E8E8E8]"
                } bg-white`}
              >
                {/* Popular badge */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full gradient-bg text-white text-xs font-bold shadow">
                    {plan.badge}
                  </div>
                )}

                <div className="mb-5">
                  <h3
                    className="text-base font-semibold mb-1"
                    style={{ color: "#0c0c0c", fontFamily: "var(--font-sans)" }}
                  >
                    {plan.name}
                  </h3>
                  <p className="text-sm text-[#999999]">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="mb-6 pb-6 border-b border-[#F0F0F0]">
                  <div className="flex items-baseline gap-1">
                    <span
                      className="text-5xl font-black"
                      style={{ color: "#0c0c0c", fontFamily: "var(--font-sans)" }}
                    >
                      {price === null ? "Custom" : price === 0 ? "Free" : `₦${price.toLocaleString()}`}
                    </span>
                    {price !== null && price > 0 && (
                      <span className="text-sm text-[#AAAAAA]">/mo</span>
                    )}
                  </div>
                  {annual && plan.monthlyPrice && plan.monthlyPrice > 0 && (
                    <p className="text-xs text-[#AAAAAA] mt-1">
                      Billed ₦{((plan.annualPrice ?? 0) * 12).toLocaleString()}/year
                    </p>
                  )}
                </div>

                {/* CTA */}
                <a
                  href="#"
                  className={`block w-full py-3 rounded-xl text-sm font-bold text-center transition-all mb-6 ${
                    plan.featured
                      ? "gradient-bg text-white hover:opacity-90 shadow-sm"
                      : "border border-[#E8E8E8] text-[#0c0c0c] hover:border-[#FF6500]/30 hover:bg-[#FFF8F5]"
                  }`}
                >
                  {plan.cta}
                </a>

                {/* Features */}
                <ul className="space-y-3 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <Check
                        className="w-4 h-4 mt-0.5 shrink-0"
                        style={{ color: plan.featured ? "#FF6500" : "#44D5CC" }}
                      />
                      <span className="text-sm text-[#555555]">{f}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        <p className="text-center text-sm text-[#AAAAAA] mt-8">
          All plans include SSL encryption, automated backups, and free onboarding support.
        </p>
      </div>
    </section>
  );
}
