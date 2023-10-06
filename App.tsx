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
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
    display:"flex",
    justifyContent:"center"
  }
})