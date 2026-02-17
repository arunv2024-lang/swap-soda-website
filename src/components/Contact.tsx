"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-24 bg-neutral-900">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-6">
                        Don't Miss the <span className="text-lemon-DEFAULT">Twist</span>
                    </h2>
                    <p className="text-xl text-neutral-400 mb-10 max-w-2xl mx-auto">
                        Join the Swap Soda community. Get fresh updates, exclusive drops, and more.
                    </p>

                    <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="flex-1 bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white focus:outline-none focus:border-lemon-DEFAULT transition-colors placeholder:text-neutral-500"
                        />
                        <button
                            type="submit"
                            className="bg-lemon-DEFAULT text-black px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-white transition-colors flex items-center justify-center gap-2 group"
                        >
                            Subscribe <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>

                    <p className="mt-8 text-sm text-neutral-600">
                        No spam. Ever. Just pure citrus goodness.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
