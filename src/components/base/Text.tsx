import * as React from 'react'
import { ReactNode } from 'react';
import {
    Text as NativeText,
    TextStyle,
    StyleProp,
} from 'react-native'
import { styles } from './styles';

interface Props  {
    style?: StyleProp<TextStyle>
    children: ReactNode
  }

const Title = ({style, children, ...textProps}: Props) => {
    return (
      <NativeText style={[styles.defaultWeightFont, style]} {...textProps}>{children}</NativeText>
    )
}

export default Title;