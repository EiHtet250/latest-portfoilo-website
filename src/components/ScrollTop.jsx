import { useEffect, useState } from 'react';
import Icon from './Icon.jsx';

const style = {
  position: 'fixed',
  right: 24,
  bottom: 24,
  zIndex: 40,
  display: 'grid',
  placeItems: 'center',
  width: 48,
  height: 48,
  border: '1px solid var(--card-border)',
  borderRadius: '50%',
  background: 'var(--card)',
  color: 'var(--pink)',
  boxShadow: 'var(--shadow)',
};

export default function ScrollTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button style={style} onClick={() => window.scrollTo({ top: 0 })} aria-label="Back to top">
      <Icon name="up" size={22} />
    </button>
  );
}
