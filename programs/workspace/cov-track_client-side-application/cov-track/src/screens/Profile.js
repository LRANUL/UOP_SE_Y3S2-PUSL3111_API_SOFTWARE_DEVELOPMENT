import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

function Profile(props) {
  return (
    <View style={styles.container}>
      <View style={styles.profileBlock}>

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
        Profile
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
  profileBlock: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '90%',
    minHeight: '95%'
  }
});

export default Profile;
