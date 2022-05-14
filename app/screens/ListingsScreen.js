import { View, StyleSheet, FlatList, Button } from "react-native";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";

import colors from "../config/config";
import Screen from "../components/Screen";
import { useNavigation } from "@react-navigation/native";
import routes from "../navigator/Routes";
import listingsApi from "../api/listings";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import ActivityIndicator from "../components/ActivityIndicator";
import useApi from "../hooks/useApi";

export default function ListingsScreen() {
  const navigation = useNavigation();
  const {
    data: listings,
    error,
    loading,
    request: loadListings,
  } = useApi(listingsApi.getListings);

  useEffect(() => {
    loadListings(1, 2, 3);

    // console.log(listings);
  }, []);

  return (
    <Screen style={styles.container}>
      <ActivityIndicator visible={loading} />
      {error && (
        <>
          <AppText>Couldn't rertrieve the Listings</AppText>
          <AppButton title="Retry" onPress={loadListings} />
        </>
      )}
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            onPress={() => navigation.navigate(routes.DETAILS, item)}
            title={item.title}
            subTitle={`$${item.price}`}
            imageUrl={item.images[0].url}
            thumbnailUrl={item.images[0].url}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
    padding: 20,
  },
});
