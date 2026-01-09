"use client";

import dynamic from "next/dynamic";
import { SearchPanel } from "./SearchPanel";

// Dynamically import the heavy content component
const ResultsGrid = dynamic(() => import("./ResultsGrid").then(mod => mod.ResultsGrid), {
    ssr: false,
    loading: () => (
        <div className="flex-1 p-8 h-full bg-background/95 flex items-center justify-center">
            <div className="flex flex-col items-center gap-4 text-muted-foreground">
                <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                <span className="text-sm font-medium animate-pulse">Loading Dashboard...</span>
            </div>
        </div>
    ),
});

export default function DesktopHome() {
    return (
        <div className="flex h-screen w-full bg-background text-foreground overflow-hidden selection:bg-primary/20 selection:text-primary">
            {/* SearchPanel loads immediately (First UI) */}
            <SearchPanel />

            {/* ResultsGrid loads dynamically */}
            <ResultsGrid />
        </div>
    );
}
