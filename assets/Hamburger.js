import * as React from "react";
const Hamburger = (props) => (
  <svg
    width={26}
    height={26}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_106_5410)">
      <path
        d="M3.5 21H24.5V18.6667H3.5V21ZM3.5 15.1667H24.5V12.8333H3.5V15.1667ZM3.5 7V9.33333H24.5V7H3.5Z"
        fill="black"
      />
    </g>
    <defs>
      <clipPath id="clip0_106_5410">
        <rect width={28} height={28} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
export default Hamburger;
