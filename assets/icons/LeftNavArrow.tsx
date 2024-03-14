import * as React from "react";
import Svg, { Path } from "react-native-svg";

import { IconProps } from "@assets/icons/Props";
const LeftNavArrow = ({ color, ...props }: IconProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={10}
    height={13}
    viewBox="0 0 10 13"
    fill="none"
    {...props}
  >
    <Path
      d="M7.42364 12.6473C6.94011 12.6479 6.47113 12.4866 6.09558 12.1906L0.885489 8.01087C0.681177 7.8528 0.516178 7.65198 0.402771 7.42337C0.289364 7.19476 0.230469 6.94423 0.230469 6.69043C0.230469 6.43664 0.289364 6.18611 0.402771 5.9575C0.516178 5.72889 0.681177 5.52807 0.885489 5.37L6.09558 1.19027C6.40924 0.946037 6.78719 0.792342 7.18636 0.746703C7.58553 0.701065 7.98986 0.765319 8.35328 0.932143C8.66913 1.06744 8.93823 1.28824 9.12844 1.56816C9.31865 1.84807 9.42193 2.17529 9.42595 2.51071V10.8702C9.42193 11.2056 9.31865 11.5328 9.12844 11.8127C8.93823 12.0926 8.66913 12.3134 8.35328 12.4487C8.06125 12.5778 7.74445 12.6455 7.42364 12.6473Z"
      fill={color}
    />
  </Svg>
);
export default LeftNavArrow;