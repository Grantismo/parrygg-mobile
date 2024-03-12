import * as React from "react";
import Svg, { Path } from "react-native-svg";

import { IconProps } from "@assets/icons/Props";
const Twitch = ({ color, ...props }: IconProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={17}
    height={17}
    viewBox="0 0 17 17"
    fill="none"
    {...props}
  >
    <Path
      d="M16.0584 0.833984V10.7089L12.1084 14.658H8.81705L6.76721 16.633H4.20932V14.658H0.917969V3.46673L1.95004 0.833984H16.0584ZM14.742 2.15036H3.54987V12.0253H6.18262V13.9994L8.15844 12.0244H12.1076L14.7403 9.39167L14.742 2.15036ZM12.1092 4.7831V8.73306H10.792V4.78394L12.1092 4.7831ZM8.81705 4.7831V8.73306H7.50067V4.78394L8.81705 4.7831Z"
      fill={color}
    />
  </Svg>
);
export default Twitch;
