import { LinearGradient } from "expo-linear-gradient";
import * as React from "react";
import {
  PressableProps,
  Pressable,
  View,
  StyleProp,
  ViewStyle,
  ColorValue,
} from "react-native";
import { ViewProps } from "react-native-svg/lib/typescript/fabric/utils";
import tw from "twrnc";

import Text from "@/components/base/Text";

interface Props extends PressableProps {
  title?: string;
  style?: StyleProp<ViewStyle>;
  pressableStyle?: StyleProp<ViewStyle>;
  color?: Color;
}
type Color = "primary" | "secondary";

const LinearGradientWrapper = ({ ...props }: ViewProps) => {
  return <LinearGradient colors={["#EFB31A", "#FFCB46"]} {...props} />;
};

const PassthroughWrapper = ({ ...props }: ViewProps) => {
  return <View {...props} />;
};

const Button = ({
  title,
  style,
  pressableStyle,
  color = "primary",
  children,
  ...pressableProps
}: Props) => {
  const PressableWrapper =
    color === "primary" ? LinearGradientWrapper : PassthroughWrapper;

  return (
    <View style={[tw`mb-4`, style]}>
      <PressableWrapper
        style={[
          tw`rounded-[14px]`,
          { backgroundColor: "rgba(56, 52, 42, 0.38)" },
        ]}
      >
        <Pressable
          style={[
            tw`rounded-[14px] px-6 pt-[13px] pb-[15px] border-2 border-[#ffd978]
                     text-black flex flex-row items-center justify-center`,
            color === "secondary" && tw`border pt-[14px] pb-[16px]`,
            pressableStyle,
          ]}
          {...pressableProps}
        >
          {({ pressed }) => (
            <>
              {typeof children === "function"
                ? children({ pressed })
                : children}
              {title && <Text style={tw`text-black`}>{title}</Text>}
            </>
          )}
        </Pressable>
      </PressableWrapper>
    </View>
  );
};

export default Button;
