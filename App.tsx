import React, { useCallback } from "react";
import AppConfig from "./app.json";
import Constants from "expo-constants";
import { KeycloakProvider } from "expo-keycloak-auth";
import Auth from "./src/Auth";
import Register from "./src/screens/Register";
import * as SplashScreen from 'expo-splash-screen';
import { View } from "react-native";
import {
  useFonts,
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
} from '@expo-google-fonts/inter';

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
    <Register onLayout={onLayoutRootView}></Register>
    // <KeycloakProvider {...keycloakConfiguration}>
    //   <View> 
    //     <Auth></Auth>
    //   </View>
    // </KeycloakProvider>
  );
}

export default App;