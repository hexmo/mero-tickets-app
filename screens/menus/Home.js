import React from "react";
import { StyleSheet, Text, ScrollView, View } from "react-native";
import { Card, Divider } from "react-native-paper";

export default function Home() {
  return (
    <ScrollView>
      <Text style={styles.homeHeader}>{`Where do you want \n to go?`}</Text>

      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.miniText}>From</Text>

          <Divider />

          <Text style={styles.miniText}>To</Text>
        </Card.Content>
      </Card>
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
});
