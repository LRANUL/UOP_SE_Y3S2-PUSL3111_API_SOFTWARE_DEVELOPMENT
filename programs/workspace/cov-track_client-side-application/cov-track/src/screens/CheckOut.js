import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image
} from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

function CheckOut(props) {
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

});

export default CheckOut;
