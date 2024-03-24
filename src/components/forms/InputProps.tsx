import { FieldError } from "react-hook-form";
import { StyleProp, TextInputProps, ViewStyle } from "react-native";

type Size = "lg" | "md" | "base" | "sm" | "xs";

export default interface Props extends TextInputProps {
  name: string;
  label?: string;
  placeholder?: string;
  error?: FieldError;
  required?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  size?: Size;
  rightPressable?: JSX.Element;
}
