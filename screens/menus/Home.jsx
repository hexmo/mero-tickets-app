import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Pressable,
  Image,
} from "react-native";
import { Card, Divider, Button } from "react-native-paper";
import ModalSelector from "react-native-modal-selector";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import promotion from "../../assets/promotion.png";

export default function Home({ navigation }) {
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
    hideDatePicker();
    setDestination({
      ...destination,
      date: getFormattedDate(date),
    });
  };

  const onPressContinue = () => {
    navigation.navigate("SearchResults", { destination });
  };

  return (
    <ScrollView style={{ marginBottom: 40 }}>
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

          <Button
            style={styles.continueButton}
            mode="contained"
            uppercase={false}
            labelStyle={{ fontSize: 20, fontFamily: "Lato_700Bold" }}
            onPress={onPressContinue}
          >
            Continue
          </Button>
        </Card.Content>
      </Card>
      <Image style={styles.promotion} source={promotion} resizeMode="cover" />
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
    marginTop: 20,
    marginHorizontal: 20,
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
  continueButton: {
    backgroundColor: "#e44c34",
    marginTop: 30,
    borderRadius: 10,
    padding: 5,
  },
  promotion: {
    margin: 20,
    borderRadius: 20,
    width: "90%",
    height: undefined,
    aspectRatio: 1,
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
