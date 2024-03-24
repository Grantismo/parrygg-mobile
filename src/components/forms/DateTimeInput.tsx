import { format } from "date-fns";
import React, { forwardRef, useState } from "react";
import { Pressable } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import Input from "@/components/forms/Input";
import InputProps from "@/components/forms/InputProps";
import tw from "@/lib/tailwind";
import Calendar from "@assets/icons/Calendar";

interface Props extends Omit<InputProps, "renderPressable"> {}

const DateTimeInput = forwardRef<any, Props>(
  (props: Props, ref): React.ReactElement => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [value, setValue] = useState<string | undefined>(undefined);

    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };

    const handleConfirm = (date: Date) => {
      setValue(format(date, "MM/dd/yyyy K:mm aaa"));
      setDatePickerVisibility(false);
    };
    return (
      <>
        <Input
          value={value}
          rightPressable={
            <Pressable
              style={tw`w-5`}
              hitSlop={10}
              onPress={() => setDatePickerVisibility(true)}
            >
              <Calendar height={14} color="#777777" />
            </Pressable>
          }
          {...props}
        />
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="datetime"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      </>
    );
  },
);

export default DateTimeInput;
