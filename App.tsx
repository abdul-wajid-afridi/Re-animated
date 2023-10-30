import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ReAnimatedLayout from "./components/LayoutAnimation/ReAnimatedLayout";
import TodosApp from "./components/LayoutAnimation/Todos";
import AnimationApp from "./components/AnimationApp";
import SpinnerLoading from "./components/animations/spinner";
import Spinner from "./components/UpdatedSpinner";
// import Spinner from "./components/spinner/Spinner";

const App = () => {
  return (
    <View style={styles.container}>
      {/* <AnimationApp/> */}
      {/* <ReAnimatedLayout/> */}
      {/* <TodosApp/> */}
      {/* <SpinnerLoading/> */}
      {/* <Spinner/> */}
      {/* <Spinner /> */}
      <Spinner size={40} dots={3} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
  },
});
