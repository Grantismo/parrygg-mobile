import React, { useState } from 'react';
import { View, ViewProps } from 'react-native';
import tw from 'twrnc';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from '../base/styles';
import { Dropdown } from 'react-native-element-dropdown';
import {Control, useController } from 'react-hook-form';
import Text from '../base/Text'

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
    // TODO: change underlying implementation so it does't rely on react-modal which will always be visible on top

    return (
        <View style={tw`relative px-6 mb-6 w-full z-20`}>
            <LinearGradient style={tw`relative rounded-xl z-30`} colors={["#0C0C0C", "#161616"]}>
                {label && <Text style={tw`px-[0.45rem] py-[0.1rem] text-[12px] font-normal z-20 ml-4 -top-3 absolute rounded bg-[#161616] text-white`}>
                    {label}
                    {required && <Text style={tw`ml-1 text-[#FFC93F]`}> *</Text>}
                </Text>}
                <Dropdown
                    style={[tw`z-10 text-[16px] pt-[8px] pb-[11px] px-[18px] text-white 
                    border border-white rounded-xl`, isFocus && tw`border border-[#FFC93F]`]}
                    placeholderStyle={tw`text-[#6F6F6F]`}
                    selectedTextStyle={[styles.defaultWeightFont, tw`text-white`]}
                    inputSearchContainerStyle={tw`border-0 px-3`}
                    inputSearchStyle={tw`py-2 text-[#6F6F6F] border-b border-[#262626]`}
                    renderItem={(item: Item, selected: boolean) => (
                        <View style={[tw`px-[18px] pt-[8px] pb-[11px] bg-transparent`, selected && tw`bg-[#161616]`]}>
                            <Text style={tw`text-white`}>
                                {item.label}
                            </Text>
                        </View>
                    )}
                    renderContainer={({style, ...props}: ViewProps) => {
                        return <LinearGradient style={tw`bg-[#0C0C0C] rounded-b-xl border border-white border-t-0 -mt-3 pb-3 z-0`} colors={["#0C0C0C",  "#161616"]} {...props} />
                    }}
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
                        // setIsFocus(false)
                        // onBlur()
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