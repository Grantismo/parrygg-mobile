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
    <Background scroll>
      <Nav title="Create Tournament" showBack />
      <View style={tw`grow`}>
        <ImageUpload style={tw`mb-6 h-48 rounded-lg`} />
        <SettingsButton
          title="Settings"
          icon={<Gear />}
          path="/tournaments/settings"
        />
        <SettingsButton
          title="Page Content"
          icon={<Page />}
          path="/tournaments/pagecontent"
        />
        <SettingsButton
          title="Events"
          icon={<Blocks />}
          path="/tournaments/events"
        />
        <SettingsButton
          title="Attendees"
          icon={<Profile />}
          path="/tournaments/attendees"
        />
      </View>
    </Background>
  );
};

export default CreateTournamentPage;
