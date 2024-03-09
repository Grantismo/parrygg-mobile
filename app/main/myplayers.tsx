import React from "react";
import tw from "twrnc";

import Plus from "../../assets/icons/Plus";
import Background from "../../src/components/base/Background";
import Button from "../../src/components/base/Button";
import Nav from "../../src/components/base/Nav";
import Text from "../../src/components/base/Text";
import PlayerResult from "../../src/components/player/PlayerResult";

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
