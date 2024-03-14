import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React from "react";
import { View } from "react-native";

import Background from "@/components/base/Background";
import Button from "@/components/base/Button";
import Sep from "@/components/base/Sep";
import Text from "@/components/base/Text";
import Title from "@/components/base/Title";
import tw from "@/lib/tailwind";
import Calendar from "@assets/icons/Calendar";
import FileUpload from "@assets/icons/FileUpload";
import Pin from "@assets/icons/Pin";

const RegistrationStep3Page = () => {
  const onSubmit = (event: any) => {
    router.navigate("/register/step1");
  };

  // TODO: skip/back buttons

  return (
    <Background>
      <Title style={tw`text-[#FFC93F]`}>
        Profile <Title style={tw`text-white`}>Pictures</Title>
      </Title>
      <View style={tw`px-6 mb-[1.6rem] w-full`}>
        <View
          style={tw`p-5 rounded-[16px] border border-[#3E3E3E] bg-[#151515]`}
        >
          <View
            style={tw`h-32 rounded-[8px] border-2 border-dashed border-[#FFC93F] flex items-center justify-center`}
          >
            <FileUpload />
          </View>
          <View style={tw`w-full flex flex-row`}>
            <View
              style={tw`h-20 w-20 rounded-[2.5rem] border-2 border-[#39D83F] ml-3 -mt-4 flex flex-row`}
            >
              <LinearGradient
                style={tw`w-full h-full rounded-[2.5rem] flex items-center justify-center`}
                colors={["#2B2B2B", "#414141"]}
              >
                <FileUpload />
              </LinearGradient>
            </View>
            <View style={tw`ml-3 mt-3`}>
              <Text style={tw`text-white text-base`}>blorppppp</Text>
              <Text style={tw`text-[#777]`}>John D. (he/him)</Text>
            </View>
          </View>
          <View style={tw`flex flex-row items-center`}>
            <Calendar />
            <Text style={tw`ml-2.5 text-[#777] py-[0.69rem]`}>
              Dec 18th, 2023
            </Text>
          </View>
          <Sep />
          <View style={tw`flex flex-row items-center`}>
            <Pin />
            <Text style={tw`ml-2.5 text-[#777] py-[0.69rem]  mt-1 mb-1`}>
              Lakewood, CO, United States
            </Text>
          </View>
          <Sep />
          <Title style={tw`text-base text-white mt-[0.69rem] mb-0.5`}>
            Bio
          </Title>
          <Text style={tw` text-[#777]`}>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used.
          </Text>
        </View>
      </View>
      <Button style={tw`w-full`} title="Finish Editing" onPress={onSubmit} />
    </Background>
  );
};

export default RegistrationStep3Page;
