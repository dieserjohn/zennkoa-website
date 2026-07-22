import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Leistungen",
    description: "Webdesign, WordPress, Ghost CMS und individuelle Webanwendungen – John Delenschke, Webentwickler aus Stralsund.",
};

const services = [
    {
        number: "01",
        title: "Website & Webdesign",
        description: "Eine gute Website ist mehr als ein schönes Layout. Ich entwickle Auftritte, die auf jedem Gerät funktionieren, schnell laden und deinen Besuchern das vermitteln, was du ihnen sagen willst.",
        details: [
            "Konzept, Design und Entwicklung aus einer Hand",
            "Responsiv – optimiert für Mobile, Tablet und Desktop",
            "Schnell, sicher und barrierefrei",
            "Geeignet für: Unternehmen, Vereine, Selbstständige, Events",
        ],
        tags: ["Webdesign", "HTML / CSS", "Next.js", "Tailwind CSS"],
    },
    {
        number: "02",
        title: "WordPress",
        description: "WordPress ist das meistgenutzte CMS der Welt – und mit dem richtigen Setup ein mächtiges Werkzeug. Ich entwickle individuelle Themes und Setups, die du selbst pflegen kannst, ohne Entwicklerkenntnisse.",
        details: [
            "Individuelles Theme statt teures Page-Builder-Chaos",
            "Einfache Bedienung für dein Team",
            "WooCommerce, Kontaktformulare, Mehrsprachigkeit",
            "Migration bestehender Seiten",
        ],
        tags: ["WordPress", "PHP", "Custom Theme", "WooCommerce"],
    },
    {
        number: "03",
        title: "Ghost CMS",
        description: "Ghost ist die moderne Alternative zu WordPress – schlank, schnell und perfekt für Content-getriebene Projekte wie Blogs, Magazine oder Newsletter-Plattformen.",
        details: [
            "Individuelles Ghost-Theme",
            "Newsletter-Integration inklusive",
            "Deutlich schneller als WordPress",
            "Ideal für: Blogs, Magazine, Membership-Seiten",
        ],
        tags: ["Ghost CMS", "Handlebars", "Newsletter", "Membership"],
    },
    {
        number: "04",
        title: "Statische Websites",
        description: "Für Projekte, bei denen Geschwindigkeit und Sicherheit an erster Stelle stehen: statisch generierte Seiten ohne Datenbank, ohne CMS-Overhead – einfach schnell.",
        details: [
            "Maximale Performance (Core Web Vitals)",
            "Kein Server-Overhead, kein Angriffspunkt",
            "Günstigeres Hosting",
            "Ideal für: Portfolio, Landing Pages, Kampagnenseiten",
        ],
        tags: ["Next.js", "Astro", "TypeScript", "Vercel"],
    },
    {
        number: "05",
        title: "Individuelle Webanwendungen",
        description: "Wenn Standard-Tools nicht reichen: maßgeschneiderte Webanwendungen, Dashboards und Backend-Systeme, die genau auf deinen Anwendungsfall zugeschnitten sind.",
        details: [
            "Dashboards und Admin-Oberflächen",
            "REST-APIs und Backend-Systeme",
            "Datenbankanbindung (PostgreSQL, MongoDB, Redis)",
            "Für: Startups, interne Tools, komplexe Plattformen",
        ],
        tags: ["React", "Node.js", "TypeScript", "REST API"],
    },
    {
        number: "06",
        title: "Hosting",
        description: "Wenn ich deine Seite hoste, läuft sie auf meiner eigenen Hosting-Plattform – dort kannst du Domains, E-Mail-Postfächer und Datenbanken selbst verwalten, ganz ohne mich fragen zu müssen.",
        details: [
            "Domains, SSL und E-Mail-Postfächer selbst verwalten",
            "SSL-Zertifikate werden automatisch eingerichtet",
            "FTP/SFTP-Zugang und Datenbankverwaltung inklusive",
            "Ideal für: Websites, die ich für dich baue oder betreue",
        ],
        tags: ["Webhosting", "E-Mail", "SSL", "Datenbanken"],
        link: { href: "https://portal.zennkoa.de", label: "portal.zennkoa.de ansehen" },
    },
];

export default function LeistungenPage() {
    return (
        <div>
            {/* Hero */}
            <section className="px-6 md:px-12 pt-40 pb-24 border-b border-neutral-200 dark:border-neutral-800">
                <div className="mx-auto max-w-[1800px]">
                    <p className="text-[10px] uppercase tracking-[0.4em] text-neutral-500 dark:text-neutral-400 mb-8">
                        Leistungen
                    </p>
                    <h1 className="text-6xl sm:text-8xl lg:text-[10rem] font-black uppercase tracking-tight leading-[0.85] mb-12">
                        Was ich
                        <br />
                        <span className="text-transparent" style={{ WebkitTextStroke: "2px var(--foreground)" }}>
                            anbiete
                        </span>
                    </h1>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-md">
                        Von der einfachen Landing Page bis zur komplexen Webanwendung – ich begleite dein Projekt von der ersten Idee bis zum Launch. Preise immer auf Anfrage, abhängig vom Umfang.
                    </p>
                </div>
            </section>

            {/* Services list */}
            <section className="px-6 md:px-12">
                <div className="mx-auto max-w-[1800px]">
                    {services.map((service, i) => (
                        <div
                            key={service.number}
                            className={`py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-24 ${
                                i < services.length - 1 ? "border-b border-neutral-200 dark:border-neutral-800" : ""
                            }`}
                        >
                            {/* Number + Title */}
                            <div className="lg:col-span-4">
                                <span className="text-[10px] uppercase tracking-[0.4em] text-neutral-400 dark:text-neutral-600 block mb-4">
                                    {service.number}
                                </span>
                                <h2 className="text-3xl font-black uppercase tracking-tight">
                                    {service.title}
                                </h2>
                            </div>

                            {/* Content */}
                            <div className="lg:col-span-8 space-y-8">
                                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                    {service.description}
                                </p>
                                <ul className="space-y-2">
                                    {service.details.map((detail) => (
                                        <li key={detail} className="flex items-start gap-3 text-sm text-neutral-600 dark:text-neutral-400">
                                            <span className="text-neutral-300 dark:text-neutral-700 mt-0.5">—</span>
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex flex-wrap gap-2">
                                    {service.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-800 px-3 py-1"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                {service.link && (
                                    <a
                                        href={service.link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block text-xs uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
                                    >
                                        {service.link.label} →
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="px-6 md:px-12 py-32 border-t border-neutral-200 dark:border-neutral-800">
                <div className="mx-auto max-w-[1800px] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-xs leading-relaxed">
                        Nicht sicher, was du brauchst? Schreib mir einfach – wir finden gemeinsam die richtige Lösung.
                    </p>
                    <Link
                        href="/kontakt"
                        className="text-xs uppercase tracking-[0.2em] border border-neutral-300 dark:border-neutral-700 px-6 py-3 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300"
                    >
                        Projekt besprechen
                    </Link>
                </div>
            </section>
        </div>
    );
}
