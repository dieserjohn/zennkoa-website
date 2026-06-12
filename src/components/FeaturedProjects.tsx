import ProjectList from "@/components/ProjectList";
import { Project } from "@/components/ProjectCard";

export default function FeaturedProjects({ projects }: { projects: Project[] }) {
    return (
        <section className="px-6 md:px-12 py-32 border-b border-neutral-200 dark:border-neutral-800">
            <div className="mx-auto max-w-[1800px]">
                <p className="text-[10px] uppercase tracking-[0.4em] text-neutral-500 dark:text-neutral-400 mb-16">
                    Ausgewählte Projekte
                </p>
                <ProjectList projects={projects} showViewAll={true} />
            </div>
        </section>
    );
}
