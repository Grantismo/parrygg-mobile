import { View } from "react-native";

import CalendarButtonBackground from "@assets/icons/CalendarButtonBackground";
import LeftNavArrow from "@assets/icons/LeftNavArrow";
import RightNavArrow from "@assets/icons/RightNavArrow";
import React from "react";
import tw from "twrnc"

const Arrow = ({ direction }: { direction: "left" | "right" }) => {
  const arrowProps = {
    color: "#161616",
  };
  return (
    <View>
      <CalendarButtonBackground />
      <View style={tw`absolute inset-0 items-center justify-center`}>
        {direction === "right" ? (
          <RightNavArrow {...arrowProps} />
        ) : (
          <LeftNavArrow {...arrowProps} />
        )}
      </View>
    </View>
  );
};

export default Arrow;
