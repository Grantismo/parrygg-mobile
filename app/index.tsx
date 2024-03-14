import { useRootNavigationState, Redirect } from "expo-router";
import React from "react";

const Index = () => {
  const rootNavigationState = useRootNavigationState();

  if (!rootNavigationState?.key) return null;
  return <Redirect href="/main/search" />;
};

export default Index;
