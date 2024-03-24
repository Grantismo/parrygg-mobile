import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View } from "react-native";

import Background from "@/components/base/Background";
import Button from "@/components/base/Button";
import Nav from "@/components/base/navigation/Nav";
import SettingsButton from "@/components/base/settings/SettingsButton";
import Profile from "@/components/player/Profile";
import tw from "@/lib/tailwind";
import ProfileIcon from "@assets/icons/Profile";

const SettingsPage = () => {
  return (
    <Background>
      <Nav title="Settings" />
      <View style={tw`grow w-full pb-2`}>
        <View
          style={tw`w-full rounded-lg border border-white  mb-6 bg-[#151515]`}
        >
          <LinearGradient
            style={tw`w-full p-6 rounded-lg`}
            colors={["#121212", "#1E1E1E"]}
          >
            <Profile />
          </LinearGradient>
        </View>
        <SettingsButton
          title="Profile"
          icon={<ProfileIcon />}
          path="/settings/profile"
        />
        <View style={tw`grow`} />
        <Button title="Log Out" />
      </View>
    </Background>
  );
};

export default SettingsPage;
