/**
 * Flat-style SVG room illustrations for the MascotShowcase.
 * Each scene uses the brand color palette and a consistent viewBox.
 */

/* ─── Bathroom ───────────────────────────────────────────── */
export function BathroomScene() {
  return (
    <svg viewBox="0 0 480 360" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="bath-wall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F0F9FF" />
          <stop offset="100%" stopColor="#F8FAFC" />
        </linearGradient>
        <filter id="soft-shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#000000" floodOpacity="0.08" />
        </filter>
      </defs>

      {/* Wall + tile grid */}
      <rect width="480" height="250" fill="url(#bath-wall)" />
      <g opacity="0.1" stroke="#93C5FD" strokeWidth="0.5">
        {[0, 50, 100, 150, 200, 250].map(y => <line key={y} x1="0" y1={y} x2="480" y2={y} />)}
        {[0, 60, 120, 180, 240, 300, 360, 420, 480].map(x => <line key={x} x1={x} y1="0" x2={x} y2="250" />)}
      </g>

      {/* Floor */}
      <rect y="250" width="480" height="110" fill="#E0E7FF" />
      <rect y="250" width="480" height="2" fill="#C7D2FE" />

      {/* Bathtub */}
      <g style={{ filter: 'url(#soft-shadow)' }}>
        <rect x="24" y="195" width="190" height="60" rx="18" fill="white" />
        <rect x="34" y="203" width="170" height="44" rx="14" fill="#F8FAFC" />
      </g>

      {/* Faucet */}
      <rect x="118" y="174" width="4" height="24" rx="2" fill="#94A3B8" />
      <rect x="108" y="170" width="24" height="6" rx="3" fill="#94A3B8" />
      <circle cx="115" cy="168" r="3" fill="#3B82F6" />
      <circle cx="127" cy="168" r="3" fill="#EF4444" />

      {/* Mirror */}
      <g style={{ filter: 'url(#soft-shadow)' }}>
        <ellipse cx="370" cy="115" rx="42" ry="56" fill="white" />
        <ellipse cx="370" cy="115" rx="35" ry="49" fill="#F0F9FF" />
      </g>

      {/* Vanity */}
      <g style={{ filter: 'url(#soft-shadow)' }}>
        <rect x="328" y="200" width="84" height="54" rx="8" fill="white" />
        <circle cx="370" cy="218" r="6" fill="#3B82F6" opacity="0.3" />
      </g>

      {/* Towel rack */}
      <rect x="250" y="155" width="42" height="3" rx="1.5" fill="#94A3B8" />
      <path d="M256 158 v18 q6 8 12 0 v-6 q6 8 12 0 v-6 q6 8 12 0 v-6" fill="none" stroke="#3B82F6" strokeWidth="1.5" opacity="0.3" />

      {/* Plant accent */}
      <rect x="442" y="238" width="14" height="16" rx="3" fill="#FBBF24" />
      <circle cx="449" cy="230" r="11" fill="#A7F3D0" />

      {/* Floating Shelf */}
      <rect x="20" y="80" width="120" height="5" rx="2.5" fill="#A5B4FC" style={{ filter: 'url(#soft-shadow)' }} />
      <rect x="30" y="68" width="16" height="12" rx="2" fill="#F4B400" opacity="0.8" />
      <rect x="52" y="62" width="20" height="18" rx="2" fill="#F87171" opacity="0.8" />
    </svg>
  )
}

