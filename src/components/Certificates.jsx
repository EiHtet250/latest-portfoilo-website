import { certificates, certificateSlots } from '../data/portfolio.js';
import Icon from './Icon.jsx';
import './Certificates.css';

// Newest first, whatever order they're written in portfolio.js.
const sorted = [...certificates].sort((a, b) => b.date.localeCompare(a.date));

// '2026-11-06' → 'Nov 2026'
function formatDate(isoDate) {
  const [year, month] = isoDate.split('-').map(Number);
  return new Date(year, month - 1).toLocaleDateString('en-GB', { month: 'short', year: 'numeric' });
}

export default function Certificates() {
  // Fill the grid with "coming soon" cards so the rows stay even.
  const emptyCount = Math.max(0, certificateSlots - sorted.length);

  return (
    <section className="section section-alt certificates" id="certificates">
      <div className="container">
        <div className="section-head-center">
          <h2 className="section-title">
            My <span>certificates</span>
          </h2>
          <p className="section-lead">Courses I've finished to keep learning outside of class.</p>
        </div>

        <ul className="cert-grid">
          {sorted.map((cert) => (
            <li key={cert.file}>
              <CertificateCard cert={cert} />
            </li>
          ))}
          {Array.from({ length: emptyCount }, (_, index) => (
            <li key={`empty-${index}`}>
              <div className="cert-card cert-card-empty" aria-hidden="true">
                <div className="cert-preview">
                  <span className="cert-empty-icon">+</span>
                </div>
                <div className="cert-body">
                  <p className="cert-empty-text">Coming soon</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function CertificateCard({ cert }) {
  return (
    <a className="cert-card card" href={cert.file} target="_blank" rel="noreferrer">
      <div className="cert-preview">
        {cert.image ? (
          <img src={cert.image} alt={`${cert.title} certificate`} loading="lazy" />
        ) : (
          <div className="cert-paper">
            <span className="cert-paper-label">Certificate</span>
            <span className="cert-paper-title">{cert.title}</span>
            <span className="cert-paper-seal" />
          </div>
        )}
      </div>
      <div className="cert-body">
        <h3 className="cert-title">{cert.title}</h3>
        <p className="cert-meta">
          {cert.issuer} · <time dateTime={cert.date}>{formatDate(cert.date)}</time>
        </p>
        <span className="cert-link">
          View certificate <Icon name="external" size={14} />
        </span>
      </div>
    </a>
  );
}
