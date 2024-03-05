import React, { useRef, createElement, useEffect } from 'react';
import { TextInput } from 'react-native';
import { FieldErrors, FieldValues, PathValue } from 'react-hook-form';
import { UseFormRegister, UseFormSetValue, RegisterOptions } from "react-hook-form"

interface Props<T extends FieldValues> {
  children: JSX.Element | JSX.Element[]
  register: UseFormRegister<T>
  errors: FieldErrors<T>
  validation: RegisterOptions[]
  setValue: UseFormSetValue<T>
}

const Form = <T extends FieldValues>({
  register,
  errors,
  setValue,
  validation,
  children,
}: Props<T>) => {
  const inputs = useRef<Array<TextInput>>([]);

  useEffect(() => {
    (Array.isArray(children) ? [...children] : [children]).forEach((child) => {
      if (child.props.control) {
        return
      }
      if (child.props.name) {
        register(child.props.name, validation[child.props.name]);
      }
    });
  }, [register]);


  // TODO configure this so it handles blur/focus management for multiselects too
  return (
    <>
      {(Array.isArray(children) ? children : [children]).map(
        (child, i) => {
          if (!child.props.name || child.props.control) {
            return child
          }
          if (child.props.name) {
            return createElement(child.type, {
              ...child.props,
              ref: (e: TextInput) => {
                inputs.current[i] = e
              },
              onChangeText: (v: PathValue<T, any>) =>
                setValue(child.props.name, v, { shouldValidate: true }),
              onSubmitEditing: () => {
                inputs.current[i + 1]
                  ? inputs.current[i + 1].focus()
                  : inputs.current[i].blur()
              },
              blurOnSubmit: false,
              key: child.props.name,
              error: errors[child.props.name],
            }
            )
          }
        }
      )}
    </>
  )
}

export default Form;