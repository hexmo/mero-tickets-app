import React from 'react';
import { StyleSheet, Text, View, Image, Alert, Pressable } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

import logo from '../../assets/logo.png';

const SignUp = ({ navigation }) => {

  const handleSignUpPressed = () => {
    Alert.alert('Hello');
  };

  return (
    <View style={styles.main}>
      <Image
        source={logo}
        style={styles.logo}
      />

      <TextInput
        style={styles.input}
        label="Name"
        mode="outlined"
        left={<TextInput.Icon name="account" />}
      />

      <TextInput
        style={styles.input}
        label="Email"
        mode="outlined"
        left={<TextInput.Icon name="email" />}
      />

      <TextInput
        style={styles.input}
        label="Password"
        mode="outlined"
        left={<TextInput.Icon name="lock" />}
        secureTextEntry
      />

      <Button
        style={styles.button}
        mode='contained'
        onPress={handleSignUpPressed}
      >Sign Up</Button>

      <Pressable onPress={() => navigation.navigate('Login')}>
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
    justifyContent: 'center'
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 5,
    marginBottom: 30,
    alignSelf: 'center',
  },
  input: {
    marginVertical: 5,
  },
  button: {
    marginVertical: 5,
    paddingVertical: 10
  },
  text: {
    marginTop: 20,
    textAlign: 'center',
    color: '#e44c34'
  }
});
