import React, { useEffect } from "react";
import {
  useFonts,
  Inter_500Medium,
  Inter_600SemiBold,
} from '@expo-google-fonts/inter';
import { Slot, SplashScreen } from "expo-router";

//   const keyCloakUrl = `http://${Constants?.expoConfig?.hostUri?.split(`:`)?.shift()?.concat(`.nip.io:8089`)}`
//   const keycloakConfiguration = {
//     clientId: "mobile",
//     realm: "parrygg",
//     url: keyCloakUrl,
//     scheme: AppConfig.expo.scheme,
//     extraParams: {
//       scopes: ["openid", "offline_access"]
//     },
//     onDiscoveryError: (error: Error) => { console.error(error) }
//   }
// <KeycloakProvider {...keycloakConfiguration}>
// <View>
//   <Auth></Auth>
// </View>
// </KeycloakProvider>

SplashScreen.preventAutoHideAsync();

const Layout = () => {
  let [fontsLoaded, fontError] = useFonts({
    Inter_500Medium,
    Inter_600SemiBold,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null
  }

  return <Slot />
}

export default Layout;