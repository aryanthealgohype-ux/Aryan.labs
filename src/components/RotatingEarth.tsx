import { motion } from "framer-motion";

const RotatingEarth = () => {
    return (
        <div className="relative w-full h-full flex items-center justify-center">
            {/* Glow behind the earth */}
            <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full scale-75" />

            {/* The Sphere (Planet) */}
            <motion.div
                className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden shadow-[inset_-20px_-20px_50px_rgba(0,0,0,0.5),0_0_50px_rgba(59,130,246,0.3)]"
                style={{
                    background: "radial-gradient(circle at 30% 30%, #4facfe 0%, #00f2fe 100%)",
                }}
                animate={{
                    rotate: [0, 360],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                }}
            >
                {/* Surface texture/continents (simplified SVG) */}
                <div className="absolute inset-0 opacity-40">
                    <svg viewBox="0 0 100 100" className="w-[200%] h-full">
                        <motion.path
                            d="M10 20Q30 10 50 30T90 20M20 50Q40 40 60 60T80 40M15 80Q35 70 55 90T95 80"
                            stroke="white"
                            strokeWidth="10"
                            fill="none"
                            strokeLinecap="round"
                            animate={{ x: [0, -100] }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        />
                    </svg>
                </div>
            </motion.div>

            {/* Atmospheric Rings (The white/pinkish streaks from the image) */}
            {[...Array(8)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute border-2 border-white/20 rounded-full"
                    style={{
                        width: `${110 + i * 15}%`,
                        height: `${110 + i * 15}%`,
                        borderStyle: "dashed",
                        borderColor: i % 2 === 0 ? "rgba(255,255,255,0.1)" : "rgba(236,72,153,0.1)",
                    }}
                    animate={{
                        rotate: i % 2 === 0 ? [0, 360] : [360, 0],
                        scale: [1, 1.05, 1],
                    }}
                    transition={{
                        rotate: { duration: 10 + i * 5, repeat: Infinity, ease: "linear" },
                        scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                    }}
                />
            ))}

            {/* Floating Light Streaks (Clouds in the image) */}
            <div className="absolute inset-0">
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute bg-white/30 backdrop-blur-sm rounded-full"
                        style={{
                            width: "40%",
                            height: "10%",
                            top: `${20 + i * 15}%`,
                            left: "-20%",
                            transform: `rotate(${i * 10}deg)`,
                        }}
                        animate={{
                            x: ["100%", "-200%"],
                            opacity: [0, 0.8, 0.8, 0],
                        }}
                        transition={{
                            duration: 8 + i * 2,
                            repeat: Infinity,
                            delay: i * 2,
                            ease: "linear",
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default RotatingEarth;
