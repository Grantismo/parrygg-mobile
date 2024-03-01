import React, { useCallback } from "react";
import AppConfig from "./app.json";
import Constants from "expo-constants";
import { KeycloakProvider } from "expo-keycloak-auth";
import Auth from "./src/Auth";
import Register from "./src/screens/AccountStep1";
import * as SplashScreen from 'expo-splash-screen';
import { View } from "react-native";
import {
  useFonts,
  Inter_500Medium,
  Inter_600SemiBold,

} from '@expo-google-fonts/inter';
import AccountStep2 from "./src/screens/AccountStep2";

SplashScreen.preventAutoHideAsync();

const App = () => {

  let [fontsLoaded, fontError] = useFonts({
    Inter_500Medium,
    Inter_600SemiBold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }


  const keyCloakUrl = `http://${Constants?.expoConfig?.hostUri?.split(`:`)?.shift()?.concat(`.nip.io:8089`)}`
  const keycloakConfiguration = {
    clientId: "mobile",
    realm: "parrygg",
    url: keyCloakUrl,
    scheme: AppConfig.expo.scheme,
    extraParams: {
      scopes: ["openid", "offline_access"]
    },
    onDiscoveryError: (error: Error) => {console.error(error)}
  }

  return (
    <AccountStep2 onLayout={onLayoutRootView}></AccountStep2>
    // <KeycloakProvider {...keycloakConfiguration}>
    //   <View> 
    //     <Auth></Auth>
    //   </View>
    // </KeycloakProvider>
  );
}

export default App;