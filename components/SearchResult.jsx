import { StyleSheet, Pressable, View } from "react-native";
import { Card, Title, Caption, Chip } from "react-native-paper";

import React from "react";

const SearchResult = ({ navigation }) => {
  const handleSeatSelection = () => {
    navigation.navigate("SeatSelector");
  };

  return (
    <Pressable onPress={handleSeatSelection}>
      <View style={styles.main}>
        <Card style={styles.card}>
          <View style={styles.headerView}>
            <Title>Bagmati Yatayat</Title>
            <Caption>Super A/C Deluxe</Caption>
          </View>
          <View style={styles.headerView}>
            <Chip icon="progress-clock">08:00 PM</Chip>
            <Chip icon="seat-recline-extra">37 seats</Chip>
            <Chip icon="cash-multiple">Rs 1200/-</Chip>
          </View>
        </Card>
      </View>
    </Pressable>
  );
};

export default SearchResult;

const styles = StyleSheet.create({
  main: {
    marginVertical: 5,
  },
  card: {
    padding: 10,
    borderRadius: 10,
  },
  headerView: {
    marginBottom: 5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
