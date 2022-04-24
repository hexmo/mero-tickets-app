import { StyleSheet, Text, View, Pressable, Alert } from "react-native";
import React, { useState, useEffect } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { signOut } from "../services/authServices";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ProfileCard = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");

  useEffect(async () => {
    const jsonValue = await AsyncStorage.getItem("@storage_Key");
    const authHeaders = JSON.parse(jsonValue);
    setEmail(authHeaders["uid"]);
  }, []);

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
        {email}
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
