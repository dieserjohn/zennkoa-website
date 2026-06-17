import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
    title: "Kontakt",
    description: "Schreib mir – ich freue mich auf dein Projekt. Webentwickler John Delenschke aus Stralsund.",
};

export default function KontaktPage() {
    return (
        <div>
            <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 pt-32 pb-24">
                <div className="mx-auto w-full max-w-[1800px]">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-24 items-start">

                        {/* Left */}
                        <div className="lg:sticky lg:top-32">
                            <p className="text-[10px] uppercase tracking-[0.4em] text-neutral-500 dark:text-neutral-400 mb-8">
                                Kontakt
                            </p>
                            <h1 className="text-6xl sm:text-8xl font-black uppercase tracking-tight leading-[0.85] mb-12">
                                Projekt
                                <br />
                                <span className="text-transparent" style={{ WebkitTextStroke: "2px var(--foreground)" }}>
                                    besprechen
                                </span>
                            </h1>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-sm mb-12">
                                Du hast eine Idee, brauchst eine neue Website oder willst ein bestehendes Projekt verbessern? Schreib mir – ich melde mich innerhalb von 24 Stunden.
                            </p>
                            <div className="space-y-3">
                                <a
                                    href="mailto:hello@zennkoa.de"
                                    className="flex items-center gap-3 text-sm text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors group"
                                >
                                    <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 dark:text-neutral-600 w-16">E-Mail</span>
                                    hello@zennkoa.de
                                </a>
                                <a
                                    href="https://github.com/dieserjohn"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 text-sm text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
                                >
                                    <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 dark:text-neutral-600 w-16">GitHub</span>
                                    dieserjohn
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/john-delenschke-7316aa173/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 text-sm text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
                                >
                                    <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 dark:text-neutral-600 w-16">LinkedIn</span>
                                    John Delenschke
                                </a>
                            </div>
                        </div>

                        {/* Right: Form */}
                        <div>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
