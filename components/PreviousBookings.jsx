import {
  StyleSheet,
  Text,
  View,
  Alert,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import OldTicket from "../components/OldTicket";
import { getExpiredTickets } from "../services/bookingServices";

const PreviousBookings = () => {
  const [loading, setLoading] = useState(true);
  const [purchases, setPurchases] = useState([]);

  useEffect(() => {
    getExpiredTickets()
      .then((response) => {
        setPurchases(response.data);
        // Alert.alert("Success", JSON.stringify(response.data));
      })
      .catch((error) => {
        Alert.alert("Error", JSON.stringify(error));
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <View style={{ padding: 20 }}>
        <ActivityIndicator size="large" color="#e44c34" />
      </View>
    );
  }

  if (!loading && purchases.length == 0) {
    return (
      <View style={{ padding: 20 }}>
        <Text
          style={{
            textAlign: "center",
            fontSize: 18,
            fontFamily: "Lato_400Regular",
          }}
        >
          You do not have any previous bookings
        </Text>
      </View>
    );
  }

  return (
    <ScrollView style={{ marginBottom: 60 }}>
      {purchases.map((purchase) => (
        <OldTicket
          key={purchase.ticket.id}
          ticket={purchase.ticket}
          booking={purchase.booking}
          vehicle={purchase.vehicle}
        />
      ))}
    </ScrollView>
  );
};

export default PreviousBookings;

const styles = StyleSheet.create({});
