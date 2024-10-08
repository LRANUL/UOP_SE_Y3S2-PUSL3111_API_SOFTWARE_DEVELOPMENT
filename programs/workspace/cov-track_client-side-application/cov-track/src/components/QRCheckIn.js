import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Alert } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import * as Location from 'expo-location';
import UserService from '../services/userService';

export default function App() {

  // Permission for location
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let longitude = null;
  let latitude = null;

  if (errorMsg) {
    console.log(errorMsg);
  } else if (location) {
    checkinlongitude = JSON.stringify(location.coords.longitude);
    checkinlatitude = JSON.stringify(location.coords.latitude);
  }

  // Permission for Camera
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      console.log(status)
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, uid }) => {
    setScanned(true);
    // Check CheckIn Status
    UserService.checkInStatus()
      .then(response => {
        if (response == false) {
          // User has not checkined and validate qr code
          UserService.validatedQRCode(uid).then(response => {
            if (response == true) {
              let checkInData = {
                checkinlongitude,
                checkinlatitude,
                uid,
                nic,
                date,
                emailAddress,
              }

              UserService.checkIn(checkInData)
                .then(response => {
                  checkinAlert();
                  const checkinAlert = () => Alert.alert(
                    "Checkin Complete",
                    "You may enter now..",
                    [
                      {
                        text: "Close",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel"
                      },
                    ],
                  )
                    .catch(error => {
                      console.log(error);
                    })
                })
            }
            else {
              invalidAlert();
              const invalidAlert = () => Alert.alert(
                "No Check In",
                "Invalid QR Code Scanned",
                [
                  {
                    text: "Close",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                  },
                  ,
                  { text: "Try Again", onPress: () => setScanned(false) }
                ],
              )
            }
          })
        }
        else if (response.data == true) {
          checkedinAlert();
          const checkedinAlert = () => Alert.alert(
            "Already Checked In",
            "Checked In",
            [
              {
                text: "Close",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
            ],
          )
        }
      })
  };
  if (hasPermission === null) {
    return <Text>Requesting for camera permission to scan QR code</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Button title={'Scan QR Code'} onPress={() => setScanned(false)} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});
