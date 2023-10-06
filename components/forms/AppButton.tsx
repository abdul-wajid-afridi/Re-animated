import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

type AppButtonProps = {
  name: string;
  onPress: () => void;
  color?: string;
};

const AppButton: React.FC<AppButtonProps> = ({ name, onPress }) => {
  return (
    <TouchableOpacity style={styles.main} onPress={onPress}>
      <Text
        style={{
          color: "#000000",
          fontSize:20,
        }}
      >
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  main: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f042",
    borderWidth: 1,
    borderColor: "#DFDFDF",
    borderRadius: 10,
    height: 55,
    minWidth:200,
  },
});
