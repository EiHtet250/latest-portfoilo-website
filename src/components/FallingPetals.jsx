// A few petals drift from the rose and settle on the paper note, then fade and repeat.
// Positions are % of the contact stage: s = start (at the rose), e = end (on the note).
// The m* values are used on tablets/phones, where the rose sits above the note.
const petals = [
  { sx: 22, sy: 18, ex: 52, ey: 30, msx: 46, msy: 6, mex: 18, mey: 30, size: 28, rot: 140, delay: 0, dur: 9 },
  { sx: 26, sy: 22, ex: 70, ey: 62, msx: 52, msy: 8, mex: 76, mey: 52, size: 22, rot: -200, delay: 3, dur: 10 },
  { sx: 18, sy: 26, ex: 46, ey: 84, msx: 44, msy: 10, mex: 30, mey: 78, size: 25, rot: 260, delay: 6, dur: 11 },
  { sx: 28, sy: 16, ex: 88, ey: 40, msx: 56, msy: 5, mex: 86, mey: 20, size: 20, rot: -120, delay: 8, dur: 9.5 },
];

export default function FallingPetals() {
  return (
    <div className="petals" aria-hidden="true">
      {petals.map((p, i) => (
        <span
          key={i}
          className="petal"
          style={{
            '--sx': `${p.sx}%`,
            '--sy': `${p.sy}%`,
            '--ex': `${p.ex}%`,
            '--ey': `${p.ey}%`,
            '--msx': `${p.msx}%`,
            '--msy': `${p.msy}%`,
            '--mex': `${p.mex}%`,
            '--mey': `${p.mey}%`,
            '--rot': `${p.rot}deg`,
            '--size': `${p.size}px`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.dur}s`,
          }}
        >
          <svg viewBox="0 0 20 26" className="petal-shape" style={{ animationDelay: `${p.delay}s` }}>
            <path d="M10 1C18 7 20 17 10 25 0 17 2 7 10 1Z" />
          </svg>
        </span>
      ))}
    </div>
  );
}
