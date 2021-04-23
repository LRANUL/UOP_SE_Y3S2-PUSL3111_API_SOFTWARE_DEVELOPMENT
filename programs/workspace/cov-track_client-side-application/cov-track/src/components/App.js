import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { Component, useState } from "react";
import { createAppContainer } from "react-navigation";
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import { Transition } from 'react-native-reanimated';
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import Login from "../screens/Login";
import Register from "../screens/Register";
import Dashboard from "../screens/Dashboard";
import History from "../screens/History";
import CheckIn from "../components/QRCheckIn";
import AuthLoadingScreen from "../screens/AuthLoading";
import SignInScreen from "../screens/SignIn";
import Profile from '../screens/Profile';
import About from '../screens/About';
import CheckOut from '../screens/CheckOut';
import { testStore } from '../screens/testStore';
import { testFetch } from '../screens/testFetch';
import { PersistGate } from 'zustand-persist';

const DrawerStack = createDrawerNavigator({
  Login: Login,
  Register: Register,
  Dashboard: Dashboard,
  CheckIn: CheckIn,
  CheckOut: CheckOut,
  History: History,
  Profile: Profile,
  About: About,
  TestPage: testFetch,
  TestPage2: testStore
});

const AppStack = createStackNavigator(
  {
    DrawerStack: {
      screen: DrawerStack
    },
    Dashboard: Dashboard,
    History: History,
    CheckIn: CheckIn,
    //    TestPage: testStore,
  },
  {
    headerMode: "none"
  }
);

const AuthStack = createStackNavigator({
  SignIn: SignInScreen,
});

const AppContainer = createAppContainer(
  createAnimatedSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      transition: (
        <Transition.Together>
          <Transition.Out
            type="slide-bottom"
            durationMs={400}
            interpolation="easeIn"
          />
          <Transition.In type="fade" durationMs={500} />
        </Transition.Together>
      )
    },
    {
      initialRouteName: 'AuthLoading',
    }
  )
);

// function App(){
//   return (
//     <AppContainer />
//   );
// }

function App() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  if (!isLoadingComplete) {
    <AppContainer />

    return (
      <PersistGate>
        <AppLoading
          startAsync={loadResourcesAsync}
          onError={handleLoadingError}
          onFinish={() => handleFinishLoading(setLoadingComplete)}
        />
      </PersistGate>

    );
  } else {
    return isLoadingComplete ? <AppContainer /> : <AppLoading />;
  }
}
async function loadResourcesAsync() {
  await Promise.all([
    Font.loadAsync({
      "roboto-300": require("../assets/fonts/roboto-300.ttf"),
      "roboto-700": require("../assets/fonts/roboto-700.ttf"),
      "roboto-regular": require("../assets/fonts/roboto-regular.ttf")
    })
  ]);
}
function handleLoadingError(error) {
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

export default App;