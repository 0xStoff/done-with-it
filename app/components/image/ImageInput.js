import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  Button,
  TouchableHighlight,
  TouchableOpacity,
  Pressable,
  Image,
  Alert,
} from "react-native";
import Icon from "../Icon";
import * as Imagepicker from "expo-image-picker";

import defaultStyles from "../../config/styles";

export default function ImageInput({ imageUri, onChangeImage }) {
  useEffect(() => {
    requestPermission();
  }, []);

  const requestPermission = async () => {
    const { granted } = await Imagepicker.requestMediaLibraryPermissionsAsync();
    if (!granted) alert("You need to enable permissions to access the library");
  };

  const selectImage = async () => {
    try {
      const result = await Imagepicker.launchImageLibraryAsync({
        mediaTypes: Imagepicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!result.cancelled) onChangeImage(result.uri);
    } catch (error) {
      console.log("Error reading an Image", error);
    }
  };

  const handlePress = () => {
    if (!imageUri) selectImage();
    else {
      Alert.alert("Delete", "Are you sure?", [
        { text: "Yes", onPress: () => onChangeImage(null) },
        { text: "No" },
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.7} onPress={handlePress}>
        {!imageUri && (
          <Icon
            name="camera"
            size={90}
            borderRadius={15}
            backgroundColor={defaultStyles.colors.light}
            iconColor={defaultStyles.colors.medium}
          />
        )}
        {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    borderRadius: 15,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
