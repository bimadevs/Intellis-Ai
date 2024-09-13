import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { SpeedInsights } from "@vercel/speed-insights/next"

import Navbar from "./components/ui/navbar";
import Footer from "./components/ui/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Intellis AI - Solusi AI untuk Perusahaan Anda",
  description: "Intellis AI menawarkan solusi kustomisasi model bahasa besar (LLMs) untuk kebutuhan AI perusahaan Anda. Rasakan layanan AI dengan berbagai paket harga yang terjangkau.",
  openGraph: {
    title: "Intellis AI - Solusi AI untuk Perusahaan Anda",
    description: "Optimalkan kinerja bisnis Anda dengan solusi AI yang fleksibel dan efisien dari Intellis AI.",
    url: "https://intellis.bimadev.xyz",
    images: [
      {
        url: "https://intellis.bimadev.xyz/images/intellis.svg",
        width: 800,
        height: 600,
        alt: "Intellis AI",
      },
    ],
  },
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Navbar />
        
        {children}
        <SpeedInsights />
        
        <Footer />
        </body>
    </html>
  );
}
