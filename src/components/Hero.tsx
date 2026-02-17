"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface HeroProps {
    flavour: "lemon" | "orange";
    setFlavour: (f: "lemon" | "orange") => void;
}

export default function Hero({ flavour, setFlavour }: HeroProps) {
    const isLemon = flavour === "lemon";

    return (
        <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
            {/* Animated Background Gradient */}
            <motion.div
                className={cn(
                    "absolute inset-0 z-0 transition-colors duration-700 ease-in-out",
                    isLemon ? "bg-gradient-to-br from-neutral-900 to-neutral-800" : "bg-gradient-to-br from-neutral-900 to-neutral-800"
                )}
            >
                {/* Radial Glow */}
                <motion.div
                    animate={{
                        background: isLemon
                            ? "radial-gradient(circle at center, rgba(254, 240, 138, 0.15) 0%, transparent 70%)"
                            : "radial-gradient(circle at center, rgba(253, 186, 116, 0.15) 0%, transparent 70%)"
                    }}
                    className="absolute inset-0 w-full h-full"
                    transition={{ duration: 0.5 }}
                />
            </motion.div>

            <div className="z-10 flex flex-col items-center text-center max-w-5xl px-4">
                <motion.h1
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-6xl md:text-9xl font-black uppercase tracking-tighter italic text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50"
                >
                    Swap Soda
                </motion.h1>

                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="mt-4 text-xl md:text-2xl font-light tracking-widest text-neutral-400 uppercase"
                >
                    Twist Your Flavour
                </motion.p>

                {/* Bottle Container with Float Animation */}
                <motion.div
                    className="mt-12 mb-12 relative animate-float w-[3500px] h-[600px]"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
                >
                    <Image
                        src={isLemon ? "/images/bleu.png" : "/images/gris.png"}
                        alt={isLemon ? "Lemon Swap Soda" : "Orange Swap Soda"}
                        fill
                        className="object-contain drop-shadow-2xl"
                        priority
                    />

                    {/* Ambient Particles */}
                    {/* Can add floating fruit slices here later */}
                </motion.div>

                {/* Flavour Switcher Buttons */}
                <div className="flex gap-4">
                    <button
                        onClick={() => setFlavour("lemon")}
                        className={cn(
                            "px-8 py-3 rounded-full font-bold uppercase tracking-wider border-2 transition-all duration-300",
                            isLemon
                                ? "border-lemon-DEFAULT bg-lemon-DEFAULT text-black shadow-[0_0_20px_rgba(250,204,21,0.5)]"
                                : "border-white/20 text-white hover:border-lemon-DEFAULT hover:text-lemon-DEFAULT"
                        )}
                    >
                        Lemon
                    </button>
                    <button
                        onClick={() => setFlavour("orange")}
                        className={cn(
                            "px-8 py-3 rounded-full font-bold uppercase tracking-wider border-2 transition-all duration-300",
                            !isLemon
                                ? "border-orange-DEFAULT bg-orange-DEFAULT text-black shadow-[0_0_20px_rgba(249,115,22,0.5)]"
                                : "border-white/20 text-white hover:border-orange-DEFAULT hover:text-orange-DEFAULT"
                        )}
                    >
                        Orange
                    </button>
                </div>
            </div>
        </section>
    );
}
