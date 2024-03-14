import { router } from "expo-router";
import React from "react";
import { View } from "react-native";
import { DateData } from "react-native-calendars";

import Background from "@/components/base/Background";
import Calendar from "@/components/base/calendar/Calander";
import Nav from "@/components/base/navigation/Nav";
import tw from "@/lib/tailwind";

const CalendarPage = () => {
  const onDayPress = (date: DateData) => {
    router.push({
      pathname: "/main/calendar/[timestamp]",
      params: { timestamp: date.timestamp },
    });
  };

  return (
    <Background>
      <Nav title="Calendar" />
      <View style={tw`grow w-full pb-2`}>
        <Calendar onDayPress={onDayPress} />
      </View>
    </Background>
  );
};

export default CalendarPage;
