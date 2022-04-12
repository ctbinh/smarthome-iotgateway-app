import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import Dashboard from '../screens/Dashboard';
import Auto from '../screens/Auto'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Text } from 'react-native';
import styled from 'styled-components';
import Account from '../screens/Account';
import RoomDetail from '../screens/RoomDetail';
import AddRoom from '../screens/AddRoom';
import ChangePass from '../screens/ChangePass';
import Login from '../screens/Login';
import AddMode from '../screens/AddMode';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStackScreen = ({userId}) => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
      showIcon: true,
      tabBarShowLabel: false
  }}>
      <Stack.Screen name='Home'>
        {props => <Home {...props} userId={userId} />}
      </Stack.Screen>
      <Stack.Screen name='RoomDetail' component={RoomDetail}/>
      <Stack.Screen name='AddRoom' component={AddRoom}/>
    </Stack.Navigator>
  )
}
const DashboardStackScreen = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
      showIcon: true,
      tabBarShowLabel: false
  }}>
      <Stack.Screen name='Dashboard' component={Dashboard}/>
    </Stack.Navigator>
  )
}
const AutoStackScreen = ({userId}) => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
      showIcon: true,
      tabBarShowLabel: false
  }}>
      <Stack.Screen name='Auto'>
        {props => <Auto {...props} id={userId} />}
      </Stack.Screen>
      <Stack.Screen name='AddMode' component={AddMode}/>
    </Stack.Navigator>
  )
}
const AccountStackScreen = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
      showIcon: true,
      tabBarShowLabel: false
  }}>
      <Stack.Screen name='Account' component={Account}/>
    </Stack.Navigator>
  )
}
const Navigation = ({navigation, route}) => {
  const { data } = route.params;
  return (
    <Tab.Navigator screenOptions={{
        headerShown: false,
        showIcon: true,
        tabBarShowLabel: false,
    }}>
      <Tab.Screen name="HomeStackScreen" 
      children={()=><HomeStackScreen userId={data}/>}
      options={{
        tabBarIcon: ({focused}) => (
          <NavIcon>
            <Icon style={{color: focused ? 'orange' : 'gray'}} name="home" size={20}/>
            <Text style={{color: focused ? 'orange' : 'gray'}}>Home</Text>
          </NavIcon>
        )
      }}/>
      <Tab.Screen name="DashboardStackScreen" component={DashboardStackScreen} options={{
        tabBarIcon: ({focused}) => (
          <NavIcon>
            <Icon style={{color: focused ? 'orange' : 'gray'}} name="dashboard" size={20}/>
            <Text style={{color: focused ? 'orange' : 'gray'}}>Dashboard</Text>
          </NavIcon>
        )
      }}/>
      <Tab.Screen name="AutoStackScreen" 
      children={()=><AutoStackScreen userId={data}/>}
      options={{
        tabBarIcon: ({focused}) => (
          <NavIcon>
            <Icon style={{color: focused ? 'orange' : 'gray'}} name="auto-awesome" size={20}/>
            <Text style={{color: focused ? 'orange' : 'gray'}}>Auto</Text>
          </NavIcon>
        )
      }}/>
      <Tab.Screen name="AccountStackScreen" component={AccountStackScreen} options={{
        tabBarIcon: ({focused}) => (
          <NavIcon>
            <Icon style={{color: focused ? 'orange' : 'gray'}} name="account-circle" size={20}/>
            <Text style={{color: focused ? 'orange' : 'gray'}}>Account</Text>
          </NavIcon>
        )
      }}/>
    </Tab.Navigator>
  )
}

const NavIcon = styled.View`
  display: flex;
  align-items: center;
`

export default Navigation