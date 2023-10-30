// import React, { useEffect, useMemo } from "react";
// import { View, Text, StyleSheet } from "react-native";
// import Animated, {
//   Easing,
//   withSpring,
//   withSequence,
//   withRepeat,
//   withDelay,
//   useSharedValue,
//   useAnimatedStyle,
//   useDerivedValue,
//   withTiming,
//   interpolate,
//   Extrapolate,
// } from "react-native-reanimated";

// type TSpinnerProps = {
//   style?: any;
//   color?: string;
//   size?: number;
//   dots?: number;
// };

// const duration = 2000;
// let climaxEndTime: number;
// let endTime: number;

// // START
// const startTime = 0;
// let postDelayStartTime: number;

// // DELAY UNTIL
// let preDelayEndTime: number;

// const DEFAULT_PROPS = {
//   size: 32,
//   dots: 4,
// };

// const Spinner = (originalProps: TSpinnerProps) => {
//   const props: TSpinnerProps & typeof DEFAULT_PROPS = {
//     ...DEFAULT_PROPS,
//     ...originalProps,
//   };

//   const color = "green";

//   return (
//     <View style={{ ...props.style, ...styles.spinner }}>
//       {Array.from({ length: 3 }, (it, index) => (
//         <Dot totalCnt={3} index={0} color="green" size={50} />
//         // <View
//         //   style={{ height: 40, width: 40, backgroundColor: "red", margin: 10 }}
//         // ></View>
//         // <Dot

//         // key={index.toString()}
//         // index={index}
//         // totalCnt={3}
//         // // totalCnt={props.dots}
//         // size={30}
//         // // size={props.size}
//         // color={"red"}
//         // color={color}
//         // />
//       ))}
//     </View>
//   );
// };

// type TDotProps = {
//   index: number;
//   totalCnt: number;
//   size: number;
//   color: string;
// };

// function Dot(props: TDotProps) {
//   const allPreDelayDuration = 0.25 * duration;
//   const delayDuration = 0.13 * duration;
//   preDelayEndTime = allPreDelayDuration + delayDuration * props.index;

//   // GO TO CLIMAX
//   const climaxDuration = 0.18 * duration;
//   climaxEndTime = preDelayEndTime + climaxDuration;

//   // RETURN TO INITIAL STATE
//   const unclimaxDuration = climaxDuration;
//   postDelayStartTime = climaxEndTime + unclimaxDuration;

//   // END
//   const lastEndTime =
//     allPreDelayDuration +
//     delayDuration * (props.totalCnt - 1) +
//     climaxDuration +
//     unclimaxDuration;
//   endTime = lastEndTime;

//   // Animated values
//   const animStartTime = useSharedValue(startTime);

//   const animOpacityFirstIterationFrom = useSharedValue(0);
//   const animOpacityFrom = useSharedValue(0.5);
//   const animOpacityTo = useSharedValue(1);
//   const animDidFirstIteration = useSharedValue(0);

//   const opacity = useDerivedValue(() => {
//     return interpolateOpacity(
//       animDidFirstIteration.value,
//       animStartTime.value,
//       animOpacityFirstIterationFrom.value,
//       animOpacityFrom.value,
//       animOpacityTo.value
//       //   Extrapolate.CLAMP
//     );
//   });

//   const animScaleFrom = useSharedValue(0.7);
//   const animScaleFirstIterationTo = useSharedValue(0.7);

//   const animScaleTo = useSharedValue(1);
//   const scale = useDerivedValue(() => {
//     return interpolateScale(
//       animDidFirstIteration.value,
//       animStartTime.value,
//       animScaleFrom.value,
//       animScaleFirstIterationTo.value,
//       animScaleTo.value
//       //   Extrapolate.CLAMP
//     );
//   });

//   const first = props.index === 0;
//   const last = props.index === props.totalCnt - 1;

//   const margin = 4;
//   const marginIsGoodForSize = 24;
//   const marginRatio = props.size / marginIsGoodForSize;

//   const sizedStyles = {
//     dot: {
//       // backgroundColor: "blue",
//       // width: 30,
//       // height: 30,
//       // borderRadius: 30 / 2,
//       backgroundColor: props.color,
//       width: props.size,
//       height: props.size,
//       borderRadius: props.size / 2,
//     },
//     dotMiddle: {
//       marginHorizontal: Math.round(marginRatio * margin),
//     },
//     dotFirst: {
//       marginRight: Math.round(marginRatio * margin),
//     },
//     dotLast: {
//       marginLeft: Math.round(marginRatio * margin),
//     },
//   };

