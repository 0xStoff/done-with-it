import React, { useRef } from "react";
import {
  View,
  StyleSheet,
  Button,
  TouchableHighlight,
  TouchableOpacity,
  Pressable,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
import Icon from "../Icon";

import defaultStyles from "../../config/styles";
import ImageInput from "./ImageInput";

export default function ImageInputList({
  imageUris = [],
  onAddImage,
  onRemoveImage,
}) {
  const scrollView = useRef();
  return (
    <View>
      <ScrollView
        ref={scrollView}
        horizontal
        onContentSizeChange={() => scrollView.current.scrollToEnd()}
      >
        <View style={styles.container}>
          {imageUris.map((uri) => (
            <View key={uri} style={styles.image}>
              <ImageInput
                imageUri={uri}
                onChangeImage={() => onRemoveImage(uri)}
              />
            </View>
          ))}
          <ImageInput onChangeImage={(uri) => onAddImage(uri)} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, flexDirection: "row" },
  image: { width: 90, height: 90, marginRight: 10, borderRadius: 20 },
});
