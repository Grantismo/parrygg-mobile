import { Stack } from "expo-router";
import React from "react";

const Layout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="[timestamp]/index" />
      <Stack.Screen name="[timestamp]/tournament/[id]" />
    </Stack>
  );
};
export default Layout;
