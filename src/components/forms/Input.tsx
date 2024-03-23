import { LinearGradient } from "expo-linear-gradient";
import * as React from "react";
import { forwardRef, useState } from "react";
import { FieldError } from "react-hook-form";
import {
  View,
  TextInput,
  TextInputProps,
  StyleProp,
  ViewStyle,
} from "react-native";
import { Style } from "twrnc";

import Text from "@/components/base/Text";
import { styles } from "@/components/base/styles";
import tw from "@/lib/tailwind";

interface Props extends TextInputProps {
  name: string;
  label?: string;
  placeholder?: string;
  error?: FieldError;
  required?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  size?: Size;
}

type Size = "lg" | "md" | "base" | "sm" | "xs";

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
      ...inputProps
    }: Props,
    ref,
  ): React.ReactElement => {
    const [isFocus, setIsFocus] = useState(false);
    const inputStyle = SizeMapping[size];
    return (
      <View style={[tw`mb-1 w-full z-0`, containerStyle]}>
        <LinearGradient style={tw`rounded-xl`} colors={["#0C0C0C", "#161616"]}>
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
          <TextInput
            autoCapitalize="none"
            placeholder={placeholder}
            placeholderTextColor="#6F6F6F"
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            ref={ref}
            style={[
              styles.defaultWeightFont,
              tw`text-base pt-[13px] pb-[15px] px-[18px]  text-white 
                                border border-white sm:text-sm`,
              isFocus && tw`border border-[#FFC93F]`,
              inputStyle,
            ]}
            {...inputProps}
          />
        </LinearGradient>
        <Text>{error && error.message}</Text>
      </View>
    );
  },
);

export default Input;
