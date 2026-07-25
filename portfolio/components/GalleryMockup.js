export default function GalleryMockup() {
  return (
    <svg viewBox="0 0 480 300" role="img" aria-label="Illustrative preview of the Gallery App interface">
      {/* frame */}
      <rect x="1" y="1" width="478" height="298" rx="18" fill="#2E2270" stroke="#453579" strokeWidth="1" />

      {/* chrome bar: app icon */}
      <rect x="24" y="20" width="24" height="24" rx="6" fill="#FF3D8A" />
      <rect x="28" y="24" width="7" height="7" rx="1.5" fill="white" fillOpacity="0.85" />
      <rect x="37" y="24" width="7" height="7" rx="1.5" fill="white" fillOpacity="0.85" />
      <rect x="28" y="33" width="7" height="7" rx="1.5" fill="white" fillOpacity="0.85" />
      <rect x="37" y="33" width="7" height="7" rx="1.5" fill="white" fillOpacity="0.85" />

      <text x="58" y="37" fontSize="13" fill="#B9AEDD" style={{ fontFamily: "var(--font-mono)" }}>
        gallery.app
      </text>

      {/* chrome bar: search pill */}
      <rect x="356" y="15" width="100" height="22" rx="11" fill="none" stroke="#453579" strokeWidth="1" />
      <circle cx="372" cy="26" r="5" fill="none" stroke="#8D82B8" strokeWidth="1.5" />
      <line x1="376" y1="30" x2="381" y2="35" stroke="#8D82B8" strokeWidth="1.5" strokeLinecap="round" />
      <text x="390" y="30" fontSize="11" fill="#8D82B8" style={{ fontFamily: "var(--font-mono)" }}>
        search
      </text>

      {/* featured tile */}
      <rect x="24" y="64" width="284" height="96" rx="10" fill="#FF3D8A" />
      <circle cx="284" cy="82" r="9" fill="none" stroke="white" strokeOpacity="0.75" strokeWidth="2" />
      <circle cx="284" cy="82" r="3.5" fill="white" fillOpacity="0.75" />

      {/* cyan tile */}
      <rect x="320" y="64" width="136" height="96" rx="10" fill="#2FE6D2" />
      <text
        x="332"
        y="146"
        fontSize="11"
        fontWeight="600"
        fill="#0F3D38"
        fillOpacity="0.75"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        IMG_014
      </text>

      {/* amber tile with play glyph */}
      <rect x="24" y="172" width="136" height="96" rx="10" fill="#FFB627" />
      <path d="M 76 210 L 76 230 L 92 220 Z" fill="#241A54" fillOpacity="0.55" />

      {/* neutral tile */}
      <rect x="172" y="172" width="136" height="96" rx="10" fill="#453579" />
      <text
        x="184"
        y="254"
        fontSize="12"
        fontWeight="600"
        fill="#B9AEDD"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        +12
      </text>

      {/* deep cyan tile */}
      <rect x="320" y="172" width="136" height="96" rx="10" fill="#1D5A54" />
    </svg>
  );
}
