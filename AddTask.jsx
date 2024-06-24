import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Modal, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const AddTask = ({ onAddTask }) => {
  const [taskTitle, setTaskTitle] = useState('');
  const [description, setDescription] = useState('');
  const [resolution, setResolution] = useState('');
  const [status, setStatus] = useState('En proceso');
  const [modalVisible, setModalVisible] = useState(false);

  const handleAddTask = () => {
    if (!taskTitle || !description || !resolution) {
      Alert.alert('Error', 'Por favor complete todos los campos');
      return;
    }

    const newTask = {
      title: taskTitle,
      description: description,
      resolution: resolution,
      status: status,
    };

    // Agregar la nueva tarea utilizando la función proporcionada
    onAddTask(newTask);

    // Restablecer los campos después de agregar la tarea
    setTaskTitle('');
    setDescription('');
    setResolution('');
    setStatus('En proceso');

    // Ocultar el modal después de agregar la tarea
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Button title="Agregar tarea" onPress={() => setModalVisible(true)} />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TextInput
              style={styles.input}
              placeholder="Título"
              value={taskTitle}
              onChangeText={setTaskTitle}
              maxLength={30}
            />
            <TextInput
              style={styles.input}
              placeholder="Descripción"
              value={description}
              onChangeText={setDescription}
              maxLength={280}
            />
            <TextInput
              style={styles.input}
              placeholder="Resolución"
              value={resolution}
              onChangeText={setResolution}
              maxLength={280}
            />
            <Picker
              selectedValue={status}
              style={styles.picker}
              onValueChange={(itemValue) => setStatus(itemValue)}
            >
              <Picker.Item label="En proceso" value="En proceso" />
              <Picker.Item label="En espera" value="En espera" />
              <Picker.Item label="Finalizada" value="Finalizada" />
            </Picker>
            <View style={styles.modalButtons}>
              <Button title="Cancelar" onPress={() => setModalVisible(false)} />
              <Button title="Agregar" onPress={handleAddTask} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semi-transparente
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%', // Ancho del modal
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '100%',
  },
  picker: {
    height: 40,
    width: '100%',
    marginBottom: 10,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default AddTask;