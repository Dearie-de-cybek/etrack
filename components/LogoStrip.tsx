export default function LogoStrip() {
  const brands = [
    { name: "Shoprite", icon: "🛒", color: "#E31837" },
    { name: "Konga", icon: "🛍️", color: "#FF6500" },
    { name: "First Bank", icon: "🏦", color: "#003882" },
    { name: "MTN", icon: "📡", color: "#FFCC00" },
    { name: "Flutterwave", icon: "💳", color: "#F5A623" },
    { name: "Paystack", icon: "⚡", color: "#00C3F7" },
    { name: "Interswitch", icon: "🔄", color: "#E8001A" },
    { name: "Dangote", icon: "🏭", color: "#003366" },
    { name: "Access Bank", icon: "🏛️", color: "#E31837" },
    { name: "Jumia", icon: "📦", color: "#F68B1E" },
  ];

  const doubled = [...brands, ...brands];

  return (
    <section
      className="py-10 overflow-hidden"
      style={{
        borderTop: "1.5px solid rgba(68,213,204,0.35)",
        borderBottom: "1.5px solid rgba(255,101,0,0.35)",
        background: "#ffffff",
      }}
    >
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-5 mb-8 text-center">
        <p
          className="text-xs font-bold uppercase tracking-[0.18em]"
          style={{ color: "#0c0c0c" }}
        >
          Trusted by growing businesses across Africa
        </p>
      </div>

      {/* Marquee */}
      <div className="relative">
        {/* Edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee whitespace-nowrap">
          {doubled.map((brand, i) => (
            <div
              key={i}
              className="inline-flex items-center gap-3 px-6 shrink-0"
            >
              {/* Logo pill */}
              <div
                className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl"
                style={{
                  background: "#F5F5F5",
                  border: "1px solid #E8E8E8",
                }}
              >
                {/* Colored icon square */}
                <span
                  className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: brand.color + "18", fontSize: 20 }}
                >
                  {brand.icon}
                </span>
                <span
                  className="text-base font-bold tracking-wide"
                  style={{ color: "#0c0c0c" }}
                >
                  {brand.name}
                </span>
              </div>

              {/* Separator dot — alternating teal/orange */}
              <span
                className="w-1 h-1 rounded-full shrink-0"
                style={{ background: i % 2 === 0 ? "#44D5CC" : "#FF6500", opacity: 0.5 }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
