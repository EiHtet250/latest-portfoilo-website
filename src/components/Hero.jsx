import { profile } from '../data/portfolio.js';
import Icon from './Icon.jsx';
import HeroScene from './HeroScene.jsx';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-sky" aria-hidden="true" />
      <Mountains />

      <div className="hero-grid container">
        <div className="hero-left">
          <p className="hero-badge">
            <span className="pulse" /> {profile.availability}
          </p>
          <h1 className="hero-title">
            Web &amp; <span>Mobile App</span> Developer
          </h1>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              See my work <Icon name="arrow" size={18} />
            </a>
            <a href="#about" className="btn btn-outline">
              About me
            </a>
          </div>
        </div>

        <div className="hero-portrait">
          <HeroScene />
        </div>

        <div className="hero-right">
          <p className="hero-greeting">{profile.greeting}</p>
          <p className="hero-headline">{profile.headline}</p>
          {profile.intro.map((paragraph) => (
            <p key={paragraph} className="hero-intro">
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      <dl className="hero-stats container">
        {profile.stats.map((stat) => (
          <div key={stat.label}>
            <dt>{stat.value}</dt>
            <dd>{stat.label}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

// Layered ridgelines; the front one matches the next section's background.
function Mountains() {
  return (
    <svg className="hero-mountains" viewBox="0 0 1440 320" preserveAspectRatio="none" aria-hidden="true">
      <path fill="#b6a0da" fillOpacity="0.14" d="M0 200 160 150l140 40 170-90 160 70 150-60 180 80 170-50 140 40 170-60v200H0Z" />
      <path fill="#e3a0c4" fillOpacity="0.12" d="M0 240 180 190l150 50 200-80 170 90 190-60 170 50 200-40 180 60v120H0Z" />
      <path fill="#2d2733" d="M0 270 220 200l120 50 130-20 160 60 220-50 200 40 190-30 200 50v40H0Z" />
      <rect y="300" width="1440" height="20" fill="#2d2733" />
    </svg>
  );
}
