import { motion } from "framer-motion";
import { Users, Star, Activity } from "lucide-react";
import { useEffect, useState } from "react";

export const TrafficBox = () => {
    const [hits, setHits] = useState<number | string>("...");

    useEffect(() => {
        // Using a public count API to track real visits
        // This increments every time the component mounts (on page refresh)
        const fetchHits = async () => {
            try {
                const res = await fetch("https://api.counterapi.dev/v1/aryan-labs-portfolio/visits/up");
                const data = await res.json();
                setHits(data.count);
            } catch (err) {
                console.error("Traffic counter error:", err);
                setHits("982+"); // Fallback
            }
        };
        fetchHits();
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="fixed bottom-24 right-6 bg-card/80 backdrop-blur-md border border-border p-4 rounded-2xl shadow-xl z-[100] flex items-center gap-4 transition-all hover:scale-105"
        >
            <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center">
                <Activity className="text-green-600 w-6 h-6 animate-pulse" />
            </div>
            <div>
                <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider">Live Site Traffic</p>
                <div className="flex items-baseline gap-1">
                    <p className="text-lg font-black text-foreground leading-none">{hits}</p>
                    <p className="text-[10px] text-green-600 font-bold">Total Views</p>
                </div>
            </div>
        </motion.div>
    );
};

export const RatingBox = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="bg-card/80 backdrop-blur-xl border border-border p-4 rounded-2xl shadow-lg flex items-center gap-3"
        >
            <div className="w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center border border-yellow-200">
                <Star className="text-yellow-600 w-5 h-5 fill-yellow-500" />
            </div>
            <div>
                <p className="text-xs text-muted-foreground font-bold">Total Rating</p>
                <div className="flex items-center gap-1">
                    <p className="text-sm font-black text-foreground">5.0</p>
                    <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={10} className="text-yellow-500 fill-yellow-500" />
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
