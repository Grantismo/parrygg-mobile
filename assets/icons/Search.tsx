import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const Search = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={17}
    height={17}
    viewBox="0 0 17 17"
    fill="none"
    {...props}
  >
    <Path
      d="M15.3979 15.6851L11.9901 12.2772M11.9901 12.2772C12.573 11.6942 13.0354 11.0022 13.3509 10.2406C13.6664 9.47891 13.8287 8.66259 13.8287 7.8382C13.8287 7.0138 13.6664 6.19748 13.3509 5.43584C13.0354 4.6742 12.573 3.98216 11.9901 3.39923C11.4071 2.81629 10.7151 2.35389 9.95344 2.0384C9.1918 1.72292 8.37548 1.56055 7.55109 1.56055C6.7267 1.56055 5.91038 1.72292 5.14874 2.0384C4.3871 2.35389 3.69505 2.81629 3.11212 3.39923C1.93483 4.57652 1.27344 6.17326 1.27344 7.8382C1.27344 9.50313 1.93483 11.0999 3.11212 12.2772C4.28941 13.4545 5.88615 14.1158 7.55109 14.1158C9.21602 14.1158 10.8128 13.4545 11.9901 12.2772Z"
      stroke="#777777"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default Search;
