"use client";

import { motion } from "framer-motion";
import { Settings2, ShoppingCart, Tag, Receipt, Smartphone } from "lucide-react";

function DashImage({ src, accent }: { src: string; accent: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
      className="mt-6 rounded-2xl overflow-hidden"
      style={{
        boxShadow: `0 8px 32px ${accent}28, 0 2px 8px rgba(0,0,0,0.07)`,
        border: `1px solid ${accent}20`,
      }}
    >
      <img src={src} alt="eTrack dashboard" className="w-full block" />
    </motion.div>
  );
}

const cards = [
  {
    accent: "#FF6500",
    icon: ShoppingCart,
    title: "Point of Sale",
    desc: "Fast checkout with barcode scanning, split payments, discounts, and instant digital receipts.",
    image: "/assets/asset 4.webp",
  },
  {
    accent: "#44D5CC",
    icon: Tag,
    title: "Inventory Management",
    desc: "Real-time stock tracking, low-stock alerts, batch management, and multi-location support.",
    image: "/assets/inventory-digital.jpg",
  },
  {
    accent: "#FF6500",
    icon: Receipt,
    title: "Sales Reports",
    desc: "Visual dashboards, revenue trends, top products, and exportable daily & monthly reports.",
    image: "/assets/asset 32.webp",
  },
  {
    accent: "#44D5CC",
    icon: Smartphone,
    title: "Mobile POS",
    desc: "Full POS on Android & iOS. Sell anywhere — even completely offline with auto-sync.",
    image: "/assets/asset 53.webp",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5"
            style={{ background: "rgba(255,101,0,0.08)", border: "1px solid rgba(255,101,0,0.2)" }}
          >
            <Settings2 style={{ width: 15, height: 15, color: "#FF6500" }} />
            <span style={{ fontSize: 13, fontWeight: 600, color: "#FF6500" }}>Features</span>
          </div>

          <h2
            style={{ fontSize: 44, fontWeight: 500, lineHeight: "52px", color: "#0c0c0c" }}
            className="mb-4"
          >
            All your business tools,{" "}
            <span style={{ color: "#FF6500" }}>one platform</span>
          </h2>
          <p style={{ fontSize: 16, lineHeight: "24px", color: "#0c0c0c" }} className="max-w-md mx-auto">
            Stop juggling disconnected apps. eTrack puts POS, inventory,
            reports, and mobile sales in one connected system.
          </p>
        </motion.div>

        {/* 5-col grid: row1 = [3+2], row2 = [2+3] — same height, different widths */}
        <div
          className="grid gap-5"
          style={{ gridTemplateColumns: "repeat(5, 1fr)" }}
        >
          {cards.map((c, i) => {
            const Icon = c.icon;
            const opposite = c.accent === "#FF6500" ? "#44D5CC" : "#FF6500";
            const colSpans = [3, 2, 3, 2];
            return (
              <motion.div
                key={c.title}
                style={{ gridColumn: `span ${colSpans[i]}` }}
                initial={{ opacity: 0, x: i % 2 === 0 ? -36 : 36, y: 16 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
              >
                {/* Thick gradient border — full height */}
                <div
                  style={{
                    padding: "3px",
                    borderRadius: "24px",
                    background: `linear-gradient(135deg, ${c.accent} 0%, ${opposite} 100%)`,
                    height: "100%",
                  }}
                >
                  <div
                    className="bg-white rounded-[22px] p-7 flex flex-col"
                    style={{ height: "100%" }}
                  >
                    {/* Icon tag */}
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 shrink-0"
                      style={{ background: c.accent + "12" }}
                    >
                      <Icon style={{ width: 26, height: 26, color: c.accent }} />
                    </div>

                    <h3 className="text-xl font-bold mb-2 shrink-0" style={{ color: "#0c0c0c" }}>
                      {c.title}
                    </h3>
                    <p className="text-sm leading-relaxed shrink-0" style={{ color: "#444444" }}>
                      {c.desc}
                    </p>

                    {/* Image fills remaining space — same height across all cards */}
                    <div
                      className="mt-6 rounded-2xl overflow-hidden flex-1"
                      style={{
                        minHeight: 220,
                        boxShadow: `0 8px 28px ${c.accent}22`,
                        border: `1px solid ${c.accent}20`,
                      }}
                    >
                      <img
                        src={c.image}
                        alt={c.title}
                        className="w-full h-full object-cover block"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
