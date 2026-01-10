"use client";

import { Drawer } from "vaul";
import { MapPin, Star, Share2, Info, ChevronRight, MessageCircle } from "lucide-react";
import Image from "next/image";

interface MobileDrawerProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    data?: {
        title: string;
        distance: string;
        image: string;
        tags: string[];
    };
}

export const MobileDrawer = ({ open, onOpenChange, data }: MobileDrawerProps) => {
    if (!data) return null;

    return (
        <Drawer.Root open={open} onOpenChange={onOpenChange}>
            <Drawer.Portal>
                <Drawer.Overlay className="fixed inset-0 bg-black/40 backdrop-blur-sm z-60" />
                <Drawer.Content className="bg-card flex flex-col rounded-t-[32px] h-[85vh] fixed bottom-0 left-0 right-0 z-70 outline-none">
                    <div className="mx-auto w-12 h-1.5 shrink-0 rounded-full bg-muted-foreground/20 my-4" />

                    <div className="flex-1 overflow-y-auto px-6 pb-12 custom-scrollbar">
                        <div className="space-y-6">
                            {/* Hero Section */}
                            <div className="relative h-64 rounded-2xl overflow-hidden -mx-2">
                                <Image
                                    src={data.image}
                                    alt={data.title}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                                <div className="absolute bottom-4 left-4 text-white">
                                    <h2 className="text-2xl font-bold">{data.title}</h2>
                                    <div className="flex items-center gap-2 text-white/80 text-sm">
                                        <MapPin className="w-4 h-4" />
                                        <span>{data.distance} away</span>
                                    </div>
                                </div>
                            </div>

                            {/* Info Quick Bar */}
                            <div className="grid grid-cols-4 gap-4 py-2 border-y border-border">
                                <button className="flex flex-col items-center gap-1.5 group">
                                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center group-active:scale-95 transition-transform">
                                        <Star className="w-5 h-5 text-yellow-500" />
                                    </div>
                                    <span className="text-xs font-medium">4.8 (120)</span>
                                </button>
                                <button className="flex flex-col items-center gap-1.5 group">
                                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center group-active:scale-95 transition-transform">
                                        <MessageCircle className="w-5 h-5 text-primary" />
                                    </div>
                                    <span className="text-xs font-medium">Chat</span>
                                </button>
                                <button className="flex flex-col items-center gap-1.5 group">
                                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center group-active:scale-95 transition-transform">
                                        <Share2 className="w-5 h-5 text-foreground" />
                                    </div>
                                    <span className="text-xs font-medium">Share</span>
                                </button>
                                <button className="flex flex-col items-center gap-1.5 group">
                                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center group-active:scale-95 transition-transform">
                                        <Info className="w-5 h-5 text-foreground" />
                                    </div>
                                    <span className="text-xs font-medium">Info</span>
                                </button>
                            </div>

                            {/* Details Section */}
                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold px-1">About this place</h3>
                                <p className="text-muted-foreground leading-relaxed px-1">
                                    Experience the ultimate luxury and comfort at {data.title}. Located perfectly within {data.distance},
                                    this spot offers breathtaking views and world-class amenities. Whether you&apos;re looking for a
                                    quiet getaway or an adventure-filled stay, we&apos;ve got you covered.
                                </p>
                                <div className="flex flex-wrap gap-2 px-1">
                                    {data.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium border border-primary/20">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Amenities/Action Section */}
                            <div className="space-y-3">
                                <button className="w-full flex items-center justify-between p-4 bg-secondary/50 rounded-2xl hover:bg-secondary transition-colors group">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-background flex items-center justify-center">
                                            <Info className="w-4 h-4" />
                                        </div>
                                        <span className="font-medium">View detailed amenities</span>
                                    </div>
                                    <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                                </button>

                                <button className="w-full py-4 bg-primary text-primary-foreground font-bold rounded-2xl shadow-lg shadow-primary/20 active:scale-[0.98] transition-all">
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </div>
                </Drawer.Content>
            </Drawer.Portal>
        </Drawer.Root>
    );
};
