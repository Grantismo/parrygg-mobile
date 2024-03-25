import { LinearGradient } from "expo-linear-gradient";
import * as React from "react";
import { forwardRef, useState } from "react";
import { View, TextInput } from "react-native";
import { Style } from "twrnc";

import Text from "@/components/base/Text";
import { styles } from "@/components/base/styles";
import Props from "@/components/forms/InputProps";
import tw from "@/lib/tailwind";

const SizeMapping: { [key: string]: Style } = {
  lg: tw`rounded-lg`,
  md: tw`rounded-md`,
  base: tw`rounded`,
};

const Input = forwardRef<any, Props>(
  (
    {
      label,
      error,
      required,
      placeholder,
      containerStyle,
      size = "lg",
      rightPressable,
      style,
      ...inputProps
    }: Props,
    ref,
  ): React.ReactElement => {
    const [isFocus, setIsFocus] = useState(false);
    const inputStyle = SizeMapping[size];
    return (
      <View style={[tw`mb-1 w-full z-0`, containerStyle]}>
        <LinearGradient style={inputStyle} colors={["#0C0C0C", "#161616"]}>
          {label && (
            <Text
              style={tw`px-[0.45rem] py-[0.1rem] text-[12px] font-normal z-10 ml-4 -top-3 absolute rounded-2xs bg-[#161616] text-white`}
            >
              {label}
              {required && (
                <Text style={tw`ml-1 text-[#FFC93F] text-[12px] `}> *</Text>
              )}
            </Text>
          )}
          <View
            style={[
              tw`flex-row items-center justify-between pt-[13px] pb-[15px] px-[18px] border border-white`,
              isFocus && tw`border border-[#FFC93F]`,
              inputStyle,
            ]}
          >
            <TextInput
              autoCapitalize="none"
              placeholder={placeholder}
              placeholderTextColor="#6F6F6F"
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              ref={ref}
              style={[
                styles.defaultWeightFont,
                tw`flex flex-1 text-base text-white`,
                style,
              ]}
              {...inputProps}
            />
            {rightPressable && rightPressable}
          </View>
        </LinearGradient>
        <Text>{error && error.message}</Text>
      </View>
    );
  },
);

export default Input;
