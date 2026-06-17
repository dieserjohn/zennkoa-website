import { Project } from "@/components/ProjectCard";

export const projects: Project[] = [
    {
        slug: "plexus",
        title: "Plexus",
        description:
            "Eine Management-Software für große Server-Netzwerke – Monitoring und Steuerung mehrerer Server über ein zentrales Dashboard.",
        tags: ["Java", "Backend", "Netzwerk"],
        color: "#1e1e2e",
        image: "/projects/plexus.png",
        year: "2024",
        role: "Lead Developer & UI-Designer",
        longDescription: "Plexus ist eine moderne Lösung zur Verwaltung komplexer Server-Infrastrukturen, ursprünglich entwickelt für ein Spielenetzwerk mit verteilten Proxy-Knoten. Sie bietet ein zentrales Dashboard für Echtzeit-Monitoring, Nutzerverwaltung und Chat-Analyse. Das System wurde mit Fokus auf Performance und Skalierbarkeit gebaut und verarbeitet zuverlässig große Datenmengen von tausenden gleichzeitigen Nutzern.",
        techStack: ["Java (Paper API)", "Redis", "MongoDB", "RabbitMQ", "Next.js", "Tailwind CSS"],
        challenges: "Eine der größten Herausforderungen war die Echtzeit-Synchronisation über mehrere verteilte Server-Knoten hinweg, ohne dabei Latenz einzuführen. Das System musste tausende Events pro Sekunde verarbeiten und dabei die Datenkonsistenz wahren. Zusätzlich erforderte das UI eine sorgfältige Balance zwischen visueller Klarheit und Funktionsumfang auf Enterprise-Niveau.",
        solution: "Ich implementierte eine ereignisgesteuerte Architektur mit RabbitMQ für die asynchrone Kommunikation zwischen den Server-Knoten und dem Backend. Redis übernahm das schnelle Caching von Sitzungsdaten für sofortigen Zugriff. Das Dashboard wurde mit Next.js für eine reaktionsschnelle, SPA-ähnliche Nutzererfahrung umgesetzt, mit Server-Sent Events (SSE) für Live-Updates. Das Design setzt auf ein dunkles, fokussiertes Erscheinungsbild mit hohem Kontrast.",
        galleryImages: ["/projects/plexus.png"]
    },
    {
        "slug": "baltic-studios",
        "title": "Baltic Studios",
        "description": "Projektleitung und Full-Stack-Entwicklung für ein story-getriebenes Online-Spieleprojekt eines Entwicklerstudios. Koordination der Teams und Aufbau der gesamten Web-Infrastruktur.",
        "tags": ["Projektmanagement", "Next.js", "Tailwind CSS", "TypeScript", "PHP"],
        "color": "#1a1a2e",
        "image": "/projects/baltic.png",
        "year": "2020-2025",
        "role": "Projektleiter & Full-Stack-Entwickler",
        "longDescription": "Als Projektleiter bei Baltic Studios war ich für das digitale Ökosystem eines ambitionierten, story-getriebenen Spieleprojekts verantwortlich. Meine Aufgabe war es, die kreative Leitung, die Entwicklung und das visuelle Design von EgyBoy zu einer einheitlichen Vision zu verbinden. Ich verantwortete die Roadmap und entwickelte selbst die komplette Full-Stack-Webplattform, die das Spielerlebnis nahtlos mit dem Community-Hub verbindet.",
        "techStack": ["Next.js", "Tailwind CSS", "TypeScript", "PHP", "RabbitMQ", "Redis"],
        "challenges": "Das Projekt erforderte eine enge Abstimmung zwischen kreativer Vision und technischer Umsetzung, um die Web-Architektur an die sich wandelnden Anforderungen beider Seiten anzupassen. Eine performante Backend-Infrastruktur, die Echtzeitdaten der Spieleserver verarbeitet, stand im Zentrum der Entwicklungsarbeit.",
        "solution": "Ich konzipierte und entwickelte eine robuste Web-Infrastruktur mit Next.js und PHP, die komplexe Daten der Spieleserver über RabbitMQ verarbeitet. Als zentraler Ansprechpartner für den Web-Bereich sorgte ich dafür, dass Design und kreative Vision des Teams perfekt in eine funktionale, skalierbare Plattform integriert wurden.",
        "galleryImages": ["/projects/baltic.png"]
    },
    {
        slug: "wp-demo",
        title: "Herzkinder Ostfriesland",
        description:
            "Vereinswebsite für eine gemeinnützige Organisation – gebaut mit WordPress, individuellem Theme und optimierter Performance.",
        tags: ["WordPress", "PHP", "Webdesign"],
        color: "#c0392b",
        image: "/projects/wp-demo.png",
        year: "2026",
        role: "Webentwickler & Designer",
        longDescription: "Herzkinder Ostfriesland e.V. ist ein gemeinnütziger Verein, der Kinder mit angeborenem Herzfehler und ihre Familien in Ostfriesland unterstützt. Für den Verein entwickelte ich eine moderne, barrierefreie WordPress-Website, die die Arbeit und Projekte des Vereins professionell präsentiert und gleichzeitig Spendenaufrufe und Mitgliedschaften nahtlos integriert.",
        techStack: ["WordPress", "PHP", "Custom Theme", "CSS", "Elementor"],
        challenges: "Der Verein benötigte eine Lösung, die auch ohne technisches Know-how eigenständig gepflegt werden kann – gleichzeitig sollte die Seite modern und emotional ansprechend wirken. Zudem mussten Spendenformulare, Projektseiten und ein Blog so integriert werden, dass sie sich natürlich in das Gesamtbild einfügen.",
        solution: "Ich entwickelte ein individuell angepasstes WordPress-Theme mit warmer Farbwelt und klarer Typografie, das die emotionale Mission des Vereins transportiert. Die Redaktionsoberfläche wurde so vereinfacht, dass Vereinsmitglieder Inhalte ohne Entwicklerhilfe pflegen können. Spendenbuttons, Statistiken und Projektübersichten wurden als wiederverwendbare Blöcke umgesetzt.",
        galleryImages: ["/projects/wp-demo.png", "/projects/wp-demo-full.png"],
        link: "https://wpdemo.zennkoa.de",
    },
];
