
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView} from 'react-native';

import {
  InputItem, List, Button, DatePicker, TextareaItem, Picker, Provider, ImagePicker, Toast
} from '@ant-design/react-native'
import enUS from '@ant-design/react-native/es/locale-provider/en_US';

const Dimensions = require('Dimensions');

// get Screen Width
const width = Dimensions.get('window').width

export default class StudentForm extends Component {
  static navigationOptions = ({navigation, screenProps}) => ({
    //左侧标题
    headerTitle: 'Student Profile',
    //设置跳转页面左侧返回箭头后面的文字，默认是上一个页面的标题
    headerBackTitle: '',
    headerStyle: styles.header,
    headerTitleStyle: styles.headerTitle
  });

  constructor(props) {
    super(props);
    this.state = {
      value1: '',
      value2: new Date(),
      value3: '',
      value4: new Date(),
      value5: new Date(),
    }
  }

  render() {
    return (
      <Provider locale={enUS}>
      <View style={styles.container}>
        <Text style={styles.label}>Your Profile</Text>
        <ScrollView style={{flexDirection: 'row'}}>
          <List style={{width: width}}>
            <InputItem
              clear
              maxLength={8}
            >Name</InputItem>

            <Picker 
              onOk={(val) => {
                this.setState({value1: val})
              }}
              value={this.state.value1}
              data={[{
                  label:'Male',
                  value:'Male'
              },{
                label:'Female',
                value:'Female'
              }]} cols={1} >
                <List.Item arrow="horizontal">Gender</List.Item>
            </Picker>

            <InputItem
              clear
              maxLength={8}
            >College</InputItem>

            <DatePicker
              value={this.state.value2}
              mode="date"
              minDate={new Date(1950, 7, 6)}
              maxDate={new Date(2026, 11, 3)}
              format="YYYY-MM-DD"
              onOk={(val) => {
                this.setState({value2: val})
              }}
            >
              <List.Item arrow="horizontal">Graduation</List.Item>
            </DatePicker>

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
              value={this.state.value3}
              onOk={(val) => {
                this.setState({value3: val})
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
              value={this.state.value4}
              onOk={(val) => {
                this.setState({value4: val})
              }}
              mode="date"
              minDate={new Date(1950, 7, 6)}
              maxDate={new Date(2026, 11, 3)}
              format="YYYY-MM-DD"
            >
              <List.Item arrow="horizontal">Date Time(Begin)</List.Item>
            </DatePicker>
            
            <DatePicker
              value={this.state.value5}
              onOk={(val) => {
                this.setState({value5: val})
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
              this.props.navigation.navigate('ElderList', {flag: true})
            }}>Submit</Button>
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