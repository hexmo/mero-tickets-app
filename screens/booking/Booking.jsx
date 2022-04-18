import { StyleSheet, Text, View, Alert } from "react-native";
import React, { useState } from "react";
import { TextInput, Button } from "react-native-paper";
import { KhatiSdk } from "rn-all-nepal-payment";

const Booking = ({ route, navigation }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [passengerName, setPassengerName] = useState("");
  const [passengerContact, setPassengerContact] = useState("");

  const { booking, selectedSeats, price } = route.params;
  const productName = `Booking:${booking.id} Seats:${selectedSeats.join(", ")}`;

  const initiatePaymentHandler = () => {
    if (passengerName === "" || passengerContact === "") {
      Alert.alert(
        "Validation error",
        "Please enter Passenger name and contact to continue."
      );
      return;
    }

    setIsVisible(true);
  };

  const onPaymentComplete = (data) => {
    setIsVisible(false);
    const str = data.nativeEvent.data;
    const resp = JSON.parse(str);
    if (resp.event === "CLOSED") {
      // handle closed action
    } else if (resp.event === "SUCCESS") {
      console.log({ data: resp.data });
    } else if (resp.event === "ERROR") {
      console.log({ error: resp.data });
    }
    return;
  };

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
        defaultValue={passengerName}
        onChangeText={(passengerName) => setPassengerName(passengerName)}
      />

      <TextInput
        style={styles.input}
        label="Passenger Contact"
        mode="outlined"
        left={<TextInput.Icon name="phone" />}
        keyboardType="phone-pad"
        defaultValue={passengerContact}
        onChangeText={(passengerContact) =>
          setPassengerContact(passengerContact)
        }
      />

      <Button
        mode="contained"
        uppercase={false}
        style={{ backgroundColor: "#5D2E8E" }}
        onPress={initiatePaymentHandler}
      >
        <Text style={{ fontSize: 22, fontFamily: "Lato_400Regular" }}>
          Pay with Khalti
        </Text>
      </Button>

      <KhatiSdk
        amount={price * 100} // Number in paisa
        isVisible={isVisible} // Bool to show model
        paymentPreference={[
          // Array of services needed from Khalti
          "KHALTI",
        ]}
        productName={productName} // Name of product
        productIdentity={"1234567890"} // Unique product identifier at merchant
        onPaymentComplete={onPaymentComplete} // Callback from Khalti Web Sdk
        productUrl={"http://mero-tickets.com"} // Url of product
        publicKey={"test_public_key_564deace2b94422d9242353c4b270682"} // Test or live public key which identifies the merchant
      />
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
