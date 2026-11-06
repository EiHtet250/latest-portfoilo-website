// Hand-drawn style rose for the Contact section (used when no rose image is set).
export default function Rose({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 300 470" role="img" aria-label="Pink rose illustration">
      <defs>
        <radialGradient id="petal" cx="50%" cy="35%" r="70%">
          <stop offset="0" stopColor="#fbe0ea" />
          <stop offset="1" stopColor="#e9a2bf" />
        </radialGradient>
        <linearGradient id="leaf" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#b9c8a2" />
          <stop offset="1" stopColor="#7f9a7a" />
        </linearGradient>
      </defs>

      {/* Stem, bud branch and leaves */}
      <g fill="none" stroke="#9aa77a" strokeLinecap="round">
        <path d="M150 200 C142 265 172 320 140 460" strokeWidth="6" />
        <path d="M152 245 C182 230 206 214 226 188" strokeWidth="3.5" />
      </g>
      <path d="M147 285 C108 262 66 272 48 312 C92 320 130 308 147 285Z" fill="url(#leaf)" />
      <path d="M147 285 C112 290 82 300 52 311" fill="none" stroke="#6d8566" strokeWidth="1.5" />
      <path d="M156 350 C196 322 238 330 256 362 C214 378 176 370 156 350Z" fill="url(#leaf)" />
      <path d="M156 350 C190 352 222 356 252 362" fill="none" stroke="#6d8566" strokeWidth="1.5" />
      <path d="M148 410 C118 392 86 400 74 428 C106 434 134 428 148 410Z" fill="url(#leaf)" opacity="0.9" />
      <g fill="#c7768f">
        <path d="M146 330 l-10 -4 l9 -5Z" />
        <path d="M158 395 l10 -3 l-8 -6Z" />
      </g>

      {/* Bud */}
      <ellipse cx="234" cy="174" rx="15" ry="22" transform="rotate(32 234 174)" fill="url(#petal)" />
      <path d="M220 190 C226 176 240 170 250 186 C242 184 236 190 232 198Z" fill="#9aa77a" />

      {/* Bloom: back petals, cup, front petals, centre swirl */}
      <ellipse cx="92" cy="128" rx="64" ry="48" transform="rotate(-24 92 128)" fill="#f6c6d8" />
      <ellipse cx="208" cy="128" rx="64" ry="48" transform="rotate(24 208 128)" fill="#f6c6d8" />
      <ellipse cx="150" cy="80" rx="74" ry="48" fill="#f9d3e1" />
      <path d="M72 138 Q150 248 228 138 Q206 196 150 204 Q94 196 72 138Z" fill="#eaa0bd" />
      <path d="M66 128 Q84 206 150 206 Q104 176 112 118Z" fill="url(#petal)" />
      <path d="M234 128 Q216 206 150 206 Q196 176 188 118Z" fill="url(#petal)" />
      <circle cx="150" cy="122" r="44" fill="url(#petal)" />
      <path
        d="M150 120 m-4 0 a4 4 0 1 1 8 0 a11 11 0 1 1 -20 3 a19 19 0 1 1 34 -7 a28 28 0 1 1 -48 16"
        fill="none"
        stroke="#d27a9d"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <g fill="none" stroke="#e08eae" strokeWidth="1.5" opacity="0.7">
        <path d="M86 150 Q110 190 150 196" />
        <path d="M214 150 Q190 190 150 196" />
        <path d="M100 74 Q150 52 200 74" />
      </g>
    </svg>
  );
}
