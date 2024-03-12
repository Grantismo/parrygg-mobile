import * as React from "react";
import { ReactNode } from "react";
import { Text as NativeText, TextStyle, StyleProp } from "react-native";
import tw from "twrnc";

import { styles } from "@/components/base/styles";

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
      style={[styles.mediumWeightFont, textColor, tw`text-xl mb-6`, style]}
      {...textProps}
    >
      {children}
    </NativeText>
  );
};

export default Title;
