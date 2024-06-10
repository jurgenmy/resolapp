// AddTask.jsx
import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Alert } from 'react-native';

const AddTask = ({ onAddTask }) => {
  const [taskTitle, setTaskTitle] = useState('');

  const handleAddTask = () => {
    if (!taskTitle) {
      Alert.alert('Error', 'Por favor, ingrese un título para la tarea');
      return;
    }

    onAddTask(taskTitle);
    setTaskTitle('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Título de la tarea"
        value={taskTitle}
        onChangeText={setTaskTitle}
      />
      <Button title="Agregar tarea" onPress={handleAddTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  input: {
    width: '60%', // Disminuimos el ancho del input para que el botón de "Agregar tarea" quede debajo
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginRight: 10, // Agregamos margen derecho para separar el input del botón
  },
});

export default AddTask;
