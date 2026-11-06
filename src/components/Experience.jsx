import { experience } from '../data/portfolio.js';
import './Experience.css';

export default function Experience() {
  return (
    <section className="section experience" id="experience">
      <div className="container">
        <h2 className="section-title">
          Beyond <span>the code</span>
        </h2>
        <p className="section-lead">Working in hospitality and volunteering taught me how to stay calm, listen and work as a team.</p>

        <div className="timeline-grid">
          <Timeline title="Work" items={experience.work} />
          <Timeline title="Leadership & community" items={experience.leadership} />
        </div>

        <h3 className="timeline-title competition-heading">Competitions</h3>
        <div className="competition-list">
          {experience.competitions.map((item) => (
            <article key={item.name} className="competition card">
              <p className="timeline-period">{item.period}</p>
              <h4>{item.name}</h4>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Timeline({ title, items }) {
  return (
    <div>
      <h3 className="timeline-title">{title}</h3>
      <ol className="timeline">
        {items.map((item) => (
          <li key={`${item.role}-${item.place}`}>
            <p className="timeline-period">{item.period}</p>
            <h4>
              {item.role} <span>· {item.place}</span>
            </h4>
            <p>{item.text}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
