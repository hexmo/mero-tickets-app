import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TabNav from "./TabNav";
import Login from "../screens/auth/Login";
import SignUp from "../screens/auth/SignUp";

import SearchResults from "../screens/booking/SearchResults";
import SeatSelector from "../screens/booking/SeatSelector";
import Booking from "../screens/booking/Booking";
import { isLoggedIn } from "../services/authServices";

import { removeData } from "../services/apiClient";

const Stack = createNativeStackNavigator();

const MainNav = () => {
  const [loading, setLoading] = useState(true);
  const [authStatus, setAuthStatus] = useState(false);

  useEffect(() => {
    isLoggedIn()
      .then((res) => {
        setAuthStatus(true);
      })
      .catch((error) => {
        setAuthStatus(false);
      })
      .finally(() => {
        setLoading(false);
        removeData();
      });
  }, []);

  if (loading) return <></>;

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {authStatus ? (
          <>
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
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
          </>
        ) : (
          <>
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
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNav;

const styles = StyleSheet.create({});
