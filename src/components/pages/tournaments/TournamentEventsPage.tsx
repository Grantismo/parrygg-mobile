import React, { useState } from "react";
import {
  GestureResponderEvent,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import DraggableFlatList, {
  RenderItemParams,
  ShadowDecorator,
} from "react-native-draggable-flatlist";

import Background from "@/components/base/Background";
import Button from "@/components/base/Button";
import Text from "@/components/base/Text";
import Nav from "@/components/base/navigation/Nav";
import SettingsButton from "@/components/base/settings/SettingsButton";
import TournamentBreadcrumb from "@/components/base/tournaments/TournamentBreadcrumb";
import tw from "@/lib/tailwind";
import DragHandle from "@assets/icons/DragHandle";
import Plus from "@assets/icons/Plus";

interface Event {
  title: string;
  imgSrc: string;
}

interface EventButtonParams {
  title: string;
  imgSrc: string;
  dragProps: {
    drag: (event: GestureResponderEvent) => void;
    disabled: boolean;
  };
}
const EventButton = ({
  title,
  imgSrc,
  dragProps: { drag, disabled },
}: EventButtonParams) => {
  return (
    <SettingsButton path="">
      <View style={tw`w-full flex flex-row items-center justify-between`}>
        <View style={tw`flex-row items-center justify-center`}>
          <TouchableOpacity hitSlop={10} onPressIn={drag} disabled={disabled}>
            <DragHandle style={tw`mr-3`} color="#777777" />
          </TouchableOpacity>
          <Image style={tw`h-6 w-10 mr-4 rounded-2xs`} src={imgSrc} />
          <Text>{title}</Text>
        </View>
      </View>
    </SettingsButton>
  );
};

const TournamentEventsPage = () => {
  const [events, setEvents] = useState<Event[]>([
    { title: "SSBU: Singles", imgSrc: "https://i.imgur.com/I3HiTD7.png" },
    { title: "SSBU: Doubles", imgSrc: "https://i.imgur.com/ETSVJpG.png" },
    { title: "SF6: Singles", imgSrc: "https://i.imgur.com/I3HiTD7.png" },
  ]);

  const renderItem = ({ item, drag, isActive }: RenderItemParams<Event>) => {
    return (
      <ShadowDecorator>
        <EventButton {...item} dragProps={{ drag, disabled: isActive }} />
      </ShadowDecorator>
    );
  };
  return (
    <Background style={tw`p-0 justify-start`}>
      <Nav title="Manage Events" showBack collapsed />
      <TournamentBreadcrumb />
      <View style={tw`h-full w-full p-6`}>
        <DraggableFlatList
          data={events}
          onDragEnd={({ data }) => setEvents(data)}
          keyExtractor={(s) => s.title}
          renderItem={renderItem}
        />
        <Button size="lg" style={tw`w-full`}>
          <Plus color="#1B1B1B" style={tw`mr-2`} />
          <Text color="black">Add Event</Text>
        </Button>
      </View>
    </Background>
  );
};

export default TournamentEventsPage;
