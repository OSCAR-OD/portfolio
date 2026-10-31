import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowLeft, FiArrowUpRight } from "react-icons/fi";
import { projects } from "../../data/projects";
import ProjectGallery from "./ProjectGallery";
import "./project.css";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const project = projects.find((item) => item.slug === params.slug);

  return project
    ? { title: `${project.title} | Oscar Deb`, description: project.summary }
    : { title: "Project | Oscar Deb" };
}

export default function ProjectPage({ params }) {
  const project = projects.find((item) => item.slug === params.slug);
  if (!project) notFound();

  return (
    <main className="project-page container 
    ">
    {/* section*/}
      <Link className="project-page__back" href="/#work-title">
        <FiArrowLeft aria-hidden="true" />
        <span>Back to projects</span>
      </Link>

      <header className="project-page__header">
        <p className="project-page__eyebrow">{project.category}</p>
        <h1>{project.title}</h1>
        <p className="project-page__summary">{project.summary}</p>
      </header>

      <ProjectGallery
        images={project.gallery || [{ src: project.image, alt: project.alt }]}
        title={project.title}
        category={project.category}
        summary={project.summary}
      />

      <div className="project-page__content">
        <section className="project-page__overview">
          <p className="project-page__eyebrow">Project overview</p>
          <h2>Built to solve a real workflow.</h2>
          <p>{project.overview}</p>
          <a
            className="project-page__repository"
            href={project.repository}
            target="_blank"
            rel="noreferrer"
          >
            View source <FiArrowUpRight aria-hidden="true" />
          </a>
        </section>

        <aside className="project-page__details">
          <div>
            <h2>Key work</h2>
            <ul>
              {project.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Tools & technologies</h2>
            <ul className="project-page__technology-list">
              {project.technologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
}