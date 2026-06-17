import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";

const baseUrl = "https://zennkoa.de";

export default function sitemap(): MetadataRoute.Sitemap {
    const staticRoutes = ["", "/work", "/about", "/kontakt", "/impressum", "/datenschutz"].map((path) => ({
        url: `${baseUrl}${path}`,
        lastModified: new Date(),
    }));

    const projectRoutes = projects.map((project) => ({
        url: `${baseUrl}/work/${project.slug}`,
        lastModified: new Date(),
    }));

    return [...staticRoutes, ...projectRoutes];
}
