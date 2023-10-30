import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Animated, {
  Extrapolate,
  SharedValue,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";

type BubblesProps = {
  end: number;
  start: number;
  progress: SharedValue<number>;
};
const Bubbles = ({ end, start, progress }: BubblesProps) => {
  const animatedStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      progress.value,
      [start, end],
      [0.5, 1],
      Extrapolate.CLAMP
    );

    const scale = interpolate(
      progress.value,
      [start, end],
      [1, 1.5],
      Extrapolate.CLAMP
    );

    return {
      opacity,
      transform: [{ scale }],
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.dots, animatedStyle]} />
    </View>
  );
};

export default Bubbles;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-around",
    width: 50,
  },
  dots: {
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: "green",
  },
});
