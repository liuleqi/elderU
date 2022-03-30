
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView} from 'react-native';

import {
  InputItem, List, Button, DatePicker, TextareaItem, Picker, Provider, ImagePicker, Toast
} from '@ant-design/react-native'
import enUS from '@ant-design/react-native/es/locale-provider/en_US';

const Dimensions = require('Dimensions');

// get Screen Width
const width = Dimensions.get('window').width

export default class ElderForm extends Component {
  static navigationOptions = ({navigation, screenProps}) => ({
    headerTitle: 'Request Page',
    headerBackTitle: '',
    headerStyle: styles.header,
    headerTitleStyle: styles.headerTitle
  });

  constructor(props) {
    super(props);
    this.state = {
      value1: '',
      value2: new Date(),
      value3: new Date()
    }
  }

  render() {
    return (
      <Provider locale={enUS}>
      <View style={styles.container}>
        <Text style={styles.label}>Your Work Request</Text>
        <ScrollView style={{flexDirection: 'row'}}>
          <List style={{width: width}}>
            <InputItem
              clear
              maxLength={8}
            >Name</InputItem>

            <InputItem
              clear
              maxLength={8}
            >Phone</InputItem>

            <InputItem
              clear
              maxLength={8}
            >Address</InputItem>

            <TextareaItem style={{height: 50}}
              rows={5}
              placeholder="Description"
              style={{ paddingVertical: 5 }}
            />
          </List>

          <List style={{width: width,marginTop: 5}}>
            <Picker 
              value={this.state.value1}
              onOk={(val) => {
                this.setState({value1: val})
              }}
              data={[{
                  label:'Drive',
                  value:'Drive'
              },{
                label:'Dinner',
                value:'Dinner'
              }]} cols={1} >
                <List.Item arrow="horizontal">Job Type</List.Item>
            </Picker>
            
            <DatePicker
              value={this.state.value2}
              onOk={(val) => {
                this.setState({value2:val})
              }}
              mode="date"
              minDate={new Date(1950, 7, 6)}
              maxDate={new Date(2026, 11, 3)}
              format="YYYY-MM-DD"
            >
              <List.Item arrow="horizontal">Date Time(Begin)</List.Item>
            </DatePicker>
            
            <DatePicker
              value={this.state.value3}
              onOk={(val) => {
                this.setState({value3: val})
              }}
              mode="date"
              minDate={new Date(1950, 7, 6)}
              maxDate={new Date(2026, 11, 3)}
              format="YYYY-MM-DD"
            >
              <List.Item arrow="horizontal">Date Time(End)</List.Item>
            </DatePicker>

            <TextareaItem style={{height: 50}}
              rows={5}
              placeholder="More Info"
              style={{ paddingVertical: 5 }}
            />
          </List>

          <Button type="primary" style={{width: width}}
            onPress={ () => {
              Toast.success('Submitted Successfully', 2)
              this.props.navigation.navigate('StudentList', {flag: true})
            }}>Submit</Button>

            <Button type="primary" style={{width: width}}
              onPress={ () => {
                this.props.navigation.navigate('Message')
            }}>Message</Button>

        </ScrollView>
      </View>
      </Provider>
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
  label: {
    color: 'white',
    fontSize: 21,
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 5
  }
});