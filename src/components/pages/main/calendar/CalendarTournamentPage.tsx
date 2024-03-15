import { format } from "date-fns";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, View } from "react-native";

import Background from "@/components/base/Background";
import Button from "@/components/base/Button";
import Card from "@/components/base/Card";
import Sep from "@/components/base/Sep";
import Text from "@/components/base/Text";
import Title from "@/components/base/Title";
import Nav from "@/components/base/navigation/Nav";
import tw from "@/lib/tailwind";
import { timestampToDate } from "@/lib/utils";
import Bracket from "@assets/icons/Bracket";
import Profile from "@assets/icons/Profile";
import SSBU from "@assets/icons/SSBU";

interface Props {
  timestamp: string;
  tournamentId: string;
}

const ImageSep = () => {
  return (
    <LinearGradient
      style={tw`h-[2px] w-full`}
      start={[0, 1]}
      end={[1, 0]}
      colors={["#FFC93F", "rgba(255, 201, 63, 0.00)"]}
    />
  );
};

const TournamentDetailButton = ({
  title,
  color = "primary",
}: {
  title: string;
  color?: "primary" | "accent";
}) => {
  return (
    <Card
      color={color}
      style={tw`w-full pt-3 pb-4 px-5 rounded-lg flex-row items-center justify-between mb-4`}
    >
      <Title style={tw`text-base`} color={color}>
        {title}
      </Title>
      <Text color="accent">+</Text>
    </Card>
  );
};

const CalendarTournamentPage = ({ timestamp, tournamentId }: Props) => {
  const date = timestampToDate(timestamp);

  return (
    <Background scroll style={tw`p-0`}>
      <Nav title={format(date, "d MMMM yyyy")} showBack />
      <ImageSep />
      <Image
        style={tw`w-full h-48 `}
        src="https://imgur.com/o3yTFTq.png"
      />
      <ImageSep />
      <View style={tw`bg-[#151515] w-full items-center`}>
        <Image
          style={tw`bg-white h-20 w-20 rounded-[2.5rem] border-2 border-[#39D83F] ml-3 flex flex-row -mt-14`}
          src="https://imgur.com/TPvwlB3.jpeg"
        />
        <View style={tw`items-center justify-center pb-6 px-12`}>
          <Title style={tw`text-base mb-2 mt-2`} color="accent">
            Michael's Melee Monday #49
          </Title>
          <Text color="secondary" style={tw`text-center text-sm`}>
            1882 S Wadsworth Blvd, Lakewood, CO 80232, USA
          </Text>
          <View style={tw`mt-2 flex-row items-center justify-center`}>
            <Profile color="white" height="14" style={tw`mr-1`} />
            <Text style={tw`text-sm`}>3,285 Attendees</Text>
          </View>
        </View>
        <View style={tw`w-full bg-[#1B1B1B] p-6`}>
          <Text style={tw`mb-1.5`}>Welcome to Melee Mondays #49</Text>
          <Text style={tw`text-sm pb-6`} color="secondary">
            Our milestone 10th event is shaping up to be our most expansive yet.
            With a over 200,000 square feet of gaming space, we're taking things
            to the next level a over 200,000 square feet. Our milestone 10th
            event is shaping up to be our most expansive yet.
          </Text>
          <TournamentDetailButton color="accent" title="Please Read!" />
          <TournamentDetailButton title="Why attend Genesis" />
          <TournamentDetailButton title="Registration Information" />
          <Text style={tw`my-2`}>Events</Text>
          <Card style={tw`px-6 py-4`}>
            <View style={tw`flex-row items-center justify-start`}>
              <SSBU style={tw`mr-2`} />
              <Title style={tw`text-base`}>
                Smash Bros. Ultimate:{" "}
                <Title style={tw`text-base`} color="accent">
                  Singles
                </Title>
              </Title>
            </View>
            <View style={tw`flex-row my-4`}>
              <Image
                style={tw`w-16 h-24 rounded-xs`}
                src="https://i.imgur.com/i5JkruJ.jpeg"
              />
              <View style={tw`p-3`}>
                <Text color="secondary" style={tw`text-sm`}>
                  March 29th 2024
                </Text>
                <Text color="secondary" style={tw`text-sm`}>
                  Super Smash Bros. Ultimate
                </Text>
                <Title style={tw`text-base mt-2`}>$12.99</Title>
              </View>
            </View>
            <Button title="Join Now" />
            <Text color="secondary" style={tw`text-sm text-center mb-4`}>
              Registration closes Mar 23, 2024 8:59 AM UTC+02:00
            </Text>
            <Sep />
            <View style={tw`flex-row items-center pt-6 `}>
              <Button color="secondary" style={tw`flex-1 mr-2`}>
                <Bracket color="#FFC93F" height={14} style={tw`mr-2`} />
                <Text color="accent" style={tw`text-sm mr-2`}>
                  Brackets
                </Text>
              </Button>
              <Button color="secondary" style={tw`flex-1`}>
                <Profile color="#FFC93F" height={14} style={tw`mr-2`} />
                <Text color="accent" style={tw`text-sm`}>
                  My Players
                </Text>
              </Button>
            </View>
          </Card>
          <Text style={tw`my-2`}>Useful Information</Text>
          <TournamentDetailButton title="Attendees" />
          <TournamentDetailButton title="Contact Info" />
          <TournamentDetailButton title="Location" />
          <TournamentDetailButton title="Admins" />
        </View>
      </View>
    </Background>
  );
};

export default CalendarTournamentPage;
