import type { SVGProps } from 'react';
const Vidstack = (props: SVGProps<SVGSVGElement>) => (
  <svg
    version="1.0"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 400 400"
    preserveAspectRatio="xMidYMid meet"
    overflow="hidden"
    className="rounded-full"
    style={{ borderRadius: '9999px' }}
    {...props}
  >
    <circle cx="200" cy="200" r="200" fill="white" />
    <g
      transform="translate(0.000000,400.000000) scale(0.100000,-0.100000)"
      fill="#000000"
      stroke="none"
    >
      <path
        d="M0 2000 l0 -2000 2000 0 2000 0 0 2000 0 2000 -2000 0 -2000 0 0
-2000z m1738 945 l171 -120 1 -532 0 -531 -270 -141 c-149 -78 -273 -141 -275
-141 -3 0 -5 339 -5 754 l0 754 93 40 c50 23 97 40 103 39 6 -1 88 -56 182
-122z m787 -555 c215 -151 393 -279 397 -285 4 -5 8 -58 8 -116 0 -89 -3 -108
-18 -122 -10 -9 -98 -72 -195 -141 l-177 -124 -207 82 c-115 44 -214 85 -220
89 -10 6 -13 108 -13 451 0 243 3 446 7 449 3 4 11 3 17 -1 6 -5 187 -132 401
-282z m-348 -852 c90 -35 163 -66 163 -69 0 -12 -765 -543 -780 -541 -8 1 -55
17 -105 36 l-90 34 0 132 0 132 320 168 c176 92 322 169 325 169 3 1 78 -27
167 -61z"
      />
    </g>
  </svg>
);
export default Vidstack;
