import { Project } from "@/components/ProjectCard";

export const projects: Project[] = [
    {
        slug: "plexus",
        title: "Plexus",
        description:
            "A Minecraft network management software for monitoring and controlling multiple servers from a single dashboard.",
        tags: ["Java", "Minecraft", "Network"],
        color: "#1e1e2e",
        image: "/projects/plexus.png",
        year: "2024",
        role: "Lead Developer & UI Designer",
        longDescription: "Plexus is a next-generation Minecraft network management solution designed to streamline the administration of complex server infrastructures. Born from the need to manage distributed player bases across multiple proxy nodes, it offers a centralized dashboard for real-time monitoring, punishment management, and chat analysis. The system was built with performance and scalability in mind, capable of handling high-throughput data streams from thousands of concurrent players.",
        techStack: ["Java (Paper API)", "Redis", "MongoDB", "RabbitMQ", "Next.js", "Tailwind CSS"],
        challenges: "One of the primary challenges was ensuring real-time synchronization across distributed server nodes without introducing latency. The system needed to handle thousands of chat messages and punishment events per second while maintaining data consistency. Additionally, designing a UI that felt 'native' to the gaming aesthetic while providing enterprise-grade utility required a careful balance of visual flair and usability.",
        solution: "I implemented an event-driven architecture using RabbitMQ for asynchronous communication between server nodes and the backend. Redis was utilized for high-speed caching of player sessions, ensuring instant data retrieval. The dashboard was built with Next.js to provide a snappy, SPA-like experience, using server-sent events (SSE) for live updates. The design language adopted a dark, immersive 'gaming' aesthetic with high contrast and motion to keep administrators engaged.",
        galleryImages: ["/projects/plexus.png"], // Placeholder for now
    },
    {
        slug: "revelix-core",
        title: "Revelix Core",
        description:
            "A comprehensive Minecraft plugin providing core functionality for server management, including custom APIs and utilities.",
        tags: ["Java", "Minecraft", "Paper API"],
        color: "#1a1a2e",
    },
    {
        slug: "ban-system",
        title: "Ban System Dashboard",
        description:
            "A full-stack web dashboard for managing player bans, built with Next.js and a REST API backend.",
        tags: ["TypeScript", "Next.js", "React"],
        color: "#16213e",
    },
    {
        slug: "lucky-slot",
        title: "LuckySlot",
        description:
            "An engaging Minecraft minigame plugin featuring smooth slot machine animations and reward systems.",
        tags: ["Java", "Minecraft", "Game Design"],
        color: "#0f3460",
    },
    {
        slug: "lobby-plugin",
        title: "Lobby System",
        description:
            "A feature-rich lobby plugin for Minecraft servers with interactive menus and player management.",
        tags: ["Java", "Minecraft", "Paper API"],
        color: "#1a1a2e",
    },
    {
        slug: "invoicing-app",
        title: "Invoicing App",
        description:
            "A GoBD-compliant SaaS for freelancers and small businesses, handling invoices, products, and customers.",
        tags: ["TypeScript", "React", "Node.js"],
        color: "#16213e",
    },
    {
        slug: "portfolio",
        title: "Portfolio Website",
        description:
            "This minimalist portfolio site, built with Next.js and Tailwind CSS.",
        tags: ["TypeScript", "Next.js", "Tailwind CSS"],
        color: "#0f3460",
    },
];
