import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Alert, Pressable } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { signUp } from "../../services/authServices";
import logo from "../../assets/logo.png";

let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

const SignUp = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const handleSignUpPressed = () => {
    if (validateEmail() && validatePassword() && validatePassword2()) {
      setLoading(true);
      
      signUp(email, password)
        .then((res) => {
          // Alert.alert("Success", JSON.stringify(res.data));
          Alert.alert(
            "Success",
            "You have successfully created an account. Please login to continue.",
            [
              {
                text: "Login",
                onPress: () => navigation.replace("Login"),
              },
            ]
          );
          // navigation.replace("Login");
        })
        .catch((error) => {
          Alert.alert(
            "Error",
            JSON.stringify(error.response.data.errors.full_messages[0])
          );
        });

      setLoading(false);
    }
  };

  const validateEmail = () => {
    if (email == "") {
      Alert.alert("Email can't be blank");
      return false;
    } else if (reg.test(email) === false) {
      Alert.alert("Invalid email format.");
      return false;
    }
    return true;
  };

  const validatePassword = () => {
    if (password == "") {
      Alert.alert("Password can't be blank.");
      return false;
    } else if (password.length < 6) {
      Alert.alert("Password should be at least 6 characters long.");
      return false;
    }
    return true;
  };

  const validatePassword2 = () => {
    if (password !== password2) {
      Alert.alert("Both passwords are not same.");
      return false;
    }
    return true;
  };

  return (
    <View style={styles.main}>
      <Image source={logo} style={styles.logo} />

      <TextInput
        style={styles.input}
        label="Email"
        mode="outlined"
        keyboardType="email-address"
        defaultValue={email}
        onChangeText={(email) => setEmail(email)}
        left={<TextInput.Icon name="email" />}
      />

      <TextInput
        style={styles.input}
        label="Password"
        mode="outlined"
        defaultValue={password}
        onChangeText={(password) => setPassword(password)}
        left={<TextInput.Icon name="lock" />}
        secureTextEntry
      />

      <TextInput
        style={styles.input}
        label="Confirm password"
        mode="outlined"
        defaultValue={password2}
        onChangeText={(password) => setPassword2(password)}
        left={<TextInput.Icon name="lock" />}
        secureTextEntry
      />

      <Button
        style={styles.button}
        mode="contained"
        disabled={loading}
        onPress={handleSignUpPressed}
      >
        {loading ? "Loading..." : "Sign Up"}
      </Button>

      <Pressable onPress={() => navigation.navigate("Login")}>
        <Text style={styles.text}>Already have account? Sign In.</Text>
      </Pressable>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  main: {
    padding: 10,
    flex: 1,
    justifyContent: "center",
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 5,
    marginBottom: 30,
    alignSelf: "center",
  },
  input: {
    marginVertical: 5,
  },
  button: {
    marginVertical: 5,
    paddingVertical: 10,
  },
  text: {
    marginTop: 20,
    textAlign: "center",
    color: "#e44c34",
  },
});
