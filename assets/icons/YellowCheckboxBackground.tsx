import * as React from "react";
import Svg, {
  SvgProps,
  Rect,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";
const YellowCheckboxBackground = (props: SvgProps) => (
  <Svg
    width={26}
    height={27}
    viewBox="0 0 26 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect
      x={0.908203}
      y={0.925781}
      width={24.5}
      height={24.8667}
      rx={5.5}
      fill="url(#paint0_linear_386_253)"
      stroke="url(#paint1_linear_386_253)"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_386_253"
        x1={13.1582}
        y1={0.425781}
        x2={13.1582}
        y2={26.2924}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#EFB31A" />
        <Stop offset={1} stopColor="#FFCB46" />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_386_253"
        x1={13.1582}
        y1={0.425781}
        x2={13.1582}
        y2={26.2924}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FFDD87" />
        <Stop offset={1} stopColor="#FFE7AB" stopOpacity={0} />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default YellowCheckboxBackground;
