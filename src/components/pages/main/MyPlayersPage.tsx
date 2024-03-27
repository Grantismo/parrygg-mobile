import React from "react";
import { View } from "react-native";

import Background from "@/components/base/Background";
import Button from "@/components/base/Button";
import Text from "@/components/base/Text";
import Nav from "@/components/base/navigation/Nav";
import PlayerResult from "@/components/player/PlayerResult";
import tw from "@/lib/tailwind";
import Plus from "@assets/icons/Plus";

const MyPlayersPage = () => {
  return (
    <Background scroll>
      <Nav title="My Players" showBack />
      <Button size="lg" style={tw`w-full mb-6`}>
        <Plus color="#1B1B1B" style={tw`mr-2`} />
        <Text color="black">Follow New Player</Text>
      </Button>
      <View>
        <PlayerResult />
        <PlayerResult />
      </View>
    </Background>
  );
};

export default MyPlayersPage;
