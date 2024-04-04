import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function Header() {
  const [todo, setTodo] = useState();

  const AddTodo = () => {
    setTodo(todo);
  };
  return (
    <View>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Enter todo here..."
          onChangeText={(val) => setTodo(val)}
        />

        <Button title="Add Todo" onPress={AddTodo} />
      </View>

      <Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderBottomColor: "black",
    padding: 10,
    marginTop: 30,
    marginBottom: 10,
  },
});
