import ScrollReveal from "@/components/ScrollReveal";
import { projects } from "@/data/projects";
import { Link } from "react-router-dom";

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-container">
      <ScrollReveal>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Latest <span className="text-gradient-blue">Works</span>
          </h2>
        </div>
      </ScrollReveal>

      <div className="projects-timeline">
        {projects.map((project, i) => (
          <ScrollReveal key={project.title} delay={i * 0.1}>
            <div className={`project-item ${i % 2 === 0 ? "left" : "right"}`}>
              <div className="project-dot" aria-hidden="true" />
              <Link
                to={`/projects/${project.slug}`}
                className={`project-card ${i % 2 === 0 ? "left" : "right"}`}
                aria-label={`Open ${project.title} details`}
              >
                <div className="project-media">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                  <div className="project-hover">
                    <span className="btn-3d text-primary-foreground px-5 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                      View Project
                    </span>
                  </div>
                </div>
                <div className="project-body">
                  <h3 className="text-lg sm:text-xl font-bold">{project.title}</h3>
                  <p className="text-primary text-sm font-medium">{project.category}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{project.desc}</p>
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
              </Link>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal>
        <p className="text-center text-sm text-muted-foreground mt-12 max-w-2xl mx-auto italic">
          Project Selection: During my learning journey, I built several practice projects including calculator, watches, website clones, and many more to sharpen my skills. The projects shown above represent my best work — fully designed and developed from scratch.
        </p>
      </ScrollReveal>
    </section>
  );
};

export default ProjectsSection;
