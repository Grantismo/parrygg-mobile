import React from "react";
import { View, ViewProps } from "react-native";

import tw from "@/lib/tailwind";
import FileUpload from "@assets/icons/FileUpload";

interface Props extends ViewProps {}

const ImageUpload = ({ style, ...props }: Props) => {
  return (
    <View
      style={[
        tw`h-32 rounded-[8px] border-2 border-dashed border-[#FFC93F] flex items-center justify-center bg-[#151515]`,
        style,
      ]}
      {...props}
    >
      <FileUpload />
    </View>
  );
};

export default ImageUpload;