//   //   console.log("props value", props);
//   console.log("opac value.", opacity?.value);
//   console.log("scale value", scale?.value);

//   const anim = useAnimatedStyle(() => {
//     return {
//       // opacity: withRepeat(withTiming(opacity.value), -1, true),
//       opacity: opacity.value,
//       transform: [{ scale: scale.value }],
//       // transform: [{ scale: withRepeat(withTiming(scale.value), -1, true) }],
//     };
//   });

//   useEffect(() => {
//     animStartTime.value = withRepeat(withSpring(1), -1, true);
//   }, []);
//   useEffect(() => {
//     // animDidFirstIteration.value = withRepeat(withTiming(1), -1, false);
//     // animStartTime.value = withRepeat(withTiming(1), -1, false);
//     // animScaleFrom.value = withRepeat(withTiming(1), -1, false);
//     // animScaleFirstIterationTo.value = withRepeat(withTiming(1), -1, false);
//     // anim = withRepeat(withTiming(1), 5, false);
//     // scale.value = withRepeat(withTiming(1), 5, false);
//   }, []);

//   return (
//     <View>
//       <Text>this is text</Text>
//       <Animated.View
//         style={[{ height: 30, width: 30, backgroundColor: "red" }, anim]}
//       />
//       {/* <Animated.View
//         style={[{ height: 30, width: 30, backgroundColor: "red" }, anim]}
//       />
//       <Animated.View
//         style={[
//           sizedStyles.dot,
//           anim,
//           // { opacity: opacity.value, transform: [{ scale: scale.value }] },
//           //   first && sizedStyles?.dotFirst,
//           //   !first && !last && sizedStyles?.dotMiddle,
//           //   last && sizedStyles?.dotLast,
//         ]}
//       /> */}
//     </View>
//   );
// }

// const interpolateOpacity = (
//   animDidFirstIteration: any,
//   time: any,
//   opacityFirstIterationFrom: any,
//   opacityFrom: any,
//   opacityTo: any
// ) => {
//   "worklet";
//   const inputRange = [
//     0,
//     preDelayEndTime,
//     climaxEndTime,
//     postDelayStartTime,
//     endTime,
//   ];
//   const outputRange = [
//     animDidFirstIteration ? opacityFrom : opacityFirstIterationFrom,
//     animDidFirstIteration ? opacityFrom : opacityFirstIterationFrom,
//     opacityTo,
//     opacityFrom,
//     opacityFrom,
//   ];
//   return withTiming(
//     interpolate(time, inputRange, outputRange, Extrapolate.CLAMP),
//     { duration: duration, easing: Easing.linear }
//   );
// };

// const interpolateScale = (
//   animDidFirstIteration: any,
//   time: any,
//   scaleFrom: any,
//   scaleFirstIterationTo: any,
//   scaleTo: any
// ) => {
//   "worklet";

//   const inputRange = [
//     0,
//     preDelayEndTime,
//     climaxEndTime,
//     postDelayStartTime,
//     endTime,
//   ];
//   const outputRange = [
//     scaleFrom,
//     scaleFrom,
//     animDidFirstIteration ? scaleTo : scaleFirstIterationTo,
//     scaleFrom,
//     scaleFrom,
//   ];
//   return withTiming(
//     interpolate(time, inputRange, outputRange, Extrapolate.CLAMP),
//     { duration: duration, easing: Easing.linear }
//   );
// };

// const styles = StyleSheet.create({
//   spinner: {
//     flexDirection: "row",
//   },
// });

// export default Spinner;

// // import { StyleSheet, Text, View } from "react-native";
// // import React, { useEffect } from "react";
// // import Animated, {
// //   Extrapolate,
// //   interpolate,
// //   useAnimatedStyle,
// //   useSharedValue,
// //   withRepeat,
// //   withTiming,
// // } from "react-native-reanimated";
// // import { Color } from "../../config/ColorPallet";
// // import Bubbles from "./Bubble";

// // const Video6 = () => {
// //   let dots = [0, 1, 2];

// //   const progress = useSharedValue(0);

// //   const delta = 1 / dots.length;

