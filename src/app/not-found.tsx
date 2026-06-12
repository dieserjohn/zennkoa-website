import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Seite nicht gefunden",
    description: "Diese Seite existiert nicht.",
};

export default function NotFound() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
            <p className="text-[10px] uppercase tracking-[0.4em] text-neutral-500 mb-8">
                Fehler 404
            </p>

            <h1 className="text-7xl sm:text-[10rem] font-black tracking-[-0.04em] leading-[0.85] uppercase">
                Nicht
                <br />
                <span className="text-transparent" style={{ WebkitTextStroke: "2px var(--foreground)" }}>
                    gefunden
                </span>
            </h1>

            <p className="mt-12 max-w-sm text-sm text-neutral-400 leading-relaxed">
                Die gesuchte Seite existiert nicht oder wurde verschoben.
            </p>

            <Link
                href="/"
                className="mt-8 text-xs uppercase tracking-[0.2em] border border-neutral-300 dark:border-neutral-700 px-6 py-3 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300"
            >
                Zur Startseite
            </Link>
        </section>
    );
}
