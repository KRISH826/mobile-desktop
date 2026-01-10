"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Zap, Bell } from "lucide-react";
import { SwipeCards } from "./SwipeCards";
import { BottomNav } from "./BottomNav";
import { MobileDrawer } from "./MobileDrawer";

interface Card {
    id: number;
    title: string;
    distance: string;
    tags: string[];
    image: string;
}

export default function MobileHome() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState<Card | null>(null);

    const handleOpenDrawer = (item: Card) => {
        setSelectedItem(item);
        setDrawerOpen(true);
    };

    return (
        <div className="flex flex-col h-dvh w-full bg-background text-foreground overflow-hidden overscroll-none">
            {/* Header */}
            <motion.header
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="px-5 py-4 flex items-center justify-between bg-linear-to-b from-background to-transparent z-20 absolute top-0 left-0 right-0 safe-area-inset-top"
            >
                <div className="flex items-center gap-2.5">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center shadow-lg shadow-primary/30"
                    >
                        <Zap className="w-5 h-5 text-white" />
                    </motion.div>
                    <span className="text-xl font-bold tracking-tight">Nexus</span>
                </div>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative p-2.5 rounded-full bg-secondary/80 backdrop-blur-md"
                >
                    <Bell className="w-5 h-5 text-foreground" />
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
                </motion.button>
            </motion.header>

            {/* Main Content */}
            <motion.main
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="flex-1 flex flex-col relative pt-16"
            >
                <SwipeCards onCardClick={handleOpenDrawer} />
            </motion.main>

            {/* Bottom Navigation */}
            <BottomNav />

            {/* Mobile Detail Drawer */}
            <MobileDrawer
                open={drawerOpen}
                onOpenChange={setDrawerOpen}
                data={selectedItem}
            />
        </div>
    );
}