/* ─── Kitchen ────────────────────────────────────────────── */
export function KitchenScene() {
  return (
    <svg viewBox="0 0 480 360" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="kit-wall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FEF9EE" />
          <stop offset="100%" stopColor="#FFF7ED" />
        </linearGradient>
      </defs>

      {/* Wall */}
      <rect width="480" height="250" fill="url(#kit-wall)" />

      {/* Floor (wood feel) */}
      <rect y="250" width="480" height="110" fill="#F5EDE3" />
      <rect y="250" width="480" height="3" fill="#D4C5B0" />
      <g opacity="0.12" stroke="#C4A882" strokeWidth="0.5">
        {[270, 290, 310, 330, 350].map(y => <line key={y} x1="0" y1={y} x2="480" y2={y} />)}
      </g>

      {/* Upper cabinets */}
      {[30, 130, 340].map(x => (
        <g key={x}>
          <rect x={x} y="30" width="90" height="70" rx="6" fill="white" stroke="#E2E8F0" strokeWidth="1.5" />
          <circle cx={x + 45} cy="65" r="3" fill="#F4B400" />
        </g>
      ))}

      {/* Countertop */}
      <rect x="20" y="160" width="440" height="10" rx="2" fill="#E2E8F0" />

      {/* Lower cabinets */}
      <rect x="20" y="170" width="440" height="82" rx="6" fill="white" stroke="#E2E8F0" strokeWidth="1.5" />
      {[100, 200, 300, 400].map(x => <line key={x} x1={x} y1="170" x2={x} y2="252" stroke="#E2E8F0" strokeWidth="1" />)}
      {[100, 200, 300, 400].map(x => <circle key={`k${x}`} cx={x} cy="210" r="3" fill="#F4B400" opacity="0.6" />)}

      {/* Stove / Oven */}
      <rect x="170" y="115" width="140" height="46" rx="4" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1.5" />
      {[200, 240, 280].map(cx => <circle key={cx} cx={cx} cy="138" r="10" fill="none" stroke="#1E88C8" strokeWidth="1.5" opacity="0.4" />)}

      {/* Window */}
      <rect x="350" y="40" width="60" height="50" rx="4" fill="#DBEAFE" stroke="#CBD5E1" strokeWidth="1.5" />
      <line x1="380" y1="40" x2="380" y2="90" stroke="#CBD5E1" strokeWidth="1" />
      <line x1="350" y1="65" x2="410" y2="65" stroke="#CBD5E1" strokeWidth="1" />

      {/* Fruit bowl accent */}
      <ellipse cx="80" cy="155" rx="18" ry="8" fill="#F4B400" opacity="0.3" />
      <circle cx="74" cy="148" r="7" fill="#EF4444" opacity="0.5" />
      <circle cx="86" cy="146" r="6" fill="#F4B400" opacity="0.6" />
    </svg>
  )
}

/* ─── Living Room ────────────────────────────────────────── */
export function LivingRoomScene() {
  return (
    <svg viewBox="0 0 480 360" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="lr-wall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FAFAF9" />
          <stop offset="100%" stopColor="#F5F5F4" />
        </linearGradient>
      </defs>

      {/* Wall */}
      <rect width="480" height="250" fill="url(#lr-wall)" />

      {/* Floor (warm wood) */}
      <rect y="250" width="480" height="110" fill="#F0E7DB" />
      <rect y="250" width="480" height="3" fill="#D4C5B0" />

      {/* Rug */}
      <ellipse cx="240" cy="290" rx="140" ry="30" fill="#1E88C8" opacity="0.08" />

      {/* Sofa */}
      <rect x="60" y="180" width="200" height="70" rx="14" fill="#1E88C8" />
      <rect x="60" y="180" width="200" height="16" rx="8" fill="#156FA1" />
      {/* Armrests */}
      <rect x="50" y="185" width="18" height="60" rx="9" fill="#1E88C8" />
      <rect x="252" y="185" width="18" height="60" rx="9" fill="#1E88C8" />
      {/* Cushions */}
      <circle cx="120" cy="220" r="16" fill="#DBEAFE" opacity="0.5" />
      <circle cx="200" cy="220" r="16" fill="#FEF3C7" opacity="0.5" />

      {/* Coffee table */}
      <rect x="160" y="268" width="90" height="10" rx="4" fill="#D4A574" />
      <rect x="175" y="278" width="4" height="16" rx="2" fill="#B8956A" />
      <rect x="237" y="278" width="4" height="16" rx="2" fill="#B8956A" />

      {/* Floor lamp */}
      <rect x="340" y="120" width="3" height="130" rx="1.5" fill="#94A3B8" />
      <path d="M320 120 Q341 95 362 120" fill="#F4B400" opacity="0.7" />
      <circle cx="341" cy="112" r="4" fill="#F4B400" />

      {/* Window with curtains */}
      <rect x="360" y="40" width="80" height="100" rx="4" fill="#DBEAFE" stroke="#CBD5E1" strokeWidth="1.5" />
      <line x1="400" y1="40" x2="400" y2="140" stroke="#CBD5E1" strokeWidth="1" />
      <line x1="360" y1="90" x2="440" y2="90" stroke="#CBD5E1" strokeWidth="1" />
      {/* Curtain left */}
      <path d="M360 38 Q348 70 360 140" fill="none" stroke="#E2E8F0" strokeWidth="8" opacity="0.5" />
      {/* Curtain right */}
      <path d="M440 38 Q452 70 440 140" fill="none" stroke="#E2E8F0" strokeWidth="8" opacity="0.5" />

      {/* Wall art */}
      <rect x="110" y="60" width="50" height="60" rx="6" fill="white" stroke="#E2E8F0" strokeWidth="1.5" />
      <circle cx="135" cy="85" r="12" fill="#1E88C8" opacity="0.15" />
      <rect x="180" y="70" width="35" height="40" rx="4" fill="white" stroke="#E2E8F0" strokeWidth="1.5" />
      <rect x="188" y="78" width="19" height="24" rx="2" fill="#F4B400" opacity="0.15" />
    </svg>
  )
}

