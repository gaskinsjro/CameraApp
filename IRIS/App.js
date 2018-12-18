/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Button } from "react-native";
import { Platform, StyleSheet, Text, View } from "react-native";
import CameraScreen from "./CameraScreen";
import { createStackNavigator, createAppContainer } from "react-navigation";

const instructions = Platform.select({
  ios: "Live in the Moment",
  android: "Live in the Moment"
});

class HomeScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>HomeScreen</Text>
        <Button
          title="Go to Camera"
          onPress={() => this.props.navigation.navigate("Profile")}
        />
      </View>
    );
  }
}

class CameraScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>Camera</Text>
      </View>
    );
  }
}

const AppScreens = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Profile: { screen: CameraScreen }
  },
  {
    initialRouteName: "Home"
  }
);
lkj;
const AppContainer = createAppContainer(AppScreens);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignb,
    Items: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 60,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  Button: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
