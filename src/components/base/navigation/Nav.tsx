import { router } from "expo-router";
import React, { useState } from "react";
import { Animated, Pressable, StyleProp, View, ViewStyle } from "react-native";

import Text from "@/components/base/Text";
import { styles } from "@/components/base/styles";
import tw from "@/lib/tailwind";

interface Props {
  title: string;
  showBack?: boolean;
  style?: StyleProp<ViewStyle>;
  collapseValue?: Animated.Value; // from 0 to 10000
}

// {
//   backgroundColor: scrollY <= 16 ? "transparent" : "#0A0A0A",
//   paddingTop,
// },

const PADDING_TOP = 40;
const BACKGROUND_COLOR = "rgba(10, 10, 10, 0)";
const FONT_SIZE = 20;

const COLLAPSED_PADDING_TOP = 10;
const COLLAPSED_BACKGROUND_COLOR = "rgba(10, 10, 10, 1)"; // #0A0A0A
const COLLAPSED_FONT_SIZE = 16;

const Nav = ({ title, showBack, style, collapseValue }: Props) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const paddingTop = collapseValue
    ? collapseValue.interpolate({
        inputRange: [0, 100],
        outputRange: [PADDING_TOP, COLLAPSED_PADDING_TOP],
        extrapolate: "clamp",
      })
    : PADDING_TOP;
  const fontSize = collapseValue
    ? collapseValue.interpolate({
        inputRange: [0, 100],
        outputRange: [FONT_SIZE, COLLAPSED_FONT_SIZE],
        extrapolate: "clamp",
      })
    : PADDING_TOP;
  const backgroundColor = collapseValue
    ? collapseValue.interpolate({
        inputRange: [0, 100],
        outputRange: [BACKGROUND_COLOR, COLLAPSED_BACKGROUND_COLOR],
        extrapolate: "clamp",
      })
    : BACKGROUND_COLOR;

  collapseValue?.addListener((v) => {
    setIsCollapsed(v.value >= 100);
  });

  return (
    <Animated.View
      style={[
        tw`w-full flex flex-row items-center justify-between pb-3 px-2`,
        style,
        {
          paddingTop,
          backgroundColor,
        },
      ]}
    >
      <View style={tw`w-14 flex flex-row justify-start`} />
      <Animated.Text
        style={[styles.mediumWeightFont, tw`text-white`, { fontSize }]}
      >
        {title}
      </Animated.Text>
      <View style={tw`w-14 flex flex-row justify-end`}>
        {showBack && (
          <Pressable
            onPress={() => {
              router.back();
            }}
          >
            <Text color="secondary">Back</Text>
          </Pressable>
        )}
      </View>
    </Animated.View>
  );
};

export default Nav;
