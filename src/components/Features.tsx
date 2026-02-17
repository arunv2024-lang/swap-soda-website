"use client";

import { motion } from "framer-motion";
import { Leaf, Zap, Droplets, Smile } from "lucide-react";

const features = [
    {
        icon: <Leaf className="w-12 h-12 text-green-400" />,
        title: "100% Natural",
        description: "No artificial sweeteners or preservatives. Just pure nature.",
    },
    {
        icon: <Zap className="w-12 h-12 text-yellow-400" />,
        title: "Natural Energy",
        description: "Powered by green tea extract for a smooth, jitter-free boost.",
    },
    {
        icon: <Droplets className="w-12 h-12 text-blue-400" />,
        title: "Hydration Plus",
        description: "Packed with electrolytes to keep you going throughout the day.",
    },
    {
        icon: <Smile className="w-12 h-12 text-orange-400" />,
        title: "Guilt Free",
        description: "Low calories, zero sugar, and absolutely delicious.",
    },
];

export default function Features() {
    return (
        <section className="py-24 bg-neutral-900 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter mb-4">
                        Why Swap?
                    </h2>
                    <p className="text-neutral-400 max-w-2xl mx-auto">
                        We ditched the bad stuff and kept the flavor. Here is what makes Swap Soda different.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-lemon-DEFAULT/50 transition-colors group"
                        >
                            <div className="mb-6 bg-black/50 p-4 rounded-full w-fit group-hover:scale-110 transition-transform">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold uppercase mb-2 text-white">{feature.title}</h3>
                            <p className="text-neutral-400 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
