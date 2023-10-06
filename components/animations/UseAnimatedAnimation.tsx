import React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  withSpring,
  useAnimatedStyle,
  useAnimatedProps,
  withTiming,
} from 'react-native-reanimated';
import AppButton from '../forms/AppButton';

import { Svg, Circle } from 'react-native-svg';
const UseAnimatedAnimation=()=> {
  const translateX = useSharedValue(0);

  const r = useSharedValue(20);

  const handlePress = () => {
    r.value += 10;
  };
  const handleLeft = () => {
    translateX.value -= 1;
  };

  const handleRight = () => {
    translateX.value += 1;
  };

//   const animatedStyles = useAnimatedStyle(() => ({
//     transform: [{ translateX: withSpring(translateX.value) }],
//   }));

const animatedProps = useAnimatedProps(() => ({
    r: withTiming(r.value),
  }));

const animatedStyles=useAnimatedStyle(()=>({
    transform:[{scale:withSpring(translateX.value+=1)}]
    // transform:[{translateX:withSpring(translateX.value+=10)}]
}))
const AnimatedCircle=Animated.createAnimatedComponent(Circle)
  return (
    <>
      {/* <Animated.View style={[styles.box, animatedStyles]} /> */}
      <Svg style={styles.svg}>
        <AnimatedCircle
        // tranforming to the up or down side
          cx="50%"
          cy="50%"
          fill="#b58df1"
          animatedProps={animatedProps}
        />
      </Svg>
      <View style={styles.container}>
        {/* <AppButton name='Move Right' onPress={handleRight}/> */}
        <AppButton onPress={handlePress} name="scale" />
        {/* <AppButton onPress={handleLeft} name="move Light" /> */}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  svg: {
    height: 250,
    width: '100%',
  },
  box: {
    height: 120,
    width: 120,
    backgroundColor: '#b58df1',
    borderRadius: 100,
  },
//   box: {
//     height: 120,
//     width: 120,
//     backgroundColor: '#b58df1',
//     borderRadius: 20,
//     marginVertical: 50,
//   },
});
export default UseAnimatedAnimation
