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

import Text from "./Text";

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
                     text-black flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2`,
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
