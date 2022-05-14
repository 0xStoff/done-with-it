import { useEffect, useRef, useState } from "react";
import * as Notifications from "expo-notifications";
import { Platform } from "react-native";
import expoPushTokensApi from "../api/expoPushTokens";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export default useNotifications = (notificationListener) => {
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotifications();
    if (notificationListener) {
      responseListener.current =
        Notifications.addNotificationResponseReceivedListener(
          notificationListener
        );

      return () => {
        Notifications.removeNotificationSubscription(responseListener.current);
      };
    }
  }, []);

  const registerForPushNotifications = async () => {
    let token;
    try {
      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== "granted") {
        alert("Failed to get push token for push notification!");
        return;
      }
      token = (await Notifications.getExpoPushTokenAsync()).data;

      expoPushTokensApi.register(token);
    } catch (error) {
      console.log("Error getting Push token", error);
    }

    if (Platform.OS === "android") {
      Notifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: "#FF231F7C",
        displayInForeground: true,
      });
    }
    return token;
  };
};
