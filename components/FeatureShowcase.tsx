"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const features = [
  {
    title: "Point of Sale",
    description:
      "Fast checkout with barcode scanning, split payments, discounts, and instant digital receipts. Multi-cashier with role permissions.",
    image: "/assets/asset 4.webp",
  },
  {
    title: "Inventory Control",
    description:
      "Real-time stock levels, low-stock alerts, batch management, and multi-location support — all updated as you sell.",
    image: "/assets/inventory-digital.jpg",
  },
  {
    title: "Sales Reports",
    description:
      "Live dashboards, revenue trends, top products, and exportable PDF/Excel reports. VAT and tax summaries included.",
    image: "/assets/asset 32.webp",
  },
  {
    title: "Mobile App",
    description:
      "Full POS on Android and iOS. Sell at the market, a trade fair, or anywhere — even with no internet. Auto-syncs when back online.",
    image: "/assets/asset 53.webp",
  },
];

export default function FeatureShowcase() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        {/* ── Heading above both columns ── */}
        <div style={{ maxWidth: 480, marginBottom: 48 }}>
          <h2
            style={{
              fontSize: 40,
              fontWeight: 700,
              lineHeight: "48px",
              color: "#0c0c0c",
              marginBottom: 14,
            }}
          >
            Everything your business{" "}
            <span style={{ color: "#FF6500" }}>needs</span>, included
          </h2>
          <p style={{ fontSize: 15, color: "#888888", lineHeight: "24px" }}>
            One connected platform covering every part of your operation — from
            the counter to your phone to the cloud.
          </p>
        </div>

        <div className="flex gap-20 items-start">

          {/* ── Left: clickable list only ── */}
          <div style={{ flex: "0 0 40%" }}>
            {/* Feature list */}
            <div className="flex flex-col">
              {features.map((f, i) => (
                <button
                  key={f.title}
                  onClick={() => setActive(i)}
                  className="text-left transition-all duration-200"
                  style={{
                    borderLeft: `3px solid ${active === i ? "#FF6500" : "rgba(0,0,0,0.08)"}`,
                    paddingLeft: 20,
                    paddingTop: 18,
                    paddingBottom: 18,
                    background: "none",
                    cursor: "pointer",
                  }}
                >
                  <div
                    style={{
                      fontSize: 16,
                      fontWeight: 700,
                      color: active === i ? "#0c0c0c" : "#999",
                      marginBottom: 5,
                      transition: "color 0.2s",
                    }}
                  >
                    {f.title}
                  </div>
                  <div
                    style={{
                      fontSize: 14,
                      lineHeight: "22px",
                      color: active === i ? "#555" : "#bbb",
                      transition: "color 0.2s",
                      maxWidth: 360,
                    }}
                  >
                    {f.description}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* ── Right: swapping image ── */}
          <div style={{ flex: 1, paddingTop: 8 }}>
            <div style={{ transform: "rotate(-1.5deg)", transformOrigin: "center top" }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    borderRadius: 20,
                    overflow: "hidden",
                    boxShadow:
                      "0 4px 24px rgba(0,0,0,0.06), 0 16px 56px rgba(0,0,0,0.10)",
                    border: "1px solid rgba(0,0,0,0.06)",
                  }}
                >
                  <img
                    src={features[active].image}
                    alt={features[active].title}
                    className="w-full block"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
