import React from "react";
import { View, Image, ScrollView } from "react-native";

import Button from "@/components/base/Button";
import Card from "@/components/base/Card";
import Sep from "@/components/base/Sep";
import Text from "@/components/base/Text";
import Title from "@/components/base/Title";
import Placement from "@/components/player/Placement";
import Result from "@/components/player/Result";
import tw from "@/lib/tailwind";
import Bracket from "@assets/icons/Bracket";
import Calendar from "@assets/icons/Calendar";
import Pin from "@assets/icons/Pin";
import Plus from "@assets/icons/Plus";
import Profile from "@assets/icons/Profile";
import SSBU from "@assets/icons/SSBU";
import Twitch from "@assets/icons/Twitch";
import Twitter from "@assets/icons/Twitter";

const UpcomingEvent = () => {
  return (
    <Card>
      <Image
        style={tw`w-full h-40 rounded-t-[14px]`}
        src="https://imgur.com/o3yTFTq.png"
      />
      <View style={tw`flex-col p-6`}>
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
        <Sep />
        <View style={tw`flex-row items-center justify-center py-2`}>
          <SSBU />
          <Title style={tw`text-sm my-2 ml-2`}>
            Smash Bros. Ultimate:{" "}
            <Title color="accent" style={tw`text-sm`}>
              Singles
            </Title>
          </Title>
        </View>
        <Sep />
        <View style={tw`flex-row items-center pt-6`}>
          <Button color="secondary" style={tw`flex-1 mr-2`}>
            <Bracket color="#FFC93F" height={14} style={tw`mr-2`} />
            <Text color="accent" style={tw`text-sm mr-2`}>
              Brackets
            </Text>
          </Button>
          <Button color="secondary" style={tw`flex-1`}>
            <Profile color="#FFC93F" height={14} style={tw`mr-2`} />
            <Text color="accent" style={tw`text-sm`}>
              My Games
            </Text>
          </Button>
        </View>
        <Text color="secondary" style={tw`text-center text-sm`}>
          2 days : 15 hours : 24 minutes
        </Text>
      </View>
    </Card>
  );
};

const EventResult = () => {
  return (
    <Card color="accent">
      <Image
        style={tw`w-full h-30 rounded-t-[14px]`}
        src="https://imgur.com/o3yTFTq.png"
      />
      <View style={tw`flex-col p-6 border-t border-[#FFC93F]`}>
        <View style={tw`items-center justify-center pb-6`}>
          <Title style={tw`text-base`}>Michael's Melee Monday #49</Title>
          <Text color="secondary" style={tw`text-center mb-1`}>
            Smash Bros. Ultimate: Singles
          </Text>
        </View>
        <Result />
      </View>
    </Card>
  );
};

const ProfilePage = () => {
  return (
    <ScrollView>
      <View style={tw`bg-[#151515] items-center min-h-[900px]`}>
        <View style={tw`w-full`}>
          <Image
            style={tw`h-44 w-full`}
            src="https://i.imgur.com/WmEKpAF.png"
          />
          <View style={tw`absolute bottom-0 right-0 flex-row pr-6`}>
            <Button
              color="secondary"
              style={tw`mr-2.5`}
              pressableStyle={tw`h-10 w-10 p-3 rounded-sm`}
            >
              <Twitch color="white" />
            </Button>
            <Button
              color="secondary"
              pressableStyle={tw`h-10 w-10 p-3 rounded-sm`}
            >
              <Twitter color="white" />
            </Button>
          </View>
        </View>
        <View style={tw`w-full flex-col px-6 pb-6`}>
          <View style={tw`w-full flex flex-row mb-4`}>
            <Image
              style={tw`bg-white h-20 w-20 rounded-[2.5rem] border-2 border-[#39D83F] ml-3 flex flex-row -mt-4`}
              src="https://imgur.com/fUizEfG.png"
            />
            <View style={tw`ml-3 mt-3`}>
              <Text>blorppppp</Text>
              <Text color="secondary">John D. (he/him)</Text>
            </View>
            <View style={tw`absolute mt-3 right-0`}>
              <Text color="accent" style={tw`text-sm`}>
                Edit
              </Text>
            </View>
          </View>
          <View style={tw`flex flex-row items-center`}>
            <Calendar color="#777777" width="14" />
            <Text color="secondary" style={tw`ml-2.5 py-[0.8rem] text-sm`}>
              Dec 18th, 2023
            </Text>
          </View>
          <Sep />
          <View style={tw`flex flex-row items-center`}>
            <Pin color="#6F6F6F" width="14" />
            <Text color="secondary" style={tw`ml-2.5 py-[0.8rem] text-sm`}>
              Lakewood, CO, United States
            </Text>
          </View>
          <Sep />
          <Title style={tw`text-base mt-[0.8rem] mb-0.5 `}>Bio</Title>
          <Text color="secondary" style={tw`leading-[1.4rem] text-sm`}>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used.
          </Text>
          <Title style={tw`text-base mt-[0.8rem] mb-0.5`}>Ratings</Title>
          <View style={tw`flex-row items-center mb-3`}>
            <Placement place={28} style={tw`text-sm`} />
            <Text color="secondary" style={tw`text-sm`}>
              {" "}
              Smash Bros. Ultimate:{" "}
            </Text>
            <Text style={tw`text-sm`}>Singles</Text>
          </View>
        </View>
        <View style={tw`bg-[#1B1B1B] w-full px-6 pb-6`}>
          <Button
            size="lg"
            style={tw`w-full mb-2 mt-6`}
            href="/tournaments/create"
          >
            <Plus color="#1B1B1B" style={tw`mr-2`} />
            <Text color="black">Create Tournament</Text>
          </Button>
          <Title style={tw`text-base pt-6 pb-4`}>
            Registered Upcoming Events
          </Title>
          <UpcomingEvent />
          <Title style={tw`text-base pt-1 pb-4`}>Results</Title>
          <EventResult />
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfilePage;
