import { useEffect, useState } from 'react';
import { navLinks, profile } from '../data/portfolio.js';
import Icon from './Icon.jsx';
import './Navbar.css';

// Highlights the link of whichever section is currently in the middle of the screen.
function useActiveSection(ids) {
  const [active, setActive] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id));
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    ids.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

const sectionIds = navLinks.map((link) => link.id);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`navbar ${scrolled ? 'is-scrolled' : ''}`}>
      <nav className="navbar-inner container">
        <a href="#top" className="brand" onClick={close}>
          <img className="brand-logo" src={`${import.meta.env.BASE_URL}logo.svg`} alt="" width="44" height="36" />
          <span className="brand-name">{profile.name}</span>
        </a>

        <button
          className="menu-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <Icon name={open ? 'close' : 'menu'} />
        </button>

        <ul className={`nav-links ${open ? 'is-open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={active === link.id ? 'is-active' : ''}
                aria-current={active === link.id ? 'true' : undefined}
                onClick={close}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a className="nav-cv" href={profile.cv} download>
              Download CV
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
