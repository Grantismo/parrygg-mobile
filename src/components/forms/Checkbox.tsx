import React, { useState } from "react";
import { Pressable, View } from "react-native";

import tw from "@/lib/tailwind";
import GreenCheckboxBackground from "@assets/icons/GreenCheckboxBackground";
import YellowCheckboxBackground from "@assets/icons/YellowCheckboxBackground";

type Color = "green" | "yellow";

interface Props {
  color: Color;
  includePartialState?: boolean;
}

const Checkbox = ({ color, includePartialState = false }: Props) => {
  const Bg = {
    green: GreenCheckboxBackground,
    yellow: YellowCheckboxBackground,
  }[color];

  const [state, setState] = useState(0); // 0 = unchecked, 1 = checked, 2 = partial
  const numStates = includePartialState ? 3 : 2;
  const toggleState = () => {
    setState((state + 1) % numStates);
  };
  return (
    <Pressable
      hitSlop={10}
      onPress={toggleState}
      style={[
        tw`rounded-[3px] w-6 h-6 items-center justify-center`,
        new Set([0, 2]).has(state) && tw`bg-[#474747]`,
        state === 2 && tw`border-2 border-[#FFC93F]`,
      ]}
    >
      {state === 1 && (
        <>
          <Bg />
          <View style={[tw`absolute inset-0 items-center justify-center`]}>
            <View style={tw`rounded-[3px] bg-white shadow-md h-3.5 w-3.5`} />
          </View>
        </>
      )}
    </Pressable>
  );
};

export default Checkbox;
