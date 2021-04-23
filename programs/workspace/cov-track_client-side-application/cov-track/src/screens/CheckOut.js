import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Alert
} from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

function CheckOut(props) {
  return (
    <View style={styles.container}>
      <View style={styles.checkOutBlock}>
        <View style={styles.checkInLocationDetailsTile}>
          <Text style={styles.tileHeading}>
            Checked-In Location Details
          </Text>
          <View style={styles.tileTextBlock}>
            <Text style={styles.tileText}>
              Colombo Part
            </Text>
            <Text style={styles.tileText}>
              No. 23, Castle Street
            </Text>
            <Text style={styles.tileText}>
              Colombo
            </Text>
            <Text style={styles.tileText}>
              colombo-park@gmail.com
            </Text>
            <Text style={styles.tileText}>
              +94 753 245 342
            </Text>
          </View>
        </View>
        <View style={styles.checkInDetailsTile}>
          <Text style={styles.tileHeading}>
            Check-In Details
          </Text>
          <View style={styles.tileTextBlock}>
            <Text style={styles.tileText}>
              Check-In Time:{" "}10:24 AM 
            </Text>
            <Text style={styles.tileText}>
              Check-In Duration: {" "}42 minutes
            </Text>
          </View>
        </View>
        <TouchableOpacity 
          onPress={() => {}}
        >
          <View style={styles.scanQrCodeButton}>
            <View>
              <MaterialCommunityIconsIcon 
                name="qrcode-scan" style={styles.scanQrCodeButtonTileIcon}>
              </MaterialCommunityIconsIcon>
            </View>
            <View>
              <Text style={styles.scanQrCodeButtonTileText}>SCAN QR-CODE</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity 
            onPress={() => {}}>
            <View style={styles.checkOutPremisesButton}>
              <View style={styles.tileIcon}>
                <MaterialCommunityIconsIcon 
                  name="map-marker-check-outline" style={styles.checkOutPremisesTileIcon}>
                </MaterialCommunityIconsIcon>
              </View>
              <View>
                <Text style={styles.checkOutPremisesTileText}>CHECK-OUT FROM PREMISES</Text>
              </View>
            </View>
          </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.backIconBlock}
        onPress={() => props.navigation.navigate('Dashboard')}>
        <View>
          <MaterialCommunityIconsIcon 
            name="keyboard-backspace" style={styles.backIcon}>
          </MaterialCommunityIconsIcon>
        </View>
      </TouchableOpacity>
      <Text style={styles.checkOutText}>
        Check-out
      </Text>
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
  checkOutText: {
    fontSize: 30,
    position: 'absolute',
    top: 0,
    left: 0,
    marginTop: '1%',
    marginLeft: 60,
    color: '#ffffff'
  },
  tileIcon: {
    fontSize: 60,
    height: 60,
    width: 60,
    color: '#ffffff',
    paddingTop: 10
  },
  tileText: {
    color: '#ffffff',
    fontSize: 20,
    letterSpacing: 2,
    paddingTop: 35
  },
  checkOutBlock: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '90%',
    minHeight: '95%'
  },
  checkInLocationDetailsTile: {
    backgroundColor: '#2F7BF9',
    minWidth: '90%',
    minHeight: '20vh',
    marginTop: 60,
    borderRadius: 10,
    flexDirection: 'column',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    paddingTop: '3%',
    paddingLeft: '2%',
    paddingBottom: '4%',
    marginBottom: '1vh'
  },
  tileHeading: {
    fontSize: 20,
    fontWeight: 500,
    color: '#ffffff'
  },
  tileTextBlock: {
    flexDirection: 'column',
    paddingTop: '3%',
    paddingLeft: '3%'
  },
  tileText: {
    fontSize: 15,
    fontWeight: 450,
    letterSpacing: 2,
    color: '#ffffff'
  },
  checkInDetailsTile: {
    backgroundColor: '#2F7BF9',
    minWidth: '90%',
    minHeight: '15vh',
    marginTop: 10,
    borderRadius: 10,
    flexDirection: 'column',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    paddingTop: '3%',
    paddingLeft: '2%',
    paddingBottom: '4%',
    marginBottom: '6vh'
  },
  scanQrCodeButton: {
    backgroundColor: '#025EF7',
    minWidth: '90%',
    minHeight: 100,
    marginTop: 10,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    paddingTop: '5%',
    paddingBottom: '5%',
    paddingRight: '12vw',
    paddingLeft: '12vw',
    marginBottom: '5vh'
  },
  scanQrCodeButtonTileIcon: {
    fontSize: 60,
    height: 60,
    width: 60,
    color: '#ffffff',
  },
  scanQrCodeButtonTileText: {
    color: '#ffffff',
    fontSize: 20,
    letterSpacing: 2,
    paddingLeft: 10
  },
  checkOutPremisesButton: {
    backgroundColor: '#013B99',
    minWidth: '90%',
    minHeight: 80,
    marginTop: 10,
    borderRadius: 60,
    flexDirection: 'row',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    padding: 0,
    borderColor: '#3473DA',
    borderWidth: 2
  },
  checkOutPremisesTileIcon: {
    fontSize: 60,
    height: 60,
    width: 60,
    color: '#ffffff'
  },
  checkOutPremisesTileText: {
    color: '#ffffff',
    fontSize: 20,
    letterSpacing: 2,
    paddingTop: 25
  }
});

export default CheckOut;
