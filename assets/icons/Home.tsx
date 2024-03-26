import * as React from "react";
import Svg, { Path } from "react-native-svg";

import { IconProps } from "@assets/icons/Props";
const Home = ({ color, ...props }: IconProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={15}
    viewBox="0 0 14 15"
    fill="none"
    {...props}
  >
    <Path
      d="M8.40741 0.654687C8.11228 0.40595 7.73873 0.269531 7.35276 0.269531C6.96679 0.269531 6.59324 0.40595 6.29811 0.654687L1.38852 4.79693C1.20629 4.95051 1.0598 5.14204 0.959294 5.35813C0.858788 5.57421 0.80669 5.80964 0.806641 6.04796V12.8159C0.806641 13.5185 1.37688 14.0888 2.0795 14.0888H4.26154C4.59912 14.0888 4.92288 13.9547 5.16158 13.716C5.40029 13.4773 5.53439 13.1535 5.53439 12.8159V9.90435C5.53439 9.40976 5.92862 9.00826 6.41957 8.99517H8.28595C8.52289 9.00143 8.74803 9.09997 8.91337 9.2698C9.07872 9.43964 9.17121 9.66733 9.17113 9.90435V12.8159C9.17113 13.5185 9.74137 14.0888 10.444 14.0888H12.626C12.9636 14.0888 13.2874 13.9547 13.5261 13.716C13.7648 13.4773 13.8989 13.1535 13.8989 12.8159V6.04724C13.8988 5.80892 13.8467 5.57349 13.7462 5.3574C13.6457 5.14131 13.4992 4.94978 13.317 4.7962L8.40741 0.654687Z"
      fill={color}
    />
  </Svg>
);
export default Home;
