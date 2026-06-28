import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Aware Solutions",
    short_name: "Aware",
    description:
      "Aware Solutions — a small, self-made software studio. Beyond the visible, towards the aware.",
    start_url: "/",
    display: "standalone",
    background_color: "#e7e4df",
    theme_color: "#16150f",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      {
        src: "/icon-maskable-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
