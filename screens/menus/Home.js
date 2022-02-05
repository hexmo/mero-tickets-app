import React from "react";
import { StyleSheet, Text, ScrollView } from "react-native";

export default function Home() {
  return (
    <ScrollView>
      <Text style={styles.homeHeader}>{`Where do you want \n to go?`}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  homeHeader: {
    marginTop: 10,
    marginHorizontal: 20,
    fontSize: 36,
    fontFamily: "Lato_900Black",
    color: "#343434",
  },
});
