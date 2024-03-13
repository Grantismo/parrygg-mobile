import React from "react";
import { View } from "react-native";
import { Calendar as NativeCalendar } from "react-native-calendars";
import { DateData, Direction } from "react-native-calendars/src/types";

import Text from "@/components/base/Text";
import CalanderArrow from "@/components/base/calendar/CalanderArrow";
import tw from "@/lib/tailwind";
import CalendarIcon from "@assets/icons/Calendar";

interface Props {
  onDayPress: (date: DateData) => void;
}

const Calendar = ({ onDayPress }: Props) => {
  return (
    <NativeCalendar
      current="2024-01-05"
      style={tw`bg-[#161616] border border-[#777777] rounded-xl overflow-hidden`}
      onDayPress={onDayPress}
      renderHeader={(date) => (
        <View style={tw`flex-row items-center justify-center`}>
          <CalendarIcon color="white" style={tw`mr-2`} />
          <Text style={tw`text-lg`}>{date.toString("MMMM yyyy")}</Text>
        </View>
      )}
      renderArrow={(direction: Direction) => (
        <CalanderArrow direction={direction} />
      )}
      markedDates={{
        "2024-01-01": { selected: true },
        "2024-01-03": { selected: true },
      }}
    />
  );
};

export default Calendar;
