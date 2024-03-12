import * as React from "react";
import Svg, { Path } from "react-native-svg";

import { IconProps } from "@assets/icons/Props";

const Plus = ({ color, ...props }: IconProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    viewBox="0 0 18 18"
    fill="none"
    {...props}
  >
    <Path
      d="M8.99809 0.0605469C4.06081 0.0605469 0.0585938 4.06276 0.0585938 9.00005C0.0585938 13.9373 4.06081 17.9395 8.99809 17.9395C13.9354 17.9395 17.9376 13.9373 17.9376 9.00005C17.9376 4.06276 13.9354 0.0605469 8.99809 0.0605469ZM13.4678 9.894H9.89204V13.4698H8.10414V9.894H4.52834V8.1061H8.10414V4.5303H9.89204V8.1061H13.4678V9.894Z"
      fill={color}
    />
  </Svg>
);
export default Plus;
