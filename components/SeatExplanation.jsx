import { View, Text } from "react-native";
import React from "react";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

const SeatExplanation = () => {
  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
      <View
        style={{
          flex: 1,
          backgroundColor: "#787878",
          margin: 3,
          alignItems: "center",
          borderRadius: 10,
          borderWidth: 2,
          borderColor: "#787878",
        }}
        opacity={0.25}
      >
        <Text>Booked</Text>
        <MaterialIcons name="event-seat" size={40} color="black" />
      </View>

      <View
        style={{
          flex: 1,
          borderColor: "#e44c34",
          borderWidth: 2,
          margin: 3,
          alignItems: "center",
          borderRadius: 10,
        }}
      >
        <Text>Available</Text>
        <MaterialCommunityIcons name="seat-outline" size={40} color="#e44c34" />
      </View>

      <View
        style={{
          flex: 1,
          borderColor: "#e44c34",
          borderWidth: 2,
          margin: 3,
          alignItems: "center",
          borderRadius: 10,
          backgroundColor: "#e44c34",
        }}
      >
        <Text>Selected</Text>
        <MaterialCommunityIcons name="seat-outline" size={40} color="white" />
      </View>
    </View>
  );
};

export default SeatExplanation;
