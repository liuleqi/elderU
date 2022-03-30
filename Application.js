/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import {
  createStackNavigator, createAppContainer,
} from 'react-navigation';

import Welcome from './pages/Welcome'
import Login from './pages/Login'
import ElderlySetup from './pages/ElderlySetup'
import Choose from './pages/Choose'
import ElderList from './pages/ElderList'
import ElderForm from './pages/ElderForm'
import StudentList from './pages/StudentList'
import StudentForm from './pages/StudentForm'
import Message from './pages/Message'

const RouteConfig = {
  Welcome: Welcome,
  Login: Login,
  ElderlySetup: ElderlySetup,
  Choose: Choose,
  ElderForm: ElderForm,
  StudentForm: StudentForm,
  StudentList: StudentList,
  ElderList: ElderList,
  Message: Message,
}

const StackConfig = {
  initialRouteName: 'Welcome'
}

const StackNavigator = createStackNavigator(RouteConfig, StackConfig)

const AppContainer = createAppContainer(StackNavigator)

module.exports = AppContainer

