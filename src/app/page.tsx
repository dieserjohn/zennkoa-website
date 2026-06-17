import Link from "next/link";
import FeaturedProjects from "@/components/FeaturedProjects";
import { projects } from "@/data/projects";

const featuredProjects = projects.slice(0, 3);

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "John Delenschke",
  alternateName: "Zennkoa",
  url: "https://zennkoa.de",
  jobTitle: "Webentwickler",
  image: "https://zennkoa.de/profile.jpg",
  description:
    "Webentwickler aus Stralsund – moderne, performante Websites und Webanwendungen für Unternehmen, Vereine und Selbstständige in Stralsund und Mecklenburg-Vorpommern.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Stralsund",
    addressRegion: "Mecklenburg-Vorpommern",
    addressCountry: "DE",
  },
  homeLocation: {
    "@type": "Place",
    name: "Stralsund, Germany",
  },
  areaServed: [
    { "@type": "City", name: "Stralsund" },
    { "@type": "AdministrativeArea", name: "Mecklenburg-Vorpommern" },
    { "@type": "Country", name: "Germany" },
  ],
  knowsAbout: ["Webentwicklung", "Backend-Entwicklung", "Java", "TypeScript", "React", "Next.js"],
  sameAs: [
    "https://github.com/dieserjohn",
    "https://www.linkedin.com/in/john-delenschke-7316aa173/",
    "https://twitter.com/dieseracc",
  ],
};

export default function Home() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 relative overflow-hidden">
        <div className="mx-auto w-full max-w-[1800px]">
          <p className="text-[10px] uppercase tracking-[0.4em] text-neutral-500 dark:text-neutral-400 mb-8">
            Webentwickler in Stralsund
          </p>

          <h1 className="text-7xl sm:text-[10rem] lg:text-[14rem] font-black tracking-[-0.04em] leading-[0.85] uppercase">
            Zenn
            <br />
            <span className="text-transparent" style={{ WebkitTextStroke: "2px var(--foreground)" }}>
              koa
            </span>
          </h1>

          <div className="mt-12 flex items-start justify-between flex-wrap gap-8">
            <p className="max-w-sm text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Ich entwickle moderne Websites und Webanwendungen – mit Fokus
              auf cleanem Code, durchdachtem Design und skalierbaren
              Backend-Systemen.
            </p>

            <div className="flex items-center gap-6">
              <Link
                href="/work"
                className="text-xs uppercase tracking-[0.2em] border border-neutral-300 dark:border-neutral-700 px-6 py-3 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300"
              >
                Projekte ansehen
              </Link>
              <Link
                href="/about"
                className="text-xs uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
              >
                Über mich →
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-neutral-200 dark:bg-neutral-800" />
      </section>

      {/* Marquee */}
      <section aria-hidden="true" className="py-8 border-b border-neutral-200 dark:border-neutral-800 overflow-hidden">
        <div className="animate-marquee flex whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <span key={i} className="flex items-center gap-8 mr-8">
              <span className="text-6xl sm:text-8xl font-black uppercase tracking-tight text-neutral-200 dark:text-neutral-800">
                Webentwicklung
              </span>
              <span className="text-neutral-700">✦</span>
              <span className="text-6xl sm:text-8xl font-black uppercase tracking-tight text-neutral-200 dark:text-neutral-800">
                Backend
              </span>
              <span className="text-neutral-700">✦</span>
              <span className="text-6xl sm:text-8xl font-black uppercase tracking-tight text-neutral-200 dark:text-neutral-800">
                Java
              </span>
              <span className="text-neutral-700">✦</span>
              <span className="text-6xl sm:text-8xl font-black uppercase tracking-tight text-neutral-200 dark:text-neutral-800">
                TypeScript
              </span>
              <span className="text-neutral-700">✦</span>
              <span className="text-6xl sm:text-8xl font-black uppercase tracking-tight text-neutral-200 dark:text-neutral-800">
                React
              </span>
              <span className="text-neutral-700">✦</span>
              <span className="text-6xl sm:text-8xl font-black uppercase tracking-tight text-neutral-200 dark:text-neutral-800">
                Next.js
              </span>
              <span className="text-neutral-700">✦</span>
            </span>
          ))}
        </div>
      </section>

      {/* Featured Work */}
      <FeaturedProjects projects={featuredProjects} />

      {/* Contact CTA */}
      <section className="px-6 md:px-12 py-32 border-b border-neutral-200 dark:border-neutral-800">
        <div className="mx-auto max-w-[1800px] flex flex-col lg:flex-row items-start lg:items-end justify-between gap-12">
          <div>
            <p className="text-[10px] uppercase tracking-[0.4em] text-neutral-500 dark:text-neutral-400 mb-6">
              Kontakt
            </p>
            <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-[0.9]">
              Projekt in
              <br />
              <span className="text-transparent" style={{ WebkitTextStroke: "2px var(--foreground)" }}>
                Planung?
              </span>
            </h2>
          </div>
          <div className="flex flex-col gap-4 lg:items-end">
            <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-xs lg:text-right leading-relaxed">
              Ich bin offen für neue Projekte und Kooperationen – melde dich einfach.
            </p>
            <a
              href="mailto:hello@zennkoa.de"
              className="inline-block text-xs uppercase tracking-[0.2em] border border-neutral-300 dark:border-neutral-700 px-8 py-4 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300"
            >
              hello@zennkoa.de ↗
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
