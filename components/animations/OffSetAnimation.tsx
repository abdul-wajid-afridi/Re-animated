import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Animated, { useAnimatedStyle, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated'
import AppButton from '../forms/AppButton'

export default function OffSetAnimation() {
    const offset=useSharedValue(0)

    const handleOffset=()=>{
    offset.value=withRepeat(withTiming(10),5,true)
    }

    const style=useAnimatedStyle(()=>({
        transform:[{translateX:offset.value}]
    }))

  

  return (

<View>

<Animated.View
style={[styles.container,style]}
/>
<AppButton onPress={handleOffset} name='shake'/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
height:50,
width:200,
backgroundColor:"cyan",
borderRadius:7
    }
})