"use client";

import { motion } from "motion/react"
import { Search, Zap, TrendingUp, Clock, Sparkles, Crown } from "lucide-react";

const menuItems = [
    { icon: TrendingUp, label: "Trending", active: true },
    { icon: Clock, label: "Latest", active: false },
    { icon: Sparkles, label: "Curated", active: false },
];

export const SearchPanel = () => {
    return (
        <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="w-80 bg-sidebar backdrop-blur-xl border-r border-sidebar-border h-full flex flex-col p-6 gap-6"
        >
            {/* Logo */}
            <motion.div
                className="flex items-center gap-3"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400 }}
            >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center shadow-lg shadow-primary/30">
                    <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-bold tracking-tight text-sidebar-foreground">Nexus</span>
            </motion.div>

            {/* Search */}
            <div className="space-y-2">
                <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Discovery</label>
                <motion.div
                    className="relative group"
                    whileFocus={{ scale: 1.02 }}
                >
                    <input
                        type="text"
                        placeholder="Search anything..."
                        className="w-full bg-sidebar-accent border border-sidebar-border rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all placeholder:text-muted-foreground"
                    />
                    <Search className="absolute left-3 top-3.5 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                </motion.div>
            </div>

            {/* Navigation */}
            <div className="space-y-3">
                <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Navigate</label>
                <div className="space-y-1">
                    {menuItems.map((item, index) => (
                        <motion.button
                            key={item.label}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * index, duration: 0.3 }}
                            whileHover={{ x: 4, backgroundColor: "var(--sidebar-accent)" }}
                            whileTap={{ scale: 0.98 }}
                            className={`w-full flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all ${item.active
                                ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-lg"
                                : "text-sidebar-foreground hover:bg-sidebar-accent"
                                }`}
                        >
                            <item.icon className="w-5 h-5" />
                            <span className="text-sm font-medium">{item.label}</span>
                            {item.active && (
                                <motion.div
                                    layoutId="activeIndicator"
                                    className="ml-auto w-2 h-2 rounded-full bg-white"
                                />
                            )}
                        </motion.button>
                    ))}
                </div>
            </div>

            {/* Spacer */}
            <div className="flex-1" />

            {/* Pro Plan CTA */}
            <motion.div
                className="relative overflow-hidden p-4 rounded-2xl bg-gradient-to-br from-primary/20 via-purple-500/10 to-transparent border border-primary/20"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400 }}
            >
                {/* Shimmer Effect */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
                    animate={{ x: ["-200%", "200%"] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                />

                <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-2">
                        <Crown className="w-4 h-4 text-primary" />
                        <h4 className="text-sm font-bold text-primary">Pro Plan</h4>
                    </div>
                    <p className="text-xs text-muted-foreground mb-4">Unlock advanced analytics and premium features.</p>
                    <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="w-full py-2.5 bg-primary text-primary-foreground text-xs font-bold rounded-xl hover:bg-primary/90 transition-colors shadow-lg shadow-primary/30"
                    >
                        Upgrade Now
                    </motion.button>
                </div>
            </motion.div>
        </motion.div>
    );
};
