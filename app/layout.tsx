import type { Metadata } from "next";
import { Anton, Caveat, Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aware Solutions — Portfolio",
  description:
    "Aware Solutions (awaresolutions.eu) — a small, self-made software studio. Products built end to end, with an eye on the future.",
  metadataBase: new URL("https://awaresolutions.eu"),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${anton.variable} ${caveat.variable} paper-grain`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
