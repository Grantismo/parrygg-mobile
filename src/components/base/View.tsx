import React, { ReactNode } from "react";
import { View as NativeView, StyleProp, ViewProps, ViewStyle } from "react-native";
import tw from 'twrnc';

interface Props extends ViewProps  {
  style?: StyleProp<ViewStyle>
  children: ReactNode
}

const View = ({style, children, ...viewProps}: Props) => {
    return (
        <NativeView style={[tw`w-full h-full flex-1 bg-[#1b1b1b] items-center justify-center`, style]} {...viewProps}>
          {children}
        </NativeView>
    );
  }
  
  export default View;