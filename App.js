import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import WelcomeScreen from './WelcomeScreen';
import SignIn from './SignIn';
import LogIn from './LogIn';

const users = [];

export default function App() {
  const [screen, setScreen] = useState('welcome');
  const [currentUser, setCurrentUser] = useState(null);

  const handleLogin = (user) => {
    setCurrentUser(user);
    setScreen('home');
  };

  const handleNavigateToRegister = () => {
    setScreen('register');
  };

  const handleNavigateToSignIn = () => {
    setScreen('signIn');
  };

  const handleBackToWelcome = () => {
    setScreen('welcome');
  };

  const handleBackToHome = () => {
    setScreen('home');
  };

  return (
    <View style={styles.container}>
      {screen === 'welcome' && (
        <WelcomeScreen onRegister={handleNavigateToRegister} onSignIn={handleNavigateToSignIn} />
      )}
      {screen === 'register' && (
        <SignIn
          onUserCreated={() => setScreen('signIn')}
          users={users}
          onBack={handleBackToWelcome}
        />
      )}
      {screen === 'signIn' && (
        <LogIn
          onLogin={handleLogin}
          users={users}
          onBack={handleBackToWelcome}
        />
      )}
      {screen === 'home' && (
        <View style={styles.homeContainer}>
          <Text style={styles.homeText}>Esto sería el home</Text>
          <Button title="Atrás" onPress={handleBackToWelcome} />
        </View>
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
