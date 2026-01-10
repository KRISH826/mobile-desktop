"use client";

import { useState } from "react";
import { motion } from "motion/react"
import { Home, Compass, Heart, User } from "lucide-react";

const tabs = [
    { icon: Home, label: "Home" },
    { icon: Compass, label: "Explore" },
    { icon: Heart, label: "Saved" },
    { icon: User, label: "Profile" },
];

export const BottomNav = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-card/90 backdrop-blur-xl border-t border-border z-40 safe-area-inset-bottom">
            <div className="flex justify-around items-center h-16 px-4">
                {tabs.map((tab, index) => (
                    <motion.button
                        key={tab.label}
                        onClick={() => setActiveTab(index)}
                        whileTap={{ scale: 0.9 }}
                        className="relative flex flex-col items-center gap-1 py-2 px-4"
                    >
                        {activeTab === index && (
                            <motion.div
                                layoutId="tabIndicator"
                                className="absolute -top-0.5 w-10 h-1 bg-primary rounded-full"
                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            />
                        )}
                        <motion.div
                            animate={{
                                scale: activeTab === index ? 1.1 : 1,
                                y: activeTab === index ? -2 : 0
                            }}
                            transition={{ type: "spring", stiffness: 400 }}
                        >
                            <tab.icon
                                className={`w-6 h-6 transition-colors ${activeTab === index ? "text-primary" : "text-muted-foreground"
                                    }`}
                            />
                        </motion.div>
                        <span className={`text-[10px] font-medium transition-colors ${activeTab === index ? "text-primary" : "text-muted-foreground"
                            }`}>
                            {tab.label}
                        </span>
                    </motion.button>
                ))}
            </div>
        </div>
    );
};
