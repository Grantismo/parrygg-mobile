import React, { useState } from "react";
import { Pressable, View, Image } from "react-native";

import Background from "@/components/base/Background";
import Button from "@/components/base/Button";
import PlayerTournamentSearchBox from "@/components/base/PlayerTournamentSearchBox";
import Text from "@/components/base/Text";
import Title from "@/components/base/Title";
import PlayerResult from "@/components/player/PlayerResult";
import tw from "@/lib/tailwind";
import RightArrow from "@assets/icons/RightArrow";

type ToggleState = "Trending" | "Favorites";

const SearchPage = () => {
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
      <Button pressableStyle={tw`justify-start flex-row p-2`}>
        <Image style={tw`h-9 w-9 rounded-xs mr-2`} src={src} />
        <Text color="black">{title}</Text>
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

  const FavoritesView = () => {
    return (
      <View>
        <View style={tw`flex-row items-center mb-4`}>
          <RightArrow color="#FFC93F" style={tw`mr-2`} />
          <Title style={tw`text-base m-0`}>Michael's Melee Monday #49</Title>
        </View>
        <PlayerResult />
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
        <View style={tw`w-full flex flex-row justify-between mb-5 text-base`}>
          <ToggleStateButton state="Trending" />
          <ToggleStateButton state="Favorites" />
        </View>
        {toggleState === "Trending" && <TrendingView />}
        {toggleState === "Favorites" && <FavoritesView />}
      </View>
    </Background>
  );
};

export default SearchPage;
