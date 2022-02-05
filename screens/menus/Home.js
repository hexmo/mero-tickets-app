import React, { useState } from "react";
import { StyleSheet, Text, ScrollView, View, Pressable } from "react-native";
import { Card, Divider, Button } from "react-native-paper";
import ModalSelector from "react-native-modal-selector";
import DateTimePickerModal from "react-native-modal-datetime-picker";

export default function Home() {
  let index = 0;

  let tomorrowsDate = new Date();
  tomorrowsDate.setDate(tomorrowsDate.getDate() + 1);

  const locations = [
    { key: index++, label: "Kathmandu" },
    { key: index++, label: "Pokhara" },
    { key: index++, label: "Birtamod" },
    { key: index++, label: "Illam" },
    { key: index++, label: "Birgunj" },
    { key: index++, label: "Solukhumbu" },
    { key: index++, label: "Biratnagar" },
    { key: index++, label: "Butwal" },
    { key: index++, label: "Ithari" },
    { key: index++, label: "Nepalgunj" },
    { key: index++, label: "Dang" },
    { key: index++, label: "Kailali" },
  ];

  const [destination, setDestination] = React.useState({
    start: "Kathmandu",
    end: "Pokhara",
    date: getFormattedDate(tomorrowsDate),
  });

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const showDatePicker = () => setDatePickerVisibility(true);
  const hideDatePicker = () => setDatePickerVisibility(false);

  const handleConfirm = (date) => {
    setDestination({
      ...destination,
      date: getFormattedDate(date),
    });
    hideDatePicker();
  };

  return (
    <ScrollView>
      <Text style={styles.homeHeader}>{`Where do you want \n to go?`}</Text>

      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.miniText}>From</Text>
          <ModalSelector
            data={locations}
            cancelText={"Cancel"}
            onChange={(option) => {
              setDestination({ ...destination, start: option.label });
            }}
          >
            <Text style={styles.journey}>{destination.start}</Text>
          </ModalSelector>

          <Divider style={{ marginVertical: 10 }} />

          <Text style={styles.miniText}>To</Text>
          <ModalSelector
            cancelText={"Cancel"}
            data={locations}
            onChange={(option) => {
              setDestination({ ...destination, end: option.label });
            }}
          >
            <Text style={styles.journey}>{destination.end}</Text>
          </ModalSelector>

          <Divider style={{ marginVertical: 10 }} />

          <Text style={styles.miniText}>Date</Text>

          <View>
            <Pressable onPress={showDatePicker}>
              <Text style={styles.journey}>{destination.date}</Text>
            </Pressable>
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              onConfirm={handleConfirm}
              mode="date"
              onCancel={hideDatePicker}
              date={tomorrowsDate}
            />
          </View>

        </Card.Content>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  homeHeader: {
    marginTop: 10,
    marginHorizontal: 20,
    fontSize: 36,
    fontFamily: "Lato_900Black",
    color: "#22242B",
  },
  card: {
    margin: 20,
    padding: 10,
    borderRadius: 20,
  },
  miniText: {
    fontFamily: "Lato_400Regular",
    color: "#BDBEC3",
  },
  journey: {
    fontSize: 24,
    fontFamily: "Lato_700Bold",
    color: "#23252C",
    marginTop: 5,
  },
  selector: {
    backgroundColor: "#fff",
  },
});

const getFormattedDate = (date) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return `${months[date.getMonth()]} ${date.getDate()}`;
};
