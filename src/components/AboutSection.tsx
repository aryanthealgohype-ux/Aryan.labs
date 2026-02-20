import { useState } from "react";
import { Brain, Zap, BookOpen, Shield, Dumbbell, Camera, Gamepad2, BookOpenCheck, Compass, Flower2 } from "lucide-react";
import portfolioImage from "@/assets/portfolio-image.png";
import ScrollReveal from "@/components/ScrollReveal";

const strengths = [
  { icon: Brain, title: "Analytical Thinking", desc: "Breaking down complex challenges into scalable, logical solutions." },
  { icon: Zap, title: "Performance First", desc: "Optimizing code and assets for lightning-fast user experiences." },
  { icon: BookOpen, title: "Lifelong Learning", desc: "Constantly evolving with the latest web technologies and best practices." },
  { icon: Shield, title: "Secure by Design", desc: "Integrating security best practices from the ground up." },
];

const hobbies = [
  { icon: Flower2, label: "Yoga & Meditation" },
  { icon: Dumbbell, label: "Gym & Fitness" },
  { icon: Compass, label: "Traveling" },
  { icon: Camera, label: "Photography" },
  { icon: Gamepad2, label: "Gaming" },
  { icon: BookOpenCheck, label: "Reading Books" },
];

const AboutSection = () => {
  const [activeStrength, setActiveStrength] = useState<string | null>(null);
  const [activeHobby, setActiveHobby] = useState<string | null>(null);
  const [activeHue, setActiveHue] = useState<"blue" | "purple" | "pink" | "green" | "amber">("blue");

  const accentClasses = {
    blue: "ring-blue-500 shadow-[0_8px_22px_rgba(59,130,246,0.35)] bg-blue-500/10",
    purple: "ring-purple-500 shadow-[0_8px_22px_rgba(168,85,247,0.35)] bg-purple-500/10",
    pink: "ring-pink-500 shadow-[0_8px_22px_rgba(236,72,153,0.35)] bg-pink-500/10",
    green: "ring-emerald-500 shadow-[0_8px_22px_rgba(16,185,129,0.35)] bg-emerald-500/10",
    amber: "ring-amber-500 shadow-[0_8px_22px_rgba(245,158,11,0.35)] bg-amber-500/10",
  } as const;

  return (
    <section id="about" className="section-container">
      {/* Intro */}
      <ScrollReveal>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Passionate <span className="text-gradient-blue">Developer</span> and{" "}
            <span className="text-gradient-blue">Lifelong Learner</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I adapt to different time zones to make sure communication is smooth, no matter where you're located.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch mb-20">
        {/* Left card */}
        <ScrollReveal direction="left">
          <div className="beam-border beam-border-soft rounded-2xl h-full">
            <div className="bg-card rounded-2xl p-5 sm:p-7 h-full">
              <div className="inline-flex items-center gap-3 bg-black/40 rounded-full px-4 py-2 mb-6">
                <img
                  src={portfolioImage}
                  alt="Profile"
                  className="w-10 h-10 rounded-full object-cover object-top"
                />
                <div className="leading-tight">
                  <p className="text-sm font-semibold">Aryan Khan</p>
                  <p className="text-xs text-muted-foreground">Software Developer & Designer</p>
                </div>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-3">
                Passionate <span className="text-gradient-blue">Developer</span> and
                <span className="block">Lifelong Learner</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I adapt to different time zones to make sure communication is smooth, no matter where you're located.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Right card */}
        <ScrollReveal direction="right">
          <div className="beam-border beam-border-soft rounded-2xl h-full">
            <div className="bg-card rounded-2xl p-5 sm:p-7 h-full">
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-destructive" />
                <div className="w-3 h-3 rounded-full bg-[hsl(45_100%_50%)]" />
                <div className="w-3 h-3 rounded-full bg-[hsl(120_60%_50%)]" />
              </div>
              <div className="grid gap-6 md:grid-cols-[240px_1fr] items-start">
                <pre className="font-mono text-xs sm:text-sm text-muted-foreground leading-relaxed overflow-x-auto bg-black/30 rounded-xl p-4">
                  <code>
                    {`const developer = {
  firstName: "Aryan",
  lastName: "Khan",
  passion: "Coding & Problem Solving",
  hobby: repeat = () => {
    // eat();
    // sleep();
    // code();
    // repeat();
  }
}`}
                  </code>
                </pre>
                <div>
                  <h3 className="text-2xl font-bold mb-4">What Drives Me</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I am passionate about the intersection of design and development. I believe the best digital experiences are created through a deep understanding of users and a strong commitment to innovation. Whether I am working on a simple landing page or a complex web application, I bring precision, creativity, and a user-first mindset to every project.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Journey */}
      <ScrollReveal>
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">About My Journey</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              { title: "Work Experience", content: <p><span className="text-foreground font-semibold">Present</span> — 4 Years</p> },
              { title: "Education Background", content: <><p>2022 - 2024</p><p>2019 - 2020</p><p>2017 - 2018</p></> },
              { title: "Professional Summary", content: <ul className="list-disc list-inside"><li>Full Stack & UI/UX</li><li>Medical Coding</li><li>Multidisciplinary</li><li>Innovation</li></ul> },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.15}>
                <div className="beam-border beam-border-soft rounded-2xl h-full">
                  <div className="bg-card rounded-2xl p-6 space-y-4 h-full">
                    <h3 className="text-xl font-bold text-primary">{item.title}</h3>
                    <div className="space-y-2 text-sm text-muted-foreground">{item.content}</div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Strengths */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        {strengths.map((s, i) => (
          <ScrollReveal key={s.title} delay={i * 0.1}>
            <div className="beam-border beam-border-soft rounded-2xl bg-card p-6 text-center space-y-3 transition-all duration-300 h-full text-card-foreground">
              <button
                type="button"
                onClick={() => setActiveStrength(s.title)}
                className="w-12 h-12 mx-auto rounded-xl bg-secondary flex items-center justify-center"
                aria-label={s.title}
              >
                <s.icon className="w-6 h-6 text-primary" />
              </button>
              {activeStrength === s.title && (
                <p className="text-xs text-primary">{s.title}</p>
              )}
              <h4 className="font-bold">{s.title}</h4>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Hobbies */}
      <ScrollReveal>
        <div>
          <h3 className="text-2xl font-bold text-center mb-8">My Hobbies</h3>
          <div className="flex flex-wrap justify-center">
            <div className="flex flex-wrap items-center justify-center gap-4 px-6 sm:px-8 py-4 sm:py-5 rounded-2xl beam-border beam-border-soft bg-card text-card-foreground text-xs sm:text-sm font-medium">
              {hobbies.map((h) => {
                const isActive = activeHobby === h.label;
                return (
                  <button
                    key={h.label}
                    type="button"
                    onClick={() => {
                      const palette: Array<keyof typeof accentClasses> = ["blue", "purple", "pink", "green", "amber"];
                      const next = palette[Math.floor(Math.random() * palette.length)];
                      setActiveHue(next);
                      setActiveHobby(h.label);
                    }}
                    className={[
                      "flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full transition-all duration-300",
                      "bg-secondary hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(59,130,246,0.25)]",
                      isActive ? `ring-2 text-foreground -translate-y-0.5 ${accentClasses[activeHue]}` : "",
                    ].join(" ")}
                    aria-label={h.label}
                    aria-pressed={isActive}
                  >
                    <h.icon className={`w-4 h-4 ${isActive ? "text-primary" : "text-primary"}`} />
                    {h.label}
                  </button>
                );
              })}
            </div>
          </div>
          {activeHobby && (
            <p className="mt-4 text-center text-xs text-primary">
              Selected hobby: {activeHobby}
            </p>
          )}
        </div>
      </ScrollReveal>
    </section>
  );
};

export default AboutSection;
