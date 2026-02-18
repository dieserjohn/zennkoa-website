"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Project } from "@/components/ProjectCard";

export default function ProjectList({
    projects,
    showViewAll = false
}: {
    projects: Project[];
    showViewAll?: boolean;
}) {
    const [activeProject, setActiveProject] = useState<Project>(projects[0]);

    return (
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
            {/* Project List */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-8">
                {projects.map((project) => (
                    <div
                        key={project.slug}
                        onMouseEnter={() => setActiveProject(project)}
                        className="group cursor-pointer"
                    >
                        <Link href={`/work/${project.slug}`} className="block">
                            <h3
                                className={`text-4xl sm:text-6xl font-black uppercase tracking-tight transition-all duration-300 ${activeProject.slug === project.slug
                                        ? "text-white translate-x-4"
                                        : "text-neutral-700 hover:text-neutral-400"
                                    }`}
                            >
                                {project.title}
                            </h3>
                            <div
                                className={`h-px bg-neutral-800 mt-8 transition-all duration-300 ${activeProject.slug === project.slug ? "w-full" : "w-12 group-hover:w-24"
                                    }`}
                            />
                        </Link>
                    </div>
                ))}

                {showViewAll && (
                    <Link
                        href="/work"
                        className="mt-12 text-xs uppercase tracking-[0.2em] text-neutral-500 hover:text-white transition-colors self-start"
                    >
                        View all work →
                    </Link>
                )}
            </div>

            {/* Preview Area */}
            <div className="w-full lg:w-1/2 h-[50vh] lg:h-[600px] relative">
                <div className="sticky top-32 w-full h-full">
                    {projects.map((project) => (
                        <div
                            key={project.slug}
                            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${activeProject.slug === project.slug ? "opacity-100 z-10" : "opacity-0 z-0"
                                }`}
                        >
                            <Link href={`/work/${project.slug}`} className="block w-full h-full relative rounded-2xl overflow-hidden group">
                                {/* Background Color / Image */}
                                <div
                                    className="absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-105"
                                    style={{ backgroundColor: project.color }}
                                >
                                    {project.image && (
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                                        />
                                    )}
                                </div>

                                {/* Content Overlay */}
                                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="text-[10px] uppercase tracking-[0.2em] text-white/70 border border-white/20 px-2 py-1 rounded-full"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <p className="text-neutral-300 line-clamp-2 leading-relaxed">
                                        {project.description}
                                    </p>
                                    <span className="inline-block mt-4 text-xs uppercase tracking-[0.2em] text-white border-b border-white/30 pb-1 group-hover:border-white transition-colors">
                                        View Project
                                    </span>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
