/**
 * ArchMotif
 * A simple line-drawing of a chapel window arch, used as a recurring
 * visual signature (hero, section dividers) instead of generic icons.
 * `variant` lets us tint it for light or dark backgrounds.
 */
function ArchMotif({ variant = 'gold', className = '' }) {
  const stroke = variant === 'gold' ? '#B08D3E' : '#FAF6EC';

  return (
    <svg
      className={className}
      viewBox="0 0 200 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M10 250 V110 C10 50 55 10 100 10 C145 10 190 50 190 110 V250"
        stroke={stroke}
        strokeWidth="2.5"
      />
      <path
        d="M35 250 V115 C35 68 65 35 100 35 C135 35 165 68 165 115 V250"
        stroke={stroke}
        strokeWidth="1.5"
        opacity="0.6"
      />
      <line x1="100" y1="35" x2="100" y2="250" stroke={stroke} strokeWidth="1" opacity="0.4" />
    </svg>
  );
}

export default ArchMotif;
