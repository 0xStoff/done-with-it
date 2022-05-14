import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import { useNavigation } from "@react-navigation/native";
import routes from "../navigator/Routes";
const background = require("../assets/background.jpg");
const logo = require("../assets/logo-red.png");

const WelcomeScreen = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={background}
      resizeMode="cover"
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={logo}></Image>
        <AppText>Done with It?</AppText>
      </View>

      <View style={styles.buttonContainer}>
        <AppButton
          title="Login"
          onPress={() => navigation.navigate(routes.LOGIN)}
        />
        <AppButton
          title="Register"
          color="secondary"
          onPress={() => navigation.navigate(routes.REGISTER)}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  buttonContainer: { width: "100%", padding: 20 },
  logo: {
    width: 150,
    height: 150,
  },
  logoContainer: {
    position: "absolute",
    alignItems: "center",
    top: 100,
  },
});

export default WelcomeScreen;
