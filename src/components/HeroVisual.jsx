export default function HeroVisual() {
  return (
    <svg
      viewBox="0 0 1600 900"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="heroBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0f1b30" />
          <stop offset="55%" stopColor="#182a47" />
          <stop offset="100%" stopColor="#1d3357" />
        </linearGradient>
        <radialGradient id="heroGlow" cx="50%" cy="45%" r="60%">
          <stop offset="0%" stopColor="#6488b7" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#6488b7" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="lineFade" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#96b0d1" stopOpacity="0" />
          <stop offset="100%" stopColor="#96b0d1" stopOpacity="0.55" />
        </linearGradient>
      </defs>

      <rect width="1600" height="900" fill="url(#heroBg)" />
      <rect width="1600" height="900" fill="url(#heroGlow)" />

      {/* code / structure grid — left side */}
      <g stroke="#2f5280" strokeWidth="1" opacity="0.5">
        {Array.from({ length: 9 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 90} y1="0" x2={i * 90} y2="900" />
        ))}
        {Array.from({ length: 12 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 82} x2="820" y2={i * 82} />
        ))}
      </g>

      {/* creative flowing strokes — right side, morphing out of the grid */}
      <g fill="none" strokeLinecap="round">
        <path
          d="M 760 120 C 950 180, 1050 60, 1260 140 S 1500 320, 1420 460"
          stroke="url(#lineFade)"
          strokeWidth="2.5"
          pathLength="1"
          className="hero-draw"
        />
        <path
          d="M 700 340 C 900 380, 1000 260, 1220 360 S 1480 520, 1360 660"
          stroke="#6488b7"
          strokeWidth="2"
          opacity="0.55"
          pathLength="1"
          className="hero-draw hero-draw-delay-1"
        />
        <path
          d="M 660 560 C 860 610, 980 500, 1180 600 S 1460 720, 1300 820"
          stroke="#96b0d1"
          strokeWidth="1.5"
          opacity="0.4"
          pathLength="1"
          className="hero-draw hero-draw-delay-2"
        />
      </g>

      {/* floating nodes */}
      <g fill="#c3d2e5">
        <circle cx="1260" cy="140" r="4" className="hero-pulse" />
        <circle cx="1420" cy="460" r="5" className="hero-pulse hero-pulse-delay-1" />
        <circle cx="1220" cy="360" r="3.5" className="hero-pulse hero-pulse-delay-2" />
        <circle cx="1360" cy="660" r="4.5" className="hero-pulse" />
        <circle cx="1180" cy="600" r="3" className="hero-pulse hero-pulse-delay-1" />
        <circle cx="1300" cy="820" r="4" className="hero-pulse hero-pulse-delay-2" />
      </g>
    </svg>
  );
}
