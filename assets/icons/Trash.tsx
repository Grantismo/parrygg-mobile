import * as React from "react";
import Svg, { Path } from "react-native-svg";

import { IconProps } from "@assets/icons/Props";

const Trash = ({ color, ...props }: IconProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={17}
    viewBox="0 0 15 17"
    fill="none"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.14359 0.605469C9.46524 0.605557 9.77872 0.712195 10.0396 0.910278C10.3005 1.10836 10.4956 1.38785 10.5972 1.70915L11.0133 3.02582H13.5267C13.7299 3.02582 13.9248 3.11082 14.0685 3.26212C14.2122 3.41342 14.293 3.61863 14.293 3.8326C14.293 4.04658 14.2122 4.25179 14.0685 4.40309C13.9248 4.55439 13.7299 4.63939 13.5267 4.63939L13.5244 4.69667L12.86 14.4934C12.8186 15.1039 12.559 15.6751 12.1336 16.0921C11.7082 16.5092 11.1486 16.7411 10.5673 16.7411H4.22563C3.64438 16.7411 3.08473 16.5092 2.65934 16.0921C2.23395 15.6751 1.9744 15.1039 1.93294 14.4934L1.26857 4.69586C1.26719 4.67707 1.26642 4.65824 1.26628 4.63939C1.06305 4.63939 0.868142 4.55439 0.724437 4.40309C0.580732 4.25179 0.5 4.04658 0.5 3.8326C0.5 3.61863 0.580732 3.41342 0.724437 3.26212C0.868142 3.11082 1.06305 3.02582 1.26628 3.02582H3.77966L4.19575 1.70915C4.29743 1.38772 4.49263 1.10814 4.75367 0.910042C5.01472 0.711947 5.32836 0.605387 5.65014 0.605469H9.14359ZM5.09766 7.05974C4.90997 7.05977 4.72882 7.13232 4.58856 7.26363C4.44831 7.39494 4.3587 7.57588 4.33674 7.77213L4.33138 7.86653V12.7072C4.3316 12.9129 4.40638 13.1106 4.54046 13.2602C4.67453 13.4097 4.85778 13.4997 5.05275 13.5117C5.24772 13.5238 5.43971 13.457 5.58948 13.325C5.73925 13.193 5.8355 13.0058 5.85857 12.8016L5.86393 12.7072V7.86653C5.86393 7.65255 5.7832 7.44734 5.6395 7.29604C5.49579 7.14474 5.30089 7.05974 5.09766 7.05974ZM9.69531 7.05974C9.49208 7.05974 9.29718 7.14474 9.15347 7.29604C9.00977 7.44734 8.92904 7.65255 8.92904 7.86653V12.7072C8.92904 12.9212 9.00977 13.1264 9.15347 13.2777C9.29718 13.429 9.49208 13.514 9.69531 13.514C9.89854 13.514 10.0934 13.429 10.2372 13.2777C10.3809 13.1264 10.4616 12.9212 10.4616 12.7072V7.86653C10.4616 7.65255 10.3809 7.44734 10.2372 7.29604C10.0934 7.14474 9.89854 7.05974 9.69531 7.05974ZM9.14359 2.21904H5.64938L5.39421 3.02582H9.39876L9.14359 2.21904Z"
      fill={color}
    />
  </Svg>
);
export default Trash;
