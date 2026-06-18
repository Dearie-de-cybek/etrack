"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

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
    a: "Yes — no credit card required. The Starter plan gives you a fully functional POS with up to 200 transactions per month. Upgrade to Growth whenever you need unlimited transactions and mobile POS.",
  },
  {
    q: "Can I import my existing products and data?",
    a: "Yes. eTrack supports CSV and Excel imports for your product catalog, customer list, and historical data. Our onboarding team helps with bulk migration at no extra cost.",
  },
  {
    q: "Is eTrack suitable for cooperatives?",
    a: "eTrack was built with cooperatives in mind. The Enterprise plan includes multi-member account management, group purchase tracking, contribution recording, and detailed member statements.",
  },
];

function Item({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#F0F0F0]">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full py-5 text-left gap-4 group"
      >
        <span
          className="text-base font-medium transition-colors group-hover:text-[#0c0c0c]"
          style={{ color: open ? "#0c0c0c" : "#333333", fontFamily: "var(--font-sans)" }}
        >
          {q}
        </span>
        <span
          className="shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all"
          style={{
            background: open ? "rgba(255,101,0,0.08)" : "#F8F8F8",
            borderColor: open ? "rgba(255,101,0,0.2)" : "#E8E8E8",
            color: open ? "#FF6500" : "#AAAAAA",
          }}
        >
          {open ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="body-text text-sm pb-5 max-w-2xl">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-28 bg-white">
      <div className="max-w-3xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          <h2
            style={{ fontSize: 44, fontWeight: 500, lineHeight: "52px", color: "#0c0c0c", fontFamily: "var(--font-sans)" }}
            className="mb-4"
          >
            Frequently asked questions
          </h2>
          <p className="body-text">Everything you need to know before getting started.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="rounded-2xl border border-[#E8E8E8] bg-white px-6"
        >
          {faqs.map((faq) => <Item key={faq.q} q={faq.q} a={faq.a} />)}
        </motion.div>

        <p className="text-center text-sm text-[#AAAAAA] mt-8">
          Still have questions?{" "}
          <a href="mailto:hello@etrack.app" className="text-[#FF6500] hover:underline">
            Chat with our team →
          </a>
        </p>
      </div>
    </section>
  );
}
