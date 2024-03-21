import { router } from "expo-router";
import React from "react";
import { Pressable, StyleProp, View, ViewStyle } from "react-native";

import Text from "@/components/base/Text";
import Title from "@/components/base/Title";
import tw from "@/lib/tailwind";

interface Props {
  title: string;
  showBack?: boolean;
  style?: StyleProp<ViewStyle>;
}

const Nav = ({ title, showBack, style }: Props) => {
  return (
    <View
      style={[
        tw`w-full flex flex-row items-center justify-between py-5 px-2`,
        style,
      ]}
    >
      <View style={tw`w-14 flex flex-row justify-start`} />
      <Title>{title}</Title>
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
    </View>
  );
};

export default Nav;
