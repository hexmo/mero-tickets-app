import { StyleSheet, View } from "react-native";
import { Card, Title, Caption, Chip } from "react-native-paper";

import React from "react";

const SearchResult = ({
  navigation,
  bookingId,
  vehicleId,
  name,
  facility,
  time,
  price,
}) => {
  const handleSeatSelection = () => {
    navigation.navigate("BusDetails", {
      bookingId,
      vehicleId,
    });
  };

  return (
    <View style={styles.main}>
      <Card style={styles.card} onPress={handleSeatSelection}>
        <View style={styles.headerView}>
          <Title>{name}</Title>
          <Caption>{facility}</Caption>
        </View>
        <View style={styles.headerView}>
          {/* <Chip icon="progress-clock">{moment(time).format("h:mm a")}</Chip> */}
          <Chip icon="progress-clock">{time.slice(11, 16)}</Chip>
          <Chip icon="seat-recline-extra">37 seats</Chip>
          <Chip icon="cash-multiple">Rs {price}/-</Chip>
        </View>
      </Card>
    </View>
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
