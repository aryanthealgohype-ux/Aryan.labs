import { Brush, Code2, Gauge, Search, Smartphone, ShieldCheck } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const services = [
  {
    title: "UI/UX Design",
    desc: "Clean, modern interfaces that feel premium and convert better.",
    icon: Brush,
  },
  {
    title: "Website Development",
    desc: "Fast, responsive websites built with clean, scalable code.",
    icon: Code2,
  },
  {
    title: "Performance & Speed",
    desc: "Core Web Vitals optimization for smooth and instant load.",
    icon: Gauge,
  },
  {
    title: "SEO & Visibility",
    desc: "On‑page SEO setup to help your business rank higher.",
    icon: Search,
  },
  {
    title: "Mobile‑First Build",
    desc: "Pixel‑perfect layouts that look great on every device.",
    icon: Smartphone,
  },
  {
    title: "Secure & Reliable",
    desc: "Best practices for security, stability, and long‑term support.",
    icon: ShieldCheck,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-container">
      <ScrollReveal>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-gradient-blue">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Premium services tailored to help your brand look modern, professional, and trustworthy.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <ScrollReveal key={s.title} delay={i * 0.05}>
            <div className="beam-border beam-border-soft rounded-2xl h-full">
              <div className="bg-card rounded-2xl p-6 h-full">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <s.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
