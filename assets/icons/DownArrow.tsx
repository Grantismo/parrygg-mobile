import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const DownArrow =  (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={9}
    height={8}
    viewBox="0 0 9 8"
    fill="none"
    {...props}
  >
    <Path
      d="M8.25181 0.943938L0.905813 0.943937C0.831439 0.94417 0.758536 0.964683 0.694952 1.00327C0.631368 1.04185 0.579511 1.09705 0.544963 1.16291C0.510416 1.22877 0.494484 1.30281 0.498885 1.37706C0.503285 1.4513 0.527852 1.52294 0.569938 1.58426L4.24294 6.88971C4.39516 7.10968 4.76165 7.10968 4.91428 6.88971L8.58728 1.58426C8.62979 1.52307 8.65473 1.4514 8.65937 1.37703C8.66401 1.30266 8.64818 1.22844 8.6136 1.16244C8.57902 1.09643 8.52701 1.04117 8.46323 1.00265C8.39944 0.964126 8.32632 0.94382 8.25181 0.943938Z"
      fill="#777777"
    />
  </Svg>
);
export default DownArrow;