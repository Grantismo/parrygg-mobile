import React from "react";
import { View } from "react-native";
import tw from "twrnc";

import Profile from "@/components/player/Profile";
import Result from "@/components/player/Result";
import Close from "@assets/icons/Close";

const PlayerResult = () => {
  return (
    <View style={tw`rounded-xl border border-[#FFC93F] p-6 mb-6 bg-[#151515]`}>
      <View style={tw`flex-row justify-between mb-6`}>
        <Profile />
        <Close color="#777777" style={tw`-ml-3 -mt-2`} />
      </View>
      <Result />
    </View>
  );
};

export default PlayerResult;
