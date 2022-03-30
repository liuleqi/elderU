
import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import {
  InputItem, List, Button
} from '@ant-design/react-native'

export default class Login extends Component {
  static navigationOptions = ({navigation, screenProps}) => ({
    headerTitle: 'Login',
    headerBackTitle: '',
    headerStyle: styles.header,
    headerTitleStyle: styles.headerTitle
  });

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>ElderU</Text>
        <List style={{ width: 300, backgroundColor: '#3464E1' }}>
          <InputItem
            clear
            maxLength={8}
            placeholder='Input Username'
          ></InputItem>
          <InputItem
            style={{marginTop: 5}}
            clear
            maxLength={8}
            type="password"
            placeholder={'Input Password'}
          ></InputItem>
        </List>
        <Button type="primary" style={{marginTop: 30,width: 300}}
          onPress={ () => {
            this.props.navigation.navigate('Choose')
          }}>Login</Button>
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
  textInput: {
    height: 40,
    width: 300,
    marginBottom: 5,
    backgroundColor: 'white',
    textAlign: 'center'
  },
  welcome: {
    fontSize: 50,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 100
  },
  btnLogin: {
    width: 200,
    height: 40,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30
  }
});