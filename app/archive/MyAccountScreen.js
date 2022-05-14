import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import ListItem from "../components/ListItem";

import colors from "../config/config";
import ListItemSeparator from "../components/ListItemSeparator";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Icon from "../components/Icon";

export default function MyAccountScreen() {
  return (
    <Screen style={styles.container}>
      <View style={styles.item}>
        <ListItem
          image={require("../assets/mosh.jpg")}
          title="Mosh Hamedani"
          subTitle="programmingwithmosh@gmail.com"
        />
      </View>
      <View style={styles.list}>
        <ListItem
          IconComponent={
            <Icon
              name="format-list-bulleted"
              backgroundColor={colors.primary}
              iconColor={colors.white}
            />
          }
          title="My Listings"
        />
        <ListItemSeparator />
        <ListItem
          IconComponent={
            <Icon
              name="email"
              backgroundColor={colors.secondary}
              iconColor={colors.white}
            />
          }
          title="My Messages"
        />
      </View>
      <View style={styles.item}>
        <ListItem
          IconComponent={
            <Icon
              name="logout"
              backgroundColor="#ffe66d"
              iconColor={colors.white}
            />
          }
          title="Log Out"
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
  },
  item: {
    backgroundColor: colors.white,
    marginTop: 20,
  },
  list: {
    backgroundColor: colors.white,
    marginTop: 35,
  },
});
