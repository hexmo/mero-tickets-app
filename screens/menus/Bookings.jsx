import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Ticket from "../../components/Ticket";

const Bookings = () => {
  return (
    <View>
      <Ticket />
      <Ticket />
      <Ticket />
    </View>
  );
};

export default Bookings;

const styles = StyleSheet.create({});
