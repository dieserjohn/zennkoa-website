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
        galleryImages: ["/projects/plexus.png"]
    },
    {
        "slug": "baltic-studios",
        "title": "Baltic Studios",
        "description": "Project Lead and Full Stack Developer for a Minecraft studio's galactic story game. Coordinated cross-departmental workflows and built the entire web infrastructure.",
        "tags": ["Project Management", "Next.js", "Tailwind CSS", "TypeScript", "PHP"],
        "color": "#1a1a2e",
        "image": "/projects/baltic.png",
        "year": "2020-2025",
        "role": "Project Lead & Full Stack Developer",
        "longDescription": "As Project Lead at Baltic Studios, I oversaw the digital ecosystem for an ambitious, story-driven Minecraft project set in a distant galaxy. My role was to bridge the gap between the creative direction, development leadership, and the visual design by EgyBoy. I managed the project's roadmap and personally developed the full-stack web platform, creating a seamless connection between the in-game experience and the community hub.",
        "techStack": ["Next.js", "Tailwind CSS", "TypeScript", "PHP", "RabbitMQ", "Redis"],
        "challenges": "The project required high-level coordination to align the web architecture with the shifting needs of both the creative and technical leads. Balancing these diverse requirements while maintaining a high-performance backend that tracks real-time 'galactic' player data was the primary focus of my leadership and development work.",
        "solution": "I designed and implemented a robust web infrastructure using Next.js and PHP, ensuring it could handle complex data from the game servers via RabbitMQ. By acting as the central point of coordination for the web department, I ensured that EgyBoy's designs and the creative team's vision were perfectly integrated into a functional, scalable platform.",
        "galleryImages": ["/projects/baltic.png"]
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
        slug: "portfolio",
        title: "Portfolio Website",
        description:
            "This minimalist portfolio site, built with Next.js and Tailwind CSS.",
        tags: ["TypeScript", "Next.js", "Tailwind CSS"],
        color: "#0f3460",
    },
];
