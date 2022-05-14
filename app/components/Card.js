import * as React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../config/config.js";
import { Image } from "react-native-expo-image-cache";

export default function Card({
  title,
  subTitle,
  imageUrl,
  onPress,
  thumbnailUrl,
}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          uri={imageUrl}
          preview={thumbnailUrl}
          tint="light"
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subTitle}>{subTitle}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignSelf: "center",
    height: 269,
    marginBottom: 25,
    borderRadius: 15,
    backgroundColor: "#FFFFFF",
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: "70%",
  },

  textContainer: {
    padding: 20,
  },

  title: {
    marginBottom: 7,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
});
