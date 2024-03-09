import * as React from "react";
import Svg, { Path } from "react-native-svg";

import { IconProps } from "@assets/icons/Props";
const Pin = ({ color, ...props }: IconProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={16}
    fill="none"
    {...props}
  >
    <Path
      fill={color}
      d="M6.03.385A5.895 5.895 0 0 0 .14 6.27c-.02 4.745 5.666 8.678 5.89 8.837 0 0 5.91-4.092 5.889-8.833a5.896 5.896 0 0 0-5.89-5.89Zm0 8.833a2.944 2.944 0 1 1 0-5.889 2.944 2.944 0 1 1 0 5.89Z"
    />
  </Svg>
);

export default Pin;
