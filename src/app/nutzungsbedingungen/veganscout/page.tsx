import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Nutzungsbedingungen – VeganScout",
    description: "Nutzungsbedingungen für die App VeganScout",
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

export default function VeganScoutNutzungsbedingungenPage() {
    return (
        <div className="pt-32 pb-24 px-8 bg-background text-foreground">
            <div className="mx-auto max-w-3xl">
                <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 dark:text-neutral-400 mb-4">
                    VeganScout für iOS
                </p>
                <h1 className="text-5xl sm:text-7xl font-black uppercase tracking-tight mb-12">
                    Nutzungs&shy;bedingungen
                </h1>

                <div className="space-y-10 text-sm leading-relaxed">
                    <Section label="Anbieter und Geltung">
                        <p>
                            Diese Bedingungen gelten für die Nutzung der App VeganScout. Anbieter ist
                            John-Phillip Delenschke, Graf-v.-Stauffenberg-Str. 7, 18437 Stralsund,
                            <a href="mailto:hello@zennkoa.de" className="underline hover:text-foreground transition-colors"> hello@zennkoa.de</a>.
                            Mit der Registrierung erklären Sie sich mit ihnen einverstanden.
                        </p>
                    </Section>

                    <Section label="Was die App leistet – und was nicht">
                        <p>
                            VeganScout schätzt ein, wie vegan-freundlich ein Reiseziel ist. Die Angaben
                            entstehen durch automatisierte Webrecherche, werden gegen die tatsächlichen
                            Suchtreffer geprüft und von einem zweiten Modell gegengelesen. Trotz dieser
                            Prüfung können Angaben unvollständig, veraltet oder falsch sein.
                        </p>
                        <p>
                            <strong>
                                Die Angaben sind Anhaltspunkte, keine Zusicherung. Ob ein Gericht, ein
                                Produkt oder ein Lokal tatsächlich frei von tierischen Bestandteilen ist,
                                muss vor Ort erfragt oder auf der Verpackung nachgelesen werden.
                            </strong>{" "}
                            Das gilt besonders für Angaben zu Gerichten, Zutaten und Zusatzstoffen:
                            Zusammensetzungen unterscheiden sich je nach Hersteller, Region und Betrieb.
                            Wer aus gesundheitlichen Gründen bestimmte Stoffe meiden muss, kann sich auf
                            diese App nicht verlassen.
                        </p>
                        <p>
                            Die Bewertungen sind keine Empfehlung und keine Ernährungs-, Gesundheits- oder
                            Reiseberatung.
                        </p>
                    </Section>

                    <Section label="Konto">
                        <p>
                            Die App lässt sich ohne Konto nutzen. Für Merkliste, Profil, Erfahrungen und
                            Listen ist ein Konto über Sign in with Apple nötig. Sie benötigen dafür ein
                            Mindestalter von 16 Jahren.
                        </p>
                        <p>
                            Ein Konto ist persönlich und wird nicht an Dritte weitergegeben. Sie sind dafür
                            verantwortlich, was über Ihr Konto veröffentlicht wird.
                        </p>
                    </Section>

                    <Section label="Regeln für eigene Beiträge">
                        <p>
                            Erfahrungen, Profilangaben, Bilder und Listen sind Ihre Inhalte. Sie dürfen nur
                            veröffentlichen, was Sie selbst verantworten können. Nicht zulässig sind
                            insbesondere:
                        </p>
                        <ul className="list-disc pl-5 space-y-1.5">
                            <li>beleidigende, bedrohende, hetzerische oder diskriminierende Inhalte</li>
                            <li>
                                wissentlich falsche Behauptungen über Betriebe, Gerichte oder Personen – etwa
                                eine Bewertung, die nicht auf einem eigenen Besuch beruht
                            </li>
                            <li>Werbung, Kettennachrichten oder wiederholt gleichartige Beiträge</li>
                            <li>
                                Inhalte, an denen Sie keine Rechte haben, insbesondere fremde Fotos und Texte
                            </li>
                            <li>
                                personenbezogene Daten anderer Menschen, etwa Namen von Mitarbeitenden oder
                                Fotos, auf denen andere erkennbar sind
                            </li>
                            <li>Inhalte, die gegen geltendes Recht verstoßen</li>
                        </ul>
                        <p>
                            Um Ihre Beiträge in der App und auf geteilten Seiten anzeigen zu können, räumen
                            Sie ein einfaches, räumlich unbeschränktes und unentgeltliches Nutzungsrecht
                            daran ein. Dieses Recht endet, sobald Sie den Beitrag oder Ihr Konto löschen. Die
                            Rechte an Ihren Inhalten bleiben im Übrigen bei Ihnen.
                        </p>
                    </Section>

                    <Section label="Melden, Blockieren, Entfernen">
                        <p>
                            Jeder veröffentlichte Inhalt lässt sich in der App melden, und jedes Konto lässt
                            sich blockieren – blockierte Konten sehen Ihre Beiträge nicht mehr und Sie deren
                            nicht.
                        </p>
                        <p>
                            Ab drei unabhängigen Meldungen wird ein Inhalt automatisch ausgeblendet und
                            anschließend geprüft. Gemeldete Inhalte, die gegen diese Bedingungen verstoßen,
                            werden innerhalb von 24 Stunden nach Kenntnis entfernt. Bei wiederholten oder
                            schweren Verstößen kann ein Konto gesperrt oder gelöscht werden.
                        </p>
                        <p>
                            Halten Sie die Entfernung eines Beitrags für unberechtigt, schreiben Sie an{" "}
                            <a href="mailto:hello@zennkoa.de" className="underline hover:text-foreground transition-colors">hello@zennkoa.de</a>.
                        </p>
                    </Section>

                    <Section label="Verfügbarkeit">
                        <p>
                            Die App wird mit Sorgfalt betrieben, steht aber ohne Zusicherung einer bestimmten
                            Verfügbarkeit zur Verfügung. Wartungsarbeiten, Störungen oder Änderungen am
                            Funktionsumfang sind möglich. Inhalte, die für die Nutzung ohne Netz auf dem
                            Gerät liegen, bleiben davon unberührt.
                        </p>
                    </Section>

                    <Section label="Beendigung">
                        <p>
                            Sie können Ihr Konto jederzeit in der App löschen: Profil → Konto → Konto löschen.
                            Damit enden diese Bedingungen für Sie. Was dabei gelöscht wird und welche zwei
                            Ausnahmen bestehen, steht in der{" "}
                            <a href="/datenschutz/veganscout" className="underline hover:text-foreground transition-colors">Datenschutzerklärung</a>.
                        </p>
                    </Section>

                    <Section label="Haftung">
                        <p>
                            Die Haftung richtet sich nach den gesetzlichen Vorschriften. Für Vorsatz und
                            grobe Fahrlässigkeit sowie bei Verletzung von Leben, Körper oder Gesundheit wird
                            unbeschränkt gehaftet. Bei einfacher Fahrlässigkeit besteht eine Haftung nur bei
                            Verletzung wesentlicher Vertragspflichten und begrenzt auf den vertragstypischen,
                            vorhersehbaren Schaden.
                        </p>
                        <p>
                            Für Inhalte, die von anderen Nutzerinnen und Nutzern veröffentlicht werden, wird
                            keine Haftung übernommen; sie geben nicht die Auffassung des Anbieters wieder.
                            Gleiches gilt für Inhalte verlinkter Seiten.
                        </p>
                    </Section>

                    <Section label="Änderungen">
                        <p>
                            Diese Bedingungen können angepasst werden, wenn sich der Funktionsumfang oder die
                            Rechtslage ändert. Über wesentliche Änderungen wird in der App informiert. Wer
                            der Änderung nicht zustimmen möchte, kann sein Konto löschen.
                        </p>
                    </Section>

                    <Section label="Recht und Streitbeilegung">
                        <p>
                            Es gilt deutsches Recht. Zwingende Verbraucherschutzvorschriften des Staates, in
                            dem Sie Ihren gewöhnlichen Aufenthalt haben, bleiben unberührt.
                        </p>
                        <p>
                            Zur Teilnahme an einem Streitbeilegungsverfahren vor einer
                            Verbraucherschlichtungsstelle sind wir nicht verpflichtet und nicht bereit.
                        </p>
                    </Section>

                    <Section label="Stand">
                        <p>August 2026.</p>
                    </Section>
                </div>
            </div>
        </div>
    );
}
