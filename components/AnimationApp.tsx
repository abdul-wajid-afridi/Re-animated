import { View, StyleSheet, Text, ScrollView } from 'react-native';

import Spinner from './animations/spinner';
import FirstAnimation from './animations/FirstAnimation';
import UseAnimatedAnimation from './animations/UseAnimatedAnimation';
import WithTimeAnimation from './animations/WithTimeAnimation';
import OffSetAnimation from './animations/OffSetAnimation';
import CustomLoader from './animations/CustomLoader';
import ListAnimations from './animations/ListAnimations';

export default function AnimationApp() {
  return (
    <ScrollView >
      {/* <UseAnimatedAnimation/> */}
      {/* <WithTimeAnimation/> */}
      {/* <OffSetAnimation/> */}
      {/* <FirstAnimation/> */}
      {/* <CustomLoader/> */}
      <ListAnimations/>
      {/* <Spinner  /> */}
      {/* <Text>show me some thing</Text> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
