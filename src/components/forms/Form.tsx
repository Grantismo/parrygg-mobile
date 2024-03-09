import React, { useRef, createElement, useEffect } from "react";
import {
  FieldErrors,
  FieldValues,
  PathValue,
  UseFormRegister,
  UseFormSetValue,
  RegisterOptions,
} from "react-hook-form";

import DropdownInput from "./DropdownInput";
import Input from "./Input";
import CityInput from "./location/CityInput";
import CountryInput from "./location/CountryInput";
import StateInput from "./location/StateInput";

interface Props<T extends FieldValues> {
  children: JSX.Element | JSX.Element[];
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
  validation: RegisterOptions[];
  setValue: UseFormSetValue<T>;
}

const DROPDOWN_INPUTS = new Set([
  DropdownInput,
  CityInput,
  CountryInput,
  StateInput,
]);

const Form = <T extends FieldValues>({
  register,
  errors,
  setValue,
  validation,
  children,
}: Props<T>) => {
  const inputs = useRef<any[]>([]);

  useEffect(() => {
    (Array.isArray(children) ? [...children] : [children]).forEach((child) => {
      if (child.props.control) {
        return;
      }
      if (child.props.name) {
        register(child.props.name, validation[child.props.name]);
      }
    });
  }, [register]);

  const updateFocus = (i: number) => {
    if (i < inputs.current.length - 1) {
      inputs.current[i + 1].focus();
    }
    inputs.current[i].blur();
  };

  return (
    <>
      {(Array.isArray(children) ? children : [children]).map((child, i) => {
        if (!child.props.name) {
          return child;
        }
        if (child.props.name) {
          let fieldProps = {};
          if (child.type === Input) {
            fieldProps = {
              onChangeText: (v: PathValue<T, any>) =>
                setValue(child.props.name, v, { shouldValidate: true }),
              onSubmitEditing: () => updateFocus(i),
              blurOnSubmit: false,
              error: errors[child.props.name],
            };
          }

          if (DROPDOWN_INPUTS.has(child.type)) {
            fieldProps = {
              onChange: () => updateFocus(i),
            };
          }

          const props = {
            key: child.props.name,
            ref: (e: any) => {
              inputs.current[i] = e;
            },
            onFocus: () => {
              inputs.current
                .filter((input, j) => input.isFocused() && j !== i)
                .forEach((input) => input.blur());
            },
          };
          return createElement(child.type, {
            ...props,
            ...child.props,
            ...fieldProps,
          });
        }
      })}
    </>
  );
};

export default Form;
