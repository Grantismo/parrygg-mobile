import * as React from "react";
import Svg, { SvgProps, Mask, Path, G } from "react-native-svg";
const SSBU = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    viewBox="0 0 22 22"
    fill="none"
    {...props}
  >
    <Mask
      id="mask0_108_216"
      style={{
        maskType: "luminance",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={22}
      height={22}
    >
      <Path
        d="M0.554688 0.767578H4.69001V12.6375H0.554688M0.554688 14.552H4.69001V21.5974H0.554688M9.36139 0.767578H21.6142V12.6375H9.36139M9.36139 14.552H21.6142V21.5974H9.36139"
        fill="white"
      />
    </Mask>
    <G mask="url(#mask0_108_216)">
      <Path
        d="M11.0452 21.2135C16.5435 21.2135 21.0007 16.7564 21.0007 11.2581C21.0007 5.75992 16.5435 1.30273 11.0452 1.30273C5.54703 1.30273 1.08984 5.75992 1.08984 11.2581C1.08984 16.7564 5.54703 21.2135 11.0452 21.2135Z"
        fill="white"
      />
    </G>
  </Svg>
);

export default SSBU;
