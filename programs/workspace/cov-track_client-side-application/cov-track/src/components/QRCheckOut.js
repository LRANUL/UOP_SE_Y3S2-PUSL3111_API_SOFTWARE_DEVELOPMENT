import React, { useState, useEffect } from 'react';
import { 
  Text, 
  View, 
  StyleSheet, 
  Button, 
  Alert 
} from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import * as Location from 'expo-location';
import UserService from '../services/userService';

function QRCheckOut() {

  // To handle location accessability
  const [location, setLocation] = useState(null);
  // To handle error message visibility
  const [errorMessage, setErrorMessage] = useState(null);

  // UseEffect - Handling location permission
  useEffect(() => {
    (async () => {
      let { 
        status 
      } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMessage('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  // To store check out longitude and latitude
  let checkOutLongitude = null;
  let checkOutLatitude = null;

  if (errorMessage) {
    console.log(errorMessage);
    const errorAlert = () => Alert.alert(
      "Error",
      "Unable to collect location details",
      [
        {
          text: "Close",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
      ],
    )
    errorAlert();
  } 
  else if (location) {
    checkOutLongitude = JSON.stringify(location.coords.longitude);
    checkOutLatitude = JSON.stringify(location.coords.latitude);
  }

  // UseEffect - Handling camera permission
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { 
        status 
      } = await BarCodeScanner.requestPermissionsAsync();
      console.log(status)
      setHasCameraPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ uid }) => {
    setScanned(true);

    // Checking whether the check-in status is true
    // UserService.checkInStatus()
    //   .then(response => {
    //     if (response == true) {

    //       // Checking whether the scanned qr code is valid to that particular location
    //       UserService.validatedQRCode(uid).then(response => {
    //         if (response == true) {
    //           console.log('Validated');
    //           // TODO:
    //           // Return validated data to 'CheckOut' screen
    //         }
    //         else {
    //           invalidAlert();
    //           const invalidAlert = () => Alert.alert(
    //             "No Check In",
    //             "Invalid QR Code Scanned",
    //             [
    //               {
    //                 text: "Close",
    //                 onPress: () => console.log("Cancel Pressed"),
    //                 style: "cancel"
    //               },
    //               ,
    //               { text: "Try Again", onPress: () => setScanned(false) }
    //             ],
    //           )
    //         }
    //       })
    //     }
    //     else if (response.data == false) {
    //       checkedinAlert();
    //       const checkedinAlert = () => Alert.alert(
    //         "Not Checked In",
    //         "Please Check In",
    //         [
    //           {
    //             text: "Close",
    //             onPress: () => console.log("Cancel Pressed"),
    //             style: "cancel"
    //           },
    //         ],
    //       )
    //     }
    //   })
  };
  if (hasCameraPermission === null) {
    return <Text>Requesting for camera permission to scan QR code</Text>;
  }
  if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Button title={'Scan Code'} onPress={() => setScanned(false)} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default QRCheckOut;
