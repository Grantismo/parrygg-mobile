import React, { useState } from "react";
import {
  Pressable,
  View,
  Image,
  ViewStyle,
  ImageStyle,
  StyleProp,
} from "react-native";
import { ViewProps } from "react-native-svg/lib/typescript/fabric/utils";
import tw from "twrnc";

import Close from "../../assets/icons/Close";
import RightArrow from "../../assets/icons/RightArrow";
import Seed from "../../assets/icons/Seed";
import Trophy from "../../assets/icons/Trophy";
import Background from "../../src/components/base/Background";
import Button from "../../src/components/base/Button";
import Sep from "../../src/components/base/Sep";
import Text from "../../src/components/base/Text";
import Title from "../../src/components/base/Title";
import SearchBox from "../../src/components/base/SearchBox";
import PlayerTournamentSearchBox from "../../src/components/base/PlayerTournamentSearchBox";

type ToggleState = "Trending" | "Favorites";

const Search = () => {
  const [toggleState, setToggleState] = useState<ToggleState>("Trending");
  const ToggleStateButton = ({ state }: { state: ToggleState }) => {
    return (
      <Pressable onPress={() => setToggleState(state)}>
        <Text color={toggleState === state ? "primary" : "secondary"}>
          {state}
        </Text>
      </Pressable>
    );
  };

  const TrendingButton = ({ title, src }: { title: string; src: string }) => {
    return (
      <Button style={tw`justify-start flex-row p-2`}>
        <Image style={tw`h-8 w-8 rounded mr-2`} src={src} />
        <Text style={tw`text-black`}>{title}</Text>
      </Button>
    );
  };

  const TrendingView = () => {
    return (
      <View style={tw`flex flex-col`}>
        <TrendingButton
          title="Frosty Faustings XVI 2024"
          src="https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F592000%2Fimage-8a1565b2f2a3ca019290292afc61d1d0-optimized.jpg&ehk=QrUBZ0NwPixwE1Ebv%2FtiBUmSZWUNt6WjhIO0ON6Xlt0%3D&w=70&r=0"
        />
        <TrendingButton
          title="Genesis X"
          src="https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F517161%2Fimage-23d5e280287897018400cb92f524f686-optimized.png&ehk=9SqBHvCIRjjHB3GPMiPodAUVfFG6ySpMFWKmVT5bJNo%3D&w=70&r=0"
        />
        <TrendingButton
          title="Midwest Esports Invitational"
          src="https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F594307%2Fimage-22e49604b43c35407e4bd93356db160f-optimized.jpg&ehk=rPlmvU7r1KM1%2FBZE5K%2FkahlgNqFch%2FHVw4WbemoEeA0%3D&w=70&r=0"
        />
      </View>
    );
  };

  const ProfilePicture = ({ style }: { style?: StyleProp<ImageStyle> }) => {
    return (
      <Image
        src="https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Fuser%2F77088%2Fimage-6ca3a4cc4640c6c5063d4e18766d7bb2-optimized.png&ehk=kNsjCtVGHnZtSWb2KxKr8mLEzkTEvZSLa6Ow2dmbpOc%3D&w=160&h=160&r=0&c=3"
        style={[
          tw`h-12 w-12 rounded-[2.5rem] border-2 border-[#39D83F] flex flex-row`,
          style,
        ]}
      />
    );
  };

  const Profile = () => {
    return (
      <View style={tw`w-full flex flex-row items-center`}>
        <ProfilePicture />
        <View style={tw`ml-3`}>
          <Text>blorppppp</Text>
          <Text color="secondary">John D. (he/him)</Text>
        </View>
      </View>
    );
  };

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

  const FavoritesView = () => {
    return (
      <View>
        <View style={tw`flex-row items-center my-4`}>
          <RightArrow style={[tw`mr-2`, { color: "#FFC93F" }]} />
          <Title style={tw`text-base m-0`}>Michael's Melee Monday #49</Title>
        </View>
        <View style={tw`rounded-xl border border-[#FFC93F] p-6`}>
          <View style={tw`flex-row justify-between mb-6`}>
            <Profile />
            <Close style={tw`-ml-3 -mt-2`} />
          </View>
          <Sep />
          <View style={tw`flex-row items-center justify-between my-4`}>
            <View style={tw`flex-row items-center`}>
              <Trophy style={tw`mr-1`} />
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
              <Seed style={tw`mr-2`} />
              <Text color="secondary">385</Text>
            </View>
          </View>
          <Sep />
          <View>
            <View style={tw`flex-row mt-4 mb-2 justify-between`}>
              <View style={tw`flex-row items-center`}>
                <RightArrow style={[tw`mr-2`, { color: "white" }]} />
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
                <RightArrow style={[tw`mr-2`, { color: "white" }]} />
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
      </View>
    );
  };

  return (
    <Background>
      <Title color="accent">
        Tournaments <Title>and</Title> Players
      </Title>
      <PlayerTournamentSearchBox />
      <View style={tw`w-full mb-14`}>
        <View style={tw`w-full flex flex-row justify-between mb-5`}>
          <ToggleStateButton state="Trending" />
          <ToggleStateButton state="Favorites" />
        </View>
        {toggleState === "Trending" && <TrendingView />}
        {toggleState === "Favorites" && <FavoritesView />}
      </View>
    </Background>
  );
};

export default Search;
