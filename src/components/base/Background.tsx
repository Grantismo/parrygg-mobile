import React, {
  Children,
  ReactElement,
  ReactNode,
  isValidElement,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  View,
  StyleProp,
  ViewProps,
  ViewStyle,
  Image,
  Animated,
  ScrollResponderEvent,
} from "react-native";
import { NestableScrollContainer } from "react-native-draggable-flatlist";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

import Nav from "@/components/base/navigation/Nav";
import tw from "@/lib/tailwind";
import { Images } from "@assets/assets";

interface Props extends ViewProps {
  style?: StyleProp<ViewStyle>;
  children: ReactNode;
  showFooter?: boolean;
  collapsedNav?: boolean;
}

const NAV_HEIGHT = 90;
const COLLAPSED_NAV_HEIGHT = 57;
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

const ScrollContentView = ({
  collapsedNav,
  style,
  children,
  ...props
}: Props) => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const childArray = Children.toArray(children);
  const nav: ReactElement | undefined = getNav(childArray);
  const collapseNavPercent = collapsedNav
    ? new Animated.Value(100)
    : scrollY.interpolate({
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
      <NestableScrollContainer
        onScrollOffsetChange={(offset: number) => scrollY.setValue(offset)}
        scrollEventThrottle={5}
        {...props}
      >
        {/* Empty view to allow smooth scrolling as nav animates */}
        <View
          style={{ height: collapsedNav ? COLLAPSED_NAV_HEIGHT : NAV_HEIGHT }}
        />
        <View style={[tw`px-6`, style]}>{childArray}</View>
      </NestableScrollContainer>
    </View>
  );
};

const Background = ({
  showFooter,
  style: bgStyle,
  children: bgChildren,
  collapsedNav = false,
  ...bgProps
}: Props) => {
  return (
    <View style={tw`bg-[#1b1b1b]`} {...bgProps}>
      <View style={tw`absolute inset-x-0 top-0 h-full`}>
        <Image
          style={{ resizeMode: "cover", opacity: 0.03 }}
          source={Images.TournamentPoster}
        />
      </View>
      <SafeAreaView style={[tw`h-full flex flex-col`]}>
        <ScrollContentView
          collapsedNav={collapsedNav}
          style={[tw`flex flex-col items-center justify-center`, bgStyle]}
        >
          {bgChildren}
        </ScrollContentView>
      </SafeAreaView>
    </View>
  );
};

export default Background;
