import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { GestureResponderEvent, TouchableOpacity, View } from "react-native";
import {
  NestableDraggableFlatList,
  RenderItemParams,
  ShadowDecorator,
} from "react-native-draggable-flatlist";

import Background from "@/components/base/Background";
import Button from "@/components/base/Button";
import Text from "@/components/base/Text";
import Nav from "@/components/base/navigation/Nav";
import TournamentBreadcrumb from "@/components/base/tournaments/TournamentBreadcrumb";
import ProfilePicture from "@/components/player/ProfilePicture";
import tw from "@/lib/tailwind";
import DragHandle from "@assets/icons/DragHandle";

interface Attendee {
  name: string;
  description: string;
}

const AttendeeSeedCard = ({
  attendee,
  seed,
  dragProps: { drag, disabled },
}: {
  attendee: Attendee;
  seed: number;
  dragProps: {
    drag: (event: GestureResponderEvent) => void;
    disabled: boolean;
  };
}) => {
  return (
    <View style={tw`border border-[#777777] rounded-lg my-1.5 `}>
      <LinearGradient
        style={tw`w-full p-2 rounded-lg`}
        start={[0, 1]}
        end={[1, 0]}
        colors={["#121212", "#1b1b1b"]}
      >
        <TouchableOpacity
          style={tw` flex-row items-center justify-between`}
          hitSlop={10}
          onPressIn={drag}
          disabled={disabled}
        >
          <View style={tw`flex-row items-center justify-center p-1`}>
            <ProfilePicture style={tw`mr-2 h-8 w-8 border`} />
            <Text>{attendee.name}</Text>
          </View>
          <View style={tw`flex-row items-center justify-center`}>
            <Text>{seed}</Text>
            <DragHandle color="#777777" style={tw`ml-3 mr-2`} />
          </View>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

const EventSeedingPage = () => {
  const [attendees, setAttendees] = useState([
    { name: "blorppppp", description: "Grant W" },
    { name: "destinybond", description: "Mitchell E." },
    { name: "DSJ", description: "Adam J." },
    { name: "GetCrabby", description: "Geoff" },
    { name: "Schwang", description: "Hannah S." },
  ]);

  const renderItem = ({
    item,
    getIndex,
    drag,
    isActive,
  }: RenderItemParams<Attendee>) => {
    return (
      <ShadowDecorator>
        <AttendeeSeedCard
          attendee={item}
          seed={getIndex() + 1}
          dragProps={{ drag, disabled: isActive }}
        />
      </ShadowDecorator>
    );
  };

  return (
    <Background style={tw`p-0 justify-start`} collapsedNav>
      {/* TODO: Replace placeholder title */}
      <Nav title="Seeding" showBack />
      <TournamentBreadcrumb />
      <View style={tw`w-full p-6`}>
        <Button size="lg" title="Mark All As Seeded" />
        <Text style={tw`my-2`}>
          42 <Text color="secondary">Unseeded Registrants</Text>
        </Text>
        <NestableDraggableFlatList
          data={attendees}
          onDragEnd={({ data }) => setAttendees(data)}
          keyExtractor={(s) => s.name}
          renderItem={renderItem}
        />
      </View>
    </Background>
  );
};

export default EventSeedingPage;
