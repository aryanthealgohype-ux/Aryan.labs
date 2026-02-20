import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

const skillCategories = [
  {
    title: "Programming & Tech Stack",
    desc: "Building scalable web applications with Python, Django, and modern JavaScript.",
    icons: [
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", label: "Python" },
      { src: "https://www.svgrepo.com/show/353657/django-icon.svg", label: "Django" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", label: "JavaScript" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", label: "React" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", label: "HTML" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", label: "CSS" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", label: "PostgreSQL" },
    ],
  },
  {
    title: "UI/UX & Creative Design",
    desc: "Crafting intuitive user experiences with industry-standard design tools.",
    icons: [
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", label: "Figma" },
      { src: "https://cdn-icons-png.flaticon.com/512/5611/5611129.png", label: "Adobe XD" },
      { src: "https://raw.githubusercontent.com/devicons/devicon/v2.16.0/icons/tailwindcss/tailwindcss-original.svg", label: "Tailwind CSS" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg", label: "Photoshop" },
    ],
  },
  {
    title: "Tools & Medical Coding",
    desc: "Specialized tools for Data Protection, Penetration Testing, and Healthcare Standards.",
    icons: [
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg", label: "Kali Linux" },
      { src: "https://img.icons8.com/color/96/caduceus.png", label: "Medical Coding" },
      { src: "https://cdn-icons-png.flaticon.com/512/17994/17994844.png", label: "Security" },
    ],
  },
];

const SkillsSection = () => {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="section-container">
      <ScrollReveal>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Explore My <span className="text-gradient-blue">Skills</span>
          </h2>
          <p className="text-muted-foreground">
            Technologies that power my frontend development toolkit
          </p>
        </div>
      </ScrollReveal>

      <div className="grid gap-6 md:grid-cols-3">
        {skillCategories.map((cat, i) => (
          <ScrollReveal key={cat.title} delay={i * 0.1}>
            <div className="beam-border beam-border-soft rounded-2xl h-full">
              <div className="bg-card rounded-2xl p-6 h-full">
                <h3 className="text-lg font-bold mb-2">{cat.title}</h3>
                <p className="text-muted-foreground text-sm mb-5">{cat.desc}</p>
                <div className="flex flex-wrap gap-3">
                  {cat.icons.map((icon) => {
                    const isActive = activeSkill === icon.label;
                    return (
                      <button
                        key={icon.label}
                        type="button"
                        onClick={() => setActiveSkill(icon.label)}
                        className="group"
                        aria-label={icon.label}
                        aria-pressed={isActive}
                      >
                        <div
                          className={[
                            "w-12 h-12 rounded-xl p-2 transition-all duration-300 flex items-center justify-center",
                            "bg-secondary group-hover:bg-primary/10 group-hover:scale-110 group-hover:shadow-md",
                            isActive ? "ring-2 ring-primary bg-primary/10 scale-110 shadow-md" : "",
                          ].join(" ")}
                        >
                          <img src={icon.src} alt={icon.label} className="w-7 h-7" />
                        </div>
                      </button>
                    );
                  })}
                </div>
                {activeSkill && (
                  <p className="mt-4 text-xs text-primary">Selected skill: {activeSkill}</p>
                )}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal>
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground mb-3">Currently Mastering</p>
          <span className="inline-block px-6 py-2 rounded-full beam-border beam-border-soft bg-card font-semibold text-primary">
            Next.js
          </span>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default SkillsSection;
