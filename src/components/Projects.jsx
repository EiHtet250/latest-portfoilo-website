import { useState } from 'react';
import { projectFilters, projects } from '../data/portfolio.js';
import ProjectCard from './ProjectCard.jsx';
import './Projects.css';

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const visible = filter === 'all' ? projects : projects.filter((p) => p.categories.includes(filter));

  return (
    <section className="section projects" id="projects">
      <div className="container">
        <header className="section-head-center">
          <h2 className="section-title">
            My <span>projects</span>
          </h2>
          <p className="section-lead">The problem, what I did, the tools I used and how it turned out.</p>
        </header>

        <div className="filters" role="tablist" aria-label="Filter projects">
          {projectFilters.map((item) => (
            <button
              key={item.id}
              role="tab"
              aria-selected={filter === item.id}
              className={`filter ${filter === item.id ? 'is-active' : ''}`}
              onClick={() => setFilter(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="project-grid">
          {visible.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
