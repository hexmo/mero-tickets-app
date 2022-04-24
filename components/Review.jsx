import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Avatar, Paragraph } from "react-native-paper";
import { AirbnbRating } from "react-native-ratings";

const Review = ({ review }) => {
  return (
    <View style={styles.card}>
      <View style={{ flexDirection: "row" }}>
        <Avatar.Icon size={40} icon="account" style={{ marginRight: 10 }} />
        <AirbnbRating
          count={5}
          defaultRating={review.rating}
          size={25}
          selectedColor={"#e44c34"}
          reviewColor={"#e44c34"}
          showRating={false}
        />
      </View>
      <View>
        <Paragraph>{review.review}</Paragraph>
        <Paragraph>Posted on: {review.created_at.slice(0, 10)}</Paragraph>
      </View>
    </View>
  );
};

export default Review;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
  },
});
