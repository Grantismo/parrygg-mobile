import { LinearGradient } from "expo-linear-gradient";
import * as React from "react";
import {
  PressableProps,
  Pressable,
  View,
  StyleProp,
  ViewStyle,
} from "react-native";
import tw from "twrnc";

import Text from "@/components/base/Text";

interface Props extends PressableProps {
  title?: string;
  style?: StyleProp<ViewStyle>;
}

const Button = ({ title, style, children, ...pressableProps }: Props) => {
  // Negative z-index hack to display behind drop down elements
  //

  return (
    <View style={tw`mb-4 w-full`}>
      <LinearGradient
        style={tw`rounded-[14px]`}
        colors={["#EFB31A", "#FFCB46"]}
      >
        <Pressable
          style={[
            tw`rounded-[14px] pt-[13px] pb-[15px] border-2 border-[#ffd978]
                     text-black flex flex-row items-center justify-center`,
            style,
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
      </LinearGradient>
    </View>
  );
};

export default Button;
