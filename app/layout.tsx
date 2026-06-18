import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter-tight",
  display: "swap",
});

export const metadata: Metadata = {
  title: "eTrack — POS & ERP for Every Business",
  description:
    "Cloud-based ERP and POS solution with offline mobile capabilities. Built for SMEs, Traders, Artisans, and Cooperatives across Africa.",
  keywords: ["POS", "ERP", "inventory management", "accounting", "small business", "mobile POS"],
  openGraph: {
    title: "eTrack — POS & ERP for Every Business",
    description: "Sell smarter. Stock better. Grow faster.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${interTight.variable} h-full antialiased`}>
      <body className={`${interTight.className} min-h-full flex flex-col bg-white text-[#666666]`}>
        {children}
      </body>
    </html>
  );
}
