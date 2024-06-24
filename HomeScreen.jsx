import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, FlatList, Modal, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const HomeScreen = ({ tasks, onBack, onEditTask, onDeleteTask }) => {
  const [editedTask, setEditedTask] = useState(null);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [editedTitle, setEditedTitle] = useState('');
  const [editedDescription, setEditedDescription] = useState('');
  const [editedResolution, setEditedResolution] = useState('');
  const [editedStatus, setEditedStatus] = useState('');

  const renderItem = ({ item }) => (
    <View style={styles.taskItemContainer}>
      <Text style={styles.taskItemTitle}>{item.title}</Text>
      <Text style={styles.taskItemDescription}>{item.description}</Text>
      <Text style={styles.taskItemResolution}>{item.resolution}</Text>
      <Text style={styles.taskItemStatus}>{item.status}</Text>
      <View style={styles.taskItemButtons}>
        <Button title="Editar" onPress={() => handleEditTask(item)} />
        <Button title="Eliminar" onPress={() => onDeleteTask(item.id)} />
      </View>
    </View>
  );

  const handleEditTask = (task) => {
    setEditedTask(task);
    setEditedTitle(task.title);
    setEditedDescription(task.description);
    setEditedResolution(task.resolution);
    setEditedStatus(task.status);
    setEditModalVisible(true);
  };

  const handleSaveEdit = () => {
    if (!editedTitle.trim()) {
      alert('Por favor ingrese un título válido.');
      return;
    }

    const updatedTask = {
      ...editedTask,
      title: editedTitle,
      description: editedDescription,
      resolution: editedResolution,
      status: editedStatus,
    };

    onEditTask(updatedTask.id, updatedTask);
    setEditModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Button title="Atrás" onPress={onBack} />
      <Text style={styles.title}>Mis Tareas</Text>
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      {/* Modal para editar tarea */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={editModalVisible}
        onRequestClose={() => setEditModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TextInput
              style={styles.input}
              value={editedTitle}
              onChangeText={setEditedTitle}
              placeholder="Editar título de la tarea"
            />
            <TextInput
              style={styles.input}
              value={editedDescription}
              onChangeText={setEditedDescription}
              placeholder="Editar descripción de la tarea"
            />
            <TextInput
              style={styles.input}
              value={editedResolution}
              onChangeText={setEditedResolution}
              placeholder="Editar resolución de la tarea"
            />
            <Picker
              selectedValue={editedStatus}
              style={styles.picker}
              onValueChange={(itemValue) => setEditedStatus(itemValue)}
            >
              <Picker.Item label="En proceso" value="En proceso" />
              <Picker.Item label="En espera" value="En espera" />
              <Picker.Item label="Finalizada" value="Finalizada" />
            </Picker>
            <View style={styles.modalButtons}>
              <Button title="Cancelar" onPress={() => setEditModalVisible(false)} />
              <Button title="Guardar" onPress={handleSaveEdit} />
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
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  taskItemContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  taskItemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  taskItemDescription: {
    fontSize: 14,
    color: '#666',
  },
  taskItemResolution: {
    fontSize: 14,
    color: '#666',
  },
  taskItemStatus: {
    fontSize: 14,
    color: '#666',
  },
  taskItemButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
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

export default HomeScreen;