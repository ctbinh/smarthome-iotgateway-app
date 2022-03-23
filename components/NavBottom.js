import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import Dashboard from '../screens/Dashboard';
import Auto from '../screens/Auto'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Text } from 'react-native';
import styled from 'styled-components';
import Account from '../screens/Account';

const Tab = createBottomTabNavigator();

const NavBottom = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
          headerShown: false,
          showIcon: true,
          tabBarShowLabel: false
      }}>
        <Tab.Screen name="Home" component={Home} options={{
          tabBarIcon: ({focused}) => (
            <NavIcon>
              <Icon style={{color: focused ? 'orange' : 'gray'}} name="home" size={20}/>
              <Text style={{color: focused ? 'orange' : 'gray'}}>Home</Text>
            </NavIcon>
          )
        }}/>
        <Tab.Screen name="Dashboard" component={Dashboard} options={{
          tabBarIcon: ({focused}) => (
            <NavIcon>
              <Icon style={{color: focused ? 'orange' : 'gray'}} name="dashboard" size={20}/>
              <Text style={{color: focused ? 'orange' : 'gray'}}>Dashboard</Text>
            </NavIcon>
          )
        }}/>
        <Tab.Screen name="Auto" component={Auto} options={{
          tabBarIcon: ({focused}) => (
            <NavIcon>
              <Icon style={{color: focused ? 'orange' : 'gray'}} name="auto-awesome" size={20}/>
              <Text style={{color: focused ? 'orange' : 'gray'}}>Auto</Text>
            </NavIcon>
          )
        }}/>
        <Tab.Screen name="Account" component={Account} options={{
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

export default NavBottom