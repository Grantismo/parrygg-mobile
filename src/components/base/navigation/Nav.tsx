import { router } from "expo-router";
import React from "react";
import { Pressable, View } from "react-native";

import Text from "@/components/base/Text";
import Title from "@/components/base/Title";
import tw from "@/lib/tailwind";

interface Props {
  title: string;
  showBack?: boolean;
}

const Nav = ({ title, showBack }: Props) => {
  return (
    <View
      style={tw`w-full flex flex-row items-center 
      justify-between pt-4 pb-6 px-4`}
    >
      <View style={tw`w-14 flex flex-row justify-start`} />
      <Title style={tw`mb-0`}>{title}</Title>
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
