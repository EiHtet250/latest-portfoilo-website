import { useEffect, useState } from 'react';
import Icon from './Icon.jsx';

// Copies `text` to the clipboard and shows "Copied" for two seconds.
export default function CopyButton({ text, label }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return undefined;
    const timer = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timer);
  }, [copied]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // Older browsers / non-HTTPS pages: fall back to a hidden textarea.
      const field = document.createElement('textarea');
      field.value = text;
      document.body.append(field);
      field.select();
      document.execCommand('copy');
      field.remove();
    }
    setCopied(true);
  };

  return (
    <button className={`copy-btn ${copied ? 'is-copied' : ''}`} onClick={copy} aria-label={`Copy ${label}`}>
      <Icon name={copied ? 'check' : 'copy'} size={16} />
      <span aria-live="polite">{copied ? 'Copied' : 'Copy'}</span>
    </button>
  );
}
