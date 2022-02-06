import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { Card, Subheading } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

import SearchResult from "../../components/SearchResult";

const SearchResults = ({ route, navigation }) => {
  const { destination } = route.params;
  return (
    <ScrollView style={{ marginBottom: 40 }}>
      <Card style={styles.journeyCard}>
        <Card.Content style={styles.journeyContent}>
          <Text style={styles.joruneyText}>{destination.start}</Text>
          <Ionicons name="arrow-forward" size={24} color="#e44c34" />
          <Text style={styles.joruneyText}>{destination.end}</Text>
        </Card.Content>
      </Card>

      <View style={{ margin: 10 }}>
        <Subheading>{`Showing results for ${destination.date}.`}</Subheading>
        <SearchResult />
        <SearchResult />
        <SearchResult />
        <SearchResult />
        <SearchResult />
        <SearchResult />
      </View>
    </ScrollView>
  );
};

export default SearchResults;

const styles = StyleSheet.create({
  journeyCard: {
    margin: 10,
    marginBottom: 0,
    borderRadius: 10,
  },
  joruneyText: {
    fontFamily: "Lato_700Bold",
    fontSize: 20,
  },
  journeyContent: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
