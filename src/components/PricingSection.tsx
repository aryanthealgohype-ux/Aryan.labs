import { Check } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const plans = [
  {
    name: "Starter",
    price: "$149",
    desc: "Best for personal brands and small businesses.",
    features: ["Single‑page website", "Mobile responsive", "Basic SEO setup", "Contact form"],
    cta: "Get Starter",
  },
  {
    name: "Growth",
    price: "$399",
    desc: "For growing businesses that need more pages.",
    features: ["Up to 5 pages", "Speed optimization", "On‑page SEO", "WhatsApp chat setup"],
    cta: "Choose Growth",
    featured: true,
  },
  {
    name: "Elite",
    price: "$799",
    desc: "Premium build for high‑end brands.",
    features: ["Custom UI/UX design", "Advanced animations", "Full SEO + Analytics", "Priority support"],
    cta: "Go Elite",
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="section-container">
      <ScrollReveal>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pricing <span className="text-gradient-blue">Plans</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Transparent pricing tailored to your goals. Choose the plan that fits your brand and scale.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid gap-8 lg:grid-cols-3">
        {plans.map((plan) => (
          <ScrollReveal key={plan.name}>
            <div className="beam-border beam-border-soft rounded-2xl h-full">
              <div
                className={[
                  "relative rounded-2xl border bg-card/80 backdrop-blur-sm p-6 sm:p-7 transition-all duration-300 overflow-hidden h-full",
                  "hover:-translate-y-2 hover:shadow-[0_22px_50px_rgba(0,0,0,0.25)]",
                  plan.featured
                    ? "border-primary/50 shadow-[0_18px_40px_rgba(59,130,246,0.35)]"
                    : "border-primary/10",
                ].join(" ")}
              >
              <div className="absolute -top-24 -right-16 w-40 h-40 rounded-full bg-primary/15 blur-2xl" />
              {plan.featured && (
                <span className="absolute -top-3 right-4 text-xs font-semibold px-3 py-1 rounded-full bg-primary text-primary-foreground shadow">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-bold">{plan.name}</h3>
              <p className="text-muted-foreground text-sm mt-1">{plan.desc}</p>
              <div className="mt-5 mb-6">
                <span className="text-3xl font-black">{plan.price}</span>
                <span className="text-sm text-muted-foreground"> / project</span>
              </div>
              <ul className="space-y-3 text-sm">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-muted-foreground">
                    <Check className="w-4 h-4 text-primary mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
