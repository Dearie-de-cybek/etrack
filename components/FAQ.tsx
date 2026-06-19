"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowUp, ArrowDown, ArrowRight } from "lucide-react";

const faqs = [
  {
    q: "Does eTrack work without internet?",
    a: "Yes — eTrack's mobile POS is built offline-first. You can process sales, manage stock, and print receipts with zero internet. All data syncs automatically in the background when you reconnect.",
  },
  {
    q: "Can I use eTrack on multiple devices at the same time?",
    a: "Absolutely. Growth and Enterprise plans support multiple simultaneous devices with real-time sync. A cashier can sell at the counter while you monitor reports on your phone.",
  },
  {
    q: "What payment methods does eTrack support?",
    a: "eTrack supports cash, POS card terminals, bank transfers, USSD, and mobile money. You can also add custom payment types for your specific business.",
  },
  {
    q: "Is the Starter plan really free forever?",
    a: "Yes — no credit card required. The Starter plan gives you a fully functional POS with up to 200 transactions per month. Upgrade whenever you need more.",
  },
  {
    q: "Can I import my existing products and data?",
    a: "Yes. eTrack supports CSV and Excel imports for your product catalog, customer list, and historical data. Our onboarding team helps with bulk migration at no extra cost.",
  },
];

function Item({ q, a, defaultOpen = false }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div
      className="rounded-2xl px-6 py-5 cursor-pointer select-none"
      style={{ background: "#F5F5F5" }}
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between gap-4">
        <span style={{ fontSize: 15, fontWeight: 600, color: "#0c0c0c", lineHeight: "22px" }}>
          {q}
        </span>

        <span
          className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors duration-200"
          style={{ background: open ? "#FF6500" : "#E4E4E4" }}
        >
          {open
            ? <ArrowUp style={{ width: 16, height: 16, color: "#ffffff" }} />
            : <ArrowDown style={{ width: 16, height: 16, color: "#666666" }} />
          }
        </span>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p style={{ fontSize: 14, color: "#666666", lineHeight: "22px", paddingTop: 14 }}>
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex gap-20 items-start">

          {/* ── Left: heading + CTA ── */}
          <div style={{ flex: "0 0 32%" }}>
            {/* Tag */}
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6"
              style={{
                background: "rgba(255,101,0,0.07)",
                border: "1px solid rgba(255,101,0,0.18)",
              }}
            >
              <Sparkles style={{ width: 13, height: 13, color: "#FF6500" }} />
              <span style={{ fontSize: 12, fontWeight: 700, color: "#FF6500", letterSpacing: "0.1em" }}>
                FAQ
              </span>
            </div>

            <h2
              style={{
                fontSize: 44,
                fontWeight: 700,
                lineHeight: "52px",
                color: "#0c0c0c",
                marginBottom: 16,
              }}
            >
              Frequently Asked
              <br />
              <span style={{ color: "#FF6500" }}>Questions</span>
            </h2>

            <p style={{ fontSize: 15, color: "#888888", lineHeight: "24px", marginBottom: 40 }}>
              Everything you need to know about eTrack's features, pricing, and
              support — before you get started.
            </p>

            {/* Contact Us pill button */}
            <a
              href="mailto:hello@etrack.app"
              className="inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full transition-opacity hover:opacity-90"
              style={{ background: "#FF6500" }}
            >
              <span style={{ color: "#ffffff", fontWeight: 600, fontSize: 14 }}>Contact Us</span>
              <span
                className="w-9 h-9 rounded-full bg-white flex items-center justify-center shrink-0"
                style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}
              >
                <ArrowRight style={{ width: 16, height: 16, color: "#FF6500" }} />
              </span>
            </a>
          </div>

          {/* ── Right: accordion cards ── */}
          <div style={{ flex: 1 }} className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <Item key={faq.q} q={faq.q} a={faq.a} defaultOpen={i === 0} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
