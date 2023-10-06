import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import Animated, {
  Easing,
  FadeInDown,
  Layout,
  SlideOutLeft,
} from "react-native-reanimated";

import AppButton from "../forms/AppButton";
type Todo = {
  id: number,
  text: string,
};
 const TodosApp: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [text, setText] = useState <string> ("");

  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const addTodo = () => {
    if (text?.trim()) {
      setTodos([...todos, { id: Date.now(), text }]);
      setText("");
    }
  };
  return (
    <ScrollView
      contentContainerStyle={styles.container}
    >
      <Text style={styles.header}>app</Text>
      <TextInput
        style={styles.todoInput}
        placeholder={"Add Todo"}
        value={text}
        onChangeText={setText}
      />
      
      <AppButton onPress={addTodo} name="submit"/>
      {todos.map((todo, index) => (
        <Animated.View
          key={todo.id}
          style={styles.todo}
          entering={FadeInDown}
          layout={Layout.easing(Easing.bounce).delay(index * 100)}
          exiting={SlideOutLeft}
        >
          <Text style={styles.todoText}>{todo.text}</Text>
          <Text onPress={() => removeTodo(todo?.id)}>x</Text>
        </Animated.View>
      ))}
    </ScrollView>
  );
};


export default TodosApp

const styles = StyleSheet.create({
  container: {
    paddingVertical: 14,
    paddingHorizontal: 18,
    marginVertical:10
  },
  header: {
    fontSize: 32,
    fontWeight: "800",
    color: "#898d23",
    letterSpacing: 1.2,
  },
  
  todo: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderColor: "#444",
    borderRadius: 4,
    marginTop: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  todoText: {
    fontSize: 18,
    fontWeight: "400",
    color: "#ccc",
  },
  todoInput: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderColor: "#bbb",
    backgroundColor: "#111b",
    borderRadius: 4,
    marginTop: 10,
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
    letterSpacing: 1.4,
  },
});