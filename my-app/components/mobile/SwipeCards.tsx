"use client";

import { useState } from "react";
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import { MapPin, X, Heart, Star } from "lucide-react";

const cards = [
    { id: 1, title: "Mountain View", distance: "1.2km", tags: ["Nature", "Hiking"], image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=600" },
    { id: 2, title: "Ocean Beach", distance: "3.5km", tags: ["Beach", "Sunset"], image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=600" },
    { id: 3, title: "City Lights", distance: "0.8km", tags: ["Urban", "Nightlife"], image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=600" },
];

export const SwipeCards = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleSwipe = () => {
        setCurrentIndex((prev) => Math.min(prev + 1, cards.length - 1));
    };

    return (
        <div className="flex-1 relative flex flex-col items-center justify-center p-6 pb-28 overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />

            {/* Card Stack */}
            <div className="relative w-full max-w-sm h-[480px]">
                <AnimatePresence>
                    {cards.slice(currentIndex, currentIndex + 3).reverse().map((card, index) => (
                        <SwipeCard
                            key={card.id}
                            card={card}
                            index={2 - index}
                            onSwipe={handleSwipe}
                            isTop={index === cards.slice(currentIndex, currentIndex + 3).length - 1}
                        />
                    ))}
                </AnimatePresence>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-6 z-20">
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleSwipe("left")}
                    className="w-14 h-14 rounded-full bg-card border border-border shadow-xl flex items-center justify-center text-destructive"
                >
                    <X className="w-7 h-7" />
                </motion.button>

                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 rounded-full bg-card border border-border shadow-xl flex items-center justify-center text-yellow-500"
                >
                    <Star className="w-5 h-5" />
                </motion.button>

                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleSwipe("right")}
                    className="w-14 h-14 rounded-full bg-primary shadow-[0_0_30px_rgba(99,102,241,0.5)] flex items-center justify-center text-white"
                >
                    <Heart className="w-7 h-7" />
                </motion.button>
            </div>
        </div>
    );
};

interface SwipeCardProps {
    card: typeof cards[0];
    index: number;
    onSwipe: (direction: "left" | "right") => void;
    isTop: boolean;
}

const SwipeCard = ({ card, index, onSwipe, isTop }: SwipeCardProps) => {
    const x = useMotionValue(0);
    const rotate = useTransform(x, [-200, 200], [-15, 15]);
    const likeOpacity = useTransform(x, [0, 100], [0, 1]);
    const nopeOpacity = useTransform(x, [-100, 0], [1, 0]);

    const handleDragEnd = (_: unknown, info: { offset: { x: number }; velocity: { x: number } }) => {
        if (Math.abs(info.offset.x) > 100 || Math.abs(info.velocity.x) > 500) {
            onSwipe(info.offset.x > 0 ? "right" : "left");
        }
    };

    return (
        <motion.div
            style={{
                x: isTop ? x : 0,
                rotate: isTop ? rotate : 0,
                scale: 1 - index * 0.05,
                y: index * 12,
                zIndex: 3 - index,
            }}
            drag={isTop ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.9}
            onDragEnd={handleDragEnd}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1 - index * 0.05, opacity: 1 - index * 0.2 }}
            exit={{ x: 300, opacity: 0, transition: { duration: 0.3 } }}
            className="absolute inset-0 bg-card rounded-3xl shadow-2xl border border-white/10 overflow-hidden cursor-grab active:cursor-grabbing"
        >
            {/* Image */}
            <div className="absolute inset-0">
                <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${card.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
            </div>

            {/* Like/Nope Overlays */}
            {isTop && (
                <>
                    <motion.div
                        style={{ opacity: likeOpacity }}
                        className="absolute top-8 left-6 px-4 py-2 bg-green-500 rounded-lg border-2 border-green-400 rotate-[-20deg] z-20"
                    >
                        <span className="text-white font-bold text-xl tracking-wider">LIKE</span>
                    </motion.div>
                    <motion.div
                        style={{ opacity: nopeOpacity }}
                        className="absolute top-8 right-6 px-4 py-2 bg-red-500 rounded-lg border-2 border-red-400 rotate-[20deg] z-20"
                    >
                        <span className="text-white font-bold text-xl tracking-wider">NOPE</span>
                    </motion.div>
                </>
            )}

            {/* Progress Dots */}
            <div className="absolute top-4 left-4 right-4 flex gap-1 z-10">
                {[1, 2, 3].map((i) => (
                    <div key={i} className={`h-1 flex-1 rounded-full ${i === 1 ? "bg-white" : "bg-white/30"}`} />
                ))}
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
                <h2 className="text-3xl font-bold mb-2">{card.title}</h2>
                <div className="flex items-center gap-2 text-white/80 text-sm mb-4">
                    <MapPin className="w-4 h-4" />
                    <span>{card.distance} away</span>
                </div>
                <div className="flex gap-2">
                    {card.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs border border-white/10">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};
