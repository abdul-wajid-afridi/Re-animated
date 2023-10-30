import { ScrollView } from "react-native";

import ListAnimations from "./animations/ListAnimations";
import Branch2 from "./branch-2";

export default function AnimationApp() {
  return (
    <ScrollView>
      <Branch2 />

      <ListAnimations />
    </ScrollView>
  );
}
