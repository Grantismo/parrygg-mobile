import React from "react";
import { View } from "react-native";

import Sep from "@/components/base/Sep";
import Text from "@/components/base/Text";
import { styles } from "@/components/base/styles";
import Placement from "@/components/player/Placement";
import ProfilePicture from "@/components/player/ProfilePicture";
import tw from "@/lib/tailwind";
import RightArrow from "@assets/icons/RightArrow";
import Seed from "@assets/icons/Seed";

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
        <Text style={tw`text-sm`}>
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
          <ProfilePicture style={tw`h-4 w-4 border-[1px] ml-2 mr-1`} />
          <Text color="accent" style={tw`text-sm`}>{name}</Text>
        </View>
      </View>
      <Text style={tw`text-sm`}>
        (<Text color="secondary">S</Text>
        {seed} <Text color="secondary">P</Text>
        {place && place}
        {!place && "-"})
      </Text>
    </View>
  );
};

const Result = () => {
  return (
    <>
      <Sep />
      <View style={tw`flex-row items-center justify-between my-4 `}>
        <View style={tw`flex-row items-center`}>
          <Placement place={23} style={styles.mediumWeightFont} />
        </View>
        <View style={tw`flex-row items-center `}>
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
        <View style={tw`flex-row mt-4 mb-2 justify-between `}>
          <View style={tw`flex-row items-center`}>
            <RightArrow color="white" style={tw`mr-2`} />
            <Text color="secondary" style={tw`m-0 text-sm leading-6`}>
              R2 Pools l517
            </Text>
          </View>
          <Text color="secondary" style={tw`text-sm`}>Seed \ Place</Text>
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
            <Text color="secondary" style={tw`m-0 text-sm leading-6`}>
              R1 Pools l334
            </Text>
          </View>
          <Text color="secondary" style={tw`text-sm`}>Seed \ Place</Text>
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
    </>
  );
};

export default Result;
