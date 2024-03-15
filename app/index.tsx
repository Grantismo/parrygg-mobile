import { useRootNavigationState, Redirect } from "expo-router";
import React from "react";

const Index = () => {
  const rootNavigationState = useRootNavigationState();

  if (!rootNavigationState?.key) return null;
  return <Redirect href="/main/calendar/1710379807000/tournament/1" />;
};

export default Index;
