
//*****************SignIn.jsx

import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Alert, Text } from 'react-native';

const SignIn = ({ onUserCreated, users, onBack }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [photo, setPhoto] = useState('');

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handleRegister = () => {
    if (!firstName || !lastName || !email || !password) {
      Alert.alert('Error', 'Por favor, complete todos los campos');
      return;
    }

    if (!validateEmail(email)) {
      Alert.alert('Error', 'Por favor, ingrese un correo electrónico válido');
      return;
    }

    if (!validatePassword(password)) {
      Alert.alert('Error', 'La contraseña debe tener al menos 6 caracteres');
      return;
    }

    users.push({
      firstName,
      lastName,
      email,
      password,
      photo,
    });

    Alert.alert('Éxito', 'Usuario creado exitosamente');
    onUserCreated();
  };

  return (
    <View style={styles.container}>
      <Button title="Atrás" onPress={onBack} />
      <Text>Registro de usuario</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={firstName}
        onChangeText={setFirstName}
      />
      <TextInput
        style={styles.input}
        placeholder="Apellido"
        value={lastName}
        onChangeText={setLastName}
      />
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Foto (URL)"
        value={photo}
        onChangeText={setPhoto}
      />
      <Button title="Registrarse" onPress={handleRegister} />
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
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default SignIn;