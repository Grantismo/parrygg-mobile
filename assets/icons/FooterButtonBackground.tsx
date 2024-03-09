import * as React from "react";
import Svg, {
  SvgProps,
  Rect,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";
const FooterButtonBackground = (props: SvgProps) => (
  <Svg
    width={57}
    height={55}
    viewBox="0 0 57 55"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect
      x={1.69531}
      y={1.02539}
      width={54}
      height={52.7924}
      rx={13}
      fill="url(#paint0_linear_946_187)"
      stroke="url(#paint1_linear_946_187)"
      strokeWidth={2}
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_946_187"
        x1={28.6953}
        y1={0.0253906}
        x2={28.6953}
        y2={54.8178}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#EFB31A" />
        <Stop offset={1} stopColor="#FFCB46" />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_946_187"
        x1={28.6953}
        y1={0.0253906}
        x2={28.6953}
        y2={54.8178}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FFDD87" />
        <Stop offset={1} stopColor="#FFE7AB" stopOpacity={0} />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default FooterButtonBackground;
