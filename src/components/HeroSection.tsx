import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import portfolioImage from "@/assets/portfolio-image.png";

// Outer ring - 6 icons
const outerIcons = [
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", alt: "Python", angle: 0 },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", alt: "CSS", angle: 60 },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", alt: "JS", angle: 120 },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", alt: "C", angle: 180 },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", alt: "HTML", angle: 240 },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg", alt: "Adobe XD", angle: 300 },
];

// Inner ring - 5 icons (rotate opposite direction)
const innerIcons = [
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "React", angle: 0 },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", alt: "Figma", angle: 72 },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg", alt: "IoT", angle: 144 },
  { src: "https://raw.githubusercontent.com/devicons/devicon/v2.16.0/icons/tailwindcss/tailwindcss-original.svg", alt: "Tailwind", angle: 216 },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", alt: "Node.js", angle: 288 },
];

const titles = ["A UI/UX Designer", "A Full Stack Developer", "A Problem Solver"];

const HeroSection = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [outerRotation, setOuterRotation] = useState(0);
  const [innerRotation, setInnerRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let rafId = 0;
    let lastTime = 0;
    const speedOuter = 25; // Increased speed
    const speedInner = -35; // Increased speed

    const tick = (time: number) => {
      if (!lastTime) lastTime = time;
      const delta = (time - lastTime) / 1000;
      lastTime = time;

      setOuterRotation((prev) => (prev + speedOuter * delta) % 360);
      setInnerRotation((prev) => (prev + speedInner * delta) % 360);

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <section className="hero-section min-h-screen flex items-center pt-28 relative bg-background" id="hero">
      {/* Premium JS background accents */}
      <div className="hero-js-bg js-bg-1" aria-hidden="true" />
      <div className="hero-js-bg js-bg-2" aria-hidden="true" />
      <div className="hero-js-bg js-bg-3" aria-hidden="true" />
      <div className="section-container hero-content relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
          {/* Left content */}
          <motion.div
            className="space-y-6 text-center lg:text-left"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium border border-primary/30 text-primary bg-primary/5">
              Software Developer & Designer
            </span>

            <h1 className="font-mono text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Hey! I'm{" "}
              <span className="text-gradient-blue">Aryan</span>
              <br />
              Khan
              <br />
              <span key={titleIndex} className="typing-effect inline-block text-foreground">
                {titles[titleIndex]}
              </span>
            </h1>

            <p className="text-muted-foreground text-base sm:text-lg max-w-lg leading-relaxed mx-auto lg:mx-0">
              I am a passionate Software Developer and Designer driven by technology and innovation. I specialize in building seamless, engaging and user-friendly digital experiences. With expertise in web and full stack development, I turn ideas into scalable solutions. My focus is on clean code, intuitive design and high quality results.
            </p>

            <div className="flex gap-4 pt-2 justify-center lg:justify-start">
              <a href="#projects" className="btn-3d text-primary-foreground px-6 sm:px-8 py-3 rounded-full font-semibold text-sm">
                Check portfolio
              </a>
              <a href="#contact" className="btn-3d-outline text-primary px-6 sm:px-8 py-3 rounded-full font-semibold text-sm">
                Contact Me
              </a>
            </div>
          </motion.div>

          {/* Right - Profile with orbiting icons */}
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px]">
              {/* Outer dashed circle */}
              <div className="absolute inset-0 dashed-circle" />
              {/* Inner dashed circle */}
              <div className="absolute inset-[12%] dashed-circle" style={{ borderColor: "hsl(217 100% 50% / 0.3)" }} />

              {/* Profile image */}
              <div className="absolute inset-[22%] rounded-full overflow-hidden bg-gradient-to-b from-primary/20 to-transparent">
                <img
                  src={portfolioImage}
                  alt="Aryan Khan - Software Developer"
                  className="w-full h-full object-cover object-[70%_15%]"
                />
              </div>

              {/* Outer ring icons */}
              {outerIcons.map((icon) => {
                const angle = ((icon.angle + outerRotation) * Math.PI) / 180;
                const radius = 50; // Aligned with outer dashed circle (inset-0)
                const x = 50 + radius * Math.cos(angle);
                const y = 50 + radius * Math.sin(angle);
                return (
                  <div
                    key={icon.alt}
                    className="absolute w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-secondary rounded-xl p-1.5 sm:p-2 glow-border flex items-center justify-center pointer-events-auto"
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      transform: "translate(-50%, -50%)",
                      willChange: "left, top",
                    }}
                  >
                    <img src={icon.src} alt={icon.alt} className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
                  </div>
                );
              })}

              {/* Inner ring icons */}
              {innerIcons.map((icon) => {
                const angle = ((icon.angle + innerRotation) * Math.PI) / 180;
                const radius = 38; // Aligned with inner dashed circle
                const x = 50 + radius * Math.cos(angle);
                const y = 50 + radius * Math.sin(angle);
                return (
                  <div
                    key={icon.alt}
                    className="absolute w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-secondary rounded-lg p-1 sm:p-1.5 glow-border flex items-center justify-center pointer-events-auto"
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      transform: "translate(-50%, -50%)",
                      willChange: "left, top",
                    }}
                  >
                    <img src={icon.src} alt={icon.alt} className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
