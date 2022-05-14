import { View, StyleSheet, FlatList } from "react-native";
import React from "react";

import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import colors from "../config/config";
import Icon from "../components/Icon";
import ListItemSeparator from "../components/ListItemSeparator";
import routes from "../navigator/Routes";

import useAuth from "../auth/useAuth";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
    targetScreen: routes.MESSAGES,
  },
];

export default function AccountScreen({ navigation }) {
  const { user, logOut } = useAuth();

  return (
    <Screen style={styles.screen}>
      <View style={styles.item}>
        <ListItem
          image={require("../assets/mosh.jpg")}
          title={user.name}
          subTitle={user.email}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <ListItem
                title={item.title}
                showChevrons={true}
                IconComponent={
                  <Icon
                    name={item.icon.name}
                    backgroundColor={item.icon.backgroundColor}
                  />
                }
                onPress={() => navigation.navigate(item.targetScreen)}
              />
            </View>
          )}
          ItemSeparatorComponent={ListItemSeparator}
        />
      </View>
      <View style={styles.item}>
        <ListItem
          title="Log Out"
          IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
          onPress={() => logOut()}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  item: {
    backgroundColor: colors.white,
  },
  screen: {
    backgroundColor: colors.light,
  },
});
