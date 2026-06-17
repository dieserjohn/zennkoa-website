import Link from "next/link";
import Image from "next/image";
import { Project } from "@/components/ProjectCard";

export default function ProjectList({
    projects,
    showViewAll = false,
}: {
    projects: Project[];
    showViewAll?: boolean;
}) {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => {
                    const href = project.link ?? `/work/${project.slug}`;
                    const isExternal = !!project.link;

                    return (
                        <Link
                            key={project.slug}
                            href={href}
                            {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                            className="group flex flex-col border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors duration-300"
                        >
                            {/* Thumbnail */}
                            <div
                                className="relative w-full aspect-[16/10] overflow-hidden"
                                style={{ backgroundColor: project.color }}
                            >
                                {project.image && (
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                                        quality={80}
                                    />
                                )}
                            </div>

                            {/* Content */}
                            <div className="flex flex-col flex-1 p-6 gap-3">
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-2xl font-black uppercase tracking-tight group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed flex-1">
                                    {project.description}
                                </p>

                                <span className="text-xs uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400 group-hover:text-black dark:group-hover:text-white transition-colors mt-2">
                                    {isExternal ? "Website besuchen →" : "Case Study →"}
                                </span>
                            </div>
                        </Link>
                    );
                })}
            </div>

            {showViewAll && (
                <div className="mt-12">
                    <Link
                        href="/work"
                        className="text-xs uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
                    >
                        Alle Projekte ansehen →
                    </Link>
                </div>
            )}
        </div>
    );
}
