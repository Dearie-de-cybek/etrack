import Image from "next/image";

const links = {
  Product: ["Point of Sale", "Inventory", "Mobile POS", "Sales Reports", "Purchase Orders", "Accounting"],
  Company: ["About Us", "Blog", "Careers", "Press Kit", "Partners"],
  Resources: ["Documentation", "API Reference", "System Status", "Help Center", "Community"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR", "Security"],
};

const socials = [
  { label: "𝕏", title: "X / Twitter" },
  { label: "in", title: "LinkedIn" },
  { label: "fb", title: "Facebook" },
  { label: "ig", title: "Instagram" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#0c0c0c" }}>
      <div className="max-w-7xl mx-auto px-5">
        {/* Main grid */}
        <div className="pt-16 pb-12 grid sm:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Brand col */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="mb-4">
              <Image
                src="/assets/asset 0.svg"
                alt="eTrack"
                width={110}
                height={28}
                className="brightness-0 invert opacity-90"
              />
            </div>
            <p className="text-sm leading-relaxed mb-6 max-w-[220px]" style={{ color: "rgba(255,255,255,0.35)" }}>
              Cloud-based ERP and POS built for SMEs, Traders, Artisans, and Cooperatives.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-2">
              {socials.map((s) => (
                <a
                  key={s.title}
                  href="#"
                  aria-label={s.title}
                  title={s.title}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold transition-all"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "rgba(255,255,255,0.35)",
                  }}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4
                className="text-xs font-bold uppercase tracking-widest mb-4"
                style={{ color: "rgba(255,255,255,0.25)" }}
              >
                {category}
              </h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm transition-colors hover:text-white"
                      style={{ color: "rgba(255,255,255,0.4)" }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="py-5 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>
            © {new Date().getFullYear()} eTrack Technologies Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#44D5CC] animate-pulse" />
            <span className="text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
