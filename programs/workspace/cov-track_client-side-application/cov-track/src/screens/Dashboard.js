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

const userIcon = require('../assets/images/user-icon.png'); 
const backgroundImage = require('../assets/images/4324939.jpg'); 

function Dashboard(props) {
  let mobileView = true
  if (Platform.OS === 'web') {
    mobileView = false
    // setting to true during development
    // @RyanCargon and @hvlhasanka comment line 17 to after testing
  }
  else if (Platform.OS === 'ios' || Platform.OS === 'android') {
    mobileView = true;
  }

  return (
    <View style={styles.container}>
      <StatusBar animated />
      <View style={styles.firstBlock}>
        <View style={styles.menuIconBlock}>
          <TouchableOpacity
            onPress={() => {}}>
            <MaterialCommunityIconsIcon 
              name="menu" style={styles.menuIcon}>
            </MaterialCommunityIconsIcon>
          </TouchableOpacity>
        </View>
        <View style={styles.userBanner}>
          <View style={styles.profileIconBlock}>
            <Image source={userIcon} style={styles.userIcon} />
          </View>
          <View style={styles.greetingTextBlock}>
            <Text style={styles.greetingText}>
              Welcome Back, {"\n"}Lucas
            </Text>
          </View>
        </View>
      </View>
      <ImageBackground
        source={backgroundImage}
        resizeMode="cover"
        style={styles.secondBlock}
        imageStyle={styles.secondBlock}
      >
        <View style={styles.tileBlock}>
          {mobileView ? 
            <TouchableOpacity
              onPress={() => props.navigation.navigate('CheckIn')}>
              <View style={styles.checkInTile}>
                <View style={styles.tileIcon}>
                  <MaterialCommunityIconsIcon 
                    name="qrcode-scan" style={styles.tileIcon}>
                  </MaterialCommunityIconsIcon>
                </View>
                <View>
                  <Text style={styles.tileText}>CHECK-IN</Text>
                </View>
              </View>
            </TouchableOpacity>
            : null}
          {mobileView ? 
            <TouchableOpacity 
              onPress={() => {}}>
              <View style={styles.checkOutTile}>
                <View style={styles.tileIcon}>
                  <MaterialCommunityIconsIcon 
                    name="qrcode" style={styles.tileIcon}>
                  </MaterialCommunityIconsIcon>
                </View>
                <View>
                  <Text style={styles.tileText}>CHECK-OUT</Text>
                </View>
              </View>
            </TouchableOpacity>
          : null}
          <TouchableOpacity 
            onPress={() => props.navigation.navigate('History')}>
            <View style={styles.historyTile}>
              <View style={styles.tileIcon}>
                <MaterialCommunityIconsIcon 
                  name="history" style={styles.tileIcon}>
                </MaterialCommunityIconsIcon>
              </View>
              <View>
                <Text style={styles.tileText}>HISTORY</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => {}}>
            <View style={styles.profileTile}>
              <View style={styles.tileIcon}>
                <MaterialCommunityIconsIcon 
                  name="account-circle" style={styles.tileIcon}>
                </MaterialCommunityIconsIcon>
              </View>
              <View>
                <Text style={styles.tileText}>PROFILE</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <TouchableOpacity 
        onPress={() => props.navigation.navigate('About')}>
        <View style={styles.aboutButton}>
          <View>
            <MaterialCommunityIconsIcon 
              name="information-outline" style={styles.aboutIcon}>
            </MaterialCommunityIconsIcon>
          </View>
          <View>
            <Text style={styles.aboutText}>ABOUT</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#002657'
  },
  /* FIRST BLOCK */
  firstBlock: {
    flex: 1,
    minHeight: '20%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  menuIconBlock: {
    width: 50,
    height: 50,
    padding: 5,
    position: 'absolute',
    left: 0,
    top: 0
  },
  menuIcon: {
    width: 50,
    height: 50,
    fontSize: 40,
    color: '#ffffff'
  },
  userBanner: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 80
  },
  profileIconBlock: {
    width: 100,
    height: 100,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: '#00000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    alignItems: 'center',
    justifyContent: 'center'
  },
  userIcon: {
    width: 100,
    height: 100,
  },
  greetingTextBlock: {
    height: 150,
    width: 250,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    lineHeight: 10
  },
  greetingText: {
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
    letterSpacing: 2,
    color: '#ffffff'
  },
  /* SECOND BLOCK */
  secondBlock: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '6%',
    minHeight: '80%',
    borderTopLeftRadius: 40, 
    borderTopRightRadius: 40,
    shadowColor: '#BBBBBB',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.50,
    shadowRadius: 12.35,
    elevation: 19
  },
  tileBlock: {
    flex: 1,
  },
  tileIcon: {
    fontSize: 60,
    height: 60,
    width: 60,
    color: '#ffffff'
  },
  tileText: {
    color: '#ffffff',
    paddingLeft: 20,
    fontSize: 25,
    letterSpacing: 2
  },
  checkInTile: {
    backgroundColor: '#003060',
    minWidth: '80%',
    minHeight: '15vh',
    marginTop: 10,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10
  },
  checkOutTile: {
    backgroundColor: '#055C9D',
    minWidth: '80%',
    minHeight: '15vh',
    marginTop: 10,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10
  },
  historyTile: {
    backgroundColor: '#0E86D4',
    minWidth: '80%',
    minHeight: '15vh',
    marginTop: 10,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    padding: 10
  },
  profileTile: {
    backgroundColor: '#68BBE3',
    minWidth: '80%',
    minHeight: '15vh',
    marginTop: 10,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    padding: 0
  },
  aboutButton: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    marginBottom: '1%',
    marginLeft: '1%',
    height: 40,
    width: 90,
    borderRadius: 20,
    backgroundColor: '#ffffff',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2767F1'
  },
  aboutIcon: {
    fontSize: 18,
    color: '#ffffff'
  },
  aboutText: {
    fontSize: 18,
    paddingLeft: 2,
    color: '#ffffff'
  }

});

export default Dashboard;
