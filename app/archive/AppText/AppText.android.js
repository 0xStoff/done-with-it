import React from "react";
import { StyleSheet, Text } from "react-native";
import colors from "../../config/config.js";

export default function AppText({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: "Roboto",
  },
});
