import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { useState } from "react";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

const Seat = ({ id, booked, selectedSeats, setSelectedSeats }) => {
  const [seleted, setSelected] = useState(false);

  // handlers
  const handleSeatSelect = () => {
    setSelected(true);
    setSelectedSeats([...selectedSeats, id]);
  };

  const handleSeatRemove = () => {
    setSelected(false);
    setSelectedSeats(selectedSeats.filter((e) => e != id));
  };

  if (id.charAt(0) == "e") {
    return (
      <View
        style={{
          flex: 1,
          margin: 3,
        }}
      />
    );
  }

  if (booked) {
    return (
      <Pressable
        onPress={() => alert("This seat has been already booked")}
        style={{ flex: 1 }}
      >
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
          <Text>{id}</Text>
          <MaterialIcons name="event-seat" size={40} color="black" />
        </View>
      </Pressable>
    );
  }

  return seleted ? (
    <Pressable onPress={handleSeatRemove} style={{ flex: 1 }}>
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
        <Text>{id}</Text>
        <MaterialCommunityIcons name="seat-outline" size={40} color="white" />
      </View>
    </Pressable>
  ) : (
    <Pressable onPress={handleSeatSelect} style={{ flex: 1 }}>
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
        <Text>{id}</Text>
        <MaterialCommunityIcons name="seat-outline" size={40} color="#e44c34" />
      </View>
    </Pressable>
  );
};

export default Seat;

const styles = StyleSheet.create({});
