import { View, StyleSheet, Image } from "react-native";
import React from "react";
import AppText from "./AppText";
import { TouchableHighlight } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyles from "../config/styles";

export default function ListItem({
  IconComponent,
  image,
  onPress,
  renderRightActions,
  showChevrons = false,
  subTitle,
  title,
}) {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight
          underlayColor={defaultStyles.colors.light}
          onPress={onPress}
        >
          <View style={styles.container}>
            {IconComponent}
            {image && <Image source={image} style={styles.image} />}
            <View style={styles.detailsContainer}>
              <AppText style={styles.title}>{title}</AppText>
              {subTitle && (
                <AppText style={styles.subTitle}>{subTitle}</AppText>
              )}
            </View>
            {showChevrons && (
              <MaterialCommunityIcons
                name="chevron-right"
                size={25}
                color={defaultStyles.colors.medium}
                style={styles.icon}
              />
            )}
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
  },
  detailsContainer: {
    flex: 1,
    // width: "100%",
    marginLeft: 15,
    justifyContent: "center",
  },
  icon: {
    marginRight: 15,
    // justifyContent: "center",
    // alignContent: "center",
    alignSelf: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  title: {
    fontWeight: "500",
  },
  subTitle: {
    color: defaultStyles.colors.medium,
    fontSize: 15,
  },
});
