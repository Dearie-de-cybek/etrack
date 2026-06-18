"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "eTrack completely changed how I run my electronics shop. Now I get a full sales and stock report every evening — even when the internet was down all day.",
    name: "Emeka Okafor",
    title: "Electronics Retailer · Lagos",
    avatar: "/assets/asset 40.webp",
    stars: 5,
  },
  {
    quote:
      "Our cooperative has over 200 members. eTrack lets us track every transaction, generate statements, and manage stock — all in one place. The offline feature saved us during a 3-day outage.",
    name: "Fatima Abubakar",
    title: "Farmers Cooperative · Kano",
    avatar: "/assets/asset 41.webp",
    stars: 5,
  },
  {
    quote:
      "I run three food stalls across two markets. eTrack lets me see all three from my phone. Even works when there's no data — it just syncs automatically later.",
    name: "Chisom Nwosu",
    title: "Restaurant Owner · Port Harcourt",
    avatar: "/assets/asset 39.webp",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-28 bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto px-5">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[#FF6500] text-[#FF6500]" />
            ))}
            <span className="text-sm font-medium text-[#666666] ml-1">4.9/5 from 2,400+ reviews</span>
          </div>
          <h2
            style={{ fontSize: 44, fontWeight: 500, lineHeight: "52px", color: "#0c0c0c", fontFamily: "var(--font-sans)" }}
            className="mb-4"
          >
            Loved by businesses{" "}
            <span className="gradient-text">across Africa</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
              className="card-light p-7 flex flex-col bg-white"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-5">
                {[...Array(t.stars)].map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-[#FF6500] text-[#FF6500]" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-[#555555] leading-relaxed flex-1 mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover border border-[#E8E8E8]"
                />
                <div>
                  <p
                    className="text-sm font-semibold"
                    style={{ color: "#0c0c0c", fontFamily: "var(--font-sans)" }}
                  >
                    {t.name}
                  </p>
                  <p className="text-xs text-[#999999]">{t.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
