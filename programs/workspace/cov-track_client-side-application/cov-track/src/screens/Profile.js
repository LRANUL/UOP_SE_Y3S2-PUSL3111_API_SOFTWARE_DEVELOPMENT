import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image
} from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

const userIcon = require('../assets/images/user-icon.png'); 

function Profile(props) {
  return (
    <View style={styles.container}>
      <View style={styles.profileBlock}>
        <View style={styles.userBannerBlock}>
          <View style={styles.profileIconBlock}>
            <Image source={userIcon} style={styles.userIcon} />
          </View>
          <View style={styles.greetingTextBlock}>
            <Text style={styles.greetingText}>
              Lucas {"\n"}Anderson
            </Text>
          </View>
        </View>
        <ScrollView style={styles.userDetailsBlock}>
          <Text style={styles.userDetailsHeading}>
            NIC
          </Text>
          <Text style={styles.userDetails}>
            00000000000
          </Text>
          <Text style={styles.userDetailsHeading}>
            Profession
          </Text>
          <Text style={styles.userDetails}>
            Software Engineer
          </Text>
          <Text style={styles.userDetailsHeading}>
            Affiliation
          </Text>
          <Text style={styles.userDetails}>
            Not Provided
          </Text>
          <Text style={styles.userDetailsHeading}>
            Date of Birth
          </Text>
          <Text style={styles.userDetails}>
            14th, Oct, 1995
          </Text>
          <Text style={styles.userDetailsHeading}>
            Address
          </Text>
          <Text style={styles.userDetails}>
            No. 23, Beach Road, Colombo 
          </Text>
          <Text style={styles.userDetailsHeading}>
            City
          </Text>
          <Text style={styles.userDetails}>
            Colombo 
          </Text>
          <Text style={styles.userDetailsHeading}>
            Email
          </Text>
          <Text style={styles.userDetails}>
            lucas.ander@gmail.com 
          </Text>
          <Text style={styles.userDetailsHeading}>
            Mobile
          </Text>
          <Text style={styles.userDetails}>
            +94 254 163 241
          </Text>
        </ScrollView>
        <View style={styles.updateUserDetailsButtonBlock}>
          <TouchableOpacity 
            onPress={() => {}}>
            <View style={styles.changePasswordButton}>
              <View>
                <Text style={styles.text}>CHANGE PASSWORD</Text>
              </View>
              <View>
                <MaterialCommunityIconsIcon 
                  name="form-textbox-password" style={styles.icon}>
                </MaterialCommunityIconsIcon>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => {}}>
            <View style={styles.updateAccountDetailsButton}>
              <View>
                <MaterialCommunityIconsIcon 
                  name="account-edit-outline" style={styles.icon}>
                </MaterialCommunityIconsIcon>
              </View>
              <View>
                <Text style={styles.text}>UPDATE DETAILS</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.logoutButtonBlock}>
          <TouchableOpacity 
            onPress={() => {}}>
            <View style={styles.logoutButton}>
              <View>
                <Text style={styles.text}>LOGOUT</Text>
              </View>
              <View>
                <MaterialCommunityIconsIcon 
                  name="account-arrow-right-outline" style={styles.icon}>
                </MaterialCommunityIconsIcon>
              </View>
            </View>
          </TouchableOpacity>
        </View>
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
  },
  userBannerBlock: {
    backgroundColor: '#017198',
    width: '90%',
    height: '16vh',
    marginTop: 60,
    borderRadius: 10,
    flexDirection: 'row',
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    paddingTop: '1.5%',
    paddingLeft: '2%',
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    lineHeight: 10,
    padding: 10
  },
  greetingText: {
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
    letterSpacing: 2,
    color: '#ffffff'
  },
  userDetailsBlock: {
    backgroundColor: '#017198',
    width: '90%',
    height: '40vh',
    marginTop: 10,
    borderRadius: 10,
    flexDirection: 'column',
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    paddingTop: '1%',
    paddingLeft: '1%',
    paddingBottom: '4%',
    marginBottom: '1vh'
  },
  userDetailsHeading: {
    fontSize: 20,
    fontWeight: '500',
    letterSpacing: 2,
    paddingTop: 2,
    paddingLeft: 2,
    color: '#ffffff'
  },
  userDetails: {
    fontSize: 20,
    letterSpacing: 2,
    paddingTop: 2,
    paddingLeft: 20,
    color: '#ffffff'
  },
  updateUserDetailsButtonBlock: {
    width: '98%',
    height: 40,
    flexDirection: 'row',
    marginTop: 10
  },
  logoutButtonBlock: {
    width: '98%',
    height: 40,
    flexDirection: 'row',
    marginTop: 10
  },
  changePasswordButton: {
    position: 'relative',
    bottom: 0,
    right: '2vw',
    height: 40,
    width: 185,
    borderRadius: 50,
    backgroundColor: '#009758',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  updateAccountDetailsButton: {
    position: 'relative',
    bottom: 0,
    left: '1vw',
    height: 40,
    width: 150,
    borderRadius: 50,
    backgroundColor: '#017198',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoutButton: {
    position: 'relative',
    bottom: 0,
    left: '60vw',
    height: 40,
    width: 100,
    borderRadius: 50,
    backgroundColor: '#D50000',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    fontSize: 18,
    color: '#ffffff',
    paddingLeft: 4
  },
  text: {
    fontSize: 15,
    paddingLeft: 4,
    color: '#ffffff',
    letterSpacing: 0.5
  }
});

export default Profile;
