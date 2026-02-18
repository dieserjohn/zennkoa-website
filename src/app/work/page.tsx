import FullScreenProjectList from "@/components/FullScreenProjectList";
import { projects } from "@/data/projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Work – Zennkoa",
    description: "Projects and work by Zennkoa.",
};

export default function WorkPage() {
    return (
        <div>
            <FullScreenProjectList projects={projects} />
        </div>
    );
}
