import React from "react";
import AppConfig from "./app.json";
import Constants from "expo-constants";
import { KeycloakProvider } from "expo-keycloak-auth";
import View from "./src/components/base/View";
import Auth from "./src/Auth";
import Register from "./src/screens/Register";

const App = () => {
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
    <Register></Register>
    // <KeycloakProvider {...keycloakConfiguration}>
    //   <View> 
    //     <Auth></Auth>
    //   </View>
    // </KeycloakProvider>
  );
}

export default App;