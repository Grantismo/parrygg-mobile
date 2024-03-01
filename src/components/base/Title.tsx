import * as React from 'react'
import { ReactNode } from 'react';
import {
    Text as NativeText,
    TextStyle,
    StyleProp,
} from 'react-native'
import { styles } from './styles';
import tw from 'twrnc';

interface Props  {
    style?: StyleProp<TextStyle>
    children: ReactNode
}

const Title = ({style, children, ...textProps}: Props) => {
    return (
        <NativeText style={[styles.mediumWeightFont, tw`text-xl mb-6`, style]} {...textProps}>{children}</NativeText>
    )
}

export default Title;