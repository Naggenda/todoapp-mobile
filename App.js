import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AddTodos from './Components/AddTodo';
import TodoList from './Components/TodoList';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{textAlign: 'center', color: 'white', fontWeight: 'bold'}}>My Todo App</Text>
      </View>
      <View>
        <AddTodos />
        <TodoList />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: 'teal',
    padding: 20,
  },
});
