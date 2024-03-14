import React from "react";
import { View } from "react-native";

import Text from "@/components/base/Text";
import ProfilePicture from "@/components/player/ProfilePicture";
import tw from "@/lib/tailwind";

const Profile = () => {
  return (
    <View style={tw`w-full flex flex-row items-center `}>
      <ProfilePicture />
      <View style={tw`ml-3`}>
        <Text>blorppppp</Text>
        <Text color="secondary" style={tw`text-sm`}>John D. (he/him)</Text>
      </View>
    </View>
  );
};

export default Profile;
