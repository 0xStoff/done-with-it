import { View, Text, StyleSheet } from "react-native";
import React from "react";
import AppText from "../components/AppText";
import colors from "../config/config.js";
import ListItem from "../components/ListItem";

import { Image } from "react-native-expo-image-cache";

export default function ListingDetailsScreen({ route }) {
  const listing = route.params;

  return (
    <View>
      <Image
        style={styles.image}
        uri={listing.images[0].url}
        preview={{ uri: listing.images[0].thumbnailUrl }}
      />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>${listing.price}</AppText>
      </View>
      <View style={styles.userContainer}>
        <ListItem
          image={require("../assets/mosh.jpg")}
          title="Mosh Hamedani"
          subTitle="5 Listings"
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 18,
    marginVertical: 3,
  },
  userContainer: {
    marginVertical: 20,
  },
});
