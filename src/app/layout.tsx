import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Swap Soda – Natural Citrus Energy Drink",
  description:
    "Swap Soda is a refreshing lemon and orange citrus drink made with real fruit, natural caffeine and zero refined sugar.",
  keywords: [
    "healthy soda India",
    "natural energy drink",
    "lemon soda",
    "orange soda",
    "low sugar drinks India",
    "fruit soda",
    "swap soda"
  ],
};

