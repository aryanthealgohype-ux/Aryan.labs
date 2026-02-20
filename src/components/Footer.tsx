const Footer = () => {
  return (
    <footer className="mt-12 border-t border-primary/10 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid gap-10 lg:grid-cols-3">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-3">About This Website</h3>
            <p className="text-muted-foreground leading-relaxed">
              This is my personal portfolio where I showcase my best projects, UI/UX design work,
              and full‑stack development skills. I focus on clean design, fast performance, and
              premium user experience.
            </p>
            <div className="mt-5 space-y-2 text-sm">
              <p className="text-muted-foreground">
                <span className="font-semibold text-foreground">Email:</span>{" "}
                <a
                  href="mailto:aryanthealgohype@gmail.com"
                  className="text-primary hover:underline"
                >
                  aryanthealgohype@gmail.com
                </a>
              </p>
              <p className="text-muted-foreground">
                <span className="font-semibold text-foreground">Phone:</span>{" "}
                <a href="tel:+918587951091" className="text-primary hover:underline">
                  +91 8587951091
                </a>
              </p>
              <p className="text-muted-foreground">
                <span className="font-semibold text-foreground">Address:</span>{" "}
                Dasana, Ghaziabad 201002
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
            <div className="flex flex-col gap-2 text-sm">
              <a href="#hero" className="text-muted-foreground hover:text-primary transition-colors">Home</a>
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
              <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors">Skills</a>
              <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</a>
              <a href="#faqs" className="text-muted-foreground hover:text-primary transition-colors">FAQs</a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Ready to discuss your project?</h4>
            <p className="text-sm text-muted-foreground">
              Let’s plan a clean, modern, and high‑performance website for your brand.
            </p>
            <a
              href="/book-call"
              className="inline-flex items-center justify-center btn-3d text-primary-foreground px-6 py-3 rounded-full text-sm font-semibold"
            >
              Book a Strategy Call
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-primary/10">
        <div className="max-w-7xl mx-auto px-4 py-6 text-sm text-muted-foreground flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© 2026 Aryan Khan. All rights reserved.</p>
          <p>Built with React, Tailwind CSS, and Vite.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
