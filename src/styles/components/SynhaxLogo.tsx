import { FC, SVGProps } from "react";
import { useTheme } from "@mui/material/styles";

const SynhaxLogo: FC<SVGProps<SVGSVGElement>> = (props) => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 560.19 170.14"
      {...props}
    >
      <defs>
        <linearGradient
          id="a"
          x1={83.91}
          y1={5.44}
          x2={-23.93}
          y2={113.27}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#3299cc" />
          <stop offset={0.99} stopColor="#323366" />
        </linearGradient>
        <linearGradient
          id="b"
          x1={108.31}
          y1={29.83}
          x2={0.47}
          y2={137.67}
          href="#a"
        />
        <linearGradient
          id="c"
          x1={120.69}
          y1={42.22}
          x2={12.85}
          y2={150.05}
          href="#a"
        />
        <linearGradient
          id="d"
          x1={131.77}
          y1={53.29}
          x2={23.93}
          y2={161.13}
          href="#a"
        />
        <linearGradient
          id="e"
          x1={156.18}
          y1={77.7}
          x2={48.34}
          y2={185.54}
          href="#a"
        />
      </defs>
      <path
        d="M20.13 64.49c0 2.61 2.12 4.74 4.74 4.74a4.75 4.75 0 0 0 4.74-4.74c0-1.26-.49-2.45-1.39-3.35a4.7 4.7 0 0 0-3.35-1.39c-2.61 0-4.73 2.12-4.73 4.74Z"
        style={{ fill: "url(#a)" }}
      />
      <path
        d="M35.7 97.7c0 1.27.49 2.46 1.39 3.35.89.89 2.08 1.39 3.35 1.39 2.61 0 4.73-2.12 4.73-4.74s-2.12-4.74-4.73-4.74a4.75 4.75 0 0 0-4.74 4.74"
        style={{ fill: "url(#b)" }}
      />
      <path
        d="M140.86 98.02 119.88 119c1.11 1.96 1.71 4.17 1.71 6.48 0 3.52-1.37 6.84-3.86 9.33a13.12 13.12 0 0 1-9.33 3.86c-7.28 0-13.2-5.92-13.2-13.2s5.92-13.19 13.19-13.19c1.81 0 3.56.37 5.18 1.06l30.24-30.24a4.23 4.23 0 0 0 0-5.98 4.22 4.22 0 0 0-5.97 0l-20.73 20.73c-.83.83-1.91 1.24-2.99 1.24s-2.16-.41-2.99-1.24a4.23 4.23 0 0 1 0-5.98l32.59-32.59a4.23 4.23 0 0 0 0-5.98 4.23 4.23 0 0 0-5.98 0L104.5 86.54c.89 1.8 1.37 3.78 1.37 5.85 0 3.52-1.37 6.84-3.86 9.33a13.13 13.13 0 0 1-9.33 3.87c-7.28 0-13.2-5.92-13.2-13.2 0-7.27 5.92-13.19 13.19-13.19 2.06 0 4.04.48 5.84 1.37l50.92-50.92a4.237 4.237 0 0 0 0-5.97 4.23 4.23 0 0 0-5.98 0L101.2 65.93c-.82.83-1.91 1.24-2.99 1.24a4.23 4.23 0 0 1-2.99-7.22l26.43-26.43a4.23 4.23 0 0 0 0-5.98 4.22 4.22 0 0 0-5.97 0L51.94 91.28c1.08 1.91 1.7 4.11 1.7 6.45 0 7.27-5.92 13.19-13.19 13.19-3.52 0-6.84-1.37-9.33-3.87a13.12 13.12 0 0 1-3.86-9.33c0-7.28 5.92-13.19 13.2-13.19 1.85 0 3.6.38 5.2 1.07l54.79-54.79a4.23 4.23 0 0 0 0-5.98 4.22 4.22 0 0 0-5.97 0L59.14 60.17a4.2 4.2 0 0 1-2.99 1.24c-1.08 0-2.17-.41-2.99-1.24a4.23 4.23 0 0 1 0-5.98l46.91-46.97a4.23 4.23 0 0 0 0-5.98 4.23 4.23 0 0 0-5.98 0L36.68 58.65c.89 1.8 1.37 3.78 1.37 5.84 0 7.28-5.92 13.2-13.2 13.2s-13.19-5.92-13.19-13.2c0-3.52 1.37-6.84 3.86-9.33s5.81-3.87 9.33-3.87c2.06 0 4.05.48 5.84 1.37l40.93-40.92a4.23 4.23 0 0 0 0-5.98 4.23 4.23 0 0 0-5.98 0L37.88 33.52 9.77 49.75C4.4 52.85 0 60.47 0 66.67v56.14c0 6.2 4.4 13.82 9.77 16.92l48.62 28.07c5.37 3.1 14.16 3.1 19.54 0l48.62-28.07c5.37-3.1 9.77-10.72 9.77-16.92v-8.29l10.53-10.53a4.23 4.23 0 0 0 0-5.98 4.23 4.23 0 0 0-5.98 0Z"
        style={{ fill: "url(#c)" }}
      />
      <path
        d="M87.95 92.37c0 2.61 2.12 4.74 4.73 4.74 1.27 0 2.46-.49 3.35-1.39.89-.89 1.39-2.08 1.39-3.35s-.49-2.45-1.39-3.35a4.7 4.7 0 0 0-3.35-1.39c-2.61 0-4.73 2.12-4.73 4.74"
        style={{ fill: "url(#d)" }}
      />
      <path
        d="M103.66 125.48c0 2.61 2.12 4.74 4.74 4.74 1.26 0 2.45-.49 3.35-1.39.89-.89 1.39-2.08 1.39-3.35 0-1.26-.49-2.45-1.39-3.35a4.7 4.7 0 0 0-3.35-1.39c-2.61 0-4.73 2.12-4.73 4.74Z"
        style={{ fill: "url(#e)" }}
      />
      {/* Conditionally fill the text portion based on theme mode */}
      <path
        d="M229.02 110.05c0 7.92-6.4 14.33-14.43 14.33h-43.08l4.34-14.33h35.92c1.63 0 2.82-1.3 2.82-2.93v-4.34c0-1.52-1.19-2.82-2.82-2.82h-25.94c-7.92 0-14.32-6.51-14.32-14.43v-9.98c0-8.03 6.4-14.43 14.32-14.43h38.85l-4.34 14.43h-31.58c-1.63 0-2.93 1.19-2.93 2.82v4.34c0 1.52 1.3 2.82 2.93 2.82h25.83c8.03 0 14.43 6.51 14.43 14.43zM267 142.5h-14.98l5.43-18.12h-6.73l-18.99-63.27h14.98l14.87 49.49 14.87-49.49h14.98l-24.42 81.39Zm84.1-18.12h-14.43V78.37c0-1.63-1.19-2.82-2.82-2.82h-22.68v48.83h-14.32V61.11h14.32v7.16l7.27-7.16h18.23c8.03 0 14.43 6.4 14.43 14.43v48.83Zm64.56 0h-14.43V78.37c0-1.63-1.19-2.82-2.82-2.82h-22.68v48.83h-14.32V42.99h14.32v25.29l7.27-7.16h18.23c8.03 0 14.43 6.4 14.43 14.43zm67.82 0h-14.43v-7.16l-7.16 7.16h-21.6c-7.92 0-14.33-6.4-14.33-14.33V99.96c0-7.92 6.4-14.43 14.33-14.43h19.21l4.23 14.43h-20.51c-1.63 0-2.93 1.3-2.93 2.82v4.34c0 1.63 1.3 2.93 2.93 2.93h25.83V78.36c0-1.63-1.19-2.82-2.82-2.82h-34.51l4.34-14.43h32.99c8.03 0 14.43 6.4 14.43 14.43v48.83Zm51.43 0-13.67-19.21-13.67 19.21h-17.58l22.46-31.58-22.46-31.69h17.58l13.67 19.21 13.67-19.21h17.69l-17.36 24.42h-10.2l27.56 38.85z"
        fill={isDarkMode ? "#FFF" : "#000"}
      />
    </svg>
  );
};

export default SynhaxLogo;
