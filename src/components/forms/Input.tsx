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
}

const Input = forwardRef<any, Props>(
  (
    {
      label,
      error,
      required,
      placeholder,
      containerStyle,
      ...inputProps
    }: Props,
    ref,
  ): React.ReactElement => {
    const [isFocus, setIsFocus] = useState(false);
    return (
      <View style={[tw`px-6 mb-2 w-full z-0`, containerStyle]}>
        <LinearGradient style={tw`rounded-xl`} colors={["#0C0C0C", "#161616"]}>
          {label && (
            <Text
              style={tw`px-[0.45rem] py-[0.1rem] text-[12px] font-normal z-10 ml-4 -top-3 absolute rounded bg-[#161616] text-white`}
            >
              {label}
              {required && <Text style={tw`ml-1 text-[#FFC93F]`}> *</Text>}
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
              tw`text-[16px] pt-[12px] pb-[14px] px-[18px]  text-white 
                                border border-white rounded-[14px] sm:text-sm`,
              isFocus && tw`border border-[#FFC93F]`,
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
