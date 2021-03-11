import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  Text,
  TextInput,
} from "react-native";

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
      <TouchableOpacity style={styles.registerbtn}>
        <Text style={styles.registerbtnTxt}>Register</Text>
      </TouchableOpacity>
      <Text style={styles.covTrackRegister}>CovTrack Register</Text>
      <TouchableOpacity
        // onPress={() =>
        //   createUser({
        //     firstName,
        //     lastName,
        //     mobileNumber,
        //     nic,
        //     emailAddress,
        //   })
        // }
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
            if(value){
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
  },
  logo: {
    width: 95,
    height: 91,
    borderRadius: 87,
    borderWidth: 0,
    borderColor: "#000000",
    marginTop: 37,
    alignSelf: "center",
  },
  registerbtn: {
    height: 61,
    backgroundColor: "rgba(74,144,226,0.7)",
    width: 265,
    borderRadius: 17,
    marginTop: 535,
    alignSelf: "center",
  },
  registerbtnTxt: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    textAlign: "center",
    fontSize: 25,
    marginTop: 12,
    alignSelf: "center",
  },
  covTrackRegister: {
    fontFamily: "roboto-700",
    color: "rgba(0,0,0,1)",
    fontSize: 35,
    marginTop: -575,
    alignSelf: "center",
  },
  loginbtn: {
    width: 187,
    height: 34,
    marginTop: 548,
    alignSelf: "center",
  },
  registertxt: {
    fontFamily: "roboto-regular",
    color: "#121212",
    textDecorationLine: "underline",
    marginTop: 11,
    alignSelf: "center",
  },
  group: {
    width: 283,
    height: 361,
    justifyContent: "space-between",
    marginTop: -542,
    alignSelf: "center",
  },
  firstName: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 45,
    width: 283,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 10,
    textAlign: "center",
  },
  lastName: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 45,
    width: 283,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 10,
    textAlign: "center",
  },
  mobileNumber: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 45,
    width: 283,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 10,
    textAlign: "center",
  },
  nic: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 45,
    width: 283,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 10,
    textAlign: "center",
  },
  emailAddress: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 45,
    width: 283,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 10,
    textAlign: "center",
  },
  password: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 45,
    width: 283,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 10,
    textAlign: "center",
  },
  confirmPassword: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 45,
    width: 283,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 10,
    textAlign: "center",
  },
});

export default Register;
