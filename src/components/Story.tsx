"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Story() {
    return (
        <section id="story" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-6 leading-none">
                        The <span className="text-transparent bg-clip-text bg-gradient-to-r from-lemon-DEFAULT to-orange-DEFAULT">Fresh</span> Start
                    </h2>
                    <p className="text-lg text-neutral-300 mb-6 leading-relaxed">
                        It started in a garage (cliché, we know). We were tired of sugary sodas that left us crashing, and sparkling waters that tasted like TV static.
                    </p>
                    <p className="text-lg text-neutral-300 mb-8 leading-relaxed">
                        So we mixed real fruit, a dash of natural caffeine, and zero refined sugars. The result? A soda that swaps the guilt for pure energy.
                    </p>
                    <button className="text-lemon-DEFAULT font-bold uppercase tracking-wider hover:text-white transition-colors border-b-2 border-lemon-DEFAULT pb-1">
                        Read Full Story
                    </button>
                </motion.div>


            </div>
        </section>
    );
}
