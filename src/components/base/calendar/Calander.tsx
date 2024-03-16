import { format } from "date-fns";
import React, { useState } from "react";
import { ColorValue, TouchableOpacity, View } from "react-native";
import {
  Calendar as BigCalendar,
  CalendarTouchableOpacityProps,
} from "react-native-big-calendar";

import Text from "@/components/base/Text";
import CalanderArrow from "@/components/base/calendar/CalanderArrow";
import { styles } from "@/components/base/styles";
import tw from "@/lib/tailwind";
import CalendarIcon from "@assets/icons/Calendar";

interface Event {
  title: string;
  start: Date;
  end: Date;
  color?: ColorValue;
}

interface Props {
  onPressEvent: (event: Event) => void;
}

const Calendar = ({ onPressEvent }: Props) => {
  const [date, setDate] = useState(new Date("2024-3-14"));
  const events = [
    {
      title: "Foco Weekly Wenesday",
      start: new Date("2024-3-14"),
      end: new Date("2024-3-14"),
      color: "#FFC93F",
    },
    {
      title: "Michael's Melee Monday",
      start: new Date("2024-3-12"),
      end: new Date("2024-3-12"),
      color: "#39D83F",
    },
    {
      title: "Melee Fridays at Boulder",
      start: new Date("2024-3-16"),
      end: new Date("2024-3-16"),
      color: "#36ABFF",
    },
    {
      title: "Genesis X",
      start: new Date("2024-3-17"),
      end: new Date("2024-3-19"),
      color: "#FF7253",
    },
  ];

  const onChangeDate = ([start, end]: [start: Date, end: Date]) => {
    console.log(start);
  };

  console.log("rerender");

  return (
    <View
      style={[
        tw`border border-[#777777] bg-[#161616] rounded-lg overflow-hidden`,
        { height: 600 },
      ]}
    >
      <View style={tw`flex-row p-2 items-center justify-between mb-2`}>
        <CalanderArrow direction="left" />
        <View style={tw`flex-row items-center justify-center`}>
          <CalendarIcon color="white" style={tw`mr-2`} />
          <Text style={tw`text-lg`}>{format(date, "MMMM yyyy")}</Text>
        </View>
        <CalanderArrow direction="right" />
      </View>
      <BigCalendar
        mode="month"
        theme={{
          palette: {
            primary: {
              main: "#FFC93F",
              contrastText: "#000",
            },
            gray: {
              "100": "#262626",
              "200": "#262626",
              "300": "#888",
              "500": "#aaa",
              "800": "#ccc",
            },
          },
          typography: styles.defaultWeightFont,
        }}
        events={events}
        height={600}
        onPressEvent={onPressEvent}
        renderEvent={(
          event: Event,
          { style, ...touchableOpacityProps }: CalendarTouchableOpacityProps,
        ) => (
          <TouchableOpacity
            style={[
              style,
              { backgroundColor: event.color },
              tw`py-0.5 px-[2px] rounded-2xs`,
            ]}
            {...touchableOpacityProps}
          >
            <Text
              numberOfLines={2}
              color="black"
              style={tw`text-2xs`}
              ellipsizeMode="tail"
            >
              {event.title}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Calendar;
