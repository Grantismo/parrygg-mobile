import React from "react";
import { TextProps } from "react-native";
import tw from "twrnc";

import Text from "@/components/base/Text";
import { numberWithOrdinal } from "@/libs/utils";
import Trophy from "@assets/icons/Trophy";

interface Props extends TextProps {
  place: number;
}

const Placement = ({ place, ...props }: Props) => {
  return (
    <>
      <Trophy width={15} height={14} color="#FFC93F" style={tw`mr-1`} />
      <Text color="accent" {...props}>
        {numberWithOrdinal(place)}
      </Text>
    </>
  );
};

export default Placement;
