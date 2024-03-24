import React from "react";
import { View } from "react-native";

import Background from "@/components/base/Background";
import ImageUpload from "@/components/base/images/ImageUpload";
import Nav from "@/components/base/navigation/Nav";
import SettingsButton from "@/components/base/settings/SettingsButton";
import tw from "@/lib/tailwind";
import Blocks from "@assets/icons/Blocks";
import Gear from "@assets/icons/Gear";
import Page from "@assets/icons/Page";
import Profile from "@assets/icons/Profile";

const CreateTournamentPage = () => {
  return (
    <Background>
      <Nav title="Create Tournament" showBack />
      <View style={tw`grow`}>
        <ImageUpload style={tw`mb-6 h-48`} />
        <SettingsButton
          title="Settings"
          icon={<Gear />}
          path="/tournaments/settings"
        />
        <SettingsButton title="Page Content" icon={<Page />} path="" />
        <SettingsButton title="Events" icon={<Blocks />} path="" />
        <SettingsButton title="Attendees" icon={<Profile />} path="" />
      </View>
    </Background>
  );
};

export default CreateTournamentPage;