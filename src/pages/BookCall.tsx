import { useEffect } from "react";

const BookCall = () => {
  useEffect(() => {
    const existing = document.getElementById("leadconnector-embed-script");
    if (existing) return;
    const script = document.createElement("script");
    script.id = "leadconnector-embed-script";
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.type = "text/javascript";
    document.body.appendChild(script);
  }, []);

  return (
    <section className="section-container py-16">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-sm text-muted-foreground">Schedule a call</p>
            <h1 className="text-3xl md:text-4xl font-bold">Book a Strategy Call</h1>
          </div>
          <a href="/" className="text-sm text-primary underline">
            Back to Home
          </a>
        </div>

        <div className="rounded-2xl border border-primary/10 bg-card p-3 sm:p-4 shadow-[0_12px_40px_-20px_rgba(0,0,0,0.35)]">
          <div className="w-full overflow-hidden rounded-xl">
            <iframe
              src="https://api.leadconnectorhq.com/widget/booking/9bxMMCc2XhcoDS5jkhQM"
              style={{ width: "100%", border: "none", overflow: "hidden" }}
              scrolling="no"
              id="9bxMMCc2XhcoDS5jkhQM_1771584039776"
              title="Book a Strategy Call"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookCall;
