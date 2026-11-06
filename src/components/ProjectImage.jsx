import { useState } from 'react';

// Shows a placeholder with the project name if the screenshot is missing.
export default function ProjectImage({ src, title, className = '' }) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div className={`project-placeholder ${className}`}>
        <span>{title}</span>
        <small>Screenshot coming soon</small>
      </div>
    );
  }
  return <img className={className} src={src} alt={`${title} screenshot`} loading="lazy" onError={() => setFailed(true)} />;
}
