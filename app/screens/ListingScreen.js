import React from "react";
import { Image, View, StyleSheet } from "react-native";
import AppText from "../components/AppText/AppText";
import colors from "../config/colors";
import ListItem from "../components/ListItem";
function ListingScreen(props) {
  return (
    <View style={styles.cardContainer}>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />
      <View style={styles.textContainer}>
        <AppText style={styles.title}>Red Jacket for sale</AppText>
        <AppText style={styles.price}>$100</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/my.jpg")}
            title="Shuvo"
            subTitle="5 listings"
          />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  image: {
    width: "100%",
    height: 300,
  },
  cardContainer: {
    marginVertical: 30,
  },
  textContainer: {
    padding: 20,
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingScreen;
