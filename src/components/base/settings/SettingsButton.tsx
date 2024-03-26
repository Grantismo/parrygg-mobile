import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React from "react";
import { Pressable, View, ViewProps } from "react-native";

import Text from "@/components/base/Text";
import tw from "@/lib/tailwind";
import RightArrow from "@assets/icons/RightArrow";

interface SettingButtonProps extends ViewProps {
  title?: string;
  icon?: JSX.Element;
  path: string;
}

const SettingsButton = ({
  title,
  icon,
  path,
  children,
  ...props
}: SettingButtonProps) => {
  return (
    <Pressable
      style={tw`w-full rounded-lg border border-[#777777]  mb-6 bg-[#151515]`}
      onPress={() => router.push(path)}
    >
      <LinearGradient
        style={tw`w-full p-[1.1rem] rounded-lg flex-row items-center justify-between`}
        start={[0, 1]}
        end={[1, 0]}
        colors={["#121212", "#1b1b1b"]}
      >
        <View style={tw`flex-row items-center justify-center`} {...props}>
          {icon &&
            React.cloneElement(icon, { style: tw`mr-3`, color: "white" })}
          {title && <Text>{title}</Text>}
          {children && children}
        </View>
        <RightArrow color="#FFC93F" />
      </LinearGradient>
    </Pressable>
  );
};

export default SettingsButton;
