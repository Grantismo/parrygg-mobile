import React from "react";
import { View } from "react-native";
import tw from "twrnc";

import Text from "@/components/base/Text";
import ProfilePicture from "@/components/player/ProfilePicture";

const Profile = () => {
  return (
    <View style={tw`w-full flex flex-row items-center `}>
      <ProfilePicture />
      <View style={tw`ml-3`}>
        <Text>blorppppp</Text>
        <Text color="secondary">John D. (he/him)</Text>
      </View>
    </View>
  );
};

export default Profile;
