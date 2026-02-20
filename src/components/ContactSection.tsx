import { useState } from "react";
import { Send } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import heroBg from "@/assets/hero-bg.jfif";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [status, setStatus] = useState<{ type: "success" | "error" | null; message: string }>({ type: null, message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: "" });

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: "success", message: "Message sent! I'll get back to you soon." });
        setForm({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        setStatus({ type: "error", message: data.error || "Something went wrong." });
      }
    } catch (err) {
      setStatus({ type: "error", message: "Failed to connect to the server." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-container">
      <ScrollReveal>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="text-gradient-blue">Touch</span>
          </h2>
          <p className="text-muted-foreground">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
        {/* Form */}
        <ScrollReveal direction="left">
          <div className="beam-border beam-border-soft rounded-2xl">
            <div className="bg-card rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl font-bold mb-2">Send a Message</h3>
              <p className="text-sm text-muted-foreground mb-6">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-muted border border-primary/10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors text-sm"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-muted border border-primary/10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors text-sm"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-muted border border-primary/10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors text-sm"
                  required
                />
                <select
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-muted border border-primary/10 text-foreground focus:outline-none focus:border-primary/50 transition-colors text-sm"
                  required
                >
                  <option value="" disabled>
                    Select Service
                  </option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="Website Development">Website Development</option>
                  <option value="Performance & Speed">Performance & Speed</option>
                  <option value="SEO & Visibility">SEO & Visibility</option>
                  <option value="Mobile‑First Build">Mobile‑First Build</option>
                  <option value="Secure & Reliable">Secure & Reliable</option>
                </select>
                <textarea
                  placeholder="Message"
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-muted border border-primary/10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors text-sm resize-none"
                  required
                />
                {status.message && (
                  <div className={`p-3 rounded-xl text-sm ${status.type === "success" ? "bg-green-500/10 text-green-500" : "bg-red-500/10 text-red-500"}`}>
                    {status.message}
                  </div>
                )}
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-3d text-primary-foreground px-8 py-3 rounded-full font-semibold text-sm flex items-center gap-2 w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending..." : "Send Message"} <Send size={16} />
                </button>
              </form>
            </div>
          </div>
        </ScrollReveal>

        {/* Client-friendly message */}
        <ScrollReveal direction="right">
          <div className="beam-border beam-border-soft rounded-2xl">
            <div className="bg-card rounded-2xl p-6 sm:p-8 h-full flex items-center">
              <p className="text-lg sm:text-xl font-semibold text-foreground leading-relaxed">
                “Your vision, beautifully built — a modern, fast, and trustworthy website that makes clients say yes.”
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>

    </section>
  );
};

export default ContactSection;
