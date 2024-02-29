import * as React from 'react'
import {
    PressableProps,
    Pressable,
    View,
} from 'react-native'
import tw from 'twrnc';
import { LinearGradient } from 'expo-linear-gradient'
import Text from './Text';

interface Props extends PressableProps {
    title: string
}

const Button = ({ title, ...pressableProps }: Props) => {
    //focus:from-[#FFC123] focus:to-[#F5B612]
    return (
        <View style={tw`px-6 mb-2 w-full`}>
            <LinearGradient style={tw`rounded-[14px]`} colors={["#EFB31A", "#FFCB46"]}>
                <Pressable
                    style={tw`rounded-[14px] pt-[13px] pb-[15px] border-2 border-[#ffd978] text-black flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2`}
                    {...pressableProps}>
                    <Text style={tw`text-black`}>{title}</Text>
                </Pressable>
            </LinearGradient>
        </View>
    )
}

export default Button;