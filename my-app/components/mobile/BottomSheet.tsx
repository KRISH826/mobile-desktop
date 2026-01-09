
export const BottomSheet = () => {
    return (
        <>
            {/* Navigation Bar */}
            <div className="fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-xl border-t border-white/10 pb-safe pt-2 px-6 z-50">
                <div className="flex justify-between items-center h-16">
                    <div className="flex flex-col items-center gap-1 text-primary cursor-pointer">
                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
                        <span className="text-[10px] font-medium">Home</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                        <span className="text-[10px] font-medium">Explore</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                        <span className="text-[10px] font-medium">Profile</span>
                    </div>
                </div>
            </div>
        </>
    );
};
