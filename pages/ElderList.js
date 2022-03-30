
import React, {Component} from 'react';
import {
  Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView
} from 'react-native';
import {
  InputItem, List, Button, SearchBar, Checkbox, Toast, Card
} from '@ant-design/react-native'

const Dimensions = require('Dimensions');

// get Screen Width
const width = Dimensions.get('window').width


// data
const data = [
  {
    avator: require('../images/cook.png'),
    name: 'Tom01',
    JobType: 'Cook Dinner',
    beginDate: 1,
    endDate: 2,
    Rating: 5
  },
  {
    avator: require('../images/cook.png'),
    name: 'Tom02',
    JobType: 'Cook Dinner',
    beginDate: 3,
    endDate: 4,
    Rating: 4
  },
  {
    avator: require('../images/drive.png'),
    name: 'Tom03',
    JobType: 'Drive',
    beginDate: 5,
    endDate: 6,
    Rating: 10
  },
  {
    avator: require('../images/cook.png'),
    name: 'Tom04',
    JobType: 'Cook Dinner',
    beginDate: 7,
    endDate: 8,
    Rating: 8
  },
  {
    avator: require('../images/drive.png'),
    name: 'Tom05',
    JobType: 'Drive',
    beginDate: 9,
    endDate: 10,
    Rating: 3
  },
  {
    avator: require('../images/cook.png'),
    name: 'Tom06',
    JobType: 'Cook Dinner',
    beginDate: 11,
    endDate: 12,
    Rating: 2
  },
  {
    avator: require('../images/drive.png'),
    name: 'Tom07',
    JobType: 'Drive',
    beginDate: 13,
    endDate: 14,
    Rating: 7
  }
]
export default class ElderList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      filter1: false,
      filter2: false,
      sortByRating: false
    }
  }

  static navigationOptions = ({navigation, screenProps}) => ({
    headerTitle: 'Work Postings',
    headerBackTitle: '',
    headerStyle: styles.header,
    headerTitleStyle: styles.headerTitle
  });

  _renderItems() {
    let arr = []

    // seachable
    let filterarr = data.filter(item => {
      if(!!this.state && this.state.value !== '') {
        // name || jobtype
        return item.name.indexOf(this.state.value) > -1 || 
                item.JobType.indexOf(this.state.value) > -1
      }
      return true
    })
    // filterable
    filterarr = filterarr.filter(item => {
      if(!!this.state && !!this.state.filter1) {
        return item.beginDate >= 8 && item.endDate <= 12
      }
      return true
    })
    filterarr = filterarr.filter(item => {
      if(!!this.state && !!this.state.filter2) {
        return item.beginDate >= 14 && item.endDate <= 18
      }
      return true
    })
    // Sort
    if(this.state.sortByRating) {
      filterarr = filterarr.sort((a, b) => {
        return a.Rating < b.Rating
      })
    }

    for (let i = 0; i < filterarr.length; i++) {
      let info = filterarr[i]
      arr.push(
        <TouchableOpacity key={i}
          onPress={() => {
            this.props.navigation.navigate('StudentForm')
          }}>
          <View style={styles.card}>
            <Image style={styles.icon} source={info.avator}></Image>
            <View style={styles.detail}>
              <View>
                <Text>Name:{info.name} Job Type: {info.JobType}</Text> 
              </View>
              <View>
                <Text>Dates: {info.beginDate}:00~{info.endDate}:00</Text> 
              </View>
              <View>
                <Text>Rating: {info.Rating}</Text> 
              </View>
            </View>
          </View>
        </TouchableOpacity>
      )
    }
    return arr
  }

  search = (value) => {
    this.setState({ value });
  }

  componentDidMount() {
    const { navigation } = this.props;
    const flag = navigation.getParam('flag')
    if(flag) {
      Toast.success('Success', 10)
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{width: width}}>
          <SearchBar 
            placeholder="Search" 
            showCancelButton={false}
            onChange={this.search}/>
        </View>
        <View style={{flexDirection: 'row', marginTop: 10,marginBottom: 10}}>
          <Checkbox style={{color: 'white'}}
            checked={this.state.filter1}
            onChange={event => {
              this.setState({ filter1: event.target.checked });
            }}>8:00~12:00</Checkbox>
          <Checkbox style={{color: 'white', marginLeft: 10}}
            checked={this.state.filter2}
            onChange={event => {
              this.setState({ filter2: event.target.checked });
            }}>14:00~18:00</Checkbox>
          <Checkbox style={{color: 'white', marginLeft: 10}}
            checked={this.state.sortByRating}
            onChange={event => {
              this.setState({ sortByRating: event.target.checked });
            }}>Sort by grading</Checkbox>
        </View>
        <Text style={{color: 'white', paddingTop: 5, paddingBottom: 5}}>Click on profile for Request</Text>
        <ScrollView>
          {this._renderItems()}
        </ScrollView>
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
  card: {
    flexDirection:'row',
    width: width - 10,
    backgroundColor: 'white',
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    marginTop: 5
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignContent: 'flex-start'
  },
  detail: {
    flexDirection:'column',
    marginLeft: 10
  },
  search: {
    height: 40,
    width: width - 10,
    marginBottom: 5,
    backgroundColor: 'white',
    padding: 5
  },
  container: {
    flex: 1,
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3464E1'
  },
});