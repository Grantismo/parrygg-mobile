import { router, usePathname } from "expo-router";
import React, { Children, ReactElement } from "react";
import { Pressable, View, ViewProps } from "react-native";

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

const DefaultWrapper = ({ ...props }: ViewProps) => {
  return <View {...props} />;
};

const SelectedWrapper = ({ children, ...props }: ViewProps) => {
  return (
    <View {...props}>
      <FooterButtonBackground />
      <View style={tw`absolute inset-0 items-center justify-center`}>
        {children}
      </View>
    </View>
  );
};

const Footer = () => {
  const pathname = usePathname();

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

    const IconWrapper = isSelected ? SelectedWrapper : DefaultWrapper;

    return (
      <Pressable
        style={[tw`h-14 w-14 items-center justify-center`, style]}
        onPress={() => {
          router.push(path);
        }}
        {...props}
      >
        <IconWrapper>{React.cloneElement(child, childProps)}</IconWrapper>
      </Pressable>
    );
  };

  return (
    <View
      style={tw`grow w-full flex flex-row items-center justify-between bg-[#0A0A0A] px-4 py-2.5`}
    >
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
  );
};

export default Footer;