/* ─── Patio / Garden ─────────────────────────────────────── */
export function PatioScene() {
  return (
    <svg viewBox="0 0 480 360" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="patio-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#BFDBFE" />
          <stop offset="100%" stopColor="#DBEAFE" />
        </linearGradient>
        <linearGradient id="patio-grass" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#86EFAC" />
          <stop offset="100%" stopColor="#4ADE80" />
        </linearGradient>
      </defs>

      {/* Sky */}
      <rect width="480" height="200" fill="url(#patio-sky)" />

      {/* Sun */}
      <circle cx="400" cy="60" r="28" fill="#F4B400" opacity="0.7" />
      <circle cx="400" cy="60" r="36" fill="#F4B400" opacity="0.15" />

      {/* Clouds */}
      <g opacity="0.4" fill="white">
        <ellipse cx="100" cy="50" rx="40" ry="14" />
        <ellipse cx="80" cy="44" rx="24" ry="10" />
        <ellipse cx="260" cy="80" rx="30" ry="10" />
      </g>

      {/* Grass */}
      <rect y="200" width="480" height="160" fill="url(#patio-grass)" />

      {/* Wooden deck */}
      <rect y="240" width="480" height="120" fill="#D4A574" />
      <g opacity="0.2" stroke="#B8956A" strokeWidth="0.8">
        {[260, 280, 300, 320, 340, 360].map(y => <line key={y} x1="0" y1={y} x2="480" y2={y} />)}
      </g>

      {/* Fence */}
      <rect y="175" width="480" height="4" rx="2" fill="#C4A882" />
      <rect y="195" width="480" height="4" rx="2" fill="#C4A882" />
      {[40, 80, 120, 160, 200, 240, 280, 320, 360, 400, 440].map(x => (
        <rect key={x} x={x} y="168" width="6" height="38" rx="2" fill="#D4A574" />
      ))}

      {/* Potted plants */}
      <rect x="50" y="220" width="26" height="24" rx="4" fill="#B8956A" />
      <circle cx="63" cy="208" r="18" fill="#22C55E" opacity="0.7" />
      <circle cx="53" cy="212" r="12" fill="#86EFAC" opacity="0.5" />

      <rect x="400" y="222" width="22" height="20" rx="4" fill="#F4B400" opacity="0.7" />
      <circle cx="411" cy="210" r="14" fill="#22C55E" opacity="0.65" />

      {/* Outdoor chair */}
      <rect x="200" y="268" width="70" height="6" rx="3" fill="#94A3B8" />
      <rect x="206" y="274" width="4" height="20" rx="2" fill="#94A3B8" />
      <rect x="260" y="274" width="4" height="20" rx="2" fill="#94A3B8" />
      <rect x="200" y="248" width="4" height="26" rx="2" fill="#94A3B8" />
      <rect x="266" y="248" width="4" height="26" rx="2" fill="#94A3B8" />
      <rect x="198" y="245" width="72" height="4" rx="2" fill="#94A3B8" />

      {/* Grass blades on edge */}
      <g opacity="0.3" fill="#16A34A">
        {[10, 30, 55, 90, 130, 175, 300, 340, 370, 450].map(x => (
          <ellipse key={x} cx={x} cy="240" rx="3" ry="10" />
        ))}
      </g>
    </svg>
  )
}
