import * as React from "react";
import { ReactNode } from "react";
import {
  Text as NativeText,
  TextStyle,
  StyleProp,
  TextProps,
} from "react-native";

import { styles } from "@/components/base/styles";
import tw from "@/lib/tailwind";

type TextColor = "primary" | "secondary" | "green" | "red" | "accent" | "black";
interface Props extends TextProps {
  style?: StyleProp<TextStyle>;
  children: ReactNode;
  color?: TextColor;
}

const Text = ({ style, children, color = "primary", ...textProps }: Props) => {
  const textColor = {
    primary: tw`text-white`,
    secondary: tw`text-[#777]`,
    green: tw`text-[#39D83F]`,
    red: tw`text-[#FA3024]`,
    accent: tw`text-[#FFC93F]`,
    black: tw`text-black`,
  }[color];
  return (
    <NativeText
      style={[styles.defaultWeightFont, tw`text-base`, textColor, style]}
      {...textProps}
    >
      {children}
    </NativeText>
  );
};

export default Text;
