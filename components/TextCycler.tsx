import React, { useEffect, useState } from 'react';
import { StyleProp, TextStyle } from 'react-native';
import Animated, { FadeInDown, FadeOutUp } from 'react-native-reanimated';

const TextCycler = ({
  items,
  textStyles,
  duration = 3000,
  textColors = ['#000000'],
}:any) => {
  const [index, setIndex] = useState(0);
  const numberOfItems = items.length;

  useEffect(() => {
    const timeout = setInterval(() => {
      setIndex((previousIndex) => {
        // if last item in the array the index is set to 0 meaning start again (looping effect)
        if (previousIndex === numberOfItems - 1) return 0;

        // go to next index
        return previousIndex + 1;
      });
    }, duration);

    // cancels repeating timer
    return () => clearInterval(timeout);
  }, [duration, numberOfItems]);

  return (
    <Animated.Text
      key={index}
      entering={FadeInDown}
      exiting={FadeOutUp}
      style={[textStyles, { color: textColors[index] }]}>
      {items[index]}
    </Animated.Text>
  );
};

export default TextCycler
