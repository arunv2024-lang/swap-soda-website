"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Story from "@/components/Story";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [flavour, setFlavour] = useState<"lemon" | "orange">("lemon");

  return (
    <main className="min-h-screen bg-neutral-950 text-white selection:bg-lemon-DEFAULT selection:text-black">
      <Navbar />
      <Hero flavour={flavour} setFlavour={setFlavour} />
      <Features />
      <Story />
      <Contact />
      <Footer />
    </main>
  );
}
