import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Impressum",
    description: "Impressum von zennkoa.de",
};

export default function ImpressumPage() {
    return (
        <div className="pt-32 pb-24 px-6 md:px-12 min-h-screen bg-background text-foreground">
            <div className="mx-auto max-w-[1800px]">
                <h1 className="text-6xl sm:text-9xl font-black uppercase tracking-tighter mb-24 text-foreground">
                    Impressum
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-24">
                    {/* Column 1: Angaben gemäß § 5 TMG */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-6 border-b border-neutral-200 dark:border-neutral-800 pb-2">
                                Angaben gemäß § 5 TMG
                            </h2>
                            <p className="text-xl sm:text-2xl font-light leading-relaxed text-neutral-700 dark:text-neutral-300">
                                John-Phillip Delenschke
                                <br />
                                Graf-v.-Stauffenberg-Str. 7
                                <br />
                                18437 Stralsund
                                <br />
                                Deutschland
                            </p>
                        </div>
                    </div>

                    {/* Column 2: Kontakt */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-6 border-b border-neutral-200 dark:border-neutral-800 pb-2">
                                Kontakt
                            </h2>
                            <p className="text-xl sm:text-2xl font-light leading-relaxed text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors">
                                <a href="mailto:hello@zennkoa.de">hello@zennkoa.de</a>
                            </p>
                        </div>
                    </div>

                    {/* Column 3: Haftungsausschluss / Disclaimer */}
                    <div className="space-y-8 lg:col-span-1">
                        <div>
                            <h2 className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-6 border-b border-neutral-200 dark:border-neutral-800 pb-2">
                                Haftungsausschluss
                            </h2>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed text-justify">
                                Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die
                                Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich
                                deren Betreiber verantwortlich.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
