import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-black text-white py-12 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="col-span-1 md:col-span-2">
                    <Link href="/" className="text-3xl font-bold tracking-tighter uppercase italic">
                        Swap<span className="text-orange-DEFAULT">Soda</span>
                    </Link>
                    <p className="mt-4 text-neutral-400 text-sm max-w-sm">
                        The freshest way to hydration. Simple ingredients, explosive flavour. Swap your boring drink for something real.
                    </p>
                </div>

                <div>
                    <h4 className="font-bold uppercase tracking-widest mb-4">Explore</h4>
                    <ul className="space-y-2 text-sm text-neutral-400">
                        <li><Link href="#flavours" className="hover:text-white transition-colors">Flavours</Link></li>
                        <li><Link href="#story" className="hover:text-white transition-colors">Our Story</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors">FAQ</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold uppercase tracking-widest mb-4">Connect</h4>
                    <div className="flex gap-4">
                        <Link href="#" className="hover:text-lemon-DEFAULT transition-colors"><Instagram size={20} /></Link>
                        <Link href="#" className="hover:text-lemon-DEFAULT transition-colors"><Twitter size={20} /></Link>
                        <Link href="#" className="hover:text-lemon-DEFAULT transition-colors"><Facebook size={20} /></Link>
                    </div>
                    <p className="mt-4 text-xs text-neutral-500">
                        © {new Date().getFullYear()} Swap Soda Inc.
                    </p>
                </div>
            </div>
        </footer>
    );
}
