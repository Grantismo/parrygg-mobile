import React, { ReactNode } from "react";
import { View as NativeView, StyleProp, ViewProps, ViewStyle, Image } from "react-native";
import tw from 'twrnc';
import { Images } from "../../../assets/assets";

interface Props extends ViewProps  {
  style?: StyleProp<ViewStyle>
  children: ReactNode
}

const View = ({style, children, ...viewProps}: Props) => {
    return (
        <NativeView style={[tw`w-full h-full flex-1 bg-[#1b1b1b] items-center justify-center`, style]} {...viewProps}>
          <NativeView style={tw`absolute inset-x-0 top-0 h-full`}>
            <Image style={{resizeMode: 'cover', opacity: 0.03}} source={Images.TournamentPoster}>
            </Image>
          </NativeView>
          {children}
        </NativeView>
    );
  }
  
  export default View;