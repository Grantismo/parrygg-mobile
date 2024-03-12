import * as React from "react";
import Svg, { Path } from "react-native-svg";

import { IconProps } from "@assets/icons/Props";
const Profile = ({ color, ...props }: IconProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={20}
    viewBox="0 0 18 20"
    fill="none"
    {...props}
  >
    <Path
      d="M9.08884 9.62201C11.3527 9.62201 13.2738 7.88825 13.2738 5.28171C13.2738 2.73747 11.3423 0.785156 9.08884 0.785156C6.82499 0.785156 4.88306 2.76862 4.89344 5.30248C4.89344 7.88825 6.8146 9.62201 9.08884 9.62201ZM4.89344 19.5606H14.1878C15.9012 19.5606 17.8603 19.3532 17.8603 17.629C17.8603 14.9602 14.4681 11.741 9.07845 11.741C3.69921 11.741 0.824219 14.7981 0.824219 17.4669C0.824219 19.5606 3.17998 19.5606 4.89344 19.5606Z"
      fill={color}
    />
  </Svg>
);
export default Profile;
