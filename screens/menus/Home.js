import React, { useState } from "react";
import { StyleSheet, Text, ScrollView, View } from "react-native";
import { Card, Divider } from "react-native-paper";
import Menu from "../../components/Menu";

export default function Home() {
  const [destination, setDestination] = React.useState({
    start: "Kathmandu",
    end: "Pokhara",
  });

  return (
    <ScrollView>
      <Text style={styles.homeHeader}>{`Where do you want \n to go?`}</Text>

      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.miniText}>From</Text>
          <Text style={styles.journey}>{destination.start}</Text>

          <Divider style={{ marginVertical: 10 }} />

          <Text style={styles.miniText}>To</Text>
          <Text style={styles.journey}>{destination.end}</Text>
        </Card.Content>
      </Card>
      <Menu />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  homeHeader: {
    marginTop: 10,
    marginHorizontal: 20,
    fontSize: 36,
    fontFamily: "Lato_900Black",
    color: "#22242B",
  },
  card: {
    margin: 20,
    padding: 10,
    borderRadius: 20,
  },
  miniText: {
    fontFamily: "Lato_400Regular",
    color: "#BDBEC3",
  },
  journey: {
    fontSize: 24,
    fontFamily: "Lato_700Bold",
    color: "#23252C",
    marginTop: 5,
  },
});
