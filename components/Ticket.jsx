import { StyleSheet, View, Image } from "react-native";
import React from "react";
import { Title, Caption, Text } from "react-native-paper";

const Ticket = () => {
  return (
    <View style={styles.ticket}>
      <View style={styles.tickerDetails}>
        <Title>Bagmati Yatayat</Title>
        <Caption>KATHMANDU - POKAHRA</Caption>
        <Text>Alin Dangi (98480XXXXX)</Text>
        <Text>Seats: A5, A6</Text>
        <Text>Time: April 5, 08:00 PM</Text>
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
