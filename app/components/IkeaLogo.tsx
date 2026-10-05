import React from "react";

type IkeaLogoProps = {
  className?: string;
};

const IkeaLogo = ({ className = "h-9 w-auto" }: IkeaLogoProps) => {
  return (
    <svg
      className={className}
      viewBox="0 0 90 36"
      role="img"
      aria-label="IKEA"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="90" height="36" fill="#0058A3" />
      <text
        x="45"
        y="27.5"
        textAnchor="middle"
        fill="#FFDB00"
        fontSize="26"
        fontWeight="900"
        fontFamily="var(--font-noto-sans), 'Noto Sans', Arial Black, sans-serif"
        letterSpacing="-1.2"
      >
        IKEA
      </text>
    </svg>
  );
};

export default IkeaLogo;
