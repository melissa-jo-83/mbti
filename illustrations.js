"use strict";

const objectDrawings = {
  냉장고: `
    <rect x="35" y="17" width="58" height="88" rx="9" fill="#e5ddfa"/>
    <path d="M35 47h58M44 30v8m0 20v13m0 34v4m40-4v4"/>
    <rect x="70" y="58" width="12" height="14" rx="2" fill="#f6c6ad"/>
    <path d="M73 63h6m-6 4h4"/>`,
  스탠드: `
    <path d="M63 51v45m-15 0h30l8 8H40z" fill="#d9c0a1"/>
    <path d="M47 23h33l14 31H33z" fill="#f6c6ad"/>
    <path d="M55 54a9 9 0 0 0 18 0M35 65l-7 7m65-7 7 7" fill="#fbe3ae"/>`,
  머그컵: `
    <path d="M91 50h8a13 13 0 0 1 0 26h-9" fill="none" stroke-width="5"/>
    <path d="M31 45h64v31a19 19 0 0 1-19 19H50a19 19 0 0 1-19-19z" fill="#f6c6ad"/>
    <ellipse cx="63" cy="45" rx="32" ry="8" fill="#fff9ee"/>
    <path d="M52 29c-5-6 5-8 1-14m19 15c-5-6 5-8 1-14"/>`,
  이불: `
    <rect x="25" y="30" width="79" height="69" rx="12" fill="#e5ddfa"/>
    <path d="M26 47h77v-6a11 11 0 0 0-11-11H36a10 10 0 0 0-10 10z" fill="#fff9ee"/>
    <path d="M44 55v35m20-35v35m20-35v35" stroke-dasharray="3 4"/>
    <path d="M33 84h63" opacity=".5"/>`,
  멀티탭: `
    <path d="M64 75v9q0 12 14 12h17m0-5h11v10H95zm11 2h7m-7 6h7"/>
    <rect x="16" y="42" width="96" height="35" rx="10" fill="#fff9ee"/>
    <rect x="23" y="52" width="11" height="15" rx="3" fill="#f6c6ad"/>
    <circle cx="49" cy="59.5" r="9" fill="#e5ddfa"/>
    <circle cx="72" cy="59.5" r="9" fill="#e5ddfa"/>
    <circle cx="95" cy="59.5" r="9" fill="#e5ddfa"/>
    <path d="M46 59h.1m6 0h.1m17 0h.1m6 0h.1m17 0h.1m6 0h.1" stroke-width="3"/>`,
  거울: `
    <path d="M64 87v13m-19 4h38" stroke-width="4"/>
    <ellipse cx="64" cy="55" rx="34" ry="39" fill="#d9c0a1"/>
    <ellipse cx="64" cy="55" rx="27" ry="32" fill="#dbeae8"/>
    <path d="M48 52l20-20M50 66l26-26" stroke="#fff9ee" stroke-width="4"/>`,
  탁상시계: `
    <path d="M44 88l-8 12m48-12 8 12"/>
    <path d="M35 42c-16-13 4-28 15-16zm58 0c16-13-4-28-15-16z" fill="#f6c6ad"/>
    <circle cx="64" cy="63" r="35" fill="#f6c6ad"/>
    <circle cx="64" cy="63" r="27" fill="#fff9ee"/>
    <path d="M64 46v17l11 7M64 39v2m0 44v2m22-24h2m-48 0h2"/>`,
  빨래바구니: `
    <path d="M30 55l5-24 16-7 12 13-4 18z" fill="#e5ddfa"/>
    <path d="M61 54l10-26 20 4 12 22" fill="#f6c6ad"/>
    <path d="M23 55h82l-11 45H34z" fill="#d9c0a1"/>
    <rect x="20" y="52" width="88" height="12" rx="6" fill="#fff9ee"/>
    <path d="M41 75h12m5 0h12m5 0h12m-42 11h12m4 0h12m4 0h7"/>`,
  스피커: `
    <rect x="35" y="19" width="58" height="89" rx="10" fill="#e5ddfa"/>
    <circle cx="64" cy="43" r="10" fill="#fff9ee"/>
    <circle cx="64" cy="79" r="18" fill="#fff9ee"/>
    <circle cx="64" cy="79" r="7" fill="#d9c0a1"/>
    <path d="M101 50q11 13 0 26m7-33q16 20 0 40"/>`,
  쿠션: `
    <path d="M30 27q14 8 34 5t34-5q-6 14-4 34t4 35q-13-7-34-5t-34 5q6-14 4-35t-4-34z" fill="#f6c6ad"/>
    <path d="M43 40q21 5 42 0-5 22 0 43-21-5-42 0 5-21 0-43z" stroke-dasharray="3 4"/>
    <path d="M59 61q5 7 10 0m-16-4h.1m22 0h.1" stroke-width="3"/>`,
  충전기: `
    <path d="M49 39V24h7v15m13 0V24h7v15" fill="#d9c0a1"/>
    <rect x="39" y="39" width="47" height="41" rx="9" fill="#fff9ee"/>
    <path d="M63 80v10q0 12 14 12h15m0-5h14v10H92z"/>
    <path d="M65 47l-9 14h8l-3 12 11-16h-8z" fill="#f6c6ad"/>`,
  리모컨: `
    <g transform="rotate(16 64 64)">
      <rect x="46" y="18" width="36" height="92" rx="12" fill="#e5ddfa"/>
      <circle cx="64" cy="34" r="5" fill="#f6c6ad"/>
      <circle cx="64" cy="53" r="10" fill="#fff9ee"/>
      <circle cx="64" cy="53" r="3"/>
      <path d="M55 73h4m10 0h4M55 82h4m10 0h4M55 91h4m10 0h4" stroke-width="3"/>
    </g>`,
  소파: `
    <path d="M28 62V43q0-13 13-13h46q13 0 13 13v19" fill="#e5ddfa"/>
    <path d="M64 35v24m-33 30v11m66-11v11"/>
    <rect x="26" y="59" width="76" height="31" rx="8" fill="#fff9ee"/>
    <path d="M31 70h66v-9a9 9 0 0 1 18 0v20q0 11-11 11H24q-11 0-11-11V61a9 9 0 0 1 18 0z" fill="#e5ddfa"/>`,
  책갈피: `
    <path d="M25 43q24-5 39 6 15-11 39-6v53q-24-5-39 6-15-11-39-6z" fill="#fff9ee"/>
    <path d="M64 49v53m-30-39q12-2 21 4m-21 7q12-2 21 4m18 0q9-6 21-4"/>
    <path d="M73 21h16v53l-8-7-8 7z" fill="#f6c6ad"/>
    <path d="M81 21q-9-13-15-5-3 6 15 5z"/>`,
  우산: `
    <path d="M64 27v-8m0 45v33a10 10 0 0 0 20 0" stroke-width="3"/>
    <path d="M17 67a47 40 0 0 1 94 0q-12-11-24 0-12-11-23 0-12-11-23 0-12-11-24 0z" fill="#e5ddfa"/>
    <path d="M41 67q3-30 23-40 20 10 23 40m-62 13-4 7m77-5-4 7"/>`,
  연필꽂이: `
    <path d="M40 60l-8-31 4-12 9 9 9 31" fill="#f6c6ad"/>
    <path d="M67 57V22h11v36m-7-29h7m-7 8h7m-7 8h7" fill="#e5ddfa"/>
    <path d="M80 58l9-28 8 3-9 28" fill="#d9c0a1"/>
    <path d="M32 54h64l-7 45a7 7 0 0 1-7 6H46a7 7 0 0 1-7-6z" fill="#fff9ee"/>
    <path d="M49 67l3 27m12-27v27m15-27-3 27"/>`,
  로봇청소기: `
    <path d="M31 89l-8 12m12-10 3 13m58-16 10 12m-15-9-2 13"/>
    <ellipse cx="64" cy="70" rx="44" ry="32" fill="#d9c0a1"/>
    <ellipse cx="64" cy="62" rx="44" ry="31" fill="#e5ddfa"/>
    <ellipse cx="64" cy="53" rx="11" ry="7" fill="#fff9ee"/>
    <path d="M49 73q15 6 30 0m-17-9h4M99 24v12m-6-6h12" />`,
  공구함: `
    <path d="M49 42v-9q0-7 7-7h16q7 0 7 7v9" stroke-width="5"/>
    <rect x="20" y="41" width="88" height="55" rx="10" fill="#f6c6ad"/>
    <path d="M20 61h88"/>
    <rect x="33" y="55" width="12" height="15" rx="3" fill="#fff9ee"/>
    <rect x="83" y="55" width="12" height="15" rx="3" fill="#fff9ee"/>
    <path d="M52 82l10-10a8 8 0 0 1 9-10l-5 5 4 4 5-5a8 8 0 0 1-10 9L55 85z" fill="#e5ddfa"/>`,
  무드등: `
    <path d="M48 90a32 32 0 1 1 32 0" fill="#fbe3ae"/>
    <rect x="43" y="87" width="42" height="14" rx="7" fill="#d9c0a1"/>
    <path d="M71 48a17 17 0 1 0 10 24 20 20 0 0 1-10-24z" fill="#fff9ee"/>
    <path d="M29 31v12m-6-6h12m62 10v12m-6-6h12m-21-17v8m-4-4h8"/>`,
  선풍기: `
    <path d="M60 79h8v18h12l7 8H41l7-8h12z" fill="#d9c0a1"/>
    <circle cx="64" cy="51" r="34" fill="#fff9ee"/>
    <circle cx="64" cy="51" r="29" fill="#dbeae8"/>
    <path d="M61 47C45 40 52 25 65 30q9 4 3 18zm7 3c15-9 25 5 15 14q-8 7-17-9zm-5 5c1 18-16 21-20 8q-3-10 16-12z" fill="#e5ddfa"/>
    <circle cx="64" cy="51" r="5" fill="#f6c6ad"/>
    <path d="M102 42h9m-9 9h13m-13 9h9"/>`
};

function objectIllustration(object) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="128" height="120" viewBox="0 0 128 120" aria-hidden="true" focusable="false">
    <ellipse cx="64" cy="64" rx="55" ry="49" fill="#f1e4d3"/>
    <g fill="none" stroke="#684e36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      ${objectDrawings[object]}
    </g>
  </svg>`;
}
