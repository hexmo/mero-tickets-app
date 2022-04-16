import { StyleSheet, View } from "react-native";
import React from "react";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { signOut } from "../../services/authServices";

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
    <View style={{ marginHorizontal: 20 }}>
      <Button
        mode="contained"
        style={styles.continueButton}
        onPress={signOutHandler}
      >
        Sign Out
      </Button>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  continueButton: {
    backgroundColor: "#e44c34",
    marginTop: 30,
    borderRadius: 10,
  },
});
