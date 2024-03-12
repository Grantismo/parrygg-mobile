import * as React from "react";
import Svg, { Path } from "react-native-svg";

import { IconProps } from "@assets/icons/Props";
const Twitter = ({ color, ...props }: IconProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={14}
    viewBox="0 0 15 14"
    fill="none"
    {...props}
  >
    <Path
      d="M11.6169 0.0683594H13.8779L8.93816 5.71421L14.7494 13.3969H10.1986L6.63471 8.73741L2.55684 13.3969H0.294401L5.57799 7.35807L0.00390625 0.0683594H4.66891L7.89033 4.32736L11.6169 0.0683594ZM10.8233 12.0436H12.0762L3.98881 1.35064H2.64433L10.8233 12.0436Z"
      fill={color}
    />
  </Svg>
);
export default Twitter;
