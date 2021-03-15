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
      <View style={styles.group}>
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
      </View>
      <Text style={styles.logotxt}>CovTrack Login</Text>
      <View style={styles.registerbtnStack}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Register")}
          style={styles.registerbtn}
        >
          <Text style={styles.registertxt}>No account register with us</Text>
        </TouchableOpacity>      
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
    width: 74,
    height: 71,
    borderRadius: 100,
    borderWidth: 0,
    borderColor: "#000000",
    marginTop: 31,
    alignSelf: "center"
  },
  button: {
    height: 55,
    backgroundColor: "rgba(126,211,33,0.7)",
    width: 265,
    borderRadius: 17,
    marginTop: 460,
    alignSelf: "center"
  },
  logintxt: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    textAlign: "center",
    fontSize: 25,
    marginTop: 9,
    alignSelf: "center"
  },
  group: {
    width: 278,
    height: 124,
    justifyContent: "space-between",
    alignItems: "stretch",
    marginTop: -425,
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
    textAlign: "center"
  },
  passwordfield: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 48,
    width: 278,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 10,
    textAlign: "center"
  },
  logotxt: {
    fontFamily: "roboto-700",
    color: "rgba(0,0,0,1)",
    fontSize: 35,
    marginTop: -222,
    alignSelf: "center"
  },
  registerbtn: {
    top: 0,
    width: 179,
    height: 31,
    position: "absolute",
    left: 0
  },
  registertxt: {
    fontFamily: "roboto-regular",
    color: "#121212",
    textDecorationLine: "underline",
    marginTop: 9,
    alignSelf: "center"
  },
  registerbtnStack: {
    width: 181,
    height: 31,
    marginTop: 495,
    marginLeft: 89
  }
});

export default Login;
