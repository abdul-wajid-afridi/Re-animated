import { Button, StyleSheet, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import AppButton from "../forms/AppButton";
import Branch1 from "../branch-1";

const FirstAnimation = () => {
  // diff between useAnimated and inLineStyle

  const style = useAnimatedStyle(() => ({}));

  const width = useSharedValue(100);
  const handleIncrease = () => {
    width.value = withSpring(width.value + 200);
  };

  const handleDecrease = () => {
    if (width.value <= 150) {
      return alert("sorry you can't make it more");
    }
    width.value = withSpring(width.value - 50);
  };

  return (
    <View style={{ display: "flex", gap: 10, width: 200 }}>
      <Animated.View
        style={{
          width: width,
          height: 100,
          backgroundColor: "violet",
        }}
      />
      <AppButton onPress={handleDecrease} name="-" />
      <AppButton onPress={handleIncrease} name="+" />
      <Branch1 />
    </View>
  );
};

export default FirstAnimation;
