import * as React from "react";
import Svg, {
  SvgProps,
  Rect,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";
const GreenCheckboxBackground = (props: SvgProps) => (
  <Svg
    width={26}
    height={27}
    viewBox="0 0 26 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect
      x={1}
      y={0.835938}
      width={24.5}
      height={24.8667}
      rx={5.5}
      fill="url(#paint0_linear_386_237)"
      stroke="url(#paint1_linear_386_237)"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_386_237"
        x1={13.25}
        y1={0.335937}
        x2={13.25}
        y2={26.2026}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#27B32C" />
        <Stop offset={1} stopColor="#3FD744" />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_386_237"
        x1={13.25}
        y1={0.335937}
        x2={13.25}
        y2={26.2026}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#56E75C" />
        <Stop offset={1} stopColor="#3FC544" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default GreenCheckboxBackground;
