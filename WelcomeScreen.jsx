import React from 'react';
import { StyleSheet, View, Image, Button } from 'react-native';

const WelcomeScreen = ({ onRegister, onSignIn }) => {
  return (
    <View style={styles.container}>
      <Image source={require('./applogo.png')} style={styles.logo} />
      <Button title="Iniciar sesión" onPress={onSignIn} />
      <Button title="Registro de usuario" onPress={onRegister} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 354,
    height: 171,
    marginBottom: 20,
  },
});

export default WelcomeScreen;
