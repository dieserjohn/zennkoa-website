import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";


// Force static generation for the known projects
export function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    // Find next project
    const currentIndex = projects.findIndex((p) => p.slug === slug);
    const nextProject = projects[(currentIndex + 1) % projects.length];

    return (
        <div className="bg-background min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[80vh] flex flex-col justify-end px-6 md:px-12 pb-12 overflow-hidden">
                {/* Background */}
                <div
                    className="absolute inset-0 z-0 opacity-40"
                    style={{ backgroundColor: project.color }}
                >
                    {/* If we had a high-res hero image, it would go here. Using the thumb for now if avail, blurred? */}
                    {project.image && (
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover blur-sm scale-110"
                            priority
                            sizes="100vw"
                            quality={100}
                        />
                    )}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent z-[1]" />

                {/* Title */}
                <div className="relative z-10 max-w-[1800px] mx-auto w-full">
                    <Link href="/work" className="inline-block mb-8 text-sm uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors">
                        ← Back to Work
                    </Link>
                    <h1 className="text-6xl sm:text-8xl md:text-9xl font-black uppercase tracking-tighter text-foreground mb-6">
                        {project.title}
                    </h1>
                    <p className="text-xl sm:text-2xl text-neutral-600 dark:text-neutral-300 max-w-3xl font-light leading-relaxed">
                        {project.description}
                    </p>
                </div>
            </section>

            {/* Info Grid */}
            <section className="px-6 md:px-12 py-24 border-b border-neutral-200 dark:border-neutral-900">
                <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="space-y-2">
                        <span className="text-xs uppercase tracking-[0.2em] text-neutral-500 block">Role</span>
                        <span className="text-lg text-foreground font-medium">{project.role || "Developer"}</span>
                    </div>
                    <div className="space-y-2">
                        <span className="text-xs uppercase tracking-[0.2em] text-neutral-500 block">Year</span>
                        <span className="text-lg text-foreground font-medium">{project.year || "2024"}</span>
                    </div>
                    <div className="space-y-2 md:col-span-2">
                        <span className="text-xs uppercase tracking-[0.2em] text-neutral-500 block">Tech Stack</span>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {(project.techStack || project.tags).map(tag => (
                                <span key={tag} className="px-3 py-1 border border-neutral-200 dark:border-neutral-800 rounded-full text-sm text-neutral-600 dark:text-neutral-300">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content (Challenge / Solution) */}
            {(project.longDescription || project.challenges) && (
                <section className="px-6 md:px-12 py-32">
                    <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
                        <div className="lg:col-span-4">
                            <h2 className="text-sm uppercase tracking-[0.2em] text-neutral-500 mb-8 sticky top-32">
                                About the project
                            </h2>
                        </div>
                        <div className="lg:col-span-8 space-y-24">
                            {project.longDescription && (
                                <div>
                                    <p className="text-2xl sm:text-3xl md:text-4xl leading-tight font-light text-neutral-800 dark:text-neutral-200">
                                        {project.longDescription}
                                    </p>
                                </div>
                            )}

                            {project.challenges && (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                    <div>
                                        <h3 className="text-foreground font-bold uppercase tracking-widest mb-4">The Challenge</h3>
                                        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                            {project.challenges}
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-foreground font-bold uppercase tracking-widest mb-4">The Solution</h3>
                                        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                            {project.solution}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            )}



            {/* Show Main Image if available and not used in hero? Or just show it here clearly */}
            <section className="px-6 md:px-12 pb-32">
                <div className="max-w-[1800px] mx-auto">
                    {project.image && (
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/20 border border-neutral-200 dark:border-neutral-800">
                            <Image
                                src={project.image}
                                alt="Project Screenshot"
                                width={1920}
                                height={1080}
                                className="w-full h-auto"
                                quality={100}
                            />
                        </div>
                    )}
                </div>
            </section>


            {/* Next Project Footer */}
            <section className="border-t border-neutral-200 dark:border-neutral-800">
                <Link href={`/work/${nextProject.slug}`} className="block group relative overflow-hidden py-32 md:py-48 text-center bg-neutral-100 dark:bg-neutral-950 hover:bg-neutral-200 dark:hover:bg-neutral-900 transition-colors duration-500">
                    <span className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-4 block group-hover:text-black dark:group-hover:text-white transition-colors">
                        Next Project
                    </span>
                    <h2 className="text-5xl sm:text-7xl md:text-9xl font-black uppercase tracking-tighter text-neutral-400 dark:text-neutral-800 group-hover:text-black dark:group-hover:text-white transition-colors duration-500">
                        {nextProject.title}
                    </h2>
                </Link>

            </section>
        </div>
    );
}
