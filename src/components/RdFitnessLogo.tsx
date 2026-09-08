interface RdFitnessLogoProps {
  className?: string;
  size?: number | string;
  showGlow?: boolean;
}

export default function RdFitnessLogo({
  className = 'w-12 h-12',
  showGlow = false,
}: RdFitnessLogoProps) {
  return (
    <div className={`relative inline-flex items-center justify-center shrink-0 ${className}`}>
      {showGlow && (
        <div className="absolute inset-0 rounded-full bg-rose-500/20 blur-md pointer-events-none scale-110" />
      )}
      <svg
        viewBox="0 0 500 500"
        className="w-full h-full select-none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="RD FITNESS Official Logo"
      >
        <defs>
          {/* Top text curved path for "FITNESS" */}
          <path id="top-curve-path" d="M 80,250 A 170,170 0 0,1 420,250" fill="none" />
          
          {/* Bottom text curved path for "RD FITNESS" */}
          {/* Sweeps counter-clockwise from left to right so text glyphs stand upright towards center */}
          <path id="bottom-curve-path" d="M 64,250 A 206,206 0 0,0 436,250" fill="none" />
        </defs>

        {/* Outer Base Circle (Black) */}
        <circle cx="250" cy="250" r="248" fill="#000000" />

        {/* Outer Bold White Ring Border */}
        <circle cx="250" cy="250" r="236" fill="#000000" stroke="#ffffff" strokeWidth="16" />

        {/* Inner White Disc with crisp black border */}
        <circle cx="250" cy="250" r="148" fill="#ffffff" stroke="#000000" strokeWidth="7" />

        {/* Curved Top Text: FITNESS */}
        <text
          fill="#ffffff"
          fontFamily="'Impact', 'Arial Black', 'Trebuchet MS', sans-serif"
          fontSize="48"
          fontWeight="900"
          letterSpacing="4.5"
        >
          <textPath href="#top-curve-path" startOffset="50%" textAnchor="middle">
            FITNESS
          </textPath>
        </text>

        {/* Curved Bottom Text: RD FITNESS */}
        <text
          fill="#ffffff"
          fontFamily="'Impact', 'Arial Black', 'Trebuchet MS', sans-serif"
          fontSize="36"
          fontWeight="900"
          letterSpacing="3"
        >
          <textPath href="#bottom-curve-path" startOffset="50%" textAnchor="middle">
            RD FITNESS
          </textPath>
        </text>

        {/* Left 3 Stars */}
        <g fill="#ffffff">
          {/* Top-left star */}
          <path
            transform="translate(85, 172) rotate(-26) scale(1.18)"
            d="M 0,-14 L 4.2,-4.3 L 14.5,-4.3 L 6.2,2.1 L 9.4,12.2 L 0,6.2 L -9.4,12.2 L -6.2,2.1 L -14.5,-4.3 L -4.2,-4.3 Z"
          />
          {/* Mid-left star */}
          <path
            transform="translate(64, 250) scale(1.35)"
            d="M 0,-14 L 4.2,-4.3 L 14.5,-4.3 L 6.2,2.1 L 9.4,12.2 L 0,6.2 L -9.4,12.2 L -6.2,2.1 L -14.5,-4.3 L -4.2,-4.3 Z"
          />
          {/* Bottom-left star */}
          <path
            transform="translate(85, 328) rotate(26) scale(1.18)"
            d="M 0,-14 L 4.2,-4.3 L 14.5,-4.3 L 6.2,2.1 L 9.4,12.2 L 0,6.2 L -9.4,12.2 L -6.2,2.1 L -14.5,-4.3 L -4.2,-4.3 Z"
          />

          {/* Top-right star */}
          <path
            transform="translate(415, 172) rotate(26) scale(1.18)"
            d="M 0,-14 L 4.2,-4.3 L 14.5,-4.3 L 6.2,2.1 L 9.4,12.2 L 0,6.2 L -9.4,12.2 L -6.2,2.1 L -14.5,-4.3 L -4.2,-4.3 Z"
          />
          {/* Mid-right star */}
          <path
            transform="translate(436, 250) scale(1.35)"
            d="M 0,-14 L 4.2,-4.3 L 14.5,-4.3 L 6.2,2.1 L 9.4,12.2 L 0,6.2 L -9.4,12.2 L -6.2,2.1 L -14.5,-4.3 L -4.2,-4.3 Z"
          />
          {/* Bottom-right star */}
          <path
            transform="translate(415, 328) rotate(-26) scale(1.18)"
            d="M 0,-14 L 4.2,-4.3 L 14.5,-4.3 L 6.2,2.1 L 9.4,12.2 L 0,6.2 L -9.4,12.2 L -6.2,2.1 L -14.5,-4.3 L -4.2,-4.3 Z"
          />
        </g>

        {/* Central Inner Area: Barbell & RD */}
        <g id="inner-emblem">
          {/* Barbell Assembly */}
          <g id="barbell-graphic" fill="#000000">
            {/* Center Bar */}
            <rect x="180" y="161" width="140" height="13" rx="3.5" fill="#000000" />
            
            {/* Left Plates & Collar */}
            <rect x="187" y="148" width="7" height="39" rx="2" fill="#000000" />
            {/* Large Plate Left */}
            <path
              d="M 160,120 Q 163,117 169,117 L 178,117 Q 184,117 186,120 L 186,215 Q 184,218 178,218 L 169,218 Q 163,218 160,215 Z"
              fill="#000000"
            />
            {/* Plate Highlights Left */}
            <line x1="166" y1="123" x2="166" y2="212" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" />
            <line x1="180" y1="123" x2="180" y2="212" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
            
            {/* Smaller Outer Plate Left */}
            <path
              d="M 142,132 Q 144,130 148,130 L 153,130 Q 157,130 159,132 L 159,203 Q 157,205 153,205 L 148,205 Q 144,205 142,203 Z"
              fill="#000000"
            />
            <line x1="147" y1="135" x2="147" y2="200" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" />
            {/* Bar Tip Left */}
            <rect x="133" y="163" width="9" height="9" rx="2" fill="#000000" />

            {/* Right Plates & Collar */}
            <rect x="306" y="148" width="7" height="39" rx="2" fill="#000000" />
            {/* Large Plate Right */}
            <path
              d="M 314,120 Q 316,117 322,117 L 331,117 Q 337,117 340,120 L 340,215 Q 337,218 331,218 L 322,218 Q 316,218 314,215 Z"
              fill="#000000"
            />
            {/* Plate Highlights Right */}
            <line x1="320" y1="123" x2="320" y2="212" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="334" y1="123" x2="334" y2="212" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" />
            
            {/* Smaller Outer Plate Right */}
            <path
              d="M 341,132 Q 343,130 347,130 L 352,130 Q 356,130 358,132 L 358,203 Q 356,205 352,205 L 347,205 Q 343,205 341,203 Z"
              fill="#000000"
            />
            <line x1="353" y1="135" x2="353" y2="200" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" />
            {/* Bar Tip Right */}
            <rect x="358" y="163" width="9" height="9" rx="2" fill="#000000" />
          </g>

          {/* RD Giant Letters */}
          <text
            x="250"
            y="350"
            textAnchor="middle"
            fontFamily="'Impact', 'Arial Black', sans-serif"
            fontSize="148"
            fontWeight="900"
            fill="#000000"
            letterSpacing="-2"
            transform="scale(1, 1.06) translate(0, -10)"
          >
            RD
          </text>
        </g>
      </svg>
    </div>
  );
}
