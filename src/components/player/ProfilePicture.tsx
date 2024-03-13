import React from "react";
import { Image, ImageStyle, StyleProp } from "react-native";

import tw from "@/lib/tailwind";

const ProfilePicture = ({ style }: { style?: StyleProp<ImageStyle> }) => {
  return (
    <Image
      src="https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Fuser%2F77088%2Fimage-6ca3a4cc4640c6c5063d4e18766d7bb2-optimized.png&ehk=kNsjCtVGHnZtSWb2KxKr8mLEzkTEvZSLa6Ow2dmbpOc%3D&w=160&h=160&r=0&c=3"
      style={[
        tw`h-12 w-12 rounded-[2.5rem] border-2 border-[#39D83F] flex flex-row`,
        style,
      ]}
    />
  );
};

export default ProfilePicture;
