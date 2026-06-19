import Image from "next/image";

const columns = [
  {
    title: "Company",
    links: ["Home", "About Us", "Features", "Pricing", "Blog"],
  },
  {
    title: "Product",
    links: ["Point of Sale", "Inventory", "Sales Reports", "Mobile App", "Purchase Orders"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Security", "GDPR"],
  },
];

const socials = [
  {
    title: "Facebook",
    svg: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    title: "LinkedIn",
    svg: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <circle cx="4" cy="4" r="2" />
        <rect x="2" y="9" width="4" height="12" />
      </svg>
    ),
  },
  {
    title: "X / Twitter",
    svg: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.91-5.622z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer style={{ background: "#080808" }}>

      {/* ── Top content ── */}
      <div className="max-w-7xl mx-auto px-8 pt-16 pb-12">
        <div className="flex gap-16">

          {/* Left: brand block */}
          <div style={{ flex: "0 0 26%" }}>
            <div className="mb-5">
              <Image
                src="/assets/asset 0.svg"
                alt="eTrack"
                width={110}
                height={28}
                className="brightness-0 invert opacity-90"
              />
            </div>

            <p style={{ fontSize: 18, fontWeight: 500, color: "#ffffff", lineHeight: "28px", marginBottom: 24, maxWidth: 240 }}>
              eTrack — the power of smart business technology.
            </p>

            <div className="flex items-center gap-3 mb-8">
              {socials.map((s) => (
                <a
                  key={s.title}
                  href="#"
                  aria-label={s.title}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:bg-white/15"
                  style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.7)" }}
                >
                  {s.svg}
                </a>
              ))}
            </div>

            <p style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", lineHeight: "20px" }}>
              © 2026 eTrack Technologies Ltd.
              <br />All Rights Reserved.
            </p>
          </div>

          {/* Right: 3 link columns */}
          <div style={{ flex: 1, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 40 }}>
            {columns.map((col) => (
              <div key={col.title}>
                <h4 style={{ fontSize: 15, fontWeight: 600, color: "#ffffff", marginBottom: 20 }}>
                  {col.title}
                </h4>
                <ul className="flex flex-col gap-3.5">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm transition-colors hover:text-white"
                        style={{ color: "rgba(255,255,255,0.6)" }}
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ── Giant brand name — aligns with logo left edge ── */}
      <div className="overflow-hidden" style={{ height: 210 }}>
        <div className="max-w-7xl mx-auto px-8 h-full flex flex-col">

          {/* Terms / Privacy */}
          <div className="flex justify-end items-center gap-6 pt-5">
            <a href="#" className="text-xs transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.45)" }}>
              Terms of Service
            </a>
            <a href="#" className="text-xs transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.45)" }}>
              Privacy Policy
            </a>
          </div>

          {/* Giant text pushed to bottom so baseline overflows = bottom-crop effect */}
          <div className="mt-auto">
            <div
              style={{
                fontSize: "clamp(130px, 16vw, 230px)",
                fontWeight: 800,
                lineHeight: 0.82,
                whiteSpace: "nowrap",
                background: "linear-gradient(to right, #D45800 0%, #20A09C 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                userSelect: "none",
              }}
            >
              eTrack
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
