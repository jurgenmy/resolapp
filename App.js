// App.js
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './LogIn';


export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleRegister = () => {
    // Lógica de redirección o cualquier otra acción después del registro
  };

  return (
    <View style={styles.container}>
      {isLoggedIn ? (
        <View style={styles.homeContainer}>
          <Text style={styles.homeText}>Esto sería el home</Text>
        </View>
      ) : (
        <Login onLogin={handleLogin} onRegister={handleRegister} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeContainer: {
    flex: 1,
    backgroundColor: '#D3D3D3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    textDecorationLine: 'underline',
    textDecorationColor: 'red',
  },
});
