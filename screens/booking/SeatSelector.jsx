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
  { id: "b2" },
  { id: "a1" },
  { id: "a2" },
  { id: "e2" },
  { id: "b3" },
  { id: "b4" },
  { id: "a3" },
  { id: "a4" },
  { id: "e3" },
  { id: "b5" },
  { id: "b6" },
  { id: "a5", booked: true },
  { id: "a6", booked: true },
  { id: "e5" },
  { id: "b7" },
  { id: "b8" },
  { id: "a7" },
  { id: "a8" },
  { id: "e6" },
  { id: "b9", booked: true },
  { id: "b10", booked: true },
  { id: "a9" },
  { id: "a10" },
  { id: "e7" },
  { id: "b11" },
  { id: "b12" },
  { id: "a11", booked: true },
  { id: "a12" },
  { id: "e8" },
  { id: "b13" },
  { id: "b14" },
  { id: "a13" },
  { id: "a14", booked: true },
  { id: "e8" },
  { id: "b15" },
  { id: "b16" },
  { id: "a15" },
  { id: "a16" },
  { id: "a17", booked: true },
  { id: "b17", booked: true },
  { id: "b18", booked: true },
];
