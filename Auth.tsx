import React, {useEffect} from "react";
import {
  Text,
  View,
  Button,
  ActivityIndicator,
  TextInput,
} from "react-native";
import { useKeycloak } from "expo-keycloak-auth";

const Auth = () => {
    const {
      ready, // If the discovery is already fetched and ready to prompt authentication flow
      login, // The login function - opens the browser
      isLoggedIn, // Helper boolean to use e.g. in your components down the tree
      token, // Access token, if available
      logout, // The logout function - Logs the user out
    } = useKeycloak();
    useEffect(() => {
      if(!isLoggedIn && ready) {
        login()
      }
    },  [isLoggedIn])
    if (!ready || !isLoggedIn) return <ActivityIndicator />;
    // TODO(j/MVP-30): If it takes longer than N seconds to become ready -- show an alert to the user
    // TODO(j/MVP-29): Enable PKCE support
      
    return (
      <View style={{ margin: 24 }}>
        <Text style={{ fontSize: 17, marginBottom: 24 }}>Logged in!</Text>
        <Text>Your Access Token</Text>
        <TextInput value={token}></TextInput>
        <Button onPress={logout} title={"Logout"} />
      </View>
    );
  };

export default Auth;