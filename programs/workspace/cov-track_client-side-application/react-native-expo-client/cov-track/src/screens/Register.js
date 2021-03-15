import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  Text,
  TextInput,
  Alert
} from "react-native";
import UserService from '../services/userService';

let firstName,
  lastName,
  mobileNumber,
  emailAddress,
  nic,
  password,
  confirmPassword;

function Register(props) {
  return (
    <View style={styles.container}>
      <StatusBar animated />
      <Image
        source={require("../assets/images/logo.jpeg")}
        resizeMode="cover"
        style={styles.logo}
      ></Image>
      <TouchableOpacity style={styles.registerbtn}
        onPress={() => {
          let registrationData = {
            firstName,
            lastName,
            mobileNumber,
            nic,
            emailAddress,
          }
          console.log(registrationData)
          UserService.register(registrationData)
            .then(response => {
              console.log(response.data);
              Alert.alert(
                "Registration Successful",
                "You have registered successfully, login now. " + response.data,
                [
                  {
                    text: "Close",
                  },
                  { text: "Login", onPress: () => props.navigation.navigate("Login") }
                ],
                { cancelable: false }
              );
            })
            .catch(error => {
              console.log(error);
            })
        }
        }>
        <Text style={styles.registerbtnTxt}>Register</Text>
      </TouchableOpacity>
      <Text style={styles.covTrackRegister}>CovTrack Register</Text>
      <TouchableOpacity
        style={styles.loginbtn}
      >
        <Text
          onPress={() => props.navigation.navigate("Login")}
          style={styles.registertxt}
        >
          Already have an account ?
        </Text>
      </TouchableOpacity>
      <View style={styles.group}>
        <TextInput
          placeholder="First Name"
          clearButtonMode="unless-editing"
          keyboardType="default"
          autoFocus={true}
          style={styles.firstName}
          value={firstName}
          onChangeText={(value) => {
            firstName = value;
          }}
        ></TextInput>
        <TextInput
          placeholder="Last Name"
          clearButtonMode="unless-editing"
          autoFocus={false}
          style={styles.lastName}
          value={lastName}
          onChangeText={(value) => {
            lastName = value;
          }}
        ></TextInput>
        <TextInput
          placeholder="Mobile Number"
          clearButtonMode="unless-editing"
          keyboardType="numeric"
          autoFocus={false}
          dataDetector="phoneNumber"
          style={styles.mobileNumber}
          value={mobileNumber}
          onChangeText={(value) => {
            mobileNumber = value;
          }}
        ></TextInput>
        <TextInput
          placeholder="NIC"
          clearButtonMode="unless-editing"
          keyboardType="default"
          autoFocus={false}
          style={styles.nic}
          value={nic}
          onChangeText={(value) => {
            nic = value;
          }}
        ></TextInput>
        <TextInput
          placeholder="Email Address"
          dataDetector="all"
          clearButtonMode="unless-editing"
          autoFocus={false}
          style={styles.emailAddress}
          value={emailAddress}
          onChangeText={(value) => {
            emailAddress = value;
          }}
        ></TextInput>
        <TextInput
          placeholder="Password"
          clearButtonMode="unless-editing"
          autoFocus={false}
          secureTextEntry={true}
          style={styles.password}
          value={password}
          onChangeText={(value) => {
            password = value;
          }}
        ></TextInput>
        <TextInput
          placeholder="Confirm Password"
          clearButtonMode="unless-editing"
          autoFocus={false}
          secureTextEntry={true}
          style={styles.confirmPassword}
          value={confirmPassword}
          onChangeText={(value) => {
            if (value) {
              confirmPassword = value;
            }
          }
          }
        ></TextInput>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#000000",
    backgroundColor: "#fff",
    borderRadius: 20
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
  registerbtn: {
    height: 48,
    backgroundColor: "rgba(74,144,226,0.7)",
    width: 265,
    borderRadius: 17,
    marginTop: 420,
    alignSelf: "center"
  },
  registerbtnTxt: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    textAlign: "center",
    fontSize: 25,
    marginTop: 9,
    alignSelf: "center"
  },
  covTrackRegister: {
    fontFamily: "roboto-700",
    color: "rgba(0,0,0,1)",
    fontSize: 35,
    marginTop: -453,
    alignSelf: "center"
  },
  loginbtn: {
    width: 179,
    height: 27,
    marginTop: 423,
    alignSelf: "center"
  },
  registertxt: {
    fontFamily: "roboto-regular",
    color: "#121212",
    textDecorationLine: "underline",
    marginTop: 9,
    alignSelf: "center"
  },
  group: {
    width: 272,
    height: 284,
    justifyContent: "space-between",
    marginTop: -427,
    alignSelf: "center"
  },
  firstName: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 35,
    width: 272,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 10,
    textAlign: "center"
  },
  lastName: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 35,
    width: 271,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 10,
    textAlign: "center"
  },
  mobileNumber: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 35,
    width: 272,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 10,
    textAlign: "center"
  },
  nic: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 35,
    width: 272,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 10,
    textAlign: "center"
  },
  emailAddress: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 35,
    width: 272,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 10,
    textAlign: "center"
  },
  password: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 35,
    width: 272,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 10,
    textAlign: "center"
  },
  confirmPassword: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 35,
    width: 272,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 10,
    textAlign: "center"
  }
});

export default Register;
