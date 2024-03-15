import React, { ReactNode } from "react";
import {
  View,
  StyleProp,
  ViewProps,
  ViewStyle,
  Image,
  ScrollView,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";

import tw from "@/lib/tailwind";
import { Images } from "@assets/assets";

interface Props extends ViewProps {
  style?: StyleProp<ViewStyle>;
  children: ReactNode;
  scroll?: boolean;
  showFooter?: boolean;
}

const ScrollContentView = ({ style, ...props }: Props) => {
  return <ScrollView contentContainerStyle={style} {...props} />;
};

const DefaultView = ({ style, ...props }: Props) => {
  return <View style={[tw`w-full h-full`, style]} {...props} />;
};

const Background = ({
  scroll,
  showFooter,
  style: bgStyle,
  children: bgChildren,
  ...bgProps
}: Props) => {
  const ContentView = scroll ? ScrollContentView : DefaultView;

  return (
    <View style={tw`bg-[#1b1b1b]`} {...bgProps}>
      <View style={tw`absolute inset-x-0 top-0 h-full`}>
        <Image
          style={{ resizeMode: "cover", opacity: 0.03 }}
          source={Images.TournamentPoster}
        />
      </View>
      <SafeAreaView
        style={[
          Platform.OS === "android" && { paddingTop: StatusBar.currentHeight },
        ]}
      >
        <ContentView
          style={[tw`px-6 flex flex-col items-center justify-center`, bgStyle]}
        >
          {bgChildren}
        </ContentView>
      </SafeAreaView>
    </View>
  );
};

export default Background;
