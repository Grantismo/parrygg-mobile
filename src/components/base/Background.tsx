import React, {
  Children,
  ReactElement,
  ReactNode,
  isValidElement,
  useRef,
} from "react";
import {
  View,
  StyleProp,
  ViewProps,
  ViewStyle,
  Image,
  ScrollView,
  Animated,
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

const NAV_HEIGHT = 80;
const SCROLL_COLLAPSE_HEIGHT = 34;

function getNav(childArray: ReactNode[]) {
  let nav: ReactElement | undefined;
  if (
    childArray.length &&
    isValidElement(childArray[0]) &&
    childArray[0].type === Nav
  ) {
    nav = childArray.shift() as ReactElement;
  }
  return nav;
}

const ScrollContentView = ({ style, children, ...props }: Props) => {
  const scrollY = useRef(new Animated.Value(0)).current;

  const childArray = Children.toArray(children);
  const nav: ReactElement | undefined = getNav(childArray);
  const collapseNavPercent = scrollY.interpolate({
    inputRange: [0, SCROLL_COLLAPSE_HEIGHT],
    outputRange: [0, 100],
    extrapolate: "clamp",
  });

  return (
    <View style={tw`relative`}>
      {nav && (
        <Nav
          style={tw`absolute top-0 z-10`}
          collapseValue={collapseNavPercent}
          {...nav.props}
        />
      )}
      <ScrollView
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false },
        )}
        scrollEventThrottle={5}
        {...props}
      >
        {/* Empty view to allow smooth scrolling as nav animates */}
        <View style={{ height: NAV_HEIGHT }} />
        <View style={[tw`px-6`, style]}>{childArray}</View>
      </ScrollView>
    </View>
  );
};

const DefaultView = ({ style, children, ...props }: Props) => {
  const childArray = Children.toArray(children);
  const nav: ReactElement | undefined = getNav(childArray);
  return (
    <View {...props}>
      {nav && <Nav {...nav.props} />}
      <View style={[tw`px-6 h-full`, style]}>{childArray}</View>
    </View>
  );
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
      <SafeAreaView style={[tw`h-full flex flex-col`]}>
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
