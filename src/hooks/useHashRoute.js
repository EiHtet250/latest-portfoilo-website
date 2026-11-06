import { useEffect, useState } from 'react';

// Tiny hash router: '#/projects/minth' opens a project page, anything else is the home page.
// Hash URLs work on GitHub Pages without any server setup.
export default function useHashRoute() {
  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    const onChange = () => setHash(window.location.hash);
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);

  const projectId = hash.match(/^#\/projects\/([\w-]+)/)?.[1] ?? null;
  return { hash, projectId };
}

export const projectHref = (id) => `#/projects/${id}`;
