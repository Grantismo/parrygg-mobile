import { LinearGradient } from "expo-linear-gradient";
import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { Control, useController } from "react-hook-form";
import { View, ViewProps } from "react-native";
import { Dropdown, IDropdownRef } from "react-native-element-dropdown";
import tw from "twrnc";

import Text from "@/components/base/Text";
import { styles } from "@/components/base/styles";
import DownArrow from "@assets/icons/DownArrow";

export interface Item {
  label: string;
  value: any;
}

interface Props {
  label: string;
  placeholder: string;
  data: Item[];
  required?: boolean;
  onChange?: (value: any) => void;
  onFocus?: () => void;

  // For react-hook-form register
  name: string;
  control: Control<any>;
}

const DropdownInput = forwardRef<any, Props>(
  (
    {
      required,
      label,
      placeholder,
      data,
      onChange: onChangeProp,
      name,
      control,
      onFocus,
    }: Props,
    ref,
  ) => {
    const [isFocus, setIsFocus] = useState(false);
    const {
      field: { value, onBlur, onChange },
    } = useController({ name, control, rules: { required } });
    const dropdownRef = useRef<IDropdownRef>(null);

    const onFocusWrapper = () => {
      setIsFocus(true);
      if (onFocus) {
        onFocus();
      }
    };

    useImperativeHandle(
      ref,
      () => {
        return {
          focus() {
            onFocusWrapper();
          },
          blur() {
            // fires the onBlur event on the dropdown below
            dropdownRef.current?.close();
          },
          isFocused() {
            return isFocus;
          },
        };
      },
      [],
    );

    return (
      <View style={[tw`mb-6 w-full`, isFocus && tw`z-10`]}>
        <Dropdown
          ref={dropdownRef}
          placeholderStyle={tw`text-[#6F6F6F]`}
          placeholder={placeholder}
          selectedTextStyle={[styles.defaultWeightFont, tw`text-white`]}
          inputSearchContainerStyle={tw`border-0 px-3`}
          inputSearchStyle={tw`py-2 text-[#6F6F6F] border-b border-[#262626]`}
          renderRightIcon={(visible?: boolean) => (
            <DownArrow
              color="#777777"
              style={visible && { transform: [{ scaleY: -1 }] }}
            />
          )}
          renderDropdown={({ ...props }: ViewProps) => {
            return (
              <LinearGradient
                style={tw`relative rounded-xl z-20`}
                colors={["#0C0C0C", "#161616"]}
              >
                {label && (
                  <Text
                    style={tw`px-[0.45rem] py-[0.1rem] text-[12px] font-normal z-20 ml-4 -top-3 absolute rounded bg-[#161616] text-white`}
                  >
                    {label}
                    {required && (
                      <Text style={tw`ml-1 text-[#FFC93F]`}> *</Text>
                    )}
                  </Text>
                )}
                <View
                  style={[
                    tw`flex-row items-center justify-between text-[16px] pt-[12px] pb-[14px] px-[18px] text-white border border-white rounded-xl sm:text-sm`,
                    isFocus && tw`border border-[#FFC93F]`,
                  ]}
                  {...props}
                />
              </LinearGradient>
            );
          }}
          renderItem={(item: Item, selected?: boolean) => (
            <View
              style={[
                tw`px-[18px] pt-[8px] pb-[11px] bg-transparent`,
                selected && tw`bg-[#161616]`,
              ]}
            >
              <Text style={tw`text-white`}>{item.label}</Text>
            </View>
          )}
          renderContainer={({ style, ...props }: ViewProps) => {
            return (
              <LinearGradient
                style={[
                  tw`bg-[#0C0C0C] rounded-b-xl border border-white border-t-0 -mt-3 pb-3`,
                ]}
                colors={["#0C0C0C", "#161616"]}
                {...props}
              />
            );
          }}
          activeColor="#0C0C0C"
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          searchPlaceholder="Search..."
          value={value}
          searchQuery={(keyword: string, labelValue: string) =>
            labelValue.toLowerCase().startsWith(keyword.toLowerCase())
          }
          onFocus={onFocusWrapper}
          onBlur={() => {
            setIsFocus(false);
            onBlur();
          }}
          onChange={(item: any) => {
            setIsFocus(false);
            onChange(item.value);
            if (onChangeProp) {
              onChangeProp(item.value);
            }
          }}
        />
      </View>
    );
  },
);

export default DropdownInput;
