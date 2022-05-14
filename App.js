import React, { useState } from "react";
import AuthNavigator from "./app/navigator/AuthNavigator";
import AppNavigator from "./app/navigator/AppNavigator";
import { NavigationContainer } from "@react-navigation/native";
import navigationTheme from "./app/navigator/navigationTheme";

import OfflineNotice from "./app/components/OfflineNotice";
import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/storage";

import AppLoading from "expo-app-loading";
import { navigationRef } from "./app/navigator/RootNavigation";

export default function App() {
  const [user, setUser] = useState(0);
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
  };

  if (!isReady)
    return (
      <AppLoading
        startAsync={restoreUser}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    );

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer ref={navigationRef} theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
