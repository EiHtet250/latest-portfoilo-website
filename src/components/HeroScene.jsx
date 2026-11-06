import { lazy, Suspense } from 'react';
import { profile } from '../data/portfolio.js';

// Loaded on demand so the 3D library doesn't slow down the first paint.
const CodeSymbol3D = lazy(() => import('./CodeSymbol3D.jsx'));

export default function HeroScene() {
  return (
    <div className="hero-scene">
      <Suspense fallback={<Orb />}>
        <CodeSymbol3D />
      </Suspense>
    </div>
  );
}

// Glowing placeholder shown while the 3D symbol loads.
function Orb() {
  return (
    <div className="scene-orb" aria-hidden="true">
      <span>{profile.initials}</span>
    </div>
  );
}
