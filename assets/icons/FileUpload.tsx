import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const FileUpload = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={23}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      d="M10.109 19.6H2.68l6.286-6.286 1.97 1.97c.649-1.027 1.55-1.866 2.64-2.39l1.676-1.676v1.142a6.951 6.951 0 0 1 1.047-.094c.356 0 .702.042 1.048.094V7.028L11.062.742h-8.38A2.088 2.088 0 0 0 .585 2.837V19.6a2.095 2.095 0 0 0 2.095 2.096h8.182a6.27 6.27 0 0 1-.754-2.096Zm-.095-17.286 5.762 5.762h-5.761V2.314ZM4.776 8.076a2.095 2.095 0 1 1 0 4.19 2.088 2.088 0 0 1-2.095-2.095c0-1.163.943-2.095 2.095-2.095Z"
    />
    <Path
      fill="#FFC93F"
      d="M17.348 17.504v-3.143h-2.096v3.143H12.11V19.6h3.143v3.143h2.095V19.6h3.143v-2.095h-3.142Z"
    />
  </Svg>
);
export default FileUpload;
