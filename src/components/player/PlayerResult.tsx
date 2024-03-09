import React from "react";
import { View } from "react-native";
import tw from "twrnc";

import Sep from "@/components/base/Sep";
import Text from "@/components/base/Text";
import Title from "@/components/base/Title";
import Profile from "@/components/player/Profile";
import ProfilePicture from "@/components/player/ProfilePicture";
import Close from "@assets/icons/Close";
import RightArrow from "@assets/icons/RightArrow";
import Seed from "@assets/icons/Seed";
import Trophy from "@assets/icons/Trophy";

const ResultRow = ({
  result,
  opponent: { name, seed, place },
}: {
  result?: { wins: number; losses: number };
  opponent: { name: string; seed: number; place?: number };
}) => {
  return (
    <View style={tw`flex-row justify-between items-center mb-2`}>
      <View style={tw`flex-row items-center`}>
        <Text>
          {result && (
            <>
              {result.wins > result.losses && <Text color="green">W</Text>}
              {result.wins < result.losses && <Text color="red">L</Text>} (
              {result.wins} - {result.losses})
            </>
          )}
          {!result && <Text>TBD</Text>} vs
        </Text>
        <View style={tw`flex-row items-center`}>
          <ProfilePicture style={tw`h-5 w-5 border-[0.5px] ml-2 mr-1`} />
          <Text color="accent">{name}</Text>
        </View>
      </View>
      <Text>
        (<Text color="secondary">S</Text>
        {seed} <Text color="secondary">P</Text>
        {place && place}
        {!place && "-"})
      </Text>
    </View>
  );
};

const PlayerResult = () => {
  return (
    <View style={tw`rounded-xl border border-[#FFC93F] p-6 mb-6 bg-[#151515]`}>
      <View style={tw`flex-row justify-between mb-6`}>
        <Profile />
        <Close color="#777777" style={tw`-ml-3 -mt-2`} />
      </View>
      <Sep />
      <View style={tw`flex-row items-center justify-between my-4`}>
        <View style={tw`flex-row items-center`}>
          <Trophy width={15} height={14} color="#FFC93F" style={tw`mr-1`} />
          <Title color="accent" style={tw`m-0 text-base`}>
            1st
          </Title>
        </View>
        <View style={tw`flex-row items-center`}>
          <Text>
            W <Text color="green">4</Text> - L <Text color="red">2</Text>
          </Text>
        </View>
        <View style={tw`flex-row items-center`}>
          <Seed color="white" style={tw`mr-2`} />
          <Text color="secondary">385</Text>
        </View>
      </View>
      <Sep />
      <View>
        <View style={tw`flex-row mt-4 mb-2 justify-between`}>
          <View style={tw`flex-row items-center`}>
            <RightArrow color="white" style={tw`mr-2`} />
            <Text color="secondary" style={tw`m-0`}>
              R2 Pools l517
            </Text>
          </View>
          <Text color="secondary">Seed \ Place</Text>
        </View>
        <ResultRow opponent={{ name: "DSJ", seed: 45 }} />
        <ResultRow
          result={{ wins: 1, losses: 3 }}
          opponent={{ name: "Third Strongest", seed: 45, place: 3 }}
        />
      </View>
      <View>
        <View style={tw`flex-row mt-4 mb-2 justify-between`}>
          <View style={tw`flex-row items-center`}>
            <RightArrow color="white" style={tw`mr-2`} />
            <Text color="secondary" style={tw`m-0`}>
              R1 Pools l334
            </Text>
          </View>
          <Text color="secondary">Seed \ Place</Text>
        </View>
        <ResultRow
          result={{ wins: 3, losses: 1 }}
          opponent={{ name: "Jasper", seed: 542, place: 300 }}
        />
        <ResultRow
          result={{ wins: 3, losses: 0 }}
          opponent={{ name: "Hada", seed: 800, place: 801 }}
        />
        <ResultRow
          result={{ wins: 3, losses: 1 }}
          opponent={{ name: "Bread", seed: 1422, place: 1300 }}
        />
      </View>
    </View>
  );
};

export default PlayerResult;
