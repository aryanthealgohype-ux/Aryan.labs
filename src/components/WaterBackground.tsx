import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Jellyfish = ({ delay, left }: { delay: number; left: string }) => {
    return (
        <motion.div
            initial={{ y: "110vh", opacity: 0 }}
            animate={{
                y: "-20vh",
                opacity: [0, 0.4, 0.4, 0],
                x: [0, 20, -20, 0]
            }}
            transition={{ duration: 25, delay, repeat: Infinity, ease: "linear" }}
            style={{ position: "absolute", left, zIndex: 1 }}
        >
            <svg width="40" height="60" viewBox="0 0 50 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 30C10 15 40 15 40 30V40H10V30Z" fill="rgba(157, 80, 187, 0.4)" />
                {[...Array(5)].map((_, i) => (
                    <motion.path
                        key={i}
                        d={`M${15 + i * 5} 40Q${15 + i * 5} 60 ${10 + i * 5} 80`}
                        stroke="rgba(157, 80, 187, 0.3)"
                        strokeWidth="2"
                        animate={{ d: [`M${15 + i * 5} 40Q${20 + i * 5} 60 ${15 + i * 5} 80`, `M${15 + i * 5} 40Q${10 + i * 5} 60 ${15 + i * 5} 80`] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                ))}
            </svg>
        </motion.div>
    );
};

const Fish = ({ delay, duration, color, size, top, type = 1 }: { delay: number; duration: number; color: string; size: number; top: string; type?: number }) => {
    return (
        <motion.div
            initial={{ x: "-10vw", y: 0, opacity: 0 }}
            animate={{
                x: "110vw",
                y: [0, -30, 20, -10, 0],
                opacity: [0, 1, 1, 1, 0],
            }}
            transition={{
                duration,
                delay,
                repeat: Infinity,
                ease: "linear",
            }}
            style={{
                position: "absolute",
                top,
                zIndex: 1,
                pointerEvents: "none",
            }}
        >
            <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                {type === 1 ? (
                    <>
                        <path d="M20 50C20 30 50 20 80 50C50 80 20 70 20 50Z" fill={color} fillOpacity="0.7" />
                        <path d="M20 50L5 35V65L20 50Z" fill={color} />
                    </>
                ) : (
                    <>
                        <path d="M10 50C10 40 40 35 90 50C40 65 10 60 10 50Z" fill={color} fillOpacity="0.7" />
                        <path d="M10 50L0 45V55L10 50Z" fill={color} />
                        <path d="M50 40Q60 30 70 40" stroke={color} strokeWidth="2" />
                    </>
                )}
                <circle cx="75" cy="45" r="2" fill="white" />
            </svg>
        </motion.div>
    );
};

const Bubble = ({ left, delay, size }: { left: string; delay: number; size: number }) => {
    return (
        <motion.div
            initial={{ y: "110vh", opacity: 0 }}
            animate={{ y: "-10vh", opacity: [0, 0.4, 0.4, 0], x: [0, 15, -15, 0] }}
            transition={{ duration: 10, delay, repeat: Infinity, ease: "easeIn" }}
            style={{
                position: "absolute",
                left,
                width: size,
                height: size,
                borderRadius: "50%",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                background: "rgba(255, 255, 255, 0.1)",
                zIndex: 1,
            }}
        />
    );
};

const WaterBackground = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) return null;

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
            {/* Deep Blue Base */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a192f] via-[#0d2a4a] to-[#040c18]" />

            {/* Light Rays */}
            <div className="absolute inset-0 opacity-30">
                <div className="rays-container absolute inset-0">
                    {[...Array(6)].map((_, i) => (
                        <div
                            key={i}
                            className="ray"
                            style={{
                                left: `${15 + i * 15}%`,
                                transform: `rotate(${-(10 + i * 5)}deg)`,
                                animationDelay: `${i * 0.5}s`,
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Surface Ripples / Caustics Effect */}
            <div className="absolute inset-0 caustics-overlay opacity-20" />

            {/* Fish layers */}
            <Fish delay={0} duration={25} color="#ff9a00" size={40} top="20%" type={1} />
            <Fish delay={5} duration={30} color="#00d2ff" size={30} top="45%" type={2} />
            <Fish delay={12} duration={20} color="#ff4d4d" size={35} top="70%" type={1} />
            <Fish delay={2} duration={35} color="#e0e0e0" size={25} top="35%" type={2} />
            <Fish delay={18} duration={28} color="#9d50bb" size={45} top="60%" type={1} />
            <Fish delay={8} duration={22} color="#f9f9f9" size={20} top="15%" type={2} />

            {/* Jellyfish */}
            <Jellyfish delay={2} left="20%" />
            <Jellyfish delay={10} left="70%" />

            {/* Bubbles */}
            <Bubble left="10%" delay={0} size={10} />
            <Bubble left="25%" delay={3} size={15} />
            <Bubble left="45%" delay={1} size={8} />
            <Bubble left="70%" delay={5} size={12} />
            <Bubble left="85%" delay={2} size={10} />
            <Bubble left="15%" delay={7} size={20} />
            <Bubble left="60%" delay={9} size={14} />

            {/* Animated Light Shimmer */}
            <motion.div
                animate={{ opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute inset-0 bg-gradient-to-t from-transparent via-primary/5 to-transparent"
            />
        </div>
    );
};

export default WaterBackground;
