import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image
} from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
const covTrackLogo = require('../assets/images/logo.jpeg'); 
const nsbmLogo = require('../assets/images/about-screen/NSBM-Logo.png'); 
const plymouthUniversityLogo = require('../assets/images/about-screen/Plymouth-University-Logo.png'); 

function About(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backIconBlock}
        onPress={() => props.navigation.navigate('Dashboard')}>
        <View>
          <MaterialCommunityIconsIcon 
            name="keyboard-backspace" style={styles.backIcon}>
          </MaterialCommunityIconsIcon>
        </View>
      </TouchableOpacity>
      <View style={styles.aboutBlock}>
        <Text style={styles.aboutText}>
          ABOUT
        </Text>
        <View style={styles.imageBlock}>
          <View style={styles.imageTile}>
            <Image source={covTrackLogo} style={styles.covTrackLogoImage} />
          </View>
          <View style={styles.imageTile}>
            <Image source={nsbmLogo} style={styles.nsbmLogoImage} />
          </View>
          <View style={styles.imageTile}>
            <Image source={plymouthUniversityLogo} style={styles.plymouthUniversityLogoImage} />
          </View>
        </View>
        <View style={styles.textBlock}>
          <Text style={styles.textTop}>
            CovTrack Platform was developed by University of Plymouth Third Students, {"\n"} 
          </Text>
          <Text style={styles.textCenter}>
              following BSc(Hons) Software Engineering Degree
          </Text>
          <Text style={styles.textBottom}>
            Assignment Title: {" "}
            <Text style={styles.textBold}>
              Coursework PUSL3111 - API Software Development
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#002657',
    alignItems: 'center',
    justifyContent: 'center'
  },
  backIconBlock: {
    height: 50,
    width: 50,
    position: 'absolute',
    top: 0,
    left: 0,
    margin: '1%',
    width: 50,
    height: 50
  },
  backIcon: {
    color: '#ffffff',
    width: 50,
    height: 50,
    fontSize: 40
  },
  /* ABOUT BLOCK */
  aboutBlock: {
    minWidth: '90%',
    minHeight: '40%',
    margin: '5%',
    backgroundColor: '#EEEEEE',
    borderRadius: 20,
    padding: 10
  },
  aboutText: {
    fontSize: 20,
    marginTop: '2%',
    marginLeft: '2%',
    fontWeight: '500'
  },
  /* IMAGE BLOCK */
  imageBlock: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 5,
    paddingBottom: 5
  },
  imageTile: {
    width: 100,
    height: 100,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    marginLeft: '2%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  covTrackLogoImage: {
    width: 100,
    height: 100,
    borderRadius: 20
  },
  nsbmLogoImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    borderRadius: 20
  },
  plymouthUniversityLogoImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    borderRadius: 20
  },
  /* TEXT BLOCK */
  textBlock: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textTop: {
    paddingTop: 5,
    fontSize: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textCenter: {
    paddingTop: 5,
    fontSize: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textBottom: {
    paddingTop: 20,
    fontSize: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textBold: {
    fontWeight: '500'
  }
});

export default About;
