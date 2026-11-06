import { useEffect, useState } from 'react';
import { practices, skills } from '../data/portfolio.js';
import './Skills.css';

const AUTOPLAY_MS = 3200;

// Arc skills grouped by their `group`, followed by the practices list.
const skillGroups = [
  ...skills.reduce((groups, skill) => {
    groups.set(skill.group, [...(groups.get(skill.group) ?? []), skill.name]);
    return groups;
  }, new Map()),
  [practices.group, practices.items],
];

// Position on the arc as % of the stage (stage is 2:1, so 44% of width = 88% of height).
function arcPosition(index, total) {
  const angle = Math.PI - (index / (total - 1)) * Math.PI;
  return {
    left: `${50 + 44 * Math.cos(angle)}%`,
    top: `${92 - 84 * Math.sin(angle)}%`,
  };
}

export default function Skills() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const skill = skills[active];

  useEffect(() => {
    if (paused) return undefined;
    const timer = setInterval(() => setActive((i) => (i + 1) % skills.length), AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [paused]);

  const step = (delta) => setActive((i) => (i + delta + skills.length) % skills.length);

  return (
    <section className="section section-alt skills" id="skills" style={{ '--skill-color': skill.color }}>
      <div className="container">
        <div className="skills-layout">
          <div className="skills-info">
            <h2 className="section-title">
              My <span>skills</span>
            </h2>
            <p className="skills-lead">The tools I reach for, and where I&apos;ve actually used them. Hover or tap any icon on the arc.</p>

            <div className="skill-detail card" aria-live="polite">
              <p className="skill-group">{skill.group}</p>
              <h3>{skill.name}</h3>
              <p>{skill.note}</p>
            </div>

            <div className="skill-nav">
              <button onClick={() => step(-1)} aria-label="Previous skill">
                ←
              </button>
              <span>
                {String(active + 1).padStart(2, '0')} / {String(skills.length).padStart(2, '0')}
              </span>
              <button onClick={() => step(1)} aria-label="Next skill">
                →
              </button>
            </div>
          </div>

          <div
            className="skills-stage"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
          >
            <div className="skills-glow" aria-hidden="true" />
            <svg className="skills-arc" viewBox="0 0 200 100" preserveAspectRatio="none" aria-hidden="true">
              <path d="M12 92 A88 84 0 0 1 188 92" />
            </svg>

            {skills.map((item, index) => (
              <button
                key={item.name}
                className={`orbit-item ${index === active ? 'is-active' : ''}`}
                style={{ ...arcPosition(index, skills.length), '--item-color': item.color }}
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                onClick={() => setActive(index)}
                aria-label={item.name}
              >
                <SkillIcon skill={item} />
              </button>
            ))}

            <div className="orbit-center" key={skill.name}>
              <SkillIcon skill={skill} />
              <span>{skill.name}</span>
            </div>
          </div>
        </div>

        <div className="skill-groups">
          {skillGroups.map(([group, names]) => (
            <div key={group} className="skill-group-card card">
              <h3>{group}</h3>
              <ul>
                {names.map((name) => (
                  <li key={name}>{name}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillIcon({ skill }) {
  const [failed, setFailed] = useState(false);

  if (!skill.icon || failed) {
    return <span className="skill-fallback">{skill.name.slice(0, 2)}</span>;
  }
  return <img src={skill.icon} alt="" onError={() => setFailed(true)} />;
}
