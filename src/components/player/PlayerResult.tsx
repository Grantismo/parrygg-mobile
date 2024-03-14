import React from "react";
import { View } from "react-native";

import Profile from "@/components/player/Profile";
import Result from "@/components/player/Result";
import tw from "@/lib/tailwind";
import Close from "@assets/icons/Close";

const PlayerResult = () => {
  return (
    <View style={tw`rounded-lg border border-[#FFC93F] p-6 mb-6 bg-[#151515]`}>
      <View style={tw`flex-row justify-between mb-6`}>
        <Profile />
        <Close color="#777777" style={tw`-ml-3 -mt-1`} />
      </View>
      <Result />
    </View>
  );
};

export default PlayerResult;
