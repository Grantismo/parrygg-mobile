import * as React from "react";
import { ReactNode } from "react";
import { Text as NativeText, TextStyle, StyleProp } from "react-native";

import { styles } from "@/components/base/styles";
import tw from "@/lib/tailwind";

type TitleColor = "primary" | "accent";
interface Props {
  style?: StyleProp<TextStyle>;
  children: ReactNode;
  color?: TitleColor;
}

const Title = ({ style, children, color = "primary", ...textProps }: Props) => {
  const textColor = {
    primary: tw`text-white`,
    accent: tw`text-[#FFC93F]`,
  }[color];
  return (
    <NativeText
      style={[styles.mediumWeightFont, textColor, tw`text-xl`, style]}
      {...textProps}
    >
      {children}
    </NativeText>
  );
};

export default Title;
