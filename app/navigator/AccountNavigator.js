import React from "react";

import {
  WelcomeScreen,
  LoginScreen,
  RegisterScreen,
  ListingDetailsScreen,
  ListingsScreen,
  AccountScreen,
  MessagesScreen,
} from "../screens";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function AccountNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Account"
        component={AccountScreen}
      />
      <Stack.Screen name="Messages" component={MessagesScreen} />
    </Stack.Navigator>
  );
}
