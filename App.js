import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import WelcomeScreen from './WelcomeScreen';
import SignIn from './SignIn';
import LogIn from './LogIn';
import HomeScreen from './HomeScreen';
import AddTask from './AddTask';

const users = [];
const initialTasks = [];

export default function App() {
  const [screen, setScreen] = useState('welcome');
  const [currentUser, setCurrentUser] = useState(null);
  const [tasks, setTasks] = useState(initialTasks);

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

  const handleAddTask = (newTask) => {
    const newTaskWithId = { ...newTask, id: tasks.length + 1 };
    setTasks([...tasks, newTaskWithId]);
  };

  const handleEditTask = (taskId, updatedTask) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? updatedTask : task
    );
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
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
          <HomeScreen
            tasks={tasks}
            onBack={handleBackToWelcome}
            onEditTask={handleEditTask}
            onDeleteTask={handleDeleteTask}
          />
          <AddTask onAddTask={handleAddTask} />
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
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
});
