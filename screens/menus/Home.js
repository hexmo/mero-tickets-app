import React, { useState } from "react";
import { StyleSheet, Text, ScrollView, View } from "react-native";
import { Card, Divider } from "react-native-paper";
import ModalSelector from "react-native-modal-selector";

export default function Home() {
  let index = 0;
  const locations = [
    { key: index++, label: "Kathmandu" },
    { key: index++, label: "Pokhara" },
    { key: index++, label: "Birtamod" },
    { key: index++, label: "Illam" },
    { key: index++, label: "Birgunj" },
    { key: index++, label: "Solukhumbu" },
    { key: index++, label: "Biratnagar" },
    { key: index++, label: "Butwal" },
    { key: index++, label: "Ithari" },
    { key: index++, label: "Nepalgunj" },
    { key: index++, label: "Dang" },
    { key: index++, label: "Kailali" },
  ];

  const [destination, setDestination] = React.useState({
    start: "Kathmandu",
    end: "Pokhara",
    date: "",
  });

  return (
    <ScrollView>
      <Text style={styles.homeHeader}>{`Where do you want \n to go?`}</Text>

      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.miniText}>From</Text>
          <ModalSelector
            data={locations}
            cancelText={"Cancel"}
            onChange={(option) => {
              setDestination({ ...destination, start: option.label });
            }}
          >
            <Text style={styles.journey}>{destination.start}</Text>
          </ModalSelector>

          <Divider style={{ marginVertical: 10 }} />

          <Text style={styles.miniText}>To</Text>
          <ModalSelector
            cancelText={"Cancel"}
            data={locations}
            onChange={(option) => {
              setDestination({ ...destination, end: option.label });
            }}
          >
            <Text style={styles.journey}>{destination.end}</Text>
          </ModalSelector>
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
  journey: {
    fontSize: 24,
    fontFamily: "Lato_700Bold",
    color: "#23252C",
    marginTop: 5,
  },
  selector: {
    backgroundColor: "#fff",
  },
});
