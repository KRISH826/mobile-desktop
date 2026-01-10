"use client";

import { motion } from "framer-motion";
import { Bell, ArrowUpRight, TrendingUp, Users, DollarSign, Activity } from "lucide-react";

const stats = [
    { label: "Total Revenue", value: "$45,231", change: "+20.1%", icon: DollarSign, color: "text-green-500" },
    { label: "Active Users", value: "2,350", change: "+15.3%", icon: Users, color: "text-blue-500" },
    { label: "Growth Rate", value: "12.5%", change: "+4.2%", icon: TrendingUp, color: "text-purple-500" },
    { label: "Engagement", value: "89.2%", change: "+2.8%", icon: Activity, color: "text-orange-500" },
];

const projects = [
    { id: 1, title: "Project Alpha", category: "Design", status: "Active", date: "Jan 10, 2026", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800" },
    { id: 2, title: "Marketing Hub", category: "Marketing", status: "Review", date: "Jan 8, 2026", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" },
    { id: 3, title: "Analytics Pro", category: "Development", status: "Active", date: "Jan 5, 2026", image: "https://images.unsplash.com/photo-1551288049-bbda38a10ad5?auto=format&fit=crop&q=80&w=800" },
    { id: 4, title: "Mobile App", category: "Development", status: "Pending", date: "Jan 3, 2026", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800" },
    { id: 5, title: "Brand Assets", category: "Design", status: "Active", date: "Dec 28, 2025", image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800" },
    { id: 6, title: "API Gateway", category: "Backend", status: "Active", date: "Dec 22, 2025", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=800" },
];

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.08 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

export const ResultsGrid = () => {
    return (
        <div className="flex-1 p-8 h-full overflow-y-auto bg-background">
            {/* Header */}
            <motion.header
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center justify-between mb-8"
            >
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-foreground">Dashboard</h1>
                    <p className="text-muted-foreground mt-1">Welcome back, here&apos;s what&apos;s happening today.</p>
                </div>
                <div className="flex items-center gap-3">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-accent transition-colors"
                    >
                        <Bell className="w-5 h-5 text-foreground" />
                        <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
                    </motion.button>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-purple-500 ring-2 ring-background cursor-pointer"
                    />
                </div>
            </motion.header>

            {/* Stats Grid */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
            >
                {stats.map((stat) => (
                    <motion.div
                        key={stat.label}
                        variants={itemVariants}
                        whileHover={{ y: -2, boxShadow: "0 10px 40px -10px rgba(0,0,0,0.2)" }}
                        className="p-5 bg-card border border-border rounded-2xl"
                    >
                        <div className="flex items-center justify-between mb-3">
                            <div className={`w-10 h-10 rounded-xl bg-secondary flex items-center justify-center ${stat.color}`}>
                                <stat.icon className="w-5 h-5" />
                            </div>
                            <span className="text-xs font-medium text-green-500 bg-green-500/10 px-2 py-1 rounded-full">
                                {stat.change}
                            </span>
                        </div>
                        <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                        <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </motion.div>
                ))}
            </motion.div>

            {/* Projects Grid */}
            <h2 className="text-xl font-semibold mb-4 text-foreground">Recent Projects</h2>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pb-8"
            >
                {projects.map((project) => (
                    <motion.div
                        key={project.id}
                        variants={itemVariants}
                        whileHover={{
                            y: -4,
                            rotateX: 2,
                            rotateY: -2,
                            boxShadow: "0 20px 40px -20px rgba(99, 102, 241, 0.3)"
                        }}
                        style={{ transformStyle: "preserve-3d", perspective: 1000 }}
                        className="group relative bg-card border border-border rounded-2xl overflow-hidden cursor-pointer transition-all duration-300"
                    >
                        {/* Image */}
                        <div className="h-40 bg-secondary relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent z-10" />
                            <motion.div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                                style={{ backgroundImage: `url(${project.image})` }}
                            />
                            <div className="absolute bottom-3 left-4 z-20">
                                <span className="px-2.5 py-1 rounded-lg bg-white/10 backdrop-blur-md text-xs font-medium text-white border border-white/20">
                                    {project.category}
                                </span>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-5">
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <motion.div
                                    initial={{ x: 0, y: 0 }}
                                    whileHover={{ x: 2, y: -2 }}
                                >
                                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                                </motion.div>
                            </div>
                            <p className="text-sm text-muted-foreground mb-4">
                                Experience state-of-the-art UI interactions with premium design.
                            </p>
                            <div className="flex items-center justify-between text-xs text-muted-foreground">
                                <span>{project.date}</span>
                                <div className="flex items-center gap-1.5">
                                    <div className={`w-2 h-2 rounded-full ${project.status === "Active" ? "bg-green-500" :
                                            project.status === "Review" ? "bg-yellow-500" : "bg-gray-400"
                                        } animate-pulse`} />
                                    <span>{project.status}</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};
