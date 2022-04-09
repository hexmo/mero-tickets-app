import { StyleSheet, Text, View, ScrollView, Alert } from "react-native";
import React, { useState, useEffect } from "react";
import { Card, Subheading } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { getVehicles } from "../../services/searchService";

import SearchResult from "../../components/SearchResult";

const SearchResults = ({ route, navigation }) => {
  const { destination } = route.params;

  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState([]);

  useEffect(() => {
    getVehicles(destination.start, destination.end, destination.realDate)
      .then((res) => {
        setResults(res.data);
        // Alert.alert("Success", JSON.stringify(res.data));
      })
      .catch((error) => {
        Alert.alert("Error", JSON.stringify(error.response));
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <ScrollView>
      <Card style={styles.journeyCard}>
        <Card.Content style={styles.journeyContent}>
          <Text style={styles.joruneyText}>{destination.start}</Text>
          <Ionicons name="arrow-forward" size={24} color="#e44c34" />
          <Text style={styles.joruneyText}>{destination.end}</Text>
        </Card.Content>
      </Card>

      <View style={{ margin: 10 }}>
        <Subheading>{`Showing results for ${destination.date}.`}</Subheading>

        {loading ? (
          <Subheading>Loading........</Subheading>
        ) : (
          <>
            {results.map((res) => (
              <SearchResult
                navigation={navigation}
                key={res.id}
                name={res.name}
                facility={res.facility}
                time={res.journey_time}
              />
            ))}

            {results.length > 0 ? (
              <></>
            ) : (
              <Subheading>No results found.</Subheading>
            )}
          </>
        )}
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
