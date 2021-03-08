import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text
} from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

function Dashboard(props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/4324939.jpg")}
        resizeMode="cover"
        style={styles.image}
        imageStyle={styles.image_imageStyle}
      >
        <TouchableOpacity style={styles.profilebtn}>
          <MaterialCommunityIconsIcon
            name="account-circle"
            style={styles.profileicn}
          ></MaterialCommunityIconsIcon>
          <Text style={styles.profile}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.checkinbtn}>
          <MaterialCommunityIconsIcon
            name="qrcode-scan"
            style={styles.checkinicn}
          ></MaterialCommunityIconsIcon>
          <Text style={styles.checkIn}>Check in</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.checkoutbtn}>
          <MaterialCommunityIconsIcon
            name="qrcode"
            style={styles.checkouticn}
          ></MaterialCommunityIconsIcon>
          <Text style={styles.checkOut}>Check out</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.historybtn}>
          <MaterialCommunityIconsIcon
            name="history"
            style={styles.historyicn}
          ></MaterialCommunityIconsIcon>
          <Text style={styles.history}>History</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    flex: 1
  },
  image_imageStyle: {},
  profilebtn: {
    width: 302,
    height: 148,
    backgroundColor: "rgba(74,144,226,0.9)",
    borderRadius: 17,
    marginTop: 87,
    alignSelf: "center"
  },
  profileicn: {
    color: "rgba(255,255,255,1)",
    fontSize: 60,
    height: 66,
    width: 60,
    marginTop: 10,
    alignSelf: "center"
  },
  profile: {
    fontFamily: "roboto-300",
    color: "#121212",
    fontSize: 35,
    textAlign: "center",
    alignSelf: "center"
  },
  checkinbtn: {
    width: 302,
    height: 148,
    backgroundColor: "rgba(126,211,33,0.9)",
    borderRadius: 17,
    marginTop: 23,
    alignSelf: "center"
  },
  checkinicn: {
    color: "rgba(255,255,255,1)",
    fontSize: 60,
    height: 66,
    width: 60,
    marginTop: 25,
    alignSelf: "center"
  },
  checkIn: {
    fontFamily: "roboto-300",
    color: "#121212",
    fontSize: 35,
    textAlign: "center",
    alignSelf: "center"
  },
  checkoutbtn: {
    width: 302,
    height: 148,
    backgroundColor: "rgba(248,231,28,0.9)",
    borderRadius: 17,
    marginTop: 25,
    alignSelf: "center"
  },
  checkouticn: {
    color: "rgba(255,255,255,1)",
    fontSize: 60,
    height: 66,
    width: 60,
    marginTop: 24,
    alignSelf: "center"
  },
  checkOut: {
    fontFamily: "roboto-300",
    color: "#121212",
    fontSize: 35,
    textAlign: "right",
    alignSelf: "center"
  },
  historybtn: {
    width: 302,
    height: 148,
    backgroundColor: "rgba(155,155,155,0.9)",
    borderRadius: 17,
    marginTop: 29,
    alignSelf: "center"
  },
  historyicn: {
    color: "rgba(255,255,255,1)",
    fontSize: 60,
    height: 66,
    width: 60,
    marginTop: 30,
    alignSelf: "center"
  },
  history: {
    fontFamily: "roboto-300",
    color: "#121212",
    fontSize: 35,
    alignSelf: "center"
  }
});

export default Dashboard;
