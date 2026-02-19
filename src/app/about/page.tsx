import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About – Zennkoa",
    description:
        "About Zennkoa – Developer, Minecraft enthusiast, and film lover.",
};

const skills = [
    "React",
    "TypeScript",
    "Java",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
];

const experience = [
    { label: "Minecraft Plugins", years: "5+" },
    { label: "Web Development", years: "3+" },
    { label: "Projects Shipped", years: "10+" },
];

export default function AboutPage() {
    return (
        <div>
            {/* Hero */}
            <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 pt-20">
                <div className="mx-auto w-full max-w-[1800px]">
                    <div className="grid gap-16 lg:grid-cols-[1fr_1fr] items-center">
                        {/* Text */}
                        <div>
                            <p className="text-[10px] uppercase tracking-[0.4em] text-neutral-500 mb-8">
                                About Me
                            </p>

                            <h1 className="text-6xl sm:text-8xl lg:text-[10rem] font-black uppercase tracking-[-0.04em] leading-[0.85] mb-12">
                                Zen
                                <br />
                                <span className="text-transparent" style={{ WebkitTextStroke: "2px #f5f5f5" }}>
                                    nkoa
                                </span>
                            </h1>

                            <div className="space-y-6 text-sm text-neutral-400 leading-relaxed max-w-md">
                                <p>
                                    Hey! I&apos;m John, but most people online know me as{" "}
                                    <span className="text-white font-medium">Zennkoa</span>.
                                    I&apos;m a 25-year-old developer from Germany.
                                </p>
                                <p>
                                    I build Minecraft plugins and web applications. When I&apos;m
                                    not coding, you&apos;ll probably find me watching films or
                                    playing Minecraft.
                                </p>
                            </div>
                        </div>

                        {/* Image */}
                        <div className="relative">
                            <Image
                                src="/profile.jpg"
                                alt="Zennkoa"
                                width={600}
                                height={750}
                                className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                quality={100}
                                priority
                            />
                            {/* Overlay label */}
                            <div className="absolute bottom-6 left-6">
                                <span className="text-[10px] uppercase tracking-[0.3em] text-white/70 bg-black/50 px-3 py-1 backdrop-blur-sm">
                                    Dev & Creator
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="px-6 md:px-12 py-24 border-t border-neutral-800">
                <div className="mx-auto max-w-[1800px]">
                    <div className="grid grid-cols-3 gap-8">
                        {experience.map((item) => (
                            <div key={item.label} className="text-center">
                                <p className="text-5xl sm:text-7xl font-black tracking-tight">
                                    {item.years}
                                </p>
                                <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-neutral-500">
                                    {item.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Skills */}
            <section className="px-6 md:px-12 py-24 border-t border-neutral-800">
                <div className="mx-auto max-w-[1800px]">
                    <div className="grid gap-16 lg:grid-cols-[300px_1fr] items-start">
                        <div>
                            <p className="text-[10px] uppercase tracking-[0.4em] text-neutral-500 mb-4">
                                Technologies
                            </p>
                            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight">
                                My
                                <br />
                                Stack
                            </h2>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                            {skills.map((skill) => (
                                <div
                                    key={skill}
                                    className="border border-neutral-800 px-6 py-8 hover:border-neutral-600 transition-colors group"
                                >
                                    <span className="text-lg font-medium group-hover:text-white transition-colors text-neutral-300">
                                        {skill}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
}
