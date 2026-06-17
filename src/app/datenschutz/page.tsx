import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Datenschutz",
    description: "Datenschutzerklärung von zennkoa.de",
};

function Section({ label, children }: { label: string; children: React.ReactNode }) {
    return (
        <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 dark:text-neutral-400 mb-3">
                {label}
            </p>
            <div className="space-y-3 text-neutral-700 dark:text-neutral-300">
                {children}
            </div>
        </div>
    );
}

export default function DatenschutzPage() {
    return (
        <div className="pt-32 pb-24 px-8 bg-background text-foreground">
            <div className="mx-auto max-w-3xl">
                <h1 className="text-5xl sm:text-7xl font-black uppercase tracking-tight mb-12">
                    Datenschutz
                </h1>

                <div className="space-y-10 text-sm leading-relaxed">
                    <Section label="Verantwortlicher">
                        <p>
                            John-Phillip Delenschke<br />
                            E-Mail: hello@zennkoa.de
                        </p>
                    </Section>

                    <Section label="Hosting">
                        <p>
                            Diese Website wird gehostet von <strong>Vercel Inc.</strong>, 340 Pine Street, Suite 701, San Francisco, CA 94104, USA. Beim Aufruf der Website werden automatisch Verbindungsdaten (u.a. IP-Adresse, Browser, Betriebssystem, Uhrzeit) in Server-Logs erfasst. Diese Daten sind technisch notwendig für den Betrieb und werden nicht zur Identifikation von Personen genutzt.
                        </p>
                        <p>
                            Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am sicheren Betrieb der Website). Weitere Informationen: <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground transition-colors">vercel.com/legal/privacy-policy</a>
                        </p>
                    </Section>

                    <Section label="Kontaktformular">
                        <p>
                            Wenn Sie das Kontaktformular nutzen, werden Ihre Angaben (Name, E-Mail-Adresse, Betreff, Nachricht) zur Bearbeitung Ihrer Anfrage verarbeitet. Der Versand erfolgt über den Dienst <strong>Resend</strong> (Resend Inc., USA). Ihre Daten werden ausschließlich zur Beantwortung Ihrer Anfrage verwendet und nicht an Dritte weitergegeben.
                        </p>
                        <p>
                            Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) bzw. Art. 6 Abs. 1 lit. f DSGVO. Weitere Informationen zu Resend: <a href="https://resend.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground transition-colors">resend.com/legal/privacy-policy</a>
                        </p>
                    </Section>

                    <Section label="Kontaktaufnahme per E-Mail">
                        <p>
                            Wenn Sie per E-Mail Kontakt aufnehmen, werden Ihre Angaben zur Bearbeitung der Anfrage sowie für den Fall von Anschlussfragen gespeichert. Diese Daten werden nicht ohne Ihre Einwilligung weitergegeben.
                        </p>
                    </Section>

                    <Section label="Cookies">
                        <p>
                            Diese Website verwendet ein Cookie ausschließlich zur Speicherung Ihrer Theme-Präferenz (Hell-/Dunkelmodus). Es werden keine Tracking- oder Analyse-Cookies eingesetzt.
                        </p>
                    </Section>

                    <Section label="Ihre Rechte">
                        <p>
                            Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer personenbezogenen Daten sowie ein Recht auf Datenübertragbarkeit. Außerdem haben Sie das Recht, der Verarbeitung zu widersprechen. Wenden Sie sich dazu jederzeit an: <a href="mailto:hello@zennkoa.de" className="underline hover:text-foreground transition-colors">hello@zennkoa.de</a>
                        </p>
                        <p>
                            Sie haben zudem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren.
                        </p>
                    </Section>
                </div>
            </div>
        </div>
    );
}
