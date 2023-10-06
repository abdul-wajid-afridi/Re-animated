// import React from 'react';
// import { StyleSheet, View, Text } from 'react-native';
// import Animated, {
//   useSharedValue,
//   useAnimatedStyle,
//   withTiming,
//   Easing,
//   withRepeat,
// } from 'react-native-reanimated';

// const duration = 3000;

// const CustomLoader=()=> {
//   const defaultAnim = useSharedValue(200);
//   const linear = useSharedValue(200);

//   const animatedDefault = useAnimatedStyle(() => ({
//     transform: [{ translateX: defaultAnim.value }],
//   }));
//   const animatedChanged = useAnimatedStyle(() => ({
//     transform: [{ translateX: linear.value }],
//   }));

//   React.useEffect(() => {
//     linear.value = withRepeat(
//       // highlight-next-line
//       withTiming(-linear.value, {
//         duration,
//         easing: Easing.linear,
//       }),
//       -1,
//       true
//     );
//     defaultAnim.value = withRepeat(
//       // highlight-next-line
//       withTiming(-defaultAnim.value, {
//         duration,
//       }),
//       -1,
//       true
//     );
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Animated.View style={[styles.box, animatedDefault]}/>
//       <Animated.View style={[styles.box, animatedChanged]}/>
//       <Animated.View style={[styles.box, animatedChanged]}/>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     // flexDirection:'row',
//     height: '100%',
//     // backgroundColor:"red",
//     width:'100%',
//     gap:5
//   },
//   box: {
//     height: 20,
//     width: 20,
//     borderWidth: 1,
//     borderColor: '#b58df1',
//     borderRadius: 20,
//   },

// });

// export default CustomLoader


import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  withRepeat,
} from 'react-native-reanimated';

const duration = 600;

const WithTimeAnimation=()=> {
  const animOne = useSharedValue(20);
  const animTwo = useSharedValue(25);
  const animThree = useSharedValue(30);
  const animFour = useSharedValue(25);

  const animatedOne = useAnimatedStyle(() => ({
    transform: [{ translateY: animOne.value }],
  }));

  const animatedThree = useAnimatedStyle(() => ({
    transform: [{ translateY: animTwo.value }],    
  }));

  const animatedTwo = useAnimatedStyle(() => ({
    transform: [{ translateY: animThree.value }],    
  }));

  const animatedFour = useAnimatedStyle(() => ({
    transform: [{ translateY: animFour.value }],    
  }));

  React.useEffect(() => {
    animTwo.value = withRepeat(
      withTiming(-animTwo.value, {
        duration,
        easing: Easing.linear,
      }),
      -1,
      true
    );
    animOne.value = withRepeat(
      withTiming(-animOne.value, {
        duration,
      }),
      -1,
      true
    );
    animThree.value = withRepeat(
        withTiming(-animThree.value, {
          duration,
        }),
        -1,
        true
      );

      animFour.value = withRepeat(
        withTiming(-animFour.value, {
          duration,
        }),
        -1,
        true
      );

  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, animatedOne]}/>
      <Animated.View style={[styles.box, animatedTwo]}/>
      <Animated.View style={[styles.box, animatedThree]}/>
      <Animated.View style={[styles.box, animatedFour]}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    flexDirection:"row"
  },
  box: {
    height: 20,
    width: 20,
    margin: 10,
    borderWidth: 1,
    borderColor: '#b58df1',
    borderRadius: 20
  }
});

export default WithTimeAnimation
