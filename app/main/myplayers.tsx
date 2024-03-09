import React from "react";
import tw from "twrnc";

import Background from "@/components/base/Background";
import Button from "@/components/base/Button";
import Nav from "@/components/base/Nav";
import Text from "@/components/base/Text";
import PlayerResult from "@/components/player/PlayerResult";
import Plus from "@assets/icons/Plus";

const MyPlayers = () => {
  return (
    <Background scroll>
      <Nav title="My Players" showBack />

      <Button>
        <Plus color="#1B1B1B" style={tw`mr-2`} />
        <Text color="black">Follow New Player</Text>
      </Button>
      <PlayerResult />
      <PlayerResult />
    </Background>
  );
};

export default MyPlayers;
