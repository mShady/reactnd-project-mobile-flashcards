import React from "react";
import { Text, TouchableOpacity, StyleSheet, Platform } from "react-native";
import Colors from "../constants/Colors";

export default function TextButton({ text, onPress, style = {} }) {
  return (
    <TouchableOpacity
      style={[Platform.OS === "ios" ? styles.iosBtn : styles.androidBtn, style]}
      onPress={onPress}
    >
      <Text>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  iosBtn: {
    backgroundColor: "purple",
    padding: 10,
    borderRadius: 7,
    height: 45,
    margin: 40
  },
  androidBtn: {
    backgroundColor: "purple",
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    justifyContent: "center",
    alignItems: "center",
    margin: 40
  }
});
