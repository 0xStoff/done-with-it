import React, { useEffect, useRef } from "react";
import LottieView from "lottie-react-native";
import { View, StyleSheet } from "react-native";

export default function ActivityIndicator({ visible = false, ...otherProps }) {
  if (!visible) return null;
  const animation = useRef(null);

  useEffect(() => {
    if (!animation) return null;
    else animation.current.play();
  }, [animation]);

  return (
    <View style={styles.overlay}>
      <LottieView
        ref={animation}
        autoPlay={true}
        loop={true}
        source={require("../assets/animations/dots.json")}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    zIndex: 1,
    backgroundColor: "white",
    opacity: 0.8,
    height: "100%",
    width: "100%",
  },
});
