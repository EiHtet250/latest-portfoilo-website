import { contact } from '../data/portfolio.js';
import ContactForm from './ContactForm.jsx';
import CopyButton from './CopyButton.jsx';
import FallingPetals from './FallingPetals.jsx';
import Icon from './Icon.jsx';
import Rose from './Rose.jsx';
import './Contact.css';

export default function Contact() {
  return (
    <section className="section section-alt contact" id="contact">
      <div className="container">
        <div className="contact-stage">
          <div className="contact-rose">
            {contact.roseImage ? <img src={contact.roseImage} alt="Pink rose illustration" /> : <Rose />}
          </div>

          <div className="contact-paper">
            <header className="section-head-center">
              <p className="contact-eyebrow">{contact.eyebrow}</p>
              <h2 className="section-title contact-title">{contact.heading}</h2>
              <p className="contact-text">{contact.text}</p>
            </header>
            <ContactForm />
          </div>

          <FallingPetals />
        </div>

        <ul className="contact-links">
          {contact.links.map((link) => (
            <li key={link.label} className="contact-link card">
              <div className="contact-link-top">
                <span className="contact-icon">
                  <Icon name={link.icon} size={20} />
                </span>
                {link.copy && <CopyButton text={link.value} label={link.label} />}
              </div>
              <span className="contact-label">{link.label}</span>
              <a
                className="contact-value"
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
              >
                {link.value}
              </a>
            </li>
          ))}
        </ul>

        <div className="contact-cta">
          <a className="btn btn-primary" href={`mailto:${contact.email}`}>
            <Icon name="mail" size={18} /> Email me
          </a>
        </div>
      </div>
    </section>
  );
}
