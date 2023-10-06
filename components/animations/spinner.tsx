

// import React, { memo, useMemo } from 'react';
// import { View, StyleSheet } from 'react-native';
// import Animated, {
//   Easing,
//   withRepeat,
//   withSpring,
//   useSharedValue,
//   useDerivedValue,
//   useAnimatedStyle,
//   withSequence,
//   withDelay,
//   withTiming,
// } from 'react-native-reanimated';

// type TSpinnerProps = {
//   size?: number;
//   dots?: number;
//   color?: string;
// };

// const DEFAULT_PROPS = {
//   size: 32,
//   dots: 4,
// };

// const Spinner = memo(function Spinner(originalProps: TSpinnerProps) {
//   const props: TSpinnerProps & typeof DEFAULT_PROPS = {
//     ...DEFAULT_PROPS,
//     ...originalProps,
//   };

//   const color = props.color || 'green';

//   const animDots = useSharedValue(0);

//   const dotStyles = useAnimatedStyle(() => {
//     const delay = 150;
//     const duration = 800;
//     const iteration = 40;

//     const  = withSequence(
//       withSpring(0.7, { damping: 2, stiffness: 80 }),
//       withRepeat(withSpring(1, { damping: 2, stiffness: 80 }), iteration, false)
//     );

//     const opacity = withSequence(
//       withDelay(delay, withTiming(99)),
//       withRepeat(withSpring(1, { damping: 2, stiffness: 80 }), iteration, false)
//     );

//     return {
//       transform: [{  }],
//       opacity,
//       width: props.size,
//       height: props.size,
//       borderRadius: props.size! / 2,
//       marginHorizontal: props.size! * 0.1,
//       backgroundColor: color,
//     };
//   });

//   useDerivedValue(() => {
//     animDots.value = (animDots.value + 1) % props.dots!;
//   });

//   return (
//     <View style={styles.spinner}>
//       {Array.from({ length: props.dots! }, (_, index) => {
//         const isFirst = index === 0;
//         const isLast = index === props.dots! - 1;
//         return (
//           <Animated.View
//             key={index.toString()}
//             style={[
//               dotStyles,
//               isFirst && styles.firstDot,
//               !isFirst && !isLast && styles.middleDot,
//               isLast && styles.lastDot,
//             ]}
//           />
//         );
//       })}
//     </View>
//   );
// });

// const styles = StyleSheet.create({
//   spinner: {
//     flexDirection: 'row',
//   },
//   firstDot: {
//     marginLeft: 0,
//   },
//   middleDot: {
//     marginLeft: 4,
//   },
//   lastDot: {
//     marginRight: 0,
//   },
// });

// export default Spinner;

// import React, { memo, useEffect } from 'react';
// import { View, StyleSheet } from 'react-native';
// import Animated, {
//   Easing,
//   withSpring,
//   withRepeat,
//   withSequence,
//   withDelay,
//   useSharedValue,
//   useAnimatedStyle,
//   useDerivedValue,
//   runOnJS,
//   withTiming,
// } from 'react-native-reanimated';

// type TSpinnerProps = {
//   size?: number;
//   dots?: number;
//   color?: string;
// };

// const DEFAULT_PROPS = {
//   size: 32,
//   dots: 4,
// };

// const Spinner = memo(function Spinner(originalProps: TSpinnerProps) {
//   const props: TSpinnerProps & typeof DEFAULT_PROPS = {
//     ...DEFAULT_PROPS,
//     ...originalProps,
//   };

//   const color = props.color || 'blue';

//   const animDots = useSharedValue(0);

//   useEffect(() => {
//     animDots.value = 1;
//   }, []);

//   const dotStyles = useAnimatedStyle(() => {
//     const opacity = withSequence(
//       withDelay(animDots.value * 200, withTiming(0)),
//       withRepeat(withSpring(0, { damping: 2, stiffness: 80 }), -1, true)
//     );

//     const  = withSequence(
//       withDelay(animDots.value * 200, withTiming(0)),
//       withRepeat(withSpring(0.8, { damping: 2, stiffness: 80 }), -1, true)
//     );

//     return {
//       opacity,
//       transform: [{  }],
//       width: props.size,
//       height: props.size,
//       borderRadius: props.size! / 2,
//       marginHorizontal: props.size! * 0.1,
//       backgroundColor: color,
//     };
//   });

//   return (
//     <View style={styles.spinner}>
//       {Array.from({ length: props.dots! }, (_, index) => (
//         <Animated.View
//           key={index.toString()}
//           style={[
//             dotStyles,
//             index === 0 && styles.firstDot,
//             index === props.dots! - 1 && styles.lastDot,
//           ]}
//         />
//       ))}
//     </View>
//   );
// });

