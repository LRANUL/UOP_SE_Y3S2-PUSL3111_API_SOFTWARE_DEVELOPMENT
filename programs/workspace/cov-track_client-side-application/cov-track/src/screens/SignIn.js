import React, { Component, useState } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  Text,
  TextInput
} from "react-native";
import AsyncStorage from '@react-native-community/async-storage';
import axios from "axios";
import Dashboard from './Dashboard';

var jwt = null;

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const storeData = async () => {
    try {
      await AsyncStorage.setItem(
        'email',
        email
      );
      await AsyncStorage.setItem(
        'token',
        token
      );
    } catch (error) {
      console.log('---\nError saving data\n---');
    }
  };

  // const authNav = () => {
  //   props.navigation.navigate(jwt ? 'Dashboard' : 'LoadingScreen');
  // }

  // const authNav = () => {
  //   if (jwt !== null) {
  //       props.navigation.navigate(`Dashboard`);
  //   }
  // }

  const sendData = () => {
    axios
    .post(
      `http://localhost:5000/protected/login`,
      {
        email: email,
        password: password
      },
    )
    .then(res => {
      console.log(res);
      console.log(res.data);
      jwt = res.token;
      if (jwt !== null) {
        props.navigation.navigate(`Dashboard`);
      }
      storeData();
    })
    
    .catch(
      // Uncomment 1st line to skip auth during dev
      //props.navigation.navigate(`Dashboard`),
      err => console.error(err)
    );
  }

  const showData = () => {
    try{  
      let user = await AsyncStorage.getItem('user');  
      alert(user);  
    }  
    catch(err){  
      console.log(err)  
    }
    alert(token);
  }

  return (
    <View style={styles.container}>
      <StatusBar animated />
      <Image
        source={require("../assets/images/logo.jpeg")}
        resizeMode="cover"
        style={styles.logo}
      ></Image>
      <TouchableOpacity style={styles.button} onPress={() => {
          sendData();
          // if (jwt !== null) {
          //   props.navigation.navigate(`Dashboard`);
          // }
        }
      }>
        <Text style={styles.logintxt}>Login</Text>
      </TouchableOpacity>
      <View style={styles.group}>
        <TextInput
          placeholder="email address"
          clearButtonMode="unless-editing"
          keyboardType="email-address"
          autoFocus={true}
          style={styles.emailfield}
          onChange={(e) => setEmail(e.target.value)}
        ></TextInput>
        <TextInput
          placeholder="Password"
          dataDetector="all"
          clearButtonMode="unless-editing"
          secureTextEntry={true}
          style={styles.passwordfield}
          onChange={(e) => setPassword(e.target.value)}
        ></TextInput>
      </View>
      <Text style={styles.logotxt}>CovTrack Login</Text>
      <View style={styles.registerbtnStack}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("Register")
          }}
          style={styles.registerbtn}
        >
          <Text style={styles.registertxt}>No account register with us</Text>
        </TouchableOpacity>      
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: "#000000"
  },
 logo: {
    width: 74,
    height: 71,
    borderRadius: 100,
    borderWidth: 0,
    borderColor: "#000000",
    marginTop: 31,
    alignSelf: "center"
  },
  button: {
    height: 55,
    backgroundColor: "rgba(126,211,33,0.7)",
    width: 265,
    borderRadius: 17,
    marginTop: 460,
    alignSelf: "center"
  },
  logintxt: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    textAlign: "center",
    fontSize: 25,
    marginTop: 9,
    alignSelf: "center"
  },
  group: {
    width: 278,
    height: 124,
    justifyContent: "space-between",
    alignItems: "stretch",
    marginTop: -425,
    alignSelf: "center"
  },
  emailfield: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 48,
    width: 278,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 10,
    textAlign: "center"
  },
  passwordfield: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 48,
    width: 278,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 10,
    textAlign: "center"
  },
  logotxt: {
    fontFamily: "roboto-700",
    color: "rgba(0,0,0,1)",
    fontSize: 35,
    marginTop: -222,
    alignSelf: "center"
  },
  registerbtn: {
    top: 0,
    width: 179,
    height: 31,
    position: "absolute",
    left: 0
  },
  registertxt: {
    fontFamily: "roboto-regular",
    color: "#121212",
    textDecorationLine: "underline",
    marginTop: 9,
    alignSelf: "center"
  },
  registerbtnStack: {
    width: 181,
    height: 31,
    marginTop: 495,
    alignSelf: "center",
  }
});

export default Login;

// import React from 'react';
// import {
//   ActivityIndicator,
//   StatusBar,
//   StyleSheet,
//   View,
//   Button,
// } from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage';

// class SignInScreen extends React.Component {
//   static navigationOptions = {
//     title: 'Please sign in',
//   };

//   render() {
//     return (
//       <View>
//         <Button title="Sign in!" onPress={this._signInAsync} />
//       </View>
//     );
//   }

//   _signInAsync = async () => {
//     await AsyncStorage.setItem('userToken', 'abc');
//     this.props.navigation.navigate('App');
//   };
// }

// class HomeScreen extends React.Component {
//   static navigationOptions = {
//     title: 'Welcome to the app!',
//   };

//   render() {
//     return (
//       <View>
//         <Button title="Show me more of the app" onPress={this._showMoreApp} />
//         <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
//       </View>
//     );
//   }

//   _showMoreApp = () => {
//     this.props.navigation.navigate('Other');
//   };

//   _signOutAsync = async () => {
//     await AsyncStorage.clear();
//     this.props.navigation.navigate('Auth');
//   };
// }


// export default SignInScreen;
