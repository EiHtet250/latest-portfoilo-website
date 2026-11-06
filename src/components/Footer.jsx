import { profile } from '../data/portfolio.js';

export default function Footer() {
  return (
    <footer
      style={{
        padding: '28px 16px',
        textAlign: 'center',
        fontSize: '0.85rem',
        color: 'var(--muted)',
        background: 'var(--bg)',
        borderTop: '1px solid var(--card-border)',
      }}
    >
      © {new Date().getFullYear()} {profile.name} · Designed in Figma, built with React
    </footer>
  );
}
