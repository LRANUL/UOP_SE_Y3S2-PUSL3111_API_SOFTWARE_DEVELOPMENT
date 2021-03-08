import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  Text,
  TextInput
} from "react-native";

function Login1(props) {
  return (
    <View style={styles.container}>
      <StatusBar animated />
      <Image
        source={require("../assets/images/logo.jpeg")}
        resizeMode="cover"
        style={styles.logo}
      ></Image>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.register2}>Register</Text>
      </TouchableOpacity>
      <Text style={styles.covTrackRegister}>CovTrack Register</Text>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Register")}
        style={styles.registerbtn}
      >
        <Text style={styles.registertxt}>Already have an account ?</Text>
      </TouchableOpacity>
      <View style={styles.group}>
        <TextInput
          placeholder="First Name"
          clearButtonMode="unless-editing"
          keyboardType="default"
          autoFocus={true}
          style={styles.emailAddress1}
        ></TextInput>
        <TextInput
          placeholder="Last Name"
          clearButtonMode="unless-editing"
          keyboardType="numeric"
          autoFocus={false}
          dataDetector="phoneNumber"
          style={styles.emailAddress2}
        ></TextInput>
        <TextInput
          placeholder="Mobile Number"
          clearButtonMode="unless-editing"
          keyboardType="numeric"
          autoFocus={false}
          dataDetector="phoneNumber"
          style={styles.emailAddress3}
        ></TextInput>
        <TextInput
          placeholder="NIC"
          clearButtonMode="unless-editing"
          keyboardType="default"
          autoFocus={false}
          style={styles.emailAddress4}
        ></TextInput>
        <TextInput
          placeholder="Email Address"
          dataDetector="all"
          clearButtonMode="unless-editing"
          secureTextEntry={true}
          autoFocus={false}
          style={styles.emailAddress5}
        ></TextInput>
        <TextInput
          placeholder="Password"
          clearButtonMode="unless-editing"
          keyboardType="email-address"
          autoFocus={false}
          secureTextEntry={true}
          style={styles.emailAddress6}
        ></TextInput>
        <TextInput
          placeholder="Confirm Password"
          clearButtonMode="unless-editing"
          keyboardType="email-address"
          autoFocus={false}
          secureTextEntry={true}
          style={styles.textInput}
        ></TextInput>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#000000"
  },
  logo: {
    width: 95,
    height: 86,
    borderRadius: 87,
    borderWidth: 0,
    borderColor: "#000000",
    marginTop: 35,
    alignSelf: "center"
  },
  button: {
    height: 57,
    backgroundColor: "rgba(74,144,226,0.7)",
    width: 265,
    borderRadius: 17,
    marginTop: 506,
    alignSelf: "center"
  },
  register2: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    textAlign: "center",
    fontSize: 25,
    marginTop: 11,
    alignSelf: "center"
  },
  covTrackRegister: {
    fontFamily: "roboto-700",
    color: "rgba(0,0,0,1)",
    fontSize: 35,
    marginTop: -543,
    alignSelf: "center"
  },
  registerbtn: {
    width: 683,
    height: 32,
    marginTop: 516,
    alignSelf: "center"
  },
  registertxt: {
    fontFamily: "roboto-regular",
    color: "#121212",
    textDecorationLine: "underline",
    marginTop: 10,
    alignSelf: "center"
  },
  group: {
    width: 1035,
    height: 341,
    justifyContent: "space-between",
    marginTop: -512,
    alignSelf: "center"
  },
  emailAddress1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 42,
    width: 1035,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 10,
    textAlign: "center"
  },
  emailAddress2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 42,
    width: 1033,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 10,
    textAlign: "center"
  },
  emailAddress3: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 42,
    width: 1035,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 10,
    textAlign: "center"
  },
  emailAddress4: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 42,
    width: 1035,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 10,
    textAlign: "center"
  },
  emailAddress5: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 42,
    width: 1035,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 10,
    textAlign: "center"
  },
  emailAddress6: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 42,
    width: 1035,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 10,
    textAlign: "center"
  },
  textInput: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 42,
    width: 1035,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 10,
    textAlign: "center"
  }
});

export default Login1;
