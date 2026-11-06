import { projectHref } from '../hooks/useHashRoute.js';
import Icon from './Icon.jsx';
import ProjectImage from './ProjectImage.jsx';
import ProjectLinks from './ProjectLinks.jsx';

export default function ProjectCard({ project }) {
  const href = projectHref(project.id);

  return (
    <article className="project-card card">
      <a className="project-thumb" href={href} aria-label={`Open ${project.title}`}>
        <ProjectImage src={project.images[0]} title={project.title} />
        <span className="thumb-hint">
          <Icon name="zoom" size={20} /> View project
        </span>
      </a>

      <div className="project-body">
        <p className="project-period">{project.period}</p>
        <h3>{project.title}</h3>
        <p className="project-role">{project.role}</p>
        <p className="project-summary">{project.summary}</p>

        <ul className="project-tags">
          {project.tags.map((tag) => (
            <li key={tag} className="chip">
              {tag}
            </li>
          ))}
        </ul>

        <div className="project-actions">
          <a className="btn btn-primary btn-sm" href={href}>
            View project <Icon name="arrow" size={16} />
          </a>
          <ProjectLinks project={project} />
        </div>
      </div>
    </article>
  );
}
