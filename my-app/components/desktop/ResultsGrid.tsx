
export const ResultsGrid = () => {
    return (
        <div className="flex-1 p-8 h-full overflow-y-auto bg-background/95">
            <header className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-foreground">Dashboard</h1>
                    <p className="text-muted-foreground mt-1">Welcome back, here&lsquo;s what&apos;s happening today.</p>
                </div>
                <div className="flex items-center gap-4">
                    <button className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors">
                        <svg className="text-foreground" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" /></svg>
                    </button>
                    <div className="w-10 h-10 rounded-full bg-linear-to-tr from-primary to-purple-500 ring-2 ring-background"></div>
                </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-8">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div key={item} className="group relative bg-card border border-border rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300">
                        <div className="h-48 bg-secondary/50 relative overflow-hidden">
                            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent z-10" />
                            {/* Abstract placeholder art */}
                            <div className={`absolute inset-0 opacity-50 bg-[url('https://picsum.photos/seed/${item}/800/600')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105`} />

                            <div className="absolute bottom-4 left-4 z-20">
                                <span className="px-2 py-1 rounded-md bg-white/10 backdrop-blur-md text-xs font-medium text-white border border-white/20">
                                    Category {item}
                                </span>
                            </div>
                        </div>
                        <div className="p-5">
                            <div className="flex items-center justify-between mb-3">
                                <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">Project Alpha {item}</h3>
                                <svg className="w-5 h-5 text-muted-foreground -rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                            </div>
                            <p className="text-sm text-muted-foreground line-clamp-2">
                                Experience state-of-the-art UI interactions with our latest strict isolation framework updates.
                            </p>
                            <div className="mt-4 pt-4 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
                                <span>Oct 24, 2026</span>
                                <div className="flex items-center gap-1">
                                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                    <span>Active</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