// //   useEffect(() => {
// //     progress.value = withRepeat(withTiming(1, { duration: 1000 }), -1, false);
// //   }, []);

// //   return (
// //     <View style={styles.container}>
// //       {dots.map((dt) => {
// //         const start = dt * delta;
// //         const end = start + delta;
// //         const animatedStyle = useAnimatedStyle(() => {
// //           const opacity = interpolate(
// //             progress.value,
// //             [start, end],

// //             // [start, end],
// //             [0.5, 1],
// //             Extrapolate.CLAMP
// //           );

// //           const scale = interpolate(
// //             progress.value,
// //             [start, end],
// //             // [start, end],
// //             [1, 1.5],
// //             Extrapolate.CLAMP
// //           );

// //           return {
// //             opacity,
// //             transform: [{ scale }],
// //           };
// //         });

// //         return <Animated.View style={[styles.dots, animatedStyle]} />;
// //         // return <Bubbles key={dt} progress={progress} start={start} end={end} />;
// //       })}
// //     </View>
// //   );
// // };

// // export default Video6;

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: "center",
// //     alignItems: "center",
// //     flexDirection: "row",
// //     gap: 5,
// //   },
// //   dots: {
// //     height: 30,
// //     width: 30,
// //     borderRadius: 15,
// //     backgroundColor: Color.primary,
// //   },
// // });

// // import React, { useEffect } from "react";
// // import { Dimensions, StyleSheet, View } from "react-native";
// // import Animated, {
// //   Easing,
// //   withSpring,
// //   withRepeat,
// //   useSharedValue,
// //   useDerivedValue,
// //   withTiming,
// //   interpolate,
// //   Extrapolate,
// //   useAnimatedStyle,
// // } from "react-native-reanimated";
// // import Video6 from "../../components/Video6/Index";

// // const { width: wWidth } = Dimensions.get("window");
// // const width = wWidth * 0.8;
// // const size = 32;

// // interface SimpleActivityIndicatorProps {
// //   // Initialize progress as a shared value with an initial value of 0
// //   progress: Animated.SharedValue<number>;
// // }

// // const Spinner = () => {
// //   const progress = useSharedValue(0);
// //   const bubbles = [0, 1, 2];
// //   const delta = 1 / bubbles.length;

// //   useEffect(() => {
// //     progress.value = withRepeat(withTiming(1, { duration: 1000 }), -1, true);
// //   }, []);

// //   return (
// //     // <Video6 />

// //     <View style={styles.root}>
// //       <View style={styles.container}>
// //         {bubbles.map((i) => {
// //           const start = i * delta;
// //           const end = start + delta;

// //           const animatedOpacity = useDerivedValue(() => {
// //             return interpolate(
// //               progress.value,
// //               [0, 1],
// //               [start, end],
// //               // [0.25, 0.5, 0.75, 1],
// //               Extrapolate.CLAMP
// //             );
// //           });

// //           const animatedScale = useDerivedValue(() => {
// //             return interpolate(
// //               progress.value,
// //               [0, 1],
// //               [start, end],
// //               // [1, 1.25, 1.75, 1.5],
// //               Extrapolate.CLAMP
// //             );
// //           });

// //           const animatedStyle = useAnimatedStyle<any>(() => {
// //             return {
// //               opacity: animatedOpacity.value,
// //               transform: [{ scale: animatedScale.value }],
// //             };
// //           });

