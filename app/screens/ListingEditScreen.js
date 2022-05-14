import { StyleSheet } from "react-native";
import React, { useState } from "react";
import Screen from "../components/Screen";
import * as Yup from "yup";
import {
  AppForm,
  AppFormField,
  SubmitButton,
  AppFormPicker,
} from "../components/forms";
import CategoryPickerItem from "../components/CategoryPickerItem";
import FormImagePicker from "../components/forms/FormImagePicker";
import useLocation from "../hooks/useLocation";
import listingsApi from "../api/listings";
import UploadScreen from "./UploadScreen";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Name"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select at least one image"),
});

const categories = [
  {
    label: "Furniture",
    icon: "floor-lamp",
    backgroundColor: "#fc5c65",
    value: 1,
  },
  { label: "Cars", icon: "car", backgroundColor: "#4b7bec", value: 2 },
  { label: "Cameras", icon: "camera", backgroundColor: "#fd9644", value: 3 },
  { label: "Games", icon: "cards", backgroundColor: "#fed330", value: 4 },
  {
    label: "Clothing",
    icon: "shoe-heel",
    backgroundColor: "#26de81",
    value: 5,
  },
  { label: "Sports", icon: "basketball", backgroundColor: "#2bcbba", value: 6 },
  {
    label: "Movies & Music",
    icon: "headphones",
    backgroundColor: "#45aaf2",
    value: 7,
  },
  {
    label: "Books",
    icon: "book-open-variant",
    backgroundColor: "#45aaf2",
    value: 8,
  },
  {
    label: "Others",
    icon: "dots-horizontal-circle",
    backgroundColor: "#45aaf2",
    value: 9,
  },
];
export default function ListingEditScreen() {
  const location = useLocation();
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  // const data = new FormData();

  const handleSubmit = async (listing, { resetForm }) => {
    setProgress(0);
    setUploadVisible(true);
    const result = await listingsApi.addListing(
      { ...listing, location },
      (progress) => setProgress(progress)
    );

    if (!result.ok) {
      setUploadVisible(false);
      return alert("Could not save listing");
    }

    resetForm();
  };

  return (
    <Screen style={styles.container}>
      <UploadScreen
        onDone={() => setUploadVisible(false)}
        progress={progress}
        visible={uploadVisible}
      />
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
        <AppFormField
          maxLength={255}
          autoCapitalize="none"
          autoCorrect={false}
          name="title"
          placeholder="Title"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={150}
        />

        <AppFormPicker
          items={categories}
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          name="category"
          width={250}
          placeholder="Category"
        />

        <AppFormField
          autoCapitalize="none"
          multiline
          numberOfLines={3}
          autoCorrect={false}
          name="description"
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
