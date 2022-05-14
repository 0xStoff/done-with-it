import { View, StyleSheet } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/config";

export default function Icon({
  name,
  backgroundColor = colors.black,
  size = 50,
  borderRadius = size / 2,
  iconColor = colors.white,
}) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: borderRadius,
        backgroundColor,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialCommunityIcons name={name} size={size * 0.5} color={iconColor} />
    </View>
  );
}
