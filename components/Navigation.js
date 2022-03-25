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

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStackScreen = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
      showIcon: true,
      tabBarShowLabel: false
  }}>
      <Stack.Screen name='Home' component={Home}/>
      <Stack.Screen name='RoomDetail' component={RoomDetail}/>
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
const AutoStackScreen = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
      showIcon: true,
      tabBarShowLabel: false
  }}>
      <Stack.Screen name='Auto' component={Auto}/>
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
const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
          headerShown: false,
          showIcon: true,
          tabBarShowLabel: false
      }}>
        <Tab.Screen name="HomeStackScreen" component={HomeStackScreen} options={{
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
        <Tab.Screen name="AutoStackScreen" component={AutoStackScreen} options={{
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
    </NavigationContainer>
  )
}

const NavIcon = styled.View`
  display: flex;
  align-items: center;
`

export default Navigation