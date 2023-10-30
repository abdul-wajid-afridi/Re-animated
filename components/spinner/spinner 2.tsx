import { memo, useMemo } from 'react';

import { StyleSheet, View } from 'react-native';
import Reanimated from 'react-native-reanimated';

import type { StyleProp, ViewStyle } from 'react-native';

type TSpinnerProps = {
  style?: ViewStyle;
  color?: string;
  size?: number;
  // count of dots
  dots?: number;
}

const DEFAULT_PROPS = {
  size: 32,
  dots: 4
};

const Spinner = memo(function Spinner(originalProps: TSpinnerProps) {
  const props: TSpinnerProps & typeof DEFAULT_PROPS = {
    ...DEFAULT_PROPS,
    ...originalProps
  };

  const color = 'green';

  return (
    <View style={{ ...props.style, ...styles.spinner }}>
      {Array.from({ length: props.dots }, (_, index) => (
        <Dot
          key={index.toString()}
          index={index}
          totalCnt={props.dots}
          size={props.size}
          color={color}
        />
      ))}
    </View>
  );
});

type TDotProps = {
  index: number;
  totalCnt: number;
  size: number;
  color: string;
}

function Dot(props: TDotProps) {
  const duration = 2000;

  // START
  const startTime = 0;

  // DELAY UNTIL
  let preDelayEndTime;
  // all dots wait this much initial time, 500ms
  const allPreDelayDuration = 0.25 * duration;
  // each dot waits 250ms after the previous one started
  const delayDuration = 0.13 * duration;
  preDelayEndTime = allPreDelayDuration + delayDuration * props.index;

  // GO TO CLIMAX
  let climaxEndTime;
  const climaxDuration = 0.18 * duration;
  climaxEndTime = preDelayEndTime + climaxDuration;

  // RETURN TO INITIAL STATE
  let postDelayStartTime;
  const unclimaxDuration = climaxDuration;
  postDelayStartTime = climaxEndTime + unclimaxDuration;

  // END
  let endTime;
  // time last dot starts
  const lastEndTime =
    allPreDelayDuration +
    delayDuration * (props.totalCnt - 1) +
    climaxDuration +
    unclimaxDuration;
  endTime = lastEndTime;


  const first = props.index === 0;
  const last = props.index === props.totalCnt - 1;

  const margin = 4;
  // i determined that a margin of 4 looks good for size of 24.
  const marginIsGoodForSize = 24;
  // this below then ratios this to the other sizes.
  const marginRatio = props.size / marginIsGoodForSize;

  const sizedStyles = {
    dot: {
      backgroundColor: props.color,
      width: props.size,
      height: props.size,
      borderRadius: props.size / 2
    },
    dotMiddle: {
      marginHorizontal: Math.round(marginRatio * margin)
    },
    dotFirst: {
      marginRight: Math.round(marginRatio * margin)
    },
    dotLast: {
      marginLeft: Math.round(marginRatio * margin)
    }
  };

  return (
    <Reanimated.View
      style={[
        sizedStyles.dot,
        { opacity:0.5, transform: [{ scale:1.2 }] },
        first && sizedStyles.dotFirst,
        !first && !last && sizedStyles.dotMiddle,
        last && sizedStyles.dotLast
      ]}
    />
  );
};

const styles = {
  spinner: {
    flexDirection: 'row'
  }
} as const;

const cachedStyles = StyleSheet.create({});

export default Spinner;