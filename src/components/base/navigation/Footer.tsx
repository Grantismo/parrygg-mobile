import { router, usePathname } from "expo-router";
import React, {
  Children,
  ReactElement,
  Suspense,
  useEffect,
  useRef,
} from "react";
import { Animated, Pressable, View, ViewProps } from "react-native";

import tw from "@/lib/tailwind";
import Calendar from "@assets/icons/Calendar";
import FooterButtonBackground from "@assets/icons/FooterButtonBackground";
import Gear from "@assets/icons/Gear";
import Profile from "@assets/icons/Profile";
import { IconProps } from "@assets/icons/Props";
import SearchFlame from "@assets/icons/SearchFlame";
import Trophy from "@assets/icons/Trophy";

interface FooterButtonProps extends ViewProps {
  path: string;
  unselectedArgs?: object;
  selectedArgs?: object;
  children?: React.ReactElement<IconProps>;
}

const Footer = () => {
  const pathname = usePathname();
  const currentButtonX = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0
  const buttonXCoords = useRef<{ [key: string]: number }>({});

  const selectButton = (path: string) => {
    router.push(path);
    Animated.spring(currentButtonX, {
      toValue: buttonXCoords.current[path],
      friction: 44,
      tension: 31,
      useNativeDriver: true,
    }).start();
  };

  const FooterButton = ({
    path,
    children,
    unselectedArgs,
    selectedArgs,
    style,
    ...props
  }: FooterButtonProps) => {
    const child = Children.only(children) as ReactElement;
    const isSelected = path === pathname;
    const unselectedChildArgs = { color: "white", ...unselectedArgs };
    const selectedChildArgs = { color: "#1B1B1B", ...selectedArgs };
    const childProps = {
      ...child.props,
      ...(isSelected && selectedChildArgs),
      ...(!isSelected && unselectedChildArgs),
    };

    return (
      <Pressable
        style={[tw`h-14 w-14 items-center justify-center`, style]}
        onPress={() => {
          selectButton(path);
        }}
        onLayout={({
          nativeEvent: {
            layout: { x },
          },
        }) => {
          if (buttonXCoords.current[path]) {
            return;
          }
          buttonXCoords.current[path] = x;
          if (isSelected) {
            selectButton(path);
          }
        }}
        {...props}
      >
        {React.cloneElement(child, childProps)}
      </Pressable>
    );
  };

  return (
    <Suspense>
      <View
        style={tw`grow w-full flex flex-row items-center justify-between bg-[#0A0A0A] px-4 py-2.5`}
      >
        <Animated.View
          style={[
            tw`absolute`,
            { transform: [{ translateX: currentButtonX }] },
          ]}
        >
          <FooterButtonBackground />
        </Animated.View>
        <FooterButton path="/main/profile">
          <Profile />
        </FooterButton>
        <FooterButton path="/main/calendar">
          <Calendar />
        </FooterButton>
        <FooterButton
          path="/main/search"
          unselectedArgs={{ flameColor: "#FFC93F" }}
          selectedArgs={{ flameColor: "#0A0A0A" }}
        >
          <SearchFlame color="white" />
        </FooterButton>
        <FooterButton path="/main/settings">
          <Gear />
        </FooterButton>
        <FooterButton path="/main/myplayers">
          <Trophy />
        </FooterButton>
      </View>
    </Suspense>
  );
};

export default Footer;
