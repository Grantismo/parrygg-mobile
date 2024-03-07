import { useRootNavigationState, Redirect } from "expo-router";
import React from "react";

const Index = () => {
  const rootNavigationState = useRootNavigationState();

  if (!rootNavigationState?.key) return null;
  return <Redirect href="/register/step1" />;
};

export default Index;
