import { StyleSheet, View, Image, Pressable, Alert } from "react-native";
import { useState } from "react";
import { Title, Caption, Text, TextInput } from "react-native-paper";
import { Modal, Portal, Button, Subheading } from "react-native-paper";
import { AirbnbRating } from "react-native-ratings";
import { review_present, post_review } from "../services/reviewServices";

const OldTicket = ({ ticket, booking, vehicle }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [rating, setRating] = useState(3);
  const [review, setReview] = useState("");
  const [alreadyReviewed, setAlreadyReviewed] = useState(true);

  // handlers
  const handleReview = () => {
    Alert.alert(
      `Review ${vehicle.name}`,
      "Do you want to rate and review your travel with this transport provider?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Review cancelled."),
        },
        {
          text: "Add Review",
          onPress: () => {
            handleReviewModal();
          },
        },
      ]
    );
  };

  const handleReviewModal = () => {
    review_present(vehicle.id)
      .then((res) => {
        // Alert.alert("", JSON.stringify(res.data));
        setAlreadyReviewed(res.data.reviewed);

        if (res.data.reviewed) {
          Alert.alert("", "You have already reviewed this vehicle.");
        } else {
          setModalVisible(true);
        }
      })
      .catch((error) => {
        Alert.alert("Error", JSON.stringify(error.response));
      });
  };

  const handlePostReview = () => {
    if (review.length < 10) {
      Alert.alert(
        "Validation Error",
        "You should write at least 20 characters for review."
      );

      return;
    }

    post_review(vehicle.id, rating, review)
      .then((res) => {
        setAlreadyReviewed(true);
        setModalVisible(false);
        Alert.alert("Success", "Successfully posted review");
      })
      .catch((error) => {
        Alert.alert("Error", JSON.stringify(error.response));
      });
  };

  return (
    <Pressable style={styles.ticket} onPress={handleReview}>
      <View style={styles.tickerDetails}>
        <Title>{vehicle.name}</Title>
        <Caption>
          {booking.start_location.toUpperCase()} -{" "}
          {booking.end_location.toUpperCase()}
        </Caption>
        <Text>
          {ticket.passenger_name} ({ticket.passenger_contact})
        </Text>
        <Text>Seats: {ticket.seats.toUpperCase()}</Text>
        <Text style={{ fontFamily: "Lato_700Bold", marginVertical: 3 }}>
          {vehicle.license_plate}
        </Text>
        <Text>
          Time: {booking.journery_date}, {booking.journey_time.slice(11, 16)}
        </Text>
      </View>

      {/* https://stackoverflow.com/questions/34180629/react-native-fit-image-in-containing-view-not-the-whole-screen-size */}
      <View
        style={{
          width: "35%",
          justifyContent: "center",
          borderEndColor: "#111",
          borderLeftWidth: 1,
        }}
      >
        <Image
          source={require("../assets/void.png")}
          style={{
            width: "100%",
            height: undefined,
            aspectRatio: 1,
          }}
        />
      </View>
      <Portal>
        <Modal
          visible={modalVisible}
          onDismiss={() => setModalVisible(false)}
          contentContainerStyle={styles.containerStyle}
        >
          <Subheading>Review your ride</Subheading>
          <AirbnbRating
            count={5}
            defaultRating={rating}
            onFinishRating={(r) => setRating(r)}
            size={30}
            reviewSize={18}
            selectedColor={"#e44c34"}
            reviewColor={"#e44c34"}
          />
          <TextInput
            label="Review"
            mode="outlined"
            defaultValue={review}
            onChangeText={(r) => setReview(r)}
            multiline={true}
          />
          <Button
            style={styles.button}
            mode="contained"
            onPress={handlePostReview}
          >
            Review
          </Button>
        </Modal>
      </Portal>
    </Pressable>
  );
};

export default OldTicket;

const styles = StyleSheet.create({
  ticket: {
    borderRadius: 5,
    margin: 10,
    marginVertical: 5,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tickerDetails: {
    padding: 5,
  },
  containerStyle: {
    backgroundColor: "white",
    borderRadius: 5,
    margin: 10,
    padding: 10,
  },
  button: {
    marginTop: 20,
    padding: 3,
    backgroundColor: "red",
  },
});
