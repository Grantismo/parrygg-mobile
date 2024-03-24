import * as React from "react";
import Svg, { Path } from "react-native-svg";

import { IconProps } from "@assets/icons/Props";
const Blocks = ({ color, ...props }: IconProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    {...props}
  >
    <Path
      d="M5.5 6.71484C6.05228 6.71484 6.5 6.26713 6.5 5.71484V1.71484C6.5 1.16256 6.05228 0.714844 5.5 0.714844H1.5C0.947715 0.714844 0.5 1.16256 0.5 1.71484V5.71484C0.5 6.26713 0.947715 6.71484 1.5 6.71484H5.5ZM5.5 14.7148C6.05228 14.7148 6.5 14.2671 6.5 13.7148V9.71484C6.5 9.16256 6.05228 8.71484 5.5 8.71484H1.5C0.947715 8.71484 0.5 9.16256 0.5 9.71484V13.7148C0.5 14.2671 0.947715 14.7148 1.5 14.7148H5.5Z"
      fill={color}
    />
    <Path
      d="M14.5 9.71484V13.7148C14.5 14.2671 14.0523 14.7148 13.5 14.7148H9.5C8.94772 14.7148 8.5 14.2671 8.5 13.7148V9.71484C8.5 9.16256 8.94772 8.71484 9.5 8.71484H13.5C14.0523 8.71484 14.5 9.16256 14.5 9.71484Z"
      fill={color}
    />
  </Svg>
);
export default Blocks;