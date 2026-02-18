"use client";

import Link from "next/link";
import Image from "next/image";
import { Project } from "@/components/ProjectCard";
import Footer from "@/components/Footer";

export default function FullScreenProjectList({ projects }: { projects: Project[] }) {
    return (
        <div className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth">
            {projects.map((project, index) => (
                <section
                    key={project.slug}
                    className="h-screen w-full snap-start relative flex items-center justify-center overflow-hidden"
                    style={{ backgroundColor: project.color }}
                >
                    {/* Background Image/Color Layer */}
                    <div className="absolute inset-0 bg-black/40 z-[1]" />

                    {project.image && (
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover z-0"
                            priority={index === 0}
                        />
                    )}

                    {/* Content */}
                    <div className="relative z-10 text-center px-6 max-w-[90vw] md:max-w-5xl mx-auto">
                        <div className="flex flex-wrap justify-center gap-3 mb-8">
                            {project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="text-[10px] sm:text-xs uppercase tracking-[0.2em] px-3 py-1 border border-white/30 rounded-full text-white/90 backdrop-blur-sm"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <h2 className="text-5xl sm:text-7xl md:text-9xl font-black uppercase tracking-tight text-white mb-8 drop-shadow-2xl">
                            <Link href={`/work/${project.slug}`} className="hover:text-neutral-300 transition-colors">
                                {project.title}
                            </Link>
                        </h2>

                        <p className="text-base sm:text-lg md:text-xl text-neutral-100 max-w-2xl mx-auto mb-12 leading-relaxed drop-shadow-lg font-light">
                            {project.description}
                        </p>

                        <Link
                            href={`/work/${project.slug}`}
                            className="inline-block px-8 py-4 bg-white text-black font-bold uppercase tracking-[0.2em] hover:bg-neutral-200 transition-colors rounded-full"
                        >
                            View Case Study
                        </Link>
                    </div>

                    {/* Scroll Indicator */}
                    {index < projects.length - 1 && (
                        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
                            <span className="text-white text-[10px] uppercase tracking-[0.3em] opacity-70">Scroll</span>
                        </div>
                    )}
                </section>
            ))}

            {/* Footer Section */}
            <section className="h-screen w-full snap-start relative flex flex-col justify-end bg-black">
                <div className="flex-1 flex items-center justify-center">
                    <div className="text-center">
                        <p className="text-neutral-500 text-sm uppercase tracking-[0.3em] mb-6">That's all folks</p>
                        <Link href="/" className="text-4xl font-bold text-white hover:text-neutral-300 transition-colors">
                            Back to Home
                        </Link>
                    </div>
                </div>
                <div className="w-full">
                    <Footer />
                </div>
            </section>
        </div>
    );
}
