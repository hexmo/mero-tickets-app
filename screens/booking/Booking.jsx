import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TextInput, Button } from "react-native-paper";

const Booking = ({ route, navigation }) => {
  const { booking, selectedSeats, price } = route.params;

  return (
    <View style={styles.main}>
      <Text style={styles.text}>
        Seats:{" "}
        <Text style={{ color: "#e44c34" }}>{selectedSeats.join(", ")}</Text>
      </Text>

      <Text style={styles.text}>
        Total Price: <Text style={{ color: "#e44c34" }}>{price}</Text>
      </Text>

      <TextInput
        style={styles.input}
        label="Passenger Name"
        mode="outlined"
        left={<TextInput.Icon name="account" />}
      />

      <TextInput
        style={styles.input}
        label="Passenger Contact"
        mode="outlined"
        left={<TextInput.Icon name="phone" />}
        keyboardType="phone-pad"
      />

      <Button
        mode="contained"
        uppercase={false}
        style={{ backgroundColor: "#41A124" }}
        onPress={() => {
          alert("Feature coming in next iteration");
        }}
      >
        <Text style={{ fontSize: 24, fontFamily: "Lato_400Regular" }}>
          Pay using eSewa
        </Text>
      </Button>
    </View>
  );
};

export default Booking;

const styles = StyleSheet.create({
  main: {
    padding: 20,
    flex: 1,
    justifyContent: "center",
  },
  input: {
    marginBottom: 20,
  },
  text: {
    marginBottom: 10,
    fontSize: 24,
    fontFamily: "Lato_700Bold",
  },
});
