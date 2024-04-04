import { useState} from 'react'
import { FlatList, View, Text, StyleSheet } from 'react-native';

export default function TodoList() {
    const [todos, setTodos] = useState([
        {name: 'Students Presentation', key: 1},
        {name: 'Students Presentation', key: 2},
    ]);

  return (
      <View>
        <FlatList 
        data = {todos}
        renderItem = {({ item }) => (
            <Text>{item.name}</Text>
        )}
        />
      </View>
  )
}

const styles = StyleSheet.create({})
