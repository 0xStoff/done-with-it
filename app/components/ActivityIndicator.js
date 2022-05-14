import React, { useEffect, useRef, useState } from "react";
import LottieView from "lottie-react-native";
import { Button } from "react-native";

export default function ActivityIndicator({ visible = false }) {
  if (!visible) return null;
  const animation = useRef(null);

  useEffect(() => {
    if (!animation) return null;
    else animation.current.play();
  }, [animation]);

  return (
    <LottieView
      ref={animation}
      autoPlay={true}
      loop={true}
      source={require("../assets/animations/dots.json")}
    />
  );
}
