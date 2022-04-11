import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Seat from "../../components/Seat";
import { Button } from "react-native-paper";
import SeatExplanation from "../../components/SeatExplanation";
import { useNavigation } from "@react-navigation/native";

const SeatSelector = () => {
  const navigation = useNavigation();

  return (
    <FlatList
      style={{ paddingHorizontal: 40 }}
      data={data}
      renderItem={({ item, index, separators }) => (
        <Seat id={item.id} booked={item.booked} />
      )}
      numColumns={5}
      ListHeaderComponent={() => (
        <View style={{ alignItems: "flex-end" }}>
          <MaterialCommunityIcons name="steering" size={80} color="#2d2c2b" />
        </View>
      )}
      ListFooterComponent={() => (
        <View style={{ marginVertical: 20 }}>
          <SeatExplanation />
          <Button
            style={styles.continueButton}
            mode="contained"
            onPress={() => navigation.navigate("Booking")}
          >
            Continue
          </Button>
        </View>
      )}
    />
  );
};

export default SeatSelector;

const styles = StyleSheet.create({
  continueButton: {
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: "#e44c34",
  },
});

const data = [
  { id: "e99" },
  { id: "e100" },
  { id: "e1" },
  { id: "b1", booked: true },
  { id: "b2", booked: false },
  { id: "a1", booked: false },
  { id: "a2", booked: false },
  { id: "e2" },
  { id: "b3", booked: false },
  { id: "b4", booked: false },
  { id: "a3", booked: false },
  { id: "a4", booked: false },
  { id: "e3" },
  { id: "b5", booked: false },
  { id: "b6", booked: false },
  { id: "a5", booked: false },
  { id: "a6", booked: false },
  { id: "e5" },
  { id: "b7", booked: false },
  { id: "b8", booked: false },
  { id: "a7", booked: false },
  { id: "a8", booked: false },
  { id: "e6" },
  { id: "b9", booked: false },
  { id: "b10", booked: false },
  { id: "a9", booked: false },
  { id: "a10", booked: false },
  { id: "e7" },
  { id: "b11", booked: false },
  { id: "b12", booked: false },
  { id: "a11", booked: false },
  { id: "a12", booked: false },
  { id: "e8" },
  { id: "b13", booked: false },
  { id: "b14", booked: false },
  { id: "a13", booked: false },
  { id: "a14", booked: false },
  { id: "e8" },
  { id: "b15", booked: false },
  { id: "b16", booked: false },
  { id: "a15", booked: false },
  { id: "a16", booked: false },
  { id: "a17", booked: false },
  { id: "b17", booked: false },
  { id: "b18", booked: false },
];
