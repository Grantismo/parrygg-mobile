import { format } from "date-fns";
import React from "react";
import { View, Image } from "react-native";

import Background from "@/components/base/Background";
import Button from "@/components/base/Button";
import Card from "@/components/base/Card";
import Text from "@/components/base/Text";
import Title from "@/components/base/Title";
import CalanderArrow from "@/components/base/calendar/CalanderArrow";
import Nav from "@/components/base/navigation/Nav";
import tw from "@/lib/tailwind";
import { timestampToDate } from "@/lib/utils";
import Calendar from "@assets/icons/Calendar";
import Profile from "@assets/icons/Profile";
import RightArrow from "@assets/icons/RightArrow";

const UpcomingOpenEvent = ({ timestamp }: Props) => (
  <Card>
    <Image
      style={tw`w-full h-40 rounded-t-lg`}
      src="https://imgur.com/o3yTFTq.png"
    />
    <View style={tw`flex-col p-6 bg-[#151515]`}>
      <View style={tw`items-center justify-center pb-6`}>
        <Title style={tw`text-base mb-2`}>Michael's Melee Monday #49</Title>
        <Text color="secondary" style={tw`text-center text-sm`}>
          1882 S Wadsworth Blvd, Lakewood, CO 80232, USA
        </Text>
        <View style={tw`mt-2 flex-row items-center justify-center`}>
          <Profile color="white" height="14" style={tw`mr-1`} />
          <Text style={tw`text-sm`}>3,285 Attendees</Text>
        </View>
      </View>
      <Button
        title="Registration Open"
        style={tw`w-full`}
        href={`/calendar/${timestamp}/tournament/123`}
      />
    </View>
  </Card>
);

const UpcomingLiveEvent = () => (
  <Card>
    <Image
      style={tw`w-full h-40 rounded-t-lg`}
      src="https://imgur.com/8ny13Be.png"
    />
    <View style={tw`flex-col p-6`}>
      <View style={tw`items-center justify-center pb-6`}>
        <Title style={tw`text-base mb-2`}>Battle of BC 6</Title>
        <Text color="secondary" style={tw`text-center text-sm`}>
          Vancouver Convention Centre West Building, Canada Pl, Vancouver, BC
          V6C 3G3, Canada
        </Text>
        <View style={tw`mt-2 flex-row items-center justify-center`}>
          <Profile color="white" height="14" style={tw`mr-1`} />
          <Text style={tw`text-sm`}>3,285 Attendees</Text>
        </View>
      </View>
      <Button color="green" title="Live Event Stats" style={tw`w-full`} />
    </View>
  </Card>
);

const EndedEvent = () => (
  <Card>
    <Image
      style={tw`w-full h-40 rounded-t-lg`}
      src="https://imgur.com/Sm54xX7.png"
    />
    <View style={tw`flex-col p-6`}>
      <View style={tw`items-center justify-center pb-6`}>
        <Title style={tw`text-base mb-2`}>Battle of BC 6</Title>
        <Text color="secondary" style={tw`text-center text-sm`}>
          Vancouver Convention Centre West Building, Canada Pl, Vancouver, BC
          V6C 3G3, Canada
        </Text>
        <View style={tw`mt-2 flex-row items-center justify-center`}>
          <Profile color="white" height="14" style={tw`mr-1`} />
          <Text style={tw`text-sm`}>3,285 Attendees</Text>
        </View>
      </View>
      <Button color="gray" title="Event Ended" style={tw`w-full`} />
    </View>
  </Card>
);

interface Props {
  timestamp: string;
}

const CalendarDatePage = ({ timestamp }: Props) => {
  const date = timestampToDate(timestamp);

  return (
    <Background scroll>
      <Nav title="Calendar" />
      <View
        style={tw`w-full bg-[#161616] rounded-lg border border-[#777777] flex-row items-center justify-between p-2`}
      >
        <CalanderArrow direction="left" />
        <View style={tw`flex-row items-center justify-center`}>
          <Calendar color="white" style={tw`mr-2`} />
          <Text style={tw`text-lg`}>{format(date, "d MMMM yyyy")}</Text>
        </View>
        <CalanderArrow direction="right" />
      </View>
      <View style={tw`grow w-full pb-2`}>
        <View style={tw`flex-row items-center my-4`}>
          <RightArrow color="#FFC93F" style={tw`mr-2`} />
          <Title style={tw`text-base`}>Smash Bros. Ultimate Tournaments</Title>
        </View>
        <UpcomingOpenEvent timestamp={timestamp} />
        <UpcomingLiveEvent />
        <EndedEvent />
      </View>
    </Background>
  );
};

export default CalendarDatePage;
