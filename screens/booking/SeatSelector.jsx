import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  Alert,
} from "react-native";
import React, { useState, useEffect } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Seat from "../../components/Seat";
import { Button } from "react-native-paper";
import SeatExplanation from "../../components/SeatExplanation";
import { getBookingDetails } from "../../services/searchService";

const SeatSelector = ({ route, navigation }) => {
  const { bookingId, vehicleId } = route.params;

  const [loading, setLoading] = useState(true);
  const [booking, setBooking] = useState();
  const [selectedSeats, setSelectedSeats] = useState([]);

  useEffect(() => {
    getBookingDetails(bookingId)
      .then((res) => {
        setBooking(res.data);
        // Alert.alert("Success", JSON.stringify(res.data));
      })
      .catch((error) => {
        Alert.alert("Error", JSON.stringify(error));
      })
      .finally(() => setLoading(false));
  }, []);

  // handlers
  const goToBooking = () => {
    if (selectedSeats.length === 0) {
      Alert.alert("You should first select a seat to continue.");
      return;
    }

    navigation.navigate("Booking", {
      booking,
      selectedSeats,
      price: booking.ticket_price * selectedSeats.length,
    });
  };

  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <FlatList
      style={{ paddingHorizontal: 40 }}
      data={booking.seats}
      renderItem={({ item, index, separators }) => (
        <Seat
          id={item.id}
          booked={item.booked}
          selectedSeats={selectedSeats}
          setSelectedSeats={setSelectedSeats}
        />
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
          <Text
            style={{
              marginVertical: 10,
              fontSize: 16,
              fontFamily: "Lato_700Bold",
            }}
          >
            Selected seats: {selectedSeats.join(", ")}
          </Text>
          <Text
            style={{
              marginVertical: 10,
              fontSize: 16,
              fontFamily: "Lato_700Bold",
            }}
          >
            Total price: {booking.ticket_price * selectedSeats.length}
          </Text>
          <Button
            style={styles.continueButton}
            mode="contained"
            onPress={goToBooking}
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
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: "#e44c34",
  },
});
