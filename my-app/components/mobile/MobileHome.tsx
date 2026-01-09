import { SwipeCards } from "./SwipeCards";
import { BottomSheet } from "./BottomSheet";

export default function MobileHome() {
    return (
        <div className="flex flex-col h-[100dvh] w-full bg-black text-foreground overflow-hidden selection:bg-primary/20 overscroll-none">
            <header className="px-6 py-4 flex items-center justify-between bg-gradient-to-b from-black/80 to-transparent z-20 absolute top-0 left-0 right-0">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center font-bold text-white text-xs">
                        N
                    </div>
                    <span className="text-lg font-bold">Nexus</span>
                </div>
                <button className="p-2 rounded-full bg-white/10 backdrop-blur-md">
                    <svg className="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" /></svg>
                </button>
            </header>

            <main className="flex-1 flex flex-col relative">
                <SwipeCards />
            </main>

            <BottomSheet />
        </div>
    );
}
