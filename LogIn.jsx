import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

const Login = ({ onLogin }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [photo, setPhoto] = useState('');

  // Función para validar el correo electrónico
  const validateEmail = (email) => {
    // Utiliza una expresión regular para validar el formato del correo electrónico
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // Función para validar la contraseña (puede ser modificada según los requisitos)
  const validatePassword = (password) => {
    return password.length >= 6; // Por ejemplo, la contraseña debe tener al menos 6 caracteres
  };

  // Función para manejar el registro del usuario
  const handleRegister = () => {
    // Verifica si todos los campos requeridos están completos
    if (!firstName || !lastName || !email || !password) {
      Alert.alert('Error', 'Por favor, complete todos los campos');
      return;
    }

    // Verifica si el formato del correo electrónico es válido
    if (!validateEmail(email)) {
      Alert.alert('Error', 'Por favor, ingrese un correo electrónico válido');
      return;
    }

    // Verifica si la contraseña cumple con los requisitos mínimos
    if (!validatePassword(password)) {
      Alert.alert('Error', 'La contraseña debe tener al menos 6 caracteres');
      return;
    }

    // Si todos los datos son válidos, llama a la función de inicio de sesión pasada como prop
    onLogin({
      firstName,
      lastName,
      email,
      password,
      photo,
    });
  };

  return (
    <View style={styles.container}>
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

export default Login;
