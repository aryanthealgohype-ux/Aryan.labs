import { motion } from "framer-motion";

const SpaceBackground = () => {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden bg-[#020617]">
            {/* Moving Grid */}
            <div className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: "linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px)",
                    backgroundSize: "40px 40px"
                }}
            />

            {/* Stars */}
            {[...Array(50)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute bg-white rounded-full"
                    style={{
                        width: Math.random() * 3 + "px",
                        height: Math.random() * 3 + "px",
                        top: Math.random() * 100 + "%",
                        left: Math.random() * 100 + "%",
                    }}
                    animate={{
                        opacity: [0.2, 1, 0.2],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: Math.random() * 3 + 2,
                        repeat: Infinity,
                        delay: Math.random() * 5,
                    }}
                />
            ))}

            {/* Floating Orbs (Glows) */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full" />
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full" />

            {/* Animated Dust/Nebula */}
            <motion.div
                className="absolute inset-0 opacity-10"
                animate={{
                    backgroundPosition: ["0% 0%", "100% 100%"],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                }}
                style={{
                    backgroundImage: "radial-gradient(circle at center, #1e293b, transparent)",
                    backgroundSize: "200% 200%",
                }}
            />
        </div>
    );
};

export default SpaceBackground;
