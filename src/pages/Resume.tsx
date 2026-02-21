import { Download, ArrowLeft } from "lucide-react";

const Resume = () => {
  return (
    <section className="min-h-screen bg-background pt-28 pb-10">
      <div className="section-container">
        <div className="flex items-center justify-between gap-4 mb-6 flex-wrap">
          <a href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft size={16} />
            Back to Home
          </a>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 btn-3d text-primary-foreground px-5 py-2 rounded-full text-sm font-medium"
          >
            Download Resume <Download size={14} />
          </a>
        </div>

        <div className="beam-border beam-border-soft rounded-2xl overflow-hidden bg-card">
          <iframe
            title="Resume"
            src="/resume.pdf"
            className="w-full h-[calc(100vh-220px)] min-h-[70vh]"
          />
        </div>
      </div>
    </section>
  );
};

export default Resume;
