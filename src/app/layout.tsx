import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Swap Soda – Natural Citrus Energy Drink",
  description:
    "Swap Soda is a refreshing lemon and orange citrus drink made with real fruit, natural caffeine and zero refined sugar.",
  keywords: [
    "healthy soda India",
    "natural energy drink",
    "lemon soda",
    "orange soda",
    "low sugar drinks India",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}



