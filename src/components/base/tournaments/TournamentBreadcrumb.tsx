import { LinearGradient } from "expo-linear-gradient";
import React from "react";

import Text from "@/components/base/Text";
import tw from "@/lib/tailwind";
import Home from "@assets/icons/Home";

const TournamentBreadcrumb = () => {
  return (
    <LinearGradient
      style={tw`w-full flex-row px-6 py-4 items-center`}
      colors={["#272727", "#222"]}
    >
      <Home color="white" style={tw`mr-2`} />
      <Text color="secondary" style={tw`mr-2`}>
        \
      </Text>
      <Text color="accent" style={tw`mr-2`}>
        Manage Events
      </Text>
    </LinearGradient>
  );
};

export default TournamentBreadcrumb;
