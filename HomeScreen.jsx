// HomeScreen.jsx
import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, FlatList, TextInput, Modal } from 'react-native';

const HomeScreen = ({ tasks, onBack, onEditTask, onDeleteTask }) => {
  const [editedTask, setEditedTask] = useState(null);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [editModalVisible, setEditModalVisible] = useState(false);

  const handleEditTask = (task) => {
    setEditedTask(task);
    setNewTaskTitle(task.title);
    setEditModalVisible(true);
  };

  const handleSaveTask = () => {
    onEditTask(editedTask.id, newTaskTitle);
    setEditModalVisible(false);
  };

  const handleDeleteTask = (taskId) => {
    onDeleteTask(taskId);
  };

  const renderItem = ({ item }) => (
    <View style={styles.taskItemContainer}>
      <Text style={styles.taskItem}>{item.title}</Text>
      <Button title="Editar" onPress={() => handleEditTask(item)} />
      <Button title="Eliminar" onPress={() => handleDeleteTask(item.id)} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Button title="Atrás" onPress={onBack} />
      <Text style={styles.title}>Mis Tareas</Text>
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      {/* Modal de edición */}
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
              placeholder="Nuevo título de la tarea"
              value={newTaskTitle}
              onChangeText={setNewTaskTitle}
            />
            <View style={styles.modalButtons}>
              <Button title="Cancelar" onPress={() => setEditModalVisible(false)} />
              <Button title="Guardar" onPress={handleSaveTask} />
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  taskItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  taskItem: {
    fontSize: 16,
    marginRight: 10,
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
    elevation: 5,
  },
  input: {
    marginBottom: 10,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default HomeScreen;
