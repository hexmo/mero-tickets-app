import { StyleSheet, Text, View, Pressable, Alert } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { signOut } from "../services/authServices";
import { useNavigation } from "@react-navigation/native";

const ProfileCard = () => {
  const navigation = useNavigation();

  const signOutHandler = () => {
    Alert.alert("Confirm sign out", "Do you really want to sign out?", [
      {
        text: "Cancel",
        onPress: () => Alert.alert("Signout cancelled."),
        style: "cancel",
      },
      {
        text: "Sign Out",
        onPress: () => {
          signOut()
            .then((res) => {
              navigation.replace("Login");
            })
            .catch((error) => {
              Alert.alert("Error", JSON.stringify(error.response));
            });
        },
      },
    ]);
  };

  return (
    <View style={styles.card}>
      <Text
        style={{
          marginLeft: 15,
          fontSize: 18,
          fontFamily: "Lato_400Regular",
        }}
      >
        random@gmail.com
      </Text>
      <Pressable style={styles.buttonPressable} onPress={signOutHandler}>
        <MaterialCommunityIcons
          name="logout-variant"
          size={40}
          color="white"
          style={{ padding: 2 }}
        />
      </Pressable>
    </View>
  );
};

export default ProfileCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    margin: 10,
    borderRadius: 10,
    padding: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  buttonPressable: {
    backgroundColor: "#e44c34",
    borderRadius: 10,
  },
});
