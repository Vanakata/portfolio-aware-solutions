import type { Metadata, Viewport } from "next";
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
  applicationName: "Aware Solutions",
  appleWebApp: {
    capable: true,
    title: "Aware Solutions",
    statusBarStyle: "default",
  },
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "48x48", type: "image/png" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#16150f",
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
