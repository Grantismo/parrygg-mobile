import { Slot } from "expo-router";
import React from "react";
import { View } from "react-native";

import Footer from "@/components/base/navigation/Footer";
import tw from "@/lib/tailwind";

const MainLayout = () => {
  return (
    <View style={tw`h-full`}>
      <View style={tw`shrink`}>
        <Slot />
      </View>
      <Footer />
    </View>
  );
};

export default MainLayout;
