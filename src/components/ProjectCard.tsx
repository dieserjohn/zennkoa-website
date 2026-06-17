import Link from "next/link";
import Image from "next/image";

export interface Project {
    slug: string;
    title: string;
    description: string;
    tags: string[];
    color: string;
    image?: string;
    // Case Study Fields
    year?: string;
    role?: string;
    longDescription?: string;
    techStack?: string[];
    challenges?: string;
    solution?: string;
    galleryImages?: string[];
    link?: string;
    liveUrl?: string;
}

export default function ProjectCard({
    project,
    index,
}: {
    project: Project;
    index: number;
}) {
    const isEven = index % 2 === 0;

    const href = project.link ?? `/work/${project.slug}`;
    const isExternal = !!project.link;

    return (
        <Link href={href} className="group block" {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
            <div
                className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                    } gap-8 lg:gap-12 items-center`}
            >
                {/* Thumbnail */}
                <div
                    className="relative w-full lg:w-3/5 aspect-[16/10] rounded-2xl overflow-hidden transition-transform duration-500 group-hover:scale-[1.02]"
                    style={{ backgroundColor: project.color }}
                >
                    {project.image && (
                        <div className="absolute inset-0 flex items-center justify-center p-6 sm:p-10">
                            {/* Glow behind the screenshot */}
                            <div
                                className="absolute inset-[15%] rounded-2xl blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-700"
                                style={{ backgroundColor: "#3b5bdb" }}
                            />

                            {/* Floating screenshot with 3D tilt */}
                            <div
                                className="relative w-[90%] rounded-xl overflow-hidden shadow-2xl shadow-black/60 transition-all duration-700 group-hover:shadow-blue-500/20 group-hover:shadow-[0_20px_60px]"
                                style={{
                                    transform: "perspective(1200px) rotateY(-5deg) rotateX(3deg)",
                                }}
                            >
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    width={1200}
                                    height={750}
                                    className="w-full h-auto"
                                    quality={80}
                                />

                                {/* Subtle shine overlay */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
                            </div>
                        </div>
                    )}
                </div>

                {/* Content */}
                <div className="w-full lg:w-2/5 space-y-4">
                    <div className="flex flex-wrap gap-3">
                        {project.tags.map((tag) => (
                            <span
                                key={tag}
                                className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-800 rounded-full px-3 py-1"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <h3 className="text-3xl sm:text-4xl font-bold tracking-tight">
                        {project.title}
                    </h3>

                    <p className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        {project.description}
                    </p>

                    <span className="inline-block text-sm text-neutral-500 dark:text-neutral-400 group-hover:text-black dark:group-hover:text-white transition-colors">
                        Projekt ansehen →
                    </span>
                </div>
            </div>
        </Link>
    );
}
