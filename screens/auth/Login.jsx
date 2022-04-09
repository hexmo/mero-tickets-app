import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Pressable, Alert } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { login } from "../../services/authServices";
import { removeData } from "../../services/apiClient";

import logo from "../../assets/logo.png";

let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

const Login = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignInPressed = () => {
    if (validateEmail() && validatePassword()) {
      setLoading(true);
      login(email, password)
        .then((res) => {
          // Alert.alert("Success", JSON.stringify(res.data));
          navigation.replace("TabNav");
        })
        .catch((error) => {
          Alert.alert("Error", JSON.stringify(error.response.data.errors[0]));
          removeData();
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

      <Button
        style={styles.button}
        mode="contained"
        onPress={handleSignInPressed}
        disabled={loading}
      >
        {loading ? "Loading" : "Sign In"}
      </Button>

      <Pressable onPress={() => navigation.navigate("SignUp")}>
        <Text style={styles.text}>Do not have account? Sign Up.</Text>
      </Pressable>
    </View>
  );
};

export default Login;

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
