import React, { ReactNode } from "react";
import { View as NativeView, StyleProp, ViewStyle } from "react-native";
import tw from 'twrnc';

type Props = {
    style?: StyleProp<ViewStyle>;
    children: ReactNode
}

const View = ({style, children}: Props) => {
    return (
        <NativeView style={[tw`w-full h-full flex-1 bg-[#1b1b1b] items-center justify-center`, style]}>
          {children}
        </NativeView>
    );
  }
  
  export default View;