import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/config.js";
const chair = require("../assets/chair.jpg");

const ViewImageScreen = () => (
  <View style={styles.container}>
    <View style={styles.closeIcon}>
      <MaterialCommunityIcons name="close" color="white" size={30} />
    </View>
    <View style={styles.deleteIcon}>
      <MaterialCommunityIcons
        name="trash-can-outline"
        color="white"
        size={30}
      />
    </View>
    <Image source={chair} style={styles.chair} resizeMode="contain"></Image>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  closeIcon: {
    top: 50,
    left: 30,
    position: "absolute",
  },
  deleteIcon: {
    position: "absolute",
    top: 50,
    right: 30,
  },

  chair: { width: "100%", height: "100%" },
});

export default ViewImageScreen;
