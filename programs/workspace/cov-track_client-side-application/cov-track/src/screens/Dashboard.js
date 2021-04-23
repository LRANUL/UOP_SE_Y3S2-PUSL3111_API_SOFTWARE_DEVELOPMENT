import React, { Component, useState, useEffect } from "react";
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

  let mobileView = true;

  const [healthStatus, setHealthStatus] = useState(null);

  if (Platform.OS === 'web') {
   mobileView = false
    // setting to true during development
    // @RyanCargon and @hvlhasanka comment line 17 to after testing
  }
  else if (Platform.OS === 'ios' || Platform.OS === 'android') {
    mobileView = true;
  }

  useEffect(() => {
    setHealthStatus('negative');
  }, [])

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
          {healthStatus == 'negative' ? 
            <View style={styles.healthStatusBlockHealthy}>
              <Text style={styles.healthStatusText}>
                HEALTH STATUS
              </Text>
              <View style={styles.healthStatusResultBlock}>
                <MaterialCommunityIconsIcon 
                  name="check-outline" style={styles.healthStatusIcon}>
                </MaterialCommunityIconsIcon>
                <Text style={styles.healthStatus}>
                  HEALTHY
                </Text>
              </View>
            </View>
          : null}
          {healthStatus == 'positive' || healthStatus == 'deceased' ? 
            <View style={styles.healthStatusBlockInfected}>
              <Text style={styles.healthStatusText}>
                HEALTH STATUS
              </Text>
              <View style={styles.healthStatusResultBlock}>
                <MaterialCommunityIconsIcon 
                  name="close-outline" style={styles.healthStatusIcon}>
                </MaterialCommunityIconsIcon>
                <Text style={styles.healthStatus}>
                  {healthStatus == 'positive' ? 'INFECTED' : 'DECEASED' }
                </Text>
              </View>
            </View>
          : null}
          {healthStatus == 'compromised' ? 
            <View style={styles.healthStatusBlockPotentiallyInfected}>
              <Text style={styles.healthStatusText}>
                HEALTH STATUS
              </Text>
              <View style={styles.healthStatusResultBlock}>
                <MaterialCommunityIconsIcon 
                  name="alert-box-outline" style={styles.healthStatusIcon}>
                </MaterialCommunityIconsIcon>
                <Text style={styles.healthStatus}>
                  POTENTIALLY{"\n"} INFECTED
                </Text>
              </View>
            </View>
          : null}
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
              onPress={() => props.navigation.navigate('CheckOut')}>
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
            onPress={() => props.navigation.navigate('Profile')}>
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
    shadowColor: '#000000',
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
    paddingTop: '1%',
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
    minHeight: '100%'
  },
  healthStatusBlockHealthy: {
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '60%',
    minHeight: '15vh',
    backgroundColor: '#098F69',
    borderRadius: 15,
    flex: 1,
    borderColor: '#01D095',
    borderWidth: 5
  },
  healthStatusBlockInfected: {
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '60%',
    minHeight: '15vh',
    backgroundColor: '#BA3303',
    borderRadius: 15,
    flex: 1,
    borderColor: '#EE5721',
    borderWidth: 5
  },
  healthStatusBlockPotentiallyInfected: {
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '60%',
    minHeight: '15vh',
    backgroundColor: '#C19400',
    borderRadius: 15,
    flex: 1,
    borderColor: '#F2C226',
    borderWidth: 5
  },
  healthStatusText: {
    fontSize: 20,
    color: '#ffffff',
  },
  healthStatusResultBlock: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  healthStatusIcon: {
    width: 50,
    height: 50,
    fontSize: 40,
    color: '#ffffff'
  },
  healthStatus: {
    color: '#ffffff',
    fontWeight: '500',
    fontSize: 25,
    letterSpacing: 2,
    paddingBottom: '6%'
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
    shadowColor: "#000000",
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
    shadowColor: "#000000",
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
    shadowColor: "#000000",
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
    shadowColor: "#000000",
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
