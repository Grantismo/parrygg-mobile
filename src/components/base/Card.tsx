import React from "react";
import { View, ViewProps } from "react-native";

import tw from "@/lib/tailwind";

interface Props extends ViewProps {
  color?: Color;
}

type Color = "primary" | "accent";

const Card = ({ color = "primary", style, ...props }: Props) => {
  const borderStyle = {
    primary: tw`border-[#3D3D3D]`,
    accent: tw`border-[#FFC93F]`,
  }[color];

  return (
    <View
      style={[
        tw`rounded-lg border mb-6 bg-[#151515] overflow-hidden`,
        borderStyle,
        style,
      ]}
      {...props}
    />
  );
};

export default Card;
