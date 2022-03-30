
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

export default class Welcome extends Component {
  static navigationOptions = ({navigation, screenProps}) => ({
    // Header Title
    headerTitle: 'Welcome',
    // Back To History
    headerBackTitle: '',
    headerStyle: styles.header,
    headerTitleStyle: styles.headerTitle
  });

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./my-icon.png')} style={styles.image}/>

        <TouchableOpacity activeOpacity={0.5} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
          onPress={
            () => {
              this.props.navigation.navigate('Login')
            }
          }>
            <Text style={{color: 'white', alignItems: 'center', justifyContent: 'center', fontSize: 50 }}>Login</Text>
        </TouchableOpacity>
        
        <TouchableOpacity activeOpacity={0.5} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
          onPress={
            () => {
              this.props.navigation.navigate('ElderlySetup')
            }
          }>
            <Text style={{color: 'white', fontSize: 50}}>Setup Account</Text>
        </TouchableOpacity>
        
      </View>

    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#3464E1'
  },
  headerTitle: {
    color: 'white'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3464E1',
  },
  welcome: {
    fontSize: 50,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold',
    color: 'white'
  },
  image: {
    flex: 1,
    width: 400,
    height: 10,
    resizeMode: 'contain'
  },
});