
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import {AppRegistry} from 'react-native';

import {name as appName} from './app.json';
import Application from './src/Application';

export default class App extends Component {
    render() {
      return (
          <Application/>
      )
    }
}

AppRegistry.registerComponent(appName, () => App);