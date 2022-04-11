import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TabNav from "./TabNav";
import Login from "../screens/auth/Login";
import SignUp from "../screens/auth/SignUp";

import SearchResults from "../screens/booking/SearchResults";
import SeatSelector from "../screens/booking/SeatSelector";
import Booking from "../screens/booking/Booking";

const Stack = createNativeStackNavigator();

const MainNav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="TabNav" component={TabNav} />
        <Stack.Screen
          name="SearchResults"
          component={SearchResults}
          options={{ title: "Search Results", headerShown: true }}
        />
        <Stack.Screen
          name="SeatSelector"
          component={SeatSelector}
          options={{ title: "Select Seats", headerShown: true }}
        />
        <Stack.Screen
          name="Booking"
          component={Booking}
          options={{ title: "Traveller Details", headerShown: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNav;

const styles = StyleSheet.create({});
