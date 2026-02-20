import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "@/data/projects";
import ScrollReveal from "@/components/ScrollReveal";

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = useMemo(() => projects.find((p) => p.slug === slug), [slug]);

  if (!project) {
    return (
      <div className="min-h-screen section-container flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold">Project not found</h1>
          <Link to="/" className="text-primary underline">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="section-container py-16">
      <ScrollReveal>
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-primary text-sm font-semibold">{project.category}</p>
            <h1 className="text-3xl md:text-4xl font-bold">{project.title}</h1>
          </div>
          <Link to="/" className="text-sm text-primary underline">
            Back to Home
          </Link>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="grid gap-10 lg:grid-cols-2 items-start">
          <div className="rounded-3xl overflow-hidden shadow-xl bg-card">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          </div>
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">{project.desc}</p>
            <div>
              <h2 className="text-lg font-semibold mb-2">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">{project.details.overview}</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-2">Highlights</h2>
              <ul className="space-y-2 text-muted-foreground">
                {project.details.highlights.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default ProjectDetail;
