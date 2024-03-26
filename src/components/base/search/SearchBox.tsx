import { LinearGradient } from "expo-linear-gradient";
import * as React from "react";
import {
  JSXElementConstructor,
  ReactElement,
  ReactNode,
  forwardRef,
  useState,
} from "react";
import {
  View,
  TextInput,
  TextInputProps,
  FlatList,
  ListRenderItemInfo,
} from "react-native";

import Sep from "@/components/base/Sep";
import { styles } from "@/components/base/styles";
import tw from "@/lib/tailwind";
import Search from "@assets/icons/Search";

interface Props<T> extends TextInputProps {
  name: string;
  placeholder?: string;
  required?: boolean;
  data: T[];
  dataKey: keyof T;
  renderItem: (
    itemInfo: ListRenderItemInfo<T>,
    queryString: string,
  ) => JSX.Element;
  ref?:
    | React.RefObject<TextInput>
    | React.MutableRefObject<TextInput>
    | null
    | undefined;
}

const SearchBox: <T>(
  props: Props<T>,
) =>
  | ReactNode
  | ReactElement<any, string | JSXElementConstructor<any>>
  | null
  | undefined = forwardRef(
  (
    {
      data,
      dataKey,
      required,
      placeholder,
      renderItem,
      onFocus,
      ...inputProps
    },
    ref,
  ): React.ReactElement => {
    const [isFocus, setIsFocus] = useState(false);
    const [value, setValue] = useState("");
    return (
      <View style={tw`w-full h-24`}>
        <View
          style={[
            tw`absolute top-0 left-0 mb-2 w-full z-10 flex-col justify-start`,
          ]}
        >
          <LinearGradient
            style={[
              tw`rounded-lg pt-[13px] pb-[15px] px-[18px] 
                                border border-white sm:text-sm `,
              isFocus && tw`border border-[#FFC93F]`,
            ]}
            colors={["#0C0C0C", "#161616"]}
          >
            <View style={tw`flex-row items-center`}>
              <Search color="#777777" style={tw`mr-2 -ml-0.5`} />
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                placeholder={placeholder}
                placeholderTextColor="#6F6F6F"
                onFocus={(e) => {
                  setIsFocus(true);
                  if (onFocus) {
                    onFocus(e);
                  }
                }}
                onChangeText={(text) => {
                  setValue(text);
                }}
                onBlur={() => setIsFocus(false)}
                ref={ref}
                style={[
                  styles.defaultWeightFont,
                  tw`w-full text-white text-base`,
                ]}
                {...inputProps}
              />
            </View>
            {isFocus && (
              <FlatList
                style={tw`mt-4`}
                data={data}
                renderItem={(args) => renderItem(args, value)}
                ItemSeparatorComponent={Sep}
                keyExtractor={(item) => item[dataKey] as string}
              />
            )}
          </LinearGradient>
        </View>
      </View>
    );
  },
);

export default SearchBox;
