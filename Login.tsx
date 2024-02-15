import React from 'react';
import { View, Text, Button } from 'react-native';
import { useKeycloak } from '@react-keycloak/native';

const Login = () => {
  const { keycloak } = useKeycloak();

  return (
    <View>
      <Text>{`Welcome ${keycloak?.authenticated} - ${keycloak?.token}!`}</Text>
      <Button onPress={() => keycloak?.login()} title="Login" />
    </View>
  );
};

export default Login;