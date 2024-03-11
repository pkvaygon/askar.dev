import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Providers from "@/providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  weight: ["300","400","500"],
  style: ["normal"],
  subsets: ["devanagari"],
});

export const metadata: Metadata = {
  title: "Askar Dev Portfolio",
  description: "Welcome to my Portfolio Website!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <svg
          className="pointer-events-none fixed isolate z-50 opacity-70 mix-blend-soft-light"
          width="100%"
          height="100%">
          <filter id="pedroduarteisalegend">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.80"
              numOctaves="4"
              stitchTiles="stitch"></feTurbulence>
          </filter>
          <rect
            width="100%"
            height="100%"
            filter="url(#pedroduarteisalegend)"></rect>
        </svg>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer/>
        </Providers>
      </body>
    </html>
  );
}
