import * as React from 'react'
import { ReactNode } from 'react';
import {
    Text as NativeText,
    TextStyle,
    StyleProp,
} from 'react-native'
import tw from 'twrnc';
import { styles } from './styles';

interface Props  {
    style?: StyleProp<TextStyle>
    children: ReactNode
  }

const Text = ({style, children, ...textProps}: Props) => {
    return (
      <NativeText style={[styles.mediumWeightFont, tw`text-xl mb-6`, style]} {...textProps}>{children}</NativeText>
    )
}

export default Text;