import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React from "react";
import { Pressable, View } from "react-native";

import Background from "@/components/base/Background";
import Button from "@/components/base/Button";
import Text from "@/components/base/Text";
import Nav from "@/components/base/navigation/Nav";
import Profile from "@/components/player/Profile";
import tw from "@/lib/tailwind";
import ProfileIcon from "@assets/icons/Profile";
import RightArrow from "@assets/icons/RightArrow";

const SettingsPage = () => {
  interface SettingButtonProps {
    title: string;
    icon: JSX.Element;
    path: string;
  }

  const SettingButton = ({ title, icon, path }: SettingButtonProps) => {
    return (
      <Pressable
        style={tw`w-full rounded-xl border border-[#777777]  mb-6 bg-[#151515]`}
        onPress={() => router.push(path)}
      >
        <LinearGradient
          style={tw`w-full p-6 rounded-xl flex-row items-center justify-between`}
          start={[0, 1]}
          end={[1, 0]}
          colors={["#121212", "#1b1b1b"]}
        >
          <View style={tw`flex-row`}>
            {React.cloneElement(icon, { style: tw`mr-2`, color: "white" })}
            <Text>{title}</Text>
          </View>
          <RightArrow color="#FFC93F" />
        </LinearGradient>
      </Pressable>
    );
  };
  return (
    <Background>
      <Nav title="Settings" showBack />
      <View style={tw`grow w-full pb-2`}>
        <View
          style={tw`w-full rounded-xl border border-white  mb-6 bg-[#151515]`}
        >
          <LinearGradient
            style={tw`w-full p-6 rounded-xl`}
            colors={["#0C0C0C", "#161616"]}
          >
            <Profile />
          </LinearGradient>
        </View>
        <SettingButton
          title="Profile"
          icon={<ProfileIcon />}
          path="/main/settings/profile"
        />
        <View style={tw`grow`} />
        <Button title="Log Out" />
      </View>
    </Background>
  );
};

export default SettingsPage;
