import React from "react";
import { View } from "react-native";

import Card from "@/components/base/Card";
import Profile from "@/components/player/Profile";
import Result from "@/components/player/Result";
import tw from "@/lib/tailwind";
import Close from "@assets/icons/Close";

const PlayerResult = () => {
  return (
    <Card color="accent" style={tw`p-6`}>
      <View style={tw`flex-row justify-between mb-6`}>
        <Profile />
        <Close color="#777777" style={tw`-ml-3 -mt-1`} />
      </View>
      <Result />
    </Card>
  );
};

export default PlayerResult;
