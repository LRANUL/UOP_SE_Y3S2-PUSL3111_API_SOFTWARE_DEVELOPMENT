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

function Login(props) {
  return (
    <View style={styles.container}>
      <StatusBar animated />
      <Image
        source={require("../assets/images/logo.jpeg")}
        resizeMode="cover"
        style={styles.logo}
      ></Image>
      <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate("Dashboard")}>
        <Text style={styles.logintxt}>Login</Text>
      </TouchableOpacity>
      <TextInput
        placeholder="email address"
        clearButtonMode="unless-editing"
        keyboardType="email-address"
        autoFocus={true}
        style={styles.emailfield}
      ></TextInput>
      <TextInput
        placeholder="Password"
        dataDetector="all"
        clearButtonMode="unless-editing"
        secureTextEntry={true}
        style={styles.passwordfield}
      ></TextInput>
      <Text style={styles.logotxt}>CovTrack Login</Text>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Register")}
        style={styles.registerbtn}
      >
        <Text style={styles.registertxt}>No account register with us</Text>
      </TouchableOpacity>
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
    backgroundColor: "rgba(126,211,33,0.7)",
    width: 265,
    borderRadius: 17,
    marginTop: 506,
    alignSelf: "center"
  },
  logintxt: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    textAlign: "center",
    fontSize: 25,
    marginTop: 11,
    alignSelf: "center"
  },
  emailfield: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 48,
    width: 278,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 10,
    textAlign: "center",
    marginTop: -325,
    alignSelf: "center"
  },
  passwordfield: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 48,
    width: 278,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 10,
    textAlign: "center",
    marginTop: 32,
    alignSelf: "center"
  },
  logotxt: {
    fontFamily: "roboto-700",
    color: "rgba(0,0,0,1)",
    fontSize: 35,
    marginTop: -346,
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
  }
});

export default Login;
