import { ScrollView } from "react-native";
import ListAnimations from "./animations/ListAnimations";
import Branch1 from "./branch-1";

export default function AnimationApp() {
  return (
    <ScrollView>
      <Branch1 />

      <ListAnimations />
    </ScrollView>
  );
}
