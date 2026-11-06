import { useRef, useState } from 'react';
import { projectFilters, projects } from '../data/portfolio.js';
import { projectHref } from '../hooks/useHashRoute.js';
import Icon from './Icon.jsx';
import ProjectImage from './ProjectImage.jsx';
import ProjectLinks from './ProjectLinks.jsx';
import './ProjectPage.css';

const categoryLabel = (id) => projectFilters.find((f) => f.id === id)?.label ?? id;

export default function ProjectPage({ project }) {
  const index = projects.indexOf(project);
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  return (
    <article className="project-page">
      <div className="container">
        <a className="back-link" href="#projects">
          ← All projects
        </a>

        <header className="project-page-head">
          <p className="project-period">{project.period}</p>
          <h1 className="section-title">{project.title}</h1>
        </header>

        <div className="project-page-top">
          {/* key resets the gallery to the first photo when moving between projects */}
          <Gallery key={project.id} project={project} />

          <aside className="project-page-side">
            <section className="card project-page-block">
              <h2>Overview</h2>
              <p>{project.summary}</p>
            </section>

            <section className="card project-page-block">
              <h2>
                <span className="block-icon">≡</span> Project details
              </h2>
              <dl className="detail-grid">
                <div>
                  <dt>Category</dt>
                  <dd className="detail-chips">
                    {project.categories.map((id) => (
                      <span key={id} className="chip">
                        {categoryLabel(id)}
                      </span>
                    ))}
                  </dd>
                </div>
                <div>
                  <dt>Role</dt>
                  <dd>{project.role}</dd>
                </div>
                <div>
                  <dt>Timeline</dt>
                  <dd>{project.period}</dd>
                </div>
                <div>
                  <dt>Links</dt>
                  <dd className="detail-links">
                    <ProjectLinks project={project} />
                  </dd>
                </div>
              </dl>
            </section>
          </aside>
        </div>

        <section className="project-page-section">
          <h2 className="project-page-subtitle">Key highlights</h2>
          <div className="card project-page-block">
            <ul className="highlight-list">
              {project.contribution.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="project-page-section project-page-pair">
          <div>
            <h2 className="project-page-subtitle">How it went</h2>
            <div className="card project-page-block">
              <p>{project.outcome ?? 'Results coming soon.'}</p>
            </div>
          </div>
          <div>
            <h2 className="project-page-subtitle">Tools</h2>
            <div className="card project-page-block">
              <ul className="project-tags">
                {project.tags.map((tag) => (
                  <li key={tag} className="chip">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <nav className="project-pager" aria-label="More projects">
          <a href={projectHref(prev.id)} className="card">
            <span>← Previous</span>
            {prev.title}
          </a>
          <a href={projectHref(next.id)} className="card">
            <span>Next →</span>
            {next.title}
          </a>
        </nav>
      </div>
    </article>
  );
}

// Swipeable photo strip: scroll/swipe sideways, use the arrows, or pick a thumbnail.
function Gallery({ project }) {
  const trackRef = useRef(null);
  const [shown, setShown] = useState(0);
  const { images, title } = project;

  const goTo = (i) => {
    const track = trackRef.current;
    const target = (i + images.length) % images.length;
    track.scrollTo({ left: target * track.clientWidth, behavior: 'smooth' });
  };

  const onScroll = () => {
    const track = trackRef.current;
    setShown(Math.round(track.scrollLeft / track.clientWidth));
  };

  return (
    <div className="gallery">
      <div className="gallery-frame card">
        <div
          className="gallery-track"
          ref={trackRef}
          onScroll={onScroll}
          tabIndex={0}
          aria-label={`${title} photos, scroll sideways to see more`}
        >
          {images.map((src) => (
            <div className="gallery-slide" key={src}>
              <ProjectImage src={src} title={title} />
            </div>
          ))}
        </div>

        {images.length > 1 && (
          <>
            <button className="gallery-arrow is-prev" onClick={() => goTo(shown - 1)} aria-label="Previous photo">
              <Icon name="arrow" size={20} />
            </button>
            <button className="gallery-arrow" onClick={() => goTo(shown + 1)} aria-label="Next photo">
              <Icon name="arrow" size={20} />
            </button>
            <span className="gallery-count">
              {shown + 1} / {images.length}
            </span>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="gallery-thumbs">
          {images.map((src, i) => (
            <button
              key={src}
              className={i === shown ? 'is-active' : ''}
              onClick={() => goTo(i)}
              aria-label={`Show photo ${i + 1}`}
            >
              <img src={src} alt="" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
