import React, { ReactNode } from "react";
import { View, StyleProp, ViewProps, ViewStyle, Image } from "react-native";
import tw from 'twrnc';
import { Images } from "../../../assets/assets";

interface Props extends ViewProps  {
  style?: StyleProp<ViewStyle>
  children: ReactNode
}

const Background = ({style, children, ...viewProps}: Props) => {
    return (
        <View style={[tw`w-full h-full flex-1 bg-[#1b1b1b] items-center justify-center`, style]} {...viewProps}>
          <View style={tw`absolute inset-x-0 top-0 h-full`}>
            <Image style={{resizeMode: 'cover', opacity: 0.03}} source={Images.TournamentPoster}>
            </Image>
          </View>
          {children}
        </View>
    );
  }
  
  export default Background;