import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { Href } from "expo-router/build/link/href";
import * as React from "react";
import {
  PressableProps,
  Pressable,
  View,
  StyleProp,
  ViewStyle,
} from "react-native";
import { ViewProps } from "react-native-svg/lib/typescript/fabric/utils";
import { Style } from "twrnc";

import Text from "@/components/base/Text";
import tw from "@/lib/tailwind";

interface Props extends PressableProps {
  title?: string;
  style?: StyleProp<ViewStyle>;
  pressableStyle?: StyleProp<ViewStyle>;
  size?: Size;
  color?: Color;
  href?: Href;
}
type Color = "primary" | "secondary" | "green" | "gray";
type Size = "lg" | "md" | "base" | "sm" | "xs";

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

const PressableWrapperMapping = {
  primary: PrimaryWrapper,
  secondary: PassthroughWrapper,
  green: GreenWrapper,
  gray: GrayWrapper,
};

interface SizeValues {
  buttonStyle: Style;
  fontStyle: Style;
}

const SizeMapping = {
  lg: { buttonStyle: tw`rounded-lg`, fontstyle: tw`text-base` },
  md: { buttonStyle: tw`rounded-md`, fontstyle: tw`text-base` },
  base: { buttonStyle: tw`rounded`, fontstyle: tw`text-sm` },
  sm: { buttonStyle: tw`rounded-sm`, fontstyle: tw`text-sm` },
  xs: { buttonStyle: tw`rounded-xs`, fontstyle: tw`text-sm` },
};

const Button = ({
  title,
  style,
  pressableStyle,
  color = "primary",
  children,
  href,
  onPress,
  ...pressableProps
}: Props) => {
  const PressableWrapper = PressableWrapperMapping[color];

  return (
    <View style={[tw`mb-4`, style]}>
      <PressableWrapper
        style={[tw`rounded-lg`, { backgroundColor: "rgba(56, 52, 42, 0.38)" }]}
      >
        <Pressable
          style={[
            tw`rounded-lg px-6 pt-[13px] pb-[15px] border-2 
                     text-black flex flex-row items-center justify-center`,
            color === "primary" && tw`border-[#ffd978]`,
            color === "secondary" &&
              tw`border border-[#FFC93F]  rounded-[11px]  pt-[14px] pb-[16px] bg-[#151515]`,
            color === "gray" && tw`border-[#8A8A8A]`,
            color === "green" && tw`border-[#56E75C]`,
            pressableStyle,
          ]}
          onPress={(event) => {
            if (onPress) {
              onPress(event);
            }
            if (href) {
              router.push(href);
            }
          }}
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
