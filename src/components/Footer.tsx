import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t border-neutral-800 bg-[#0a0a0a]">
            <div className="mx-auto max-w-[1800px] px-6 md:px-12 py-32">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                    {/* Left Column: Contact CTA */}
                    <div className="w-full lg:w-1/2">
                        <p className="text-[10px] uppercase tracking-[0.4em] text-neutral-500 mb-8">
                            Get in touch
                        </p>
                        <a
                            href="mailto:hello@zennkoa.de"
                            className="group block"
                        >
                            <h2 className="text-5xl sm:text-7xl font-black uppercase tracking-tight group-hover:text-neutral-400 transition-colors">
                                hello@
                                <br />
                                zennkoa.de
                            </h2>
                            <span className="inline-block mt-4 text-sm uppercase tracking-[0.2em] border-b border-white pb-1 group-hover:border-neutral-400 group-hover:text-neutral-400 transition-colors">
                                Send Email ↗
                            </span>
                        </a>
                    </div>

                    {/* Right Column: Socials & Navigation */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-between">
                        <div>
                            <p className="text-[10px] uppercase tracking-[0.4em] text-neutral-500 mb-8">
                                Socials
                            </p>
                            <ul className="space-y-4">
                                {[
                                    { label: "GitHub", href: "https://github.com/zennkoa" },
                                    { label: "Discord", href: "https://discord.gg/zennkoa" },
                                    { label: "X (Twitter)", href: "https://twitter.com/zennkoa" },
                                ].map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-xl sm:text-2xl font-bold uppercase tracking-tight hover:text-neutral-400 transition-colors flex items-center gap-2 group"
                                        >
                                            {link.label}
                                            <span className="text-sm opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                                ↗
                                            </span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Bottom Info */}
                        <div className="mt-16 pt-8 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                            <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-600">
                                © {new Date().getFullYear()} Zennkoa
                            </span>
                            <div className="flex gap-6">
                                <Link
                                    href="/impressum"
                                    className="text-[10px] uppercase tracking-[0.2em] text-neutral-600 hover:text-white transition-colors"
                                >
                                    Impressum
                                </Link>
                                <Link
                                    href="/datenschutz"
                                    className="text-[10px] uppercase tracking-[0.2em] text-neutral-600 hover:text-white transition-colors"
                                >
                                    Datenschutz
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
