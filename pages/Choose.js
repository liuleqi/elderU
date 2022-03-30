
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView} from 'react-native';

export default class Login extends Component {
  static navigationOptions = ({navigation, screenProps}) => ({
    headerTitle: 'ElderU',
    headerBackTitle: '',
    headerStyle: styles.header,
    headerTitleStyle: styles.headerTitle
  });

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity 
          style={styles.btnLogin}
          activeOpacity={0.5} 
          onPress={() => {
              this.props.navigation.navigate('StudentList')
          }}>
            <Text style={{color: '#3464E1', fontSize: 20}}>Looking For a Helper?</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.btnLogin}
          activeOpacity={0.5} 
          onPress={() => {
              this.props.navigation.navigate('ElderList')
          }}>
            <Text style={{color: '#3464E1', fontSize: 20}}>Looking To Help?</Text>
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
  btnLogin: {
    width: 200,
    height: 40,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30
  }
});