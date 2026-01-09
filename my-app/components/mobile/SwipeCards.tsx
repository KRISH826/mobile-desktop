
export const SwipeCards = () => {
    return (
        <div className="flex-1 relative flex flex-col items-center justify-center p-6 pb-24 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

            {/* Card Stack */}
            <div className="relative w-full max-w-sm aspect-[3/4] group cursor-grab active:cursor-grabbing">
                {/* Background Card */}
                <div className="absolute top-4 left-0 w-full h-full bg-card border border-white/5 rounded-3xl shadow-xl scale-95 opacity-50 translate-y-4" />

                {/* Main Card */}
                <div className="relative w-full h-full bg-card rounded-3xl shadow-2xl border border-white/10 overflow-hidden transform transition-transform duration-300 hover:scale-[1.02]">
                    <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/mobile/600/800')] bg-cover bg-center">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                    </div>

                    <div className="absolute top-4 left-4 flex gap-1">
                        <div className="h-1 w-8 bg-white rounded-full" />
                        <div className="h-1 w-8 bg-white/30 rounded-full" />
                        <div className="h-1 w-8 bg-white/30 rounded-full" />
                    </div>

                    <div className="absolute bottom-0 left-0 w-full p-6 text-white">
                        <h2 className="text-3xl font-bold mb-1">Mountain View</h2>
                        <div className="flex items-center gap-2 text-white/80 text-sm mb-4">
                            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                            <span>1.2km away</span>
                        </div>

                        <div className="flex gap-2">
                            <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs border border-white/10">Nature</span>
                            <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs border border-white/10">Hiking</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating Action Buttons */}
            <div className="absolute bottom-8 flex items-center gap-8 z-10">
                <button className="w-14 h-14 rounded-full bg-background/80 backdrop-blur-lg border border-white/10 shadow-lg flex items-center justify-center text-destructive hover:scale-110 active:scale-95 transition-all">
                    <svg width="28" height="28" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                </button>
                <button className="w-14 h-14 rounded-full bg-primary shadow-[0_0_20px_rgba(99,102,241,0.5)] flex items-center justify-center text-white hover:scale-110 active:scale-95 transition-all">
                    <svg width="28" height="28" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
                </button>
            </div>
        </div>
    );
};
