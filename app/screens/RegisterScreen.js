import { StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import Screen from "../components/Screen";

import * as Yup from "yup";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import authApi from "../api/auth";
import useAuth from "../auth/useAuth";
import ErrorMessage from "../components/forms/ErrorMessage";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

export default function RegisterScreen() {
  // const [registerFailed, setRegisterFailed] = useState(false);
  const [error, setError] = useState(false);

  const { logIn } = useAuth();

  const handleSubmit = async (userInfo) => {
    const result = await authApi.register(userInfo);
    if (!result.ok) {
      if (result.data) setError(result.data.error);
      else {
        setError("An unexpected error occured.");
        console.log(result);
      }
      return;
    }
    const { data: authToken } = await authApi.login(
      userInfo.email,
      userInfo.password
    );
    logIn(authToken);

    // return setRegisterFailed(true);
    // setRegisterFailed(false);
    // logIn(resultLogin.data);
  };

  return (
    <Screen style={styles.container}>
      <Image source={require("../assets/logo-red.png")} style={styles.logo} />
      <AppForm
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage error={error} visible={error} />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="account"
          name="name"
          placeholder="Name"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Register" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
