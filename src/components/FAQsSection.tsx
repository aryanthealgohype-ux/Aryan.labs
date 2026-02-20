import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ScrollReveal from "@/components/ScrollReveal";

const faqs = [
  { q: "What technologies do you specialize in?", a: "I specialize in React, JavaScript, Python, Django, Tailwind CSS, Figma, and various modern web technologies for building responsive, scalable applications." },
  { q: "What kind of projects have you built?", a: "I've built quiz applications, banking management systems, fitness app designs, face recognition systems, and various other full-stack and UI/UX projects." },
  { q: "Do you have experience with DevOps and Deployment?", a: "Yes, I have experience deploying applications using platforms like Vercel, Netlify, and have worked with CI/CD pipelines and containerization." },
  { q: "How do you ensure code quality and stability?", a: "I follow best practices including clean code principles, code reviews, testing, and continuous integration to maintain high code quality." },
  { q: "Do you have full-stack development experience?", a: "Absolutely. I work across the entire stack — from React frontends to Python/Django backends with PostgreSQL databases." },
  { q: "Are your projects mobile responsive?", a: "Yes, all my projects are built with a mobile-first approach, ensuring seamless experiences across all devices." },
  { q: "How do you optimize application performance?", a: "I use techniques like lazy loading, code splitting, caching, image optimization, and efficient data fetching to ensure fast load times." },
  { q: "What is your approach to security?", a: "Security is integrated from the start — I implement authentication, input validation, HTTPS, and follow OWASP guidelines." },
  { q: "What are you currently learning or improving?", a: "I'm currently mastering Next.js and diving deeper into advanced encryption and cybersecurity techniques." },
];

const FAQsSection = () => {
  return (
    <section id="faqs" className="section-container">
      <ScrollReveal>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="text-gradient-blue">Insights</span>
          </h2>
          <p className="text-muted-foreground">
            Explore my technical skills, thought process, and how I build scalable, aesthetic, and performant systems.
          </p>
        </div>
      </ScrollReveal>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <AccordionItem
                value={`faq-${i}`}
                className="glow-border rounded-xl bg-card px-4 sm:px-6 border-none"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-primary transition-colors text-sm md:text-base">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            </ScrollReveal>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQsSection;
