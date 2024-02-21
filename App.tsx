import React from "react";
import { View } from "react-native";
import AppConfig from "./app.json";
import Constants from "expo-constants";
import { KeycloakProvider } from "expo-keycloak-auth";
import Auth from './Auth';

const App = () => {
  const keyCloakUrl = `http://${Constants?.expoConfig?.hostUri?.split(`:`)?.shift()?.concat(`:8089`)}`
  const keycloakConfiguration = {
    clientId: "mobile",
    realm: "parrygg",
    url: keyCloakUrl,
    scheme: AppConfig.expo.scheme,
    extraParams: {}, // TODO: missing openid scope
  }

  return (
    <KeycloakProvider {...keycloakConfiguration}>
      <View>
        <Auth />
      </View>
    </KeycloakProvider>
  );
}

export default App;