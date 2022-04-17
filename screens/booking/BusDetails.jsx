import { StyleSheet, Text, View, Alert, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import { getVechicleDetails } from "../../services/searchService";
import { SliderBox } from "react-native-image-slider-box";
import { Button, Subheading, Title, Paragraph } from "react-native-paper";
import { Entypo } from "@expo/vector-icons";

const BusDetails = ({ route, navigation }) => {
  const { bookingId, vehicleId } = route.params;

  const [loading, setLoading] = useState(true);
  const [vehicle, setVehicle] = useState();

  const handleContinueBooking = () => {
    navigation.navigate("SeatSelector", {
      bookingId,
      vehicleId,
    });
  };

  useEffect(() => {
    // console.log(route.params);

    getVechicleDetails(vehicleId)
      .then((res) => {
        setVehicle(res.data);
        // Alert.alert("Success", JSON.stringify(res.data));
      })
      .catch((error) => {
        Alert.alert("Error", JSON.stringify(error.response));
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <>
      <ScrollView>
        <SliderBox images={vehicle.images} dotColor="#e44c34" circleLoop />
        <View style={styles.detailsSection}>
          <Title style={{ fontFamily: "Lato_700Bold", fontSize: 24 }}>
            {vehicle.name}
          </Title>
          <View style={{ alignItems: "baseline" }}>
            <Text
              style={{
                marginVertical: 10,
                padding: 5,
                paddingHorizontal: 10,
                backgroundColor: "#111",
                color: "#fff",
                borderRadius: 4,
              }}
            >
              <Entypo name="old-mobile" size={14} color="white" />
              {vehicle.phone}
            </Text>
          </View>
          <Paragraph
            style={{
              fontFamily: "Lato_400Regular",
              fontSize: 16,
              marginVertical: 10,
            }}
          >
            {vehicle.description}
          </Paragraph>
          {/* <Paragraph>{JSON.stringify(vehicle)}</Paragraph> */}
        </View>
      </ScrollView>
      <Button
        mode="contained"
        style={styles.button}
        onPress={handleContinueBooking}
      >
        Continue Booking
      </Button>
    </>
  );
};

export default BusDetails;

const styles = StyleSheet.create({
  detailsSection: {
    margin: 15,
  },
  button: {
    padding: 5,
    margin: 10,
    backgroundColor: "#e44c34",
  },
});
