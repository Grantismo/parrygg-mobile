import * as React from "react";
import Svg, { Path } from "react-native-svg";

import { IconProps } from "@assets/icons/Props";

const RightArrow = ({ color, ...props }: IconProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={8}
    height={11}
    viewBox="0 0 8 11"
    fill="none"
    {...props}
  >
    <Path
      d="M0.272835 0.97115L0.272835 10.0443C0.273123 10.1362 0.298459 10.2262 0.346115 10.3047C0.393771 10.3833 0.461943 10.4473 0.543292 10.49C0.624642 10.5327 0.716089 10.5523 0.80779 10.5469C0.899491 10.5415 0.987973 10.5111 1.06371 10.4591L7.61654 5.92257C7.88824 5.73455 7.88824 5.28191 7.61654 5.09339L1.06371 0.55681C0.988131 0.504299 0.899604 0.473505 0.80775 0.467774C0.715897 0.462044 0.624229 0.481595 0.542707 0.524304C0.461185 0.567014 0.392927 0.631248 0.345348 0.710027C0.297769 0.788806 0.27269 0.879118 0.272835 0.97115Z"
      fill={color}
    />
  </Svg>
);
export default RightArrow;
