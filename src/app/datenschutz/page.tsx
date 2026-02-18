import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Datenschutz – Zennkoa",
    description: "Datenschutzerklärung von zennkoa.de",
};

export default function DatenschutzPage() {
    return (
        <div className="pt-32 pb-24 px-8">
            <div className="mx-auto max-w-3xl">
                <h1 className="text-5xl sm:text-7xl font-black uppercase tracking-tight mb-12">
                    Datenschutz
                </h1>

                <div className="space-y-8 text-sm text-neutral-400 leading-relaxed">
                    <div>
                        <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 mb-3">
                            Verantwortlicher
                        </p>
                        <p className="text-neutral-300">
                            John &quot;Zennkoa&quot;
                            <br />
                            E-Mail: hello@zennkoa.de
                        </p>
                    </div>

                    <div>
                        <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 mb-3">
                            Erhebung und Speicherung personenbezogener Daten
                        </p>
                        <p>
                            Beim Besuch dieser Website werden automatisch Informationen allgemeiner
                            Natur erfasst (z.B. IP-Adresse, Browsertyp, Betriebssystem). Diese Daten
                            lassen keinen Rückschluss auf Ihre Person zu und werden ausschließlich
                            zur Sicherstellung eines reibungslosen Betriebs der Website verwendet.
                        </p>
                    </div>

                    <div>
                        <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 mb-3">
                            Kontaktaufnahme
                        </p>
                        <p>
                            Wenn Sie per E-Mail Kontakt aufnehmen, werden Ihre Angaben zur Bearbeitung
                            der Anfrage sowie für den Fall von Anschlussfragen gespeichert. Diese Daten
                            geben wir nicht ohne Ihre Einwilligung weiter.
                        </p>
                    </div>

                    <div>
                        <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 mb-3">
                            Ihre Rechte
                        </p>
                        <p>
                            Sie haben jederzeit das Recht auf Auskunft über Ihre gespeicherten Daten,
                            deren Herkunft und Empfänger sowie den Zweck der Datenverarbeitung.
                            Außerdem haben Sie ein Recht auf Berichtigung, Sperrung oder Löschung
                            dieser Daten. Hierzu können Sie sich jederzeit an die oben genannte
                            E-Mail-Adresse wenden.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
