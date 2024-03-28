import {
  useFonts,
  Inter_500Medium,
  Inter_600SemiBold,
} from "@expo-google-fonts/inter";
import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { SplashScreen, Stack } from "expo-router";
import {
  setStatusBarBackgroundColor,
  setStatusBarStyle,
} from "expo-status-bar";
import React, { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import tw from "twrnc";

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

const RootLayout = () => {
  const [fontsLoaded, fontError] = useFonts({
    Inter_500Medium,
    Inter_600SemiBold,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }
  setStatusBarStyle("light");
  setStatusBarBackgroundColor("#0A0A0A", false);
  const DarkTheme = {
    ...DefaultTheme,
    colors: { ...DefaultTheme.colors, background: "#1b1b1b" },
  };
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider value={DarkTheme}>
        <SafeAreaProvider
          style={
            tw`-mt-[1px]` /* Remove 1 pixel space between the SafeAreaView and upper bound */
          }
        >
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          </Stack>
        </SafeAreaProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
};

export default RootLayout;
