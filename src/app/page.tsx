import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import FeaturedProjects from "@/components/FeaturedProjects";
import { projects } from "@/data/projects";

const featuredProjects = projects.slice(0, 3);

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 relative overflow-hidden">
        <div className="mx-auto w-full max-w-[1800px]">
          <p className="text-[10px] uppercase tracking-[0.4em] text-neutral-500 mb-8">
            Developer & Creator
          </p>

          <h1 className="text-7xl sm:text-[10rem] lg:text-[14rem] font-black tracking-[-0.04em] leading-[0.85] uppercase">
            Zenn
            <br />
            <span className="text-transparent" style={{ WebkitTextStroke: "2px #f5f5f5" }}>
              koa
            </span>
          </h1>

          <div className="mt-12 flex items-start justify-between flex-wrap gap-8">
            <p className="max-w-sm text-sm text-neutral-400 leading-relaxed">
              I build Minecraft plugins and web applications.
              Focused on crafting clean, useful software from Germany.
            </p>

            <div className="flex items-center gap-6">
              <Link
                href="/work"
                className="text-xs uppercase tracking-[0.2em] border border-neutral-700 px-6 py-3 hover:bg-white hover:text-black transition-all duration-300"
              >
                View Works
              </Link>
              <Link
                href="/about"
                className="text-xs uppercase tracking-[0.2em] text-neutral-500 hover:text-white transition-colors"
              >
                About me →
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-neutral-800" />
      </section>

      {/* Marquee */}
      <section className="py-8 border-b border-neutral-800 overflow-hidden">
        <div className="animate-marquee flex whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <span key={i} className="flex items-center gap-8 mr-8">
              <span className="text-6xl sm:text-8xl font-black uppercase tracking-tight text-neutral-800">
                Minecraft
              </span>
              <span className="text-neutral-700">✦</span>
              <span className="text-6xl sm:text-8xl font-black uppercase tracking-tight text-neutral-800">
                Web Dev
              </span>
              <span className="text-neutral-700">✦</span>
              <span className="text-6xl sm:text-8xl font-black uppercase tracking-tight text-neutral-800">
                Java
              </span>
              <span className="text-neutral-700">✦</span>
              <span className="text-6xl sm:text-8xl font-black uppercase tracking-tight text-neutral-800">
                TypeScript
              </span>
              <span className="text-neutral-700">✦</span>
              <span className="text-6xl sm:text-8xl font-black uppercase tracking-tight text-neutral-800">
                React
              </span>
              <span className="text-neutral-700">✦</span>
              <span className="text-6xl sm:text-8xl font-black uppercase tracking-tight text-neutral-800">
                Next.js
              </span>
              <span className="text-neutral-700">✦</span>
            </span>
          ))}
        </div>
      </section>

      {/* Featured Work (Redesigned) */}
      <FeaturedProjects projects={featuredProjects} />



    </div>
  );
}
