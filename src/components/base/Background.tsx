import React, {
  Children,
  ReactElement,
  ReactNode,
  isValidElement,
  useState,
} from "react";
import {
  View,
  StyleProp,
  ViewProps,
  ViewStyle,
  Image,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Nav from "@/components/base/navigation/Nav";
import tw from "@/lib/tailwind";
import { Images } from "@assets/assets";

interface Props extends ViewProps {
  style?: StyleProp<ViewStyle>;
  children: ReactNode;
  scroll?: boolean;
  showFooter?: boolean;
}

const ScrollContentView = ({ style, children, ...props }: Props) => {
  const [scrollY, setScrollY] = useState(0);
  const childArray = Children.toArray(children);

  let nav: ReactElement | undefined;
  if (
    childArray.length &&
    isValidElement(childArray[0]) &&
    childArray[0].type === Nav
  ) {
    nav = childArray.shift() as ReactElement;
  }

  return (
    <View>
      <ScrollView
        stickyHeaderIndices={nav ? [0] : []}
        onScroll={(event) => {
          setScrollY(event.nativeEvent.contentOffset.y);
        }}
        {...props}
      >
        {nav &&
          React.cloneElement(nav, {
            ...nav.props,
            style: [
              tw`px-6`,
              {
                backgroundColor: scrollY <= 0 ? "transparent" : "#0A0A0A",
              },
            ],
          })}
        <View style={[tw`px-6`, style]}>{childArray}</View>
      </ScrollView>
    </View>
  );
};

const DefaultView = ({ style, ...props }: Props) => {
  return <View style={[tw`w-full h-full px-6`, style]} {...props} />;
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
      <SafeAreaView style={[tw`border-t border-red-100`]}>
        <ContentView
          style={[tw`flex flex-col items-center justify-center`, bgStyle]}
        >
          {bgChildren}
        </ContentView>
      </SafeAreaView>
    </View>
  );
};

export default Background;
