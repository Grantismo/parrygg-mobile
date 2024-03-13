import * as React from "react";
import Svg, {
  SvgProps,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";
const CalendarButtonBackground = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={37}
    height={36}
    viewBox="0 0 37 36"
    fill="none"
    {...props}
  >
    <Path
      d="M1.27734 8.09375C1.27734 3.95162 4.63521 0.59375 8.77734 0.59375H28.6533C32.7955 0.59375 36.1533 3.95161 36.1533 8.09375V27.9697C36.1533 32.1119 32.7955 35.4697 28.6533 35.4697H8.77735C4.63521 35.4697 1.27734 32.1119 1.27734 27.9697V8.09375Z"
      fill="url(#paint0_linear_826_255)"
      stroke="url(#paint1_linear_826_255)"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_826_255"
        x1={26.1282}
        y1={0.0937493}
        x2={18.3997}
        y2={35.9016}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#F9B916" />
        <Stop offset={1} stopColor="#FFCB45" />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_826_255"
        x1={18.7153}
        y1={0.09375}
        x2={8.64733}
        y2={32.7178}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FFDF8E" />
        <Stop offset={1} stopColor="#FFE7AB" stopOpacity={0} />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default CalendarButtonBackground;
