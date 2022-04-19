import { StyleSheet, View, Image } from "react-native";
import React from "react";
import { Title, Caption, Text } from "react-native-paper";

const Ticket = ({ ticket, booking, vehicle }) => {
  return (
    <View style={styles.ticket}>
      <View style={styles.tickerDetails}>
        <Title>{vehicle.name}</Title>
        <Caption>
          {booking.start_location.toUpperCase()} -{" "}
          {booking.end_location.toUpperCase()}
        </Caption>
        <Text>
          {ticket.passenger_name} ({ticket.passenger_contact})
        </Text>
        <Text>Seats: {ticket.seats.toUpperCase()}</Text>
        <Text style={{ fontFamily: "Lato_700Bold", marginVertical: 3 }}>
          {vehicle.license_plate}
        </Text>
        <Text>
          Time: {booking.journery_date}, {booking.journey_time.slice(11, 16)}
        </Text>
      </View>

      {/* https://stackoverflow.com/questions/34180629/react-native-fit-image-in-containing-view-not-the-whole-screen-size */}
      <View
        style={{
          width: "35%",
          justifyContent: "center",
          borderEndColor: "#111",
          borderLeftWidth: 1,
        }}
      >
        <Image
          source={require("../assets/qr-code.png")}
          style={{
            width: "100%",
            height: undefined,
            aspectRatio: 1,
          }}
        />
      </View>
    </View>
  );
};

export default Ticket;

const styles = StyleSheet.create({
  ticket: {
    borderRadius: 5,
    margin: 10,
    marginVertical: 5,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tickerDetails: {
    padding: 5,
  },
});
