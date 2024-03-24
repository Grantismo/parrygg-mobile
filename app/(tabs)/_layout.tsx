import { Tabs } from "expo-router";
import React from "react";

import TabButton from "@/components/base/navigation/TabButton";
import tw from "@/lib/tailwind";
import Calendar from "@assets/icons/Calendar";
import Gear from "@assets/icons/Gear";
import Profile from "@assets/icons/Profile";
import SearchFlame from "@assets/icons/SearchFlame";
import Trophy from "@assets/icons/Trophy";

const MainLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: [
          tw`w-full flex flex-row items-center justify-between bg-[#0A0A0A] px-4 py-9 border-t-0`,
        ],
        tabBarShowLabel: false,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabButton isSelected={focused}>
              <Profile />
            </TabButton>
          ),
        }}
      />
      <Tabs.Screen
        name="calendar"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabButton isSelected={focused}>
              <Calendar />
            </TabButton>
          ),
        }}
      />
      <Tabs.Screen
        name="index" // search
        options={{
          tabBarIcon: ({ focused }) => (
            <TabButton
              isSelected={focused}
              unselectedArgs={{ flameColor: "#FFC93F" }}
              selectedArgs={{ flameColor: "#0A0A0A" }}
            >
              <SearchFlame color="white" />
            </TabButton>
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabButton isSelected={focused}>
              <Gear />
            </TabButton>
          ),
        }}
      />
      <Tabs.Screen
        name="tournaments" // my players
        options={{
          tabBarIcon: ({ focused }) => (
            <TabButton isSelected={focused}>
              <Trophy />
            </TabButton>
          ),
        }}
      />
    </Tabs>
  );
};

export default MainLayout;
