import FullScreenProjectList from "@/components/FullScreenProjectList";
import { projects } from "@/data/projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projekte",
    description: "Projekte und Arbeiten von Zennkoa.",
};

export default function WorkPage() {
    return (
        <div>
            <FullScreenProjectList projects={projects} />
        </div>
    );
}
