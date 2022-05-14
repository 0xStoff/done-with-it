import React from "react";
// import {
//   createNativeStackNavigator,
//   TransitionPresets,
// } from "@react-navigation/native-stack";
import {
  WelcomeScreen,
  LoginScreen,
  RegisterScreen,
  ListingDetailsScreen,
  ListingsScreen,
} from "../screens";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
// import { TransitionPresets } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function FeedNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Listings" component={ListingsScreen} />
      <Stack.Screen
        name="Details"
        options={{
          title: "Details",
          ...TransitionPresets.ModalPresentationIOS,
        }}
        component={ListingDetailsScreen}
      />
    </Stack.Navigator>
  );
}
