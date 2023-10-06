// import React, { useEffect } from "react";
// import { View, StyleSheet, Text } from "react-native";
// import Animated, {
//   useSharedValue,
//   useAnimatedStyle,
//   withRepeat,
//   withTiming,
//   withDelay,
//   useDerivedValue,
//   interpolate,
//   Easing,
//   withSpring,
// } from "react-native-reanimated";

// const SpinnerLoading = () => {
//   const y1 = useSharedValue(0);
//   const y2 = useSharedValue(0);
//   const y3 = useSharedValue(0);

//   const animatedStyles1 = useAnimatedStyle(() => {
//     return {
//       transform: [
//         {
          
//           translateY: withDelay(
//             0,
//             withRepeat(withTiming(y1.value, { duration: 200 }), -1, true)
//           ),
//         },
//       ],
//     };
//   });
//   const animatedStyles2 = useAnimatedStyle(() => {
//     return {
//       transform: [
//         {
//           translateY: withDelay(
//             100,
//             withRepeat(withTiming(y2.value, { duration: 200 }), -1, true)
//           ),
//         },
//       ],
//     };
//   });
//   const animatedStyles3 = useAnimatedStyle(() => {
//     return {
//       transform: [
//         {
//           translateY: withDelay(
//             200,
//             withRepeat(withTiming(y3.value, { duration: 200 }), -1, true)
//           ),
//         },
//       ],
//     };
//   })

//   useEffect(() => {
//     y1.value = -10;
//     y2.value = -10;
//     y3.value = -10;
//   }, [])

//   // const opacity1 = useSharedValue(0);
//   // const opacity2 = useSharedValue(0);
//   // const opacity3 = useSharedValue(0);
//   // useEffect(() => {
//   //   const duration = 600;
//   //   const timingOptions = { duration: duration };
//   //   const pulse = withTiming(1, timingOptions);
//   //   const repeated = withRepeat(pulse, -1, true);
//   //   opacity1.value = repeated;
//   //   // *
//   //   opacity2.value = withDelay(duration / 2, repeated);
//   //   // *
//   //   opacity3.value = withDelay(duration, repeated);
//   // }, []);

//   return (

    
//     <View style={styles.loadingContainer}>
//       <Animated.View
//         style={[styles.ballStyle, animatedStyles1]}
//       ></Animated.View>
//       <Animated.View
//         style={[styles.ballStyle, animatedStyles2]}
//       ></Animated.View>
//       <Animated.View
//         style={[styles.ballStyle, animatedStyles3]}
//       ></Animated.View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   loadingContainer: {
//     flex: 1,
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//   },

//   ballStyle: {
//     width: 13,
//     height: 13,
//     backgroundColor: "green",
//     borderRadius: 13,
//     margin: 10,
//   },
// });

// export default SpinnerLoading;



import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Animated, { useSharedValue, withSpring, Easing, withRepeat, useAnimatedStyle } from 'react-native-reanimated';

const DotLoader = () => {
  const opacity1 = useSharedValue(0);
  const opacity2 = useSharedValue(0);
  const opacity3 = useSharedValue(0);

  const anim1=useAnimatedStyle(()=>({
    opacity:opacity1.value
  }))

  const anim2=useAnimatedStyle(()=>({
    opacity:opacity2.value
  }))
  const anim3=useAnimatedStyle(()=>({
    opacity:opacity3.value
  }))

  useEffect(() => {
    const config = {
      damping: 2,
      stiffness: 30,
    };

    opacity1.value = withRepeat(
      withSpring(1, config),
      -1,
      false
    );

    setTimeout(() => {
      opacity2.value = withRepeat(
        withSpring(1, config),
        -1,
        false
      );
    }, 400);

    setTimeout(() => {
      opacity3.value = withRepeat(
        withSpring(1, config),
        -1,
        false
      );
    }, 800);
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.dot,anim1]} />
      <Animated.View style={[styles.dot,anim2]} />
      <Animated.View style={[styles.dot,anim3]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 30,
    height: 30,
    borderRadius: 20,
    backgroundColor: 'green',
    marginHorizontal: 5,
  },
});

export default DotLoader;