// //           return (
// //             <Animated.View key={i} style={[styles.bubble, animatedStyle]} />
// //           );
// //         })}
// //       </View>
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   root: {
// //     flex: 1,
// //     justifyContent: "center",
// //     alignItems: "center",
// //   },
// //   container: {
// //     height: width,
// //     width,
// //     flexDirection: "row",
// //     justifyContent: "space-evenly",
// //     alignItems: "center",
// //     backgroundColor: "#d3d3d3",
// //     borderTopLeftRadius: width / 2,
// //     borderTopRightRadius: width / 2,
// //     borderBottomLeftRadius: width / 2,
// //   },
// //   bubble: {
// //     width: size,
// //     height: size,
// //     borderRadius: size / 2,
// //     backgroundColor: "gray",
// //   },
// // });
// // export default Spinner;

import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Animated, {
  useSharedValue,
  withRepeat,
  withSpring,
  withTiming,
  useAnimatedStyle,
  Easing,
  interpolate,
  Extrapolate,
  withSequence,
} from "react-native-reanimated";

const Dot = ({ index, size, color }: any) => {
  const duration = 2000;
  const delay = 250;
  const startTime = index * delay;
  const endTime = startTime + duration;
  const firstIterationEndTime = endTime - duration;

  const scaling = useSharedValue(0.7);
  const opacity = useSharedValue(0.5);

  const animatedStyle = useAnimatedStyle(() => {
    const opacityValue = interpolate(
      animatedTime.value,
      [startTime, firstIterationEndTime, endTime],
      [0.5, 1, 0.5],
      Extrapolate.CLAMP
    );

    const scaleValue = interpolate(
      animatedTime.value,
      [startTime, firstIterationEndTime, endTime],
      [0.7, 1, 0.7],
      Extrapolate.CLAMP
    );

    return {
      opacity: opacityValue,
      transform: [{ scale: scaleValue }],
    };
  });

  const animatedTime = useSharedValue(0);

  React.useEffect(() => {
    // animatedTime.value = withSequence(
    //   withTiming(0, { duration: startTime, easing: Easing.linear }),
    //   withRepeat(withSpring(1, { damping: 2, stiffness: 10 }), -1, false), // Use false instead of true for repeat to avoid repeating indefinitely
    //   withTiming(0, { duration: delay }),
    //   withRepeat(withSpring(1, { damping: 2, stiffness: 10 }), -1, false) // Use false instead of true for repeat
    // );
  }, []);

  return (
    <Animated.View
      style={[
        styles.dot,
        animatedStyle,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor: color,
        },
      ]}
    />
  );
};

const Spinner = ({ size = 32, dots = 4 }) => {
  const color = "green";

  return (
    <View style={styles.container}>
      <Text>work on it</Text>
      {/* {Array.from({ length: dots }).map((_, index) => (
        <Dot key={index.toString()} size={size} color={color} index={index} />
      ))} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  dot: {
    margin: 4,
  },
});

export default Spinner;

// import React from "react";
// import { View, StyleSheet } from "react-native";
// import Animated, {
//   useSharedValue,
//   withRepeat,
//   withSpring,
//   withTiming,
//   useAnimatedStyle,
//   Easing,
//   interpolate,
//   Extrapolate,
//   withSequence,
// } from "react-native-reanimated";

// const Dot = ({ index, size, color }: any) => {
//   const duration = 2000;
//   const delay = 250;
//   const startTime = index * delay;
//   const endTime = startTime + duration;
//   const firstIterationEndTime = endTime - duration;

//   const scaling = useSharedValue(0.7);
//   const opacity = useSharedValue(0.5);

//   const animatedTime = useSharedValue(0);

//   const animatedStyle = useAnimatedStyle(() => {
//     const opacityValue = interpolate(
//       animatedTime.value,
//       [startTime, firstIterationEndTime, endTime],
//       [0.5, 1, 0.5],
//       Extrapolate.CLAMP
//     );

//     const scaleValue = interpolate(
//       animatedTime.value,
//       [startTime, firstIterationEndTime, endTime],
//       [0.7, 1, 0.7],
//       Extrapolate.CLAMP
//     );

//     return {
//       opacity: opacityValue,
//       transform: [{ scale: scaleValue }],
//     };
//   });

//   React.useEffect(() => {
//     animatedTime.value = withSequence(
//       withTiming(0, { duration: startTime, easing: Easing.linear }),
//       withRepeat(withSpring(1, { damping: 2, stiffness: 10 }), -1, true),
//       withTiming(0, { duration: delay }),
//       withRepeat(withSpring(1, { damping: 2, stiffness: 10 }), -1, true)
//     );
//   }, []);

//   return (
//     <Animated.View
//       style={[
//         styles.dot,
//         animatedStyle,
//         {
//           width: size,
//           height: size,
//           borderRadius: size / 2,
//           backgroundColor: color,
//         },
//       ]}
//     />
//   );
// };

// const Spinner = ({ size = 32, dots = 4 }) => {
//   const color = "green";

//   return (
//     <View style={styles.container}>
//       {Array.from({ length: dots }).map((_, index) => (
//         <Dot key={index.toString()} index={index} size={size} color={color} />
//       ))}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     flexDirection: "row",
//   },
//   dot: {
//     margin: 4,
//   },
// });

// export default Spinner;
