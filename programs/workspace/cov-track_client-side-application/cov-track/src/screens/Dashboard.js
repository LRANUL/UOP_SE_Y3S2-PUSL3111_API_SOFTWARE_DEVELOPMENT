import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Platform
} from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

function Dashboard(props) {
  let mobileView = true
  if (Platform.OS === 'web') {
    // mobileView = false
    // setting to true during development
    // @RyanCargon and @hvlhasanka comment line 17 to after testing
  }
  else if (Platform.OS === 'ios' || Platform.OS === 'android') {
    mobileView = true;
  }


  return (
    <View style={styles.container}>
      <StatusBar animated />
      <ImageBackground
        source={require("../assets/images/4324939.jpg")}
        resizeMode="cover"
        style={styles.image}
        imageStyle={styles.image_imageStyle}
      >
        <TouchableOpacity style={styles.profilebtn} >
          <View style={styles.profileicnStack}>
            <MaterialCommunityIconsIcon
              name="account-circle"
              style={styles.profileicn}
            ></MaterialCommunityIconsIcon>
            <Text style={styles.profile}>Profile</Text>
          </View>
        </TouchableOpacity>
        {mobileView ?
          <TouchableOpacity style={styles.checkinbtn}
            onPress={() => props.navigation.navigate('CheckIn')}>
            <View style={styles.checkinicnStack}>
              <MaterialCommunityIconsIcon
                name="qrcode-scan"
                style={styles.checkinicn}
              ></MaterialCommunityIconsIcon>
              <Text style={styles.checkIn}>Check in</Text>
            </View>
          </TouchableOpacity>
          : null}
        {mobileView ?
          <TouchableOpacity style={styles.checkoutbtn}>
            <View style={styles.checkouticnStack}>
              <MaterialCommunityIconsIcon
                name="qrcode"
                style={styles.checkouticn}
              ></MaterialCommunityIconsIcon>
              <Text style={styles.checkOut}>Check out</Text>
            </View>
          </TouchableOpacity>
          : null}
        <TouchableOpacity style={styles.historybtn}
          onPress={() => props.navigation.navigate('History')}
        >
          <View style={styles.historyicnStack}>
            <MaterialCommunityIconsIcon
              name="history"
              style={styles.historyicn}
            ></MaterialCommunityIconsIcon>
            <Text style={styles.history}>History</Text>
          </View>
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
    width: 290,
    height: 116,
    backgroundColor: "rgba(74,144,226,0.9)",
    borderRadius: 17,
    marginTop: 68,
    alignSelf: "center"
  },
  profileicn: {
    top: 0,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 60,
    left: 19,
    height: 66,
    width: 60
  },
  profile: {
    top: 59,
    position: "absolute",
    fontFamily: "roboto-300",
    color: "#121212",
    fontSize: 30,
    textAlign: "center",
    left: 0
  },
  profileicnStack: {
    width: 97,
    height: 101,
    marginTop: 2,
    marginLeft: 96
  },
  checkinbtn: {
    width: 290,
    height: 117,
    backgroundColor: "rgba(126,211,33,0.9)",
    borderRadius: 17,
    marginTop: 19,
    alignSelf: "center"
  },
  checkinicn: {
    top: 0,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 60,
    left: 35,
    height: 66,
    width: 60
  },
  checkIn: {
    top: 61,
    position: "absolute",
    fontFamily: "roboto-300",
    color: "#121212",
    fontSize: 30,
    textAlign: "center",
    left: 0
  },
  checkinicnStack: {
    width: 131,
    height: 103,
    marginTop: 5,
    marginLeft: 80
  },
  checkoutbtn: {
    width: 290,
    height: 117,
    backgroundColor: "rgba(248,231,28,0.9)",
    borderRadius: 17,
    marginTop: 20,
    alignSelf: "center"
  },
  checkouticn: {
    top: 0,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 60,
    left: 47,
    height: 66,
    width: 60
  },
  checkOut: {
    top: 58,
    position: "absolute",
    fontFamily: "roboto-300",
    color: "#121212",
    fontSize: 30,
    textAlign: "right",
    left: 0
  },
  checkouticnStack: {
    width: 154,
    height: 100,
    marginTop: 3,
    marginLeft: 68
  },
  historybtn: {
    width: 290,
    height: 117,
    backgroundColor: "rgba(155,155,155,0.9)",
    borderRadius: 17,
    marginTop: 22,
    alignSelf: "center"
  },
  historyicn: {
    top: 0,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 60,
    left: 24,
    height: 66,
    width: 60
  },
  history: {
    top: 56,
    position: "absolute",
    fontFamily: "roboto-300",
    color: "#121212",
    fontSize: 30,
    left: 0
  },
  historyicnStack: {
    width: 110,
    height: 98,
    marginTop: 6,
    marginLeft: 91
  }
});

export default Dashboard;
