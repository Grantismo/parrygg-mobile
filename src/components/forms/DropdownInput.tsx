import React, { RefObject, forwardRef, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import tw from 'twrnc';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from '../base/styles';
import { Dropdown, IDropdownRef } from 'react-native-element-dropdown';
import { ChangeHandler, Control, RegisterOptions, useController } from 'react-hook-form';

export interface Item {
    label: string
    value: any
}

interface Props {
    label: string
    placeholder: string
    data: Item[]
    required?: boolean
    onChange?: (value: any) => void

    // For react-hook-form register
    name: string
    control: Control<any>
}

const DropdownInput = (({ required, label, placeholder, data, onChange: onChangeProp, name, control }: Props) => {
    const [isFocus, setIsFocus] = useState(false);
    const { field: { value, onBlur, onChange }, } = useController({ name, control, rules: { required } });
    return (
        <View style={tw`px-6 mb-6 w-full`}>
            <LinearGradient style={tw`rounded-xl`} colors={["#0C0C0C", "#161616"]}>
                {label && <Text style={tw`px-[0.45rem] py-[0.1rem] text-[12px] font-normal z-10 ml-4 -top-3 absolute rounded bg-[#161616] text-white`}>
                    {label}
                    {required && <Text style={tw`ml-1 text-[#FFC93F]`}> *</Text>}
                </Text>}
                <Dropdown
                    style={[tw`text-[16px] pt-[8px] pb-[11px] px-[18px] text-white 
                    border border-white rounded-xl`, isFocus && tw`border border-[#FFC93F]`]}
                    placeholderStyle={tw`text-[#6F6F6F]`}
                    selectedTextStyle={[styles.defaultWeightFont, tw`text-white`]}
                    inputSearchStyle={tw`rounded-xl text-[#6F6F6F]`}
                    containerStyle={tw`bg-[#0C0C0C] border border-white`}
                    itemTextStyle={[styles.defaultWeightFont, tw`text-white`]}
                    activeColor={"#161616"}
                    iconStyle={tw``}
                    data={data}
                    search
                    maxHeight={400}
                    labelField="label"
                    valueField="value"
                    placeholder={!isFocus ? placeholder : ''}
                    searchPlaceholder="Search..."
                    value={value}
                    searchQuery={(keyword: string, labelValue: string) => labelValue.toLowerCase().startsWith(keyword.toLowerCase())}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => {
                        setIsFocus(false)
                        onBlur()
                    }}
                    onChange={(item: any) => {
                        setIsFocus(false);
                        onChange(item.value)
                        if (onChangeProp) {
                            onChangeProp(item.value)
                        }
                    }}
                />
            </LinearGradient>
        </View>
    );
})

export default DropdownInput;