import React from "react";
import { useRootNavigationState, Redirect } from 'expo-router';


const Index = () => {
  const rootNavigationState = useRootNavigationState();

  if (!rootNavigationState?.key) return null;
  return  <Redirect href={'/register/step2'} />

}

export default Index;