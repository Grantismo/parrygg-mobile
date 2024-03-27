import React from "react";
import { View, Image, ScrollView } from "react-native";

import Background from "@/components/base/Background";
import Button from "@/components/base/Button";
import Text from "@/components/base/Text";
import Nav from "@/components/base/navigation/Nav";
import AttendeeSearchBox from "@/components/base/search/AttendeeSearchBox";
import Checkbox from "@/components/forms/Checkbox";
import tw from "@/lib/tailwind";
import Plus from "@assets/icons/Plus";
import Profile from "@assets/icons/Profile";

const NUM_COLS = 6;

const TournamentAttendeesPage = () => {
  const attendees = [
    { name: "blorppppp", description: "Grant W (he/him)" },
    { name: "destinybond", description: "Mitchell E. (he/him)" },
    { name: "DSJ", description: "Adam J. (he/him)" },
    { name: "GetCrabby", description: "Geoff (he/him)" },
    { name: "Schwang", description: "Hannah S. (she/her)" },
  ];

  const Col = ({ index }: { index: number }) => {
    return (
      <View
        style={[
          tw`flex-col items-center justify-center mt-1 py-3`,
          index === 0 && tw`pl-2`,
        ]}
      >
        <View style={tw`h-12`}>
          {index === 0 && (
            <Text color="green" style={tw`mt-1`}>
              Paid
            </Text>
          )}
          {index > 0 && (
            <View style={tw`flex-col items-center justify-center w-14`}>
              <Image
                style={tw`h-8 w-12`}
                src="https://imgur.com/dO2poBH.jpeg"
              />
              <View style={tw`flex-row mt-1`}>
                <Profile height={6} color="white" />
              </View>
            </View>
          )}
        </View>

        {[...Array(attendees.length)].map((_, i: number) => {
          return (
            <View key={i} style={tw`h-14`}>
              {index === 0 && (
                <View style={tw`w-10 items-center`}>
                  <Checkbox color="green" />
                </View>
              )}
              {index > 0 && (
                <View style={tw`w-14 items-center`}>
                  <Checkbox color="yellow" includePartialState />
                </View>
              )}
            </View>
          );
        })}
      </View>
    );
  };

  return (
    <Background scroll style={tw`p-0`}>
      <Nav title="Attendees" showBack />
      <View style={tw`w-full p-6`}>
        <Button style={tw`w-full`}>
          <Plus color="#1B1B1B" style={tw`mr-2`} />
          <Text color="black">Add Attendee</Text>
        </Button>
        <AttendeeSearchBox />
      </View>

      <View style={tw`flex-row w-full`}>
        <View style={tw`flex-col bg-[#0A0A0A] p-3 rounded-r w-42`}>
          <Text>
            Attendees <Text color="accent">(45)</Text>
          </Text>
          {attendees.map((a) => {
            return (
              <View key={a.name} style={tw`flex-col mt-3`}>
                <Text numberOfLines={1}>{a.name}</Text>
                <Text color="secondary" numberOfLines={1}>
                  {a.description}
                </Text>
              </View>
            );
          })}
        </View>
        <ScrollView horizontal>
          {[...Array(NUM_COLS)].map((_, i) => (
            <Col key={i} index={i} />
          ))}
        </ScrollView>
      </View>
    </Background>
  );
};

export default TournamentAttendeesPage;