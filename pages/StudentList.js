
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
    avatar: require('../images/1.png'),
    name: 'Tom Tillman',
    JobType: 'Yard Work',
    beginDate: 1,
    endDate: 2,
    Desc: 'I am a Junior Physics Major at Villanova',
    college: 'Villanova University',
    moreInfo: 'Class of 2020',
    Address: 'New Jersey',
    Grading: 4
  },
  {
    avatar: require('../images/2.png'),
    name: 'Phillip',
    JobType: 'Cook Dinner',
    beginDate: 3,
    endDate: 4,
    Desc: 'I am a Senior Computer Engineering Major at Villanova',
    college: 'Villanova University',
    moreInfo: 'Class of 2019',
    Address: 'California',
    Grading: 5
  },
  {
    avatar: require('../images/3.png'),
    name: 'Lisa',
    JobType: 'Drive',
    beginDate: 5,
    endDate: 6,
    Desc: 'I am a English Major',
    college: 'Rosemont College',
    moreInfo: 'Class of 2018',
    Address: 'Massachusetts',
    Grading: 3
  },
  {
    avatar: require('../images/4.png'),
    name: 'Tom04',
    JobType: 'Cook Dinner',
    beginDate: 7,
    endDate: 8,
    Desc: 'I am a Developer',
    college: 'St. Joes University',
    moreInfo: '',
    Address: 'PA',
    Grading: 2
  },
  {
    avatar: require('../images/5.png'),
    name: 'Tom05',
    JobType: 'Drive',
    beginDate: 9,
    endDate: 10,
    Desc: 'I am a Developer',
    college: 'ABC',
    moreInfo: '',
    Address: 'China',
    Grading: 4
  },
  {
    avatar: require('../images/6.png'),
    name: 'Tom06',
    JobType: 'Cook Dinner',
    beginDate: 11,
    endDate: 12,
    Desc: 'I am a Developer',
    college: 'ABC',
    moreInfo: '',
    Address: 'China',
    Grading: 2
  },
  {
    avatar: require('../images/7.png'),
    name: 'Tom07',
    JobType: 'Drive',
    beginDate: 13,
    endDate: 14,
    Desc: 'I am a Developer',
    college: 'ABC',
    moreInfo: '',
    Address: 'China',
    Grading: 8
  }
]
export default class StudentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      filter1: false,
      filter2: false,
      sortByGrading: false
    }
  }

  static navigationOptions = ({navigation, screenProps}) => ({
    headerTitle: 'Student Profiles',
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
    if(this.state.sortByGrading) {
      filterarr = filterarr.sort((a, b) => {
        return a.Grading < b.Grading
      })
    }

    for (let i = 0; i < filterarr.length; i++) {
      let info = filterarr[i]
      let grading = "Grading: "+ info.Grading +" STARS"
      arr.push(
        <TouchableOpacity key={i}
          onPress={() => {
            this.props.navigation.navigate('ElderForm')
          }}>
          <View style={styles.card}>
            <Image style={styles.icon} source={info.avatar}></Image>
            <View style={styles.detail}>
              <View>
                <Text>Name:{info.name}</Text> 
              </View>

              <View>
                <Text>Times: {info.beginDate}:00 - {info.endDate}:00</Text> 
              </View>
              <View>
                <Text>Home State: {info.Address}</Text> 
              </View>
            </View>
          </View>
          <Card>
            <Card.Header
              title={grading}
              thumbStyle={{ width: 30, height: 30 }}
            />
            <Card.Body>
              <View style={{ height: 42 }}>
                <Text style={{ marginLeft: 16 }}>{info.Desc}</Text>
              </View>
            </Card.Body>
            <Card.Footer
              content="College"
              extra={info.college}
            />
          </Card>
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
      Toast.success('Submitted Successfully', 10)
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{width: width}}>
          <SearchBar 
            placeholder="Search By Name or Job Type" 
            showCancelButton={false}
            onChange={this.search}/>
        </View>
        <View style={{flexDirection: 'row', marginTop: 10,marginBottom: 10}}>
        
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