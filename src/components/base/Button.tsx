import { LinearGradient } from "expo-linear-gradient";
import * as React from "react";
import {
  PressableProps,
  Pressable,
  View,
  StyleProp,
  ViewStyle,
} from "react-native";
import { ViewProps } from "react-native-svg/lib/typescript/fabric/utils";

import Text from "@/components/base/Text";
import tw from "@/lib/tailwind";

interface Props extends PressableProps {
  title?: string;
  style?: StyleProp<ViewStyle>;
  pressableStyle?: StyleProp<ViewStyle>;
  color?: Color;
}
type Color = "primary" | "secondary" | "green" | "gray";

const PrimaryWrapper = ({ ...props }: ViewProps) => {
  return <LinearGradient colors={["#EFB31A", "#FFCB46"]} {...props} />;
};

const GreenWrapper = ({ ...props }: ViewProps) => {
  return <LinearGradient colors={["#27BB2D", "#2EBB33"]} {...props} />;
};

const GrayWrapper = ({ ...props }: ViewProps) => {
  return <LinearGradient colors={["#636363", "#727272"]} {...props} />;
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
  const PressableWrapper = {
    primary: PrimaryWrapper,
    secondary: PassthroughWrapper,
    green: GreenWrapper,
    gray: GrayWrapper,
  }[color];

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
            tw`rounded-[14px] px-6 pt-[13px] pb-[15px] border-2 
                     text-black flex flex-row items-center justify-center`,
            color === "primary" && tw`border-[#ffd978]`,
            color === "secondary" && tw`border pt-[14px] pb-[16px]`,
            color === "gray" && tw`border-[#8A8A8A]`,
            color === "green" && tw`border-[#56E75C]`,
            pressableStyle,
          ]}
          {...pressableProps}
        >
          {({ pressed }) => (
            <>
              {typeof children === "function"
                ? children({ pressed })
                : children}
              {title && (
                <Text
                  style={[
                    tw`text-black`,
                    new Set(["green", "gray"]).has(color) && tw`text-white`,
                  ]}
                >
                  {title}
                </Text>
              )}
            </>
          )}
        </Pressable>
      </PressableWrapper>
    </View>
  );
};

export default Button;