// const styles = StyleSheet.create({
//   spinner: {
//     flexDirection: 'row',
//     // backgroundColor:"red"
//   },
//   firstDot: {
//     marginLeft: 0,
//   },
//   lastDot: {
//     marginRight: 0,
//   },
// });

// export default Spinner;

// import React, { memo, useEffect } from 'react';
// import { View, StyleSheet } from 'react-native';
// import Animated, {
//   Easing,
//   withSpring,
//   withRepeat,
//   withSequence,
//   withDelay,
//   useSharedValue,
//   useAnimatedStyle,
//   useDerivedValue,
//   runOnJS,
// } from 'react-native-reanimated';

// type TSpinnerProps = {
//   size?: number;
//   dots?: number;
//   color?: string;
// };

// const DEFAULT_PROPS = {
//   size: 32,
//   dots: 4,
// };

// const Spinner = memo(function Spinner(originalProps: TSpinnerProps) {
//   const props: TSpinnerProps & typeof DEFAULT_PROPS = {
//     ...DEFAULT_PROPS,
//     ...originalProps,
//   };

//   const color = props.color || 'blue';

//   const animDots = useSharedValue(0);

//   useEffect(() => {
//     animDots.value = 1;
//   }, []);

//   const dotStyles = useAnimatedStyle(() => {
//     const translateX = withDelay(
//       animDots.value * 200,
//       withSequence(
//         withSpring(0, { damping: 2, stiffness: 80 }),
//         withRepeat(
//           withSpring(1, { damping: 2, stiffness: 80 }),
//           -1,
//           true
//         )
//       )
//     );

//     const opacity = withDelay(
//       animDots.value * 200,
//       withSequence(
//         withSpring(0.3, { damping: 2, stiffness: 80 }),
//         withRepeat(
//           withSpring(1, { damping: 2, stiffness: 80 }),
//           -1,
//           true
//         )
//       )
//     );

//     const  = withDelay(
//       animDots.value * 200,
//       withSequence(
//         withSpring(0.8, { damping: 2, stiffness: 80 }),
//         withRepeat(
//           withSpring(1, { damping: 2, stiffness: 80 }),
//           -1,
//           true
//         )
//       )
//     );

//     return {
//       transform: [{ translateX }],
//       opacity,
//       width: props.size,
//       height: props.size,
//       borderRadius: props.size! / 2,
//       marginHorizontal: props.size! * 0.1,
//       backgroundColor: color,
//       marginRight: 4, // Add margin to separate dots
//     };
//   });

//   return (
//     <View style={styles.spinner}>
//       {Array.from({ length: props.dots! }, (_, index) => (
//         <Animated.View
//           key={index.toString()}
//           style={[
//             dotStyles,
//             index === 0 && styles.firstDot,
//             index === props.dots! - 1 && styles.lastDot,
//           ]}
//         />
//       ))}
//     </View>
//   );
// });

// const styles = StyleSheet.create({
//   spinner: {
//     flexDirection: 'row',
//     // backgroundColor:"red"
//   },
//   firstDot: {
//     marginLeft: 0,
//   },
//   lastDot: {
//     marginRight: 0,
//   },
// });

// export default Spinner;

// ******************* simple dots ****************************

// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// const DotsLoader = () => {
//   const [dots, setDots] = useState('');

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setDots((prevDots) => {
//         if (prevDots === '...') {
//           return '';
//         } else {
//           return prevDots + '.';
//         }
//       });
//     }, 500);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>{dots}</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     fontSize: 20,
//   },
// });

// export default DotsLoader;

// import React, { useEffect } from 'react';
// import { View, StyleSheet } from 'react-native';
// import Animated, {
//   Easing,
//   withRepeat,
//   withSpring,
//   withSequence,
//   withDelay,
//   useSharedValue,
//   useAnimatedStyle,
//   useDerivedValue,
//   runOnJS,
// } from 'react-native-reanimated';

// const DotLoader = () => {
//   const numDots = 3; // Number of dots in the loader
//   const dotSize = 20; // Size of each dot
//   const dotSpacing = 10; // Spacing between dots
//   const duration = 500; // Duration of each animation loop in milliseconds

//   const animDots = useSharedValue(0);

//   useEffect(() => {
//     animDots.value = 1;
//   }, []);

//   const dotStyles = (index:any) => {
//     const scale = withRepeat(
//       withSequence(
//         withDelay(index * duration, 0),
//         withSpring(1, { damping: 2, stiffness: 80 })
//       ),
//       -1,
//       false
//     );

//     const opacity = withRepeat(
//       withSequence(
//         withDelay(index * duration, 0),
//         withSpring(1, { damping: 2, stiffness: 80 })
//       ),
//       -1,
//       false
//     );

//     return useAnimatedStyle(() => ({
//       transform: [{ scale }],
//       opacity,
//       width: dotSize,
//       height: dotSize,
//       borderRadius: dotSize / 2,
//       backgroundColor: 'blue', // Change the color as needed
//       marginRight: index === numDots - 1 ? 0 : dotSpacing, // Add spacing between dots
//     }));
//   };

//   useDerivedValue(() => {
//     animDots.value = (animDots.value + 1) % numDots;
//   });

//   return (
//     <View style={styles.container}>
//       {Array.from({ length: numDots }, (_, index) => (
//         <Animated.View key={index} style={[styles.dot, dotStyles(index)]} />
//       ))}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   dot: {
//     width: 20,
//     height: 20,
//     borderRadius: 10,
//     backgroundColor: 'blue',
//   },
// });

// export default DotLoader;

// import React, { useEffect } from 'react';
// import { View, StyleSheet } from 'react-native';
// import Animated, {
//   Easing,
//   withRepeat,
//   withSpring,
//   withSequence,
//   withDelay,
//   useSharedValue,
//   useAnimatedStyle,
//   useDerivedValue,
// } from 'react-native-reanimated';

// const DotLoader = () => {
//   const numDots = 3; // Number of dots in the loader
//   const dotSize = 20; // Size of each dot
//   const dotSpacing = 10; // Spacing between dots
//   const duration = 500; // Duration of each animation loop in milliseconds

//   const animDots = useSharedValue(0);

//   useEffect(() => {
//     animDots.value = 1;
//   }, []);

//   const dotStyles = (index:any) => {
//     const scale = withRepeat(
//       withSequence(
//         withDelay(index * duration,0),
//         withSpring(1, { damping: 2, stiffness: 80 })
//       ),
//       -1,
//       false
//     );

//     const opacity = withRepeat(
//       withSequence(
//         withDelay(index * duration,0),
//         withSpring(1, { damping: 2, stiffness: 80 })
//       ),
//       -1,
//       false
//     );

//     return useAnimatedStyle(() => ({
//       transform: [{ scale }], // Ensure that scale is a number
//       // opacity: opacity, // Ensure that opacity is a number
//       width: dotSize,
//       height: dotSize,
//       borderRadius: dotSize / 2,
//       backgroundColor: 'blue', // Change the color as needed
//       marginRight: index === numDots - 1 ? 0 : dotSpacing, // Add spacing between dots
//     }));
//   };

//   useDerivedValue(() => {
//     animDots.value = (animDots.value + 1) % numDots;
//   });

//   return (
//     <View style={styles.container}>
//       {Array.from({ length: numDots }, (_, index) => (
//         <Animated.View key={index} style={[styles.dot, dotStyles(index)]} />
//       ))}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   dot: {
//     width: 20,
//     height: 20,
//     borderRadius: 10,
//     backgroundColor: 'blue',
//   },
// });

// export default DotLoader;


import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Animated, {
  Easing,
  withRepeat,
  withSpring,
  withSequence,
  withDelay,
  useSharedValue,
  useAnimatedStyle,
  useDerivedValue,
} from 'react-native-reanimated';

const DotLoader: React.FC = () => {
  const numDots = 3; // Number of dots in the loader
  const dotSize = 20; // Size of each dot
  const dotSpacing = 10; // Spacing between dots
  const duration = 500; // Duration of each animation loop in milliseconds

  const animDots = useSharedValue(0);

  useEffect(() => {
    animDots.value = 1;
  }, []);

  const dotStyles = (index: number) => {
    // const scale:number = withRepeat(
    //   withSequence(
    //     withDelay(index * duration,3),
    //     withSpring(1, { damping: 2, stiffness: 80 })
    //   ),
    //   -1,
    //   true
    // );
    let scale=1
    const opacity = withRepeat(
      withSequence(
        withDelay(index * duration,3),
        withSpring(1, { damping: 2, stiffness: 80 })
      ),
      -1,
      true
    );

    return useAnimatedStyle(() => ({
      transform: [{ scale:scale }],
      opacity: opacity,
      width: dotSize,
      height: dotSize,
      borderRadius: dotSize / 2,
      backgroundColor: 'blue', // Change the color as needed
      marginRight: index === numDots - 1 ? 0 : dotSpacing, // Add spacing between dots
    }));
  };

  useDerivedValue(() => {
    animDots.value = (animDots.value + 1) % numDots;
  });

  return (
    <View style={styles.container}>
      {Array.from({ length: numDots }, (_, index) => (
        <Animated.View key={index} style={[styles.dot, dotStyles(index)]} />
      ))}
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
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'blue',
  },
});

export default DotLoader;
