import React, { Children, ReactElement } from "react";
import { StyleProp, View, ViewProps, ViewStyle } from "react-native";

import tw from "@/lib/tailwind";
import FooterButtonBackground from "@assets/icons/FooterButtonBackground";
import { IconProps } from "@assets/icons/Props";

interface FooterButtonProps extends ViewProps {
  unselectedArgs?: object;
  selectedArgs?: object;
  children?: React.ReactElement<IconProps>;
  isSelected?: boolean;
  style?: StyleProp<ViewStyle>;
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

const TabButton = ({
  children,
  unselectedArgs,
  selectedArgs,
  isSelected = false,
  style,
  ...props
}: FooterButtonProps) => {
  const child = Children.only(children) as ReactElement;
  const unselectedChildArgs = { color: "white", ...unselectedArgs };
  const selectedChildArgs = { color: "#1B1B1B", ...selectedArgs };
  const childProps = {
    ...child.props,
    ...(isSelected && selectedChildArgs),
    ...(!isSelected && unselectedChildArgs),
  };

  const IconWrapper = isSelected ? SelectedWrapper : DefaultWrapper;

  return (
    // eslint-disable-next-line react/jsx-no-undef
    <View style={[tw`h-14 w-14 items-center justify-center`, style]} {...props}>
      <IconWrapper>{React.cloneElement(child, childProps)}</IconWrapper>
    </View>
  );
};

export default TabButton;
