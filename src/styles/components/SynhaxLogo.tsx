import { FC, SVGProps } from "react";
import { useTheme } from "@mui/material/styles";
import "./SynhaxLogo.css";

const SynhaxLogo: FC<SVGProps<SVGSVGElement>> = (props) => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  return (
    <svg
      id="LogoParent"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 126.05 28.07"
      className="logo"
      {...props}
    >
      <defs>
        <linearGradient
          id="linear-gradient"
          x1="13.42"
          y1="1.24"
          x2="-3.83"
          y2="18.49"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#3299cc" />
          <stop offset="0.99" stopColor="#323366" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-2"
          x1="17.32"
          y1="5.14"
          x2="0.08"
          y2="22.39"
          xlinkHref="#linear-gradient"
        />
        <linearGradient
          id="linear-gradient-3"
          x1="19.3"
          y1="7.12"
          x2="2.06"
          y2="24.37"
          xlinkHref="#linear-gradient"
        />
        <linearGradient
          id="linear-gradient-4"
          x1="21.08"
          y1="8.89"
          x2="3.83"
          y2="26.14"
          xlinkHref="#linear-gradient"
        />
        <linearGradient
          id="linear-gradient-5"
          x1="24.98"
          y1="12.8"
          x2="7.73"
          y2="30.05"
          xlinkHref="#linear-gradient"
        />
      </defs>
      <g id="_GroupIcon_">
        <text
          id="_SynhaxText_"
          className={`synhax-text ${isDarkMode ? "synhax-text-dark" : "synhax-text-light"}`}
        >
          <tspan x="0" y="0" letterSpacing="-0.02em">
            s
          </tspan>
          <tspan x="15.11" y="0">
            ynhax
          </tspan>
        </text>
        <path
          id="_PathDarkFoundTwo_"
          d="M3.22,10.68c0,.42.34.76.76.76.42,0,.76-.34.76-.76,0-.2-.08-.39-.22-.54-.14-.14-.33-.22-.54-.22-.42,0-.76.34-.76.76Z"
          className="path-dark-found-two"
        />
        <path
          id="_PathDarkFound_"
          d="M5.71,16c0,.2.08.39.22.54.14.14.33.22.54.22h0c.42,0,.76-.34.76-.76s-.34-.76-.76-.76c-.42,0-.76.34-.76.76Z"
          className="path-dark-found"
        />
        <path
          id="_PathDesign_"
          d="M22.53,16.05l-3.36,3.36c.18.31.27.67.27,1.04,0,.56-.22,1.09-.62,1.49-.4.4-.93.62-1.49.62-1.16,0-2.11-.95-2.11-2.11s.95-2.11,2.11-2.11c.29,0,.57.06.83.17l4.84-4.84c.26-.26.26-.69,0-.96-.26-.26-.69-.26-.96,0l-3.32,3.32c-.13.13-.31.2-.48.2s-.35-.07-.48-.2c-.26-.26-.26-.69,0-.96l5.21-5.21c.26-.26.26-.69,0-.96-.26-.26-.69-.26-.96,0l-5.32,5.32c.14.29.22.61.22.94,0,.56-.22,1.09-.62,1.49-.4.4-.93.62-1.49.62-1.16,0-2.11-.95-2.11-2.11,0-1.16.95-2.11,2.11-2.11.33,0,.65.08.93.22l8.14-8.14c.26-.26.26-.69,0-.96-.26-.26-.69-.26-.96,0l-6.76,6.76c-.13.13-.31.2-.48.2-.17,0-.35-.07-.48-.2-.26-.26-.26-.69,0-.96l4.23-4.23c.26-.26.26-.69,0-.96-.26-.26-.69-.26-.96,0l-10.19,10.19c.17.31.27.66.27,1.03,0,1.16-.95,2.11-2.11,2.11h0s0,0,0,0c-.56,0-1.09-.22-1.49-.62-.4-.4-.62-.93-.62-1.49,0-1.16.95-2.11,2.11-2.11.3,0,.58.06.83.17l8.76-8.76c.26-.26.26-.69,0-.96-.26-.26-.69-.26-.96,0l-5.65,5.65c-.13.13-.31.2-.48.2-.17,0-.35-.07-.48-.2-.26-.26-.26-.69,0-.96l7.51-7.51c.26-.26.26-.69,0-.96-.26-.26-.69-.26-.96,0L5.87,9.75c.14.29.22.6.22.93,0,1.16-.95,2.11-2.11,2.11-1.16,0-2.11-.95-2.11-2.11,0-.56.22-1.09.62-1.49.4-.4.93-.62,1.49-.62.33,0,.65.08.93.22l6.54-6.54c.26-.26.26-.69,0-.96-.26-.26-.69-.26-.96,0l-4.44,4.44-4.5,2.6c-.86.5-1.56,1.71-1.56,2.71v8.98c0,.99.7,2.21,1.56,2.71l7.78,4.49c.86.5,2.27.5,3.12,0l7.78-4.49c.86-.5,1.56-1.71,1.56-2.71v-1.33l1.68-1.68c.26-.26.26-.69,0-.96-.26-.26-.69-.26-.96,0Z"
          className="path-design"
        />
        <path
          id="_PathFoundTwo_"
          d="M14.07,15.14c0,.42.34.76.76.76.2,0,.39-.08.54-.22.14-.14.22-.33.22-.54,0-.2-.08-.39-.22-.54-.14-.14-.33-.22-.54-.22-.42,0-.76.34-.76.76Z"
          className="path-found-two"
        />
        <path
          id="_PathFound_"
          d="M16.58,20.44c0,.42.34.76.76.76.2,0,.39-.08.54-.22.14-.14.22-.33.22-.54,0-.2-.08-.39-.22-.54-.14-.14-.33-.22-.54-.22-.42,0-.76.34-.76.76Z"
          className="path-found"
        />
      </g>
    </svg>
  );
};

export default SynhaxLogo;
