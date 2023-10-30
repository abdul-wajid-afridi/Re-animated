import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Spinner = () => {
  return (
    <View style={styles.main}>
{Array.from({length:4}).map((_,ind)=><Text style={[styles.dots,{transform:[{ scale:ind===2?1.3:1}]}]}>{ind}</Text>)}
    </View>
  )
}

export default Spinner

const styles = StyleSheet.create({
    main:{gap:10,flexDirection:"row"},
    dots:{height:20,width:20,borderRadius:50,backgroundColor:"red"}
})