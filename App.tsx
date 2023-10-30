<<<<<<< HEAD
<<<<<<< HEAD
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Branch2 from "./components/branch-2";

const App = () => {
  return (
    <View>
      <Branch2 />
=======
=======
>>>>>>> parent of e261c90e (spinner+all stuff)
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ReAnimatedLayout from './components/LayoutAnimation/ReAnimatedLayout'
import TodosApp from './components/LayoutAnimation/Todos'
import AnimationApp from './components/AnimationApp'
import SpinnerLoading from './components/animations/spinner'

const App = () => {
  return (
    <View style={styles.container}>
      {/* <AnimationApp/> */}
{/* <ReAnimatedLayout/> */}
{/* <TodosApp/> */}
<SpinnerLoading/>
<<<<<<< HEAD
>>>>>>> parent of e261c90e (spinner+all stuff)
=======
>>>>>>> parent of e261c90e (spinner+all stuff)
    </View>
  )
}

export default App

<<<<<<< HEAD
const styles = StyleSheet.create({});
=======
const styles = StyleSheet.create({
  container:{
    flex:1,
    display:"flex",
    justifyContent:"center"
  }
<<<<<<< HEAD
})
>>>>>>> parent of e261c90e (spinner+all stuff)
=======
})
>>>>>>> parent of e261c90e (spinner+all stuff)
