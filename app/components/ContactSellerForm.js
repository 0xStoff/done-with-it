import React from "react";
import { Alert, Keyboard, StyleSheet } from "react-native";
import messagesApi from "../api/messages";
import * as Notifications from "expo-notifications";
import * as Yup from "yup";

import { AppForm, AppFormField, SubmitButton } from "../components/forms";
const validationSchema = Yup.object().shape({
  message: Yup.string().required().label("Message"),
});

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});
async function schedulePushNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Awesome",
      body: "Your message was sent to the seller!",
    },
    trigger: null,
    body: {
      displayInForeground: true,
    },
  });
}
export default function ContactSellerForm({ listing }) {
  const handleSubmit = async ({ message }, { resetForm }) => {
    Keyboard.dismiss();

    const result = await messagesApi.send(message, listing.id);

    if (!result.ok) {
      console.log("error", result);
      return Alert.alert("Error", "Could not send message.");
    }
    resetForm();
    await schedulePushNotification();
  };
  return (
    <AppForm
      initialValues={{
        message: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <AppFormField
        maxLength={255}
        autoCapitalize="none"
        autoCorrect={false}
        name="message"
        placeholder="Message"
      />

      <SubmitButton title="Contact Seller" />
    </AppForm>
  );
}

const styles = StyleSheet.create({
  container: {},
});
