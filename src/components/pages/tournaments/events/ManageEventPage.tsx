import React from "react";
import { View } from "react-native";

import Background from "@/components/base/Background";
import Button from "@/components/base/Button";
import Nav from "@/components/base/navigation/Nav";
import SettingsButton from "@/components/base/settings/SettingsButton";
import TournamentBreadcrumb from "@/components/base/tournaments/TournamentBreadcrumb";
import tw from "@/lib/tailwind";
import Bracket from "@assets/icons/Bracket";
import Page from "@assets/icons/Page";
import Seeding from "@assets/icons/Seeding";

const ManageEventPage = () => {
  return (
    <Background style={tw`p-0 justify-start`}>
      {/* TODO: Replace placeholder title */}
      <Nav title="SSBU: Singles" showBack collapsed />
      <TournamentBreadcrumb />
      <View style={tw`grow p-6`}>
        <SettingsButton
          title="Event Details"
          icon={<Page />}
          path="/tournaments/events/details"
        />
        <SettingsButton
          title="Seeding"
          icon={<Seeding />}
          path="/tournaments/events/seeding"
        />
        <SettingsButton
          title="Brackets"
          icon={<Bracket />}
          path="/tournaments/events/brackets"
        />

        <Button color="red" title="Delete Event" />
      </View>
    </Background>
  );
};

export default ManageEventPage;
