import { StyleSheet, View, Text } from "react-native";
import React from "react";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { signOut } from "../../services/authServices";
import PreviousBookings from "../../components/PreviousBookings";

const Profile = ({ navigation }) => {
  const signOutHandler = () => {
    signOut()
      .then((res) => {
        navigation.replace("Login");
      })
      .catch((error) => {
        Alert.alert("Error", JSON.stringify(error.response));
      });
  };

  return (
    <View style={{}}>
      <Button
        mode="contained"
        style={styles.continueButton}
        onPress={signOutHandler}
      >
        Sign Out
      </Button>

      <Card style={styles.card}>
        <Text style={{ fontSize: 22, fontFamily: "Lato_700Bold" }}>
          Previous Bookings
        </Text>
      </Card>
      <PreviousBookings />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  continueButton: {
    backgroundColor: "#e44c34",
    margin: 10,
    borderRadius: 10,
  },

  card: {
    backgroundColor: "#fff",
    margin: 10,
    marginVertical: 5,
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
  },
});
