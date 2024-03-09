import { Slot } from "expo-router";
import React from "react";
import { View } from "react-native";
import tw from "twrnc";

import Footer from "../../src/components/base/Footer";

const Layout = () => {
  return (
    <View style={tw`h-full`}>
      <View style={tw`shrink`}>
        <Slot />
      </View>
      <Footer />
    </View>
  );
};

export default Layout;
