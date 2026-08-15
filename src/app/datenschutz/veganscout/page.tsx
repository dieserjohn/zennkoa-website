import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Datenschutz – VeganScout",
    description: "Datenschutzerklärung für die App VeganScout",
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

function Link({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-foreground transition-colors"
        >
            {children}
        </a>
    );
}

export default function VeganScoutDatenschutzPage() {
    return (
        <div className="pt-32 pb-24 px-8 bg-background text-foreground">
            <div className="mx-auto max-w-3xl">
                <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 dark:text-neutral-400 mb-4">
                    VeganScout für iOS
                </p>
                <h1 className="text-5xl sm:text-7xl font-black uppercase tracking-tight mb-12">
                    Datenschutz
                </h1>

                <div className="space-y-10 text-sm leading-relaxed">
                    <Section label="Kurz gesagt">
                        <p>
                            VeganScout lässt sich vollständig ohne Konto nutzen. Ohne Anmeldung werden
                            keine personenbezogenen Daten gespeichert, die über die technisch notwendigen
                            Server-Protokolle hinausgehen. Es gibt keine Werbung, keine Analyse- oder
                            Tracking-Dienste, keine Profilbildung und keine Weitergabe von Daten zu
                            Werbezwecken. Bei der Anmeldung werden weder Name noch E-Mail-Adresse
                            abgefragt.
                        </p>
                    </Section>

                    <Section label="Verantwortlicher">
                        <p>
                            John-Phillip Delenschke
                            <br />
                            Graf-v.-Stauffenberg-Str. 7
                            <br />
                            18437 Stralsund, Deutschland
                            <br />
                            E-Mail: <a href="mailto:hello@zennkoa.de" className="underline hover:text-foreground transition-colors">hello@zennkoa.de</a>
                        </p>
                    </Section>

                    <Section label="Nutzung ohne Konto">
                        <p>
                            Beim Abruf von Reisezielen, Zutaten und weiteren Inhalten werden Verbindungsdaten
                            (IP-Adresse, Zeitpunkt, abgerufene Adresse, Fehlermeldungen) in Server-Protokollen
                            erfasst. Sie sind für den Betrieb und die Abwehr von Missbrauch erforderlich und
                            werden nicht dazu verwendet, einzelne Personen zu bestimmen.
                        </p>
                        <p>
                            Einstellungen wie die Gewichtung der Bewertungsbereiche, abgehakte
                            Vorbereitungsschritte und eigene Notizen zur Vorbereitung verbleiben
                            ausschließlich auf dem Gerät und werden nicht übertragen.
                        </p>
                        <p>
                            Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am sicheren
                            Betrieb).
                        </p>
                    </Section>

                    <Section label="Konto und Anmeldung">
                        <p>
                            Die Anmeldung erfolgt ausschließlich über <strong>Sign in with Apple</strong>. Dabei
                            werden bewusst weder Name noch E-Mail-Adresse angefordert. Gespeichert wird
                            lediglich die von Apple vergebene pseudonyme Kennung („sub“), die für diese App
                            eindeutig ist und keinen Rückschluss auf die Apple-ID zulässt.
                        </p>
                        <p>
                            Zusätzlich wird je angemeldetem Gerät eine Sitzung gespeichert: ein
                            SHA-256-Prüfwert des Sitzungsschlüssels sowie der Zeitpunkt der letzten Nutzung.
                            Der Sitzungsschlüssel selbst liegt im Klartext nur im Schlüsselbund des Geräts.
                        </p>
                        <p>
                            Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Erfüllung des Nutzungsvertrags).
                            Zur Verarbeitung durch Apple: <Link href="https://www.apple.com/legal/privacy/de-ww/">apple.com/legal/privacy</Link>
                        </p>
                    </Section>

                    <Section label="Profil und öffentliche Inhalte">
                        <p>
                            Mit einem Konto lässt sich ein Profil anlegen. Freiwillig angegeben werden können:
                            Anzeigename (erforderlich), Kurzbeschreibung, Jahresangabe „vegan seit“, ein
                            Ortsname als Basis sowie ein Profilbild.
                        </p>
                        <p>
                            Ist das Profil auf <strong>öffentlich</strong> gestellt, sind Anzeigename,
                            Kurzbeschreibung, Jahresangabe, Ortsname, Profilbild, besuchte Ziele,
                            veröffentlichte Erfahrungen und geteilte Listen für andere Personen sichtbar –
                            auch ohne App und ohne eigenes Konto. Die Voreinstellung ist{" "}
                            <strong>privat</strong>. Die Sichtbarkeit lässt sich jederzeit in der App ändern.
                        </p>
                        <p>
                            Nicht öffentlich sind in jedem Fall: Merkliste, geplante Reise, eigene Bewertungen
                            und private Notizen zu besuchten Zielen. Diese Trennung ist in der Datenbankabfrage
                            selbst verankert, nicht erst in der Darstellung.
                        </p>
                        <p>
                            Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO. Die Veröffentlichung einzelner Inhalte
                            erfolgt jeweils auf eigene Veranlassung.
                        </p>
                    </Section>

                    <Section label="Profilbilder">
                        <p>
                            Hochgeladene Bilder werden auf dem Server neu berechnet und auf 512 × 512 Bildpunkte
                            gebracht. Dabei werden <strong>sämtliche Metadaten entfernt</strong>, insbesondere
                            im Bild gespeicherte GPS-Koordinaten. Ein Foto, das zu Hause aufgenommen wurde,
                            gibt damit keinen Aufnahmeort preis. Die Dateinamen werden zufällig vergeben, damit
                            fremde Bilder nicht durch Ausprobieren auffindbar sind.
                        </p>
                    </Section>

                    <Section label="Besuchte Ziele, Erfahrungen und Listen">
                        <p>
                            Zu einem besuchten Ziel lassen sich Reisemonat, eine eigene Bewertung, eine private
                            Notiz und eine öffentliche Erfahrung speichern. Die private Notiz wird an keiner
                            Stelle veröffentlicht. Eigene Bewertungen fließen nicht in die Bewertung eines
                            Ziels ein.
                        </p>
                        <p>
                            Ziellisten sind zunächst privat. Wird eine Liste geteilt, ist sie über ihre Adresse
                            für jede Person mit diesem Link abrufbar – auch ohne Konto. Die Adresse enthält eine
                            zufällige Zeichenfolge und ist nicht erratbar. Das Teilen lässt sich jederzeit
                            zurücknehmen.
                        </p>
                    </Section>

                    <Section label="Meldungen, Blockieren und Moderation">
                        <p>
                            Veröffentlichte Inhalte lassen sich melden. Gespeichert werden dabei der gemeldete
                            Inhalt, der angegebene Grund, ein optionaler Hinweistext und das meldende Konto –
                            Letzteres, damit dasselbe Konto einen Inhalt nur einmal meldet. Ab drei
                            unabhängigen Meldungen wird ein Inhalt automatisch ausgeblendet und anschließend
                            geprüft.
                        </p>
                        <p>
                            Werden Konten blockiert, wird diese Zuordnung gespeichert, damit die Inhalte
                            beidseitig ausgeblendet werden können.
                        </p>
                        <p>
                            Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Abwehr
                            missbräuchlicher Inhalte) sowie Art. 6 Abs. 1 lit. b DSGVO.
                        </p>
                    </Section>

                    <Section label="Standort">
                        <p>
                            Auf der Karte der genannten Orte kann der eigene Standort eingeblendet werden. Die
                            Standortermittlung erfolgt ausschließlich auf dem Gerät durch das Betriebssystem;
                            der Standort wird <strong>nicht an den Server übertragen</strong> und nicht
                            gespeichert. Ohne Freigabe funktioniert die Karte unverändert, nur ohne die eigene
                            Position.
                        </p>
                    </Section>

                    <Section label="Daten auf dem Gerät">
                        <p>
                            Für die Nutzung ohne Netz werden Zielprofile der gemerkten Ziele und das
                            Zutatenlexikon auf dem Gerät abgelegt. Diese Daten verlassen das Gerät nicht und
                            werden mit dem Löschen der App entfernt.
                        </p>
                    </Section>

                    <Section label="Empfänger und eingesetzte Dienste">
                        <p>
                            <strong>Hetzner Online GmbH</strong>, Industriestr. 25, 91710 Gunzenhausen – Betrieb
                            des Servers (Rechenzentrum in Finnland, EU). Auftragsverarbeitung nach Art. 28
                            DSGVO. <Link href="https://www.hetzner.com/de/legal/privacy-policy/">hetzner.com/de/legal/privacy-policy</Link>
                        </p>
                        <p>
                            <strong>Apple Inc.</strong> – Anmeldung über Sign in with Apple sowie Darstellung der
                            Karten (Apple Maps). Beim Laden von Kartenausschnitten verarbeitet Apple technisch
                            notwendige Verbindungsdaten.
                        </p>
                        <p>
                            <strong>Unsplash Inc.</strong> – Die Bilder der Reiseziele werden nach den
                            Lizenzbedingungen direkt von den Servern von Unsplash geladen. Dabei wird die
                            IP-Adresse des Geräts an Unsplash übermittelt. Ein eigenes Speichern der Bilder ist
                            nach diesen Bedingungen nicht zulässig. <Link href="https://unsplash.com/privacy">unsplash.com/privacy</Link>
                        </p>
                        <p>
                            Zur Erstellung der Zielprofile werden automatisierte Webrecherchen durchgeführt und
                            Ortsangaben über <strong>OpenStreetMap</strong> in Koordinaten übersetzt. Beides
                            geschieht ausschließlich serverseitig und ohne Bezug zu einzelnen Nutzerinnen und
                            Nutzern.
                        </p>
                    </Section>

                    <Section label="Speicherdauer und Löschung">
                        <p>
                            Kontodaten, Profil, Merkliste, Besuche, Notizen, Erfahrungen, Listen,
                            Folgebeziehungen und Blockierungen werden gespeichert, bis das Konto gelöscht wird.
                            Die Löschung ist jederzeit in der App möglich: Profil → Konto → Konto löschen. Sie
                            erfolgt sofort und vollständig, einschließlich des Profilbilds.
                        </p>
                        <p>
                            Zwei Ausnahmen bestehen aus Gründen der Nachvollziehbarkeit: Meldungen zu Inhalten
                            und vorgeschlagene Reiseziele bleiben bestehen, werden dabei aber vom Konto
                            getrennt und sind danach keiner Person mehr zuzuordnen.
                        </p>
                        <p>
                            Server-Protokolle werden nach spätestens 14 Tagen gelöscht.
                        </p>
                    </Section>

                    <Section label="Ihre Rechte">
                        <p>
                            Sie haben das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16),
                            Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18), Datenübertragbarkeit
                            (Art. 20) sowie das Recht, einer Verarbeitung auf Grundlage berechtigter Interessen
                            zu widersprechen (Art. 21). Wenden Sie sich dazu an{" "}
                            <a href="mailto:hello@zennkoa.de" className="underline hover:text-foreground transition-colors">hello@zennkoa.de</a>.
                        </p>
                        <p>
                            Ihnen steht außerdem ein Beschwerderecht bei einer Aufsichtsbehörde zu. Zuständig
                            ist der Landesbeauftragte für Datenschutz und Informationsfreiheit
                            Mecklenburg-Vorpommern, Schloss Schwerin, Lennéstr. 1, 19053 Schwerin.
                        </p>
                    </Section>

                    <Section label="Änderungen">
                        <p>
                            Diese Erklärung wird angepasst, wenn sich die Verarbeitung ändert – etwa durch neue
                            Funktionen der App. Stand: August 2026.
                        </p>
                    </Section>
                </div>
            </div>
        </div>
    );
}
