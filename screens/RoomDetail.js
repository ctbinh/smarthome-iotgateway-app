import { View, Text } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import styled from 'styled-components'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Device from '../components/Device'

const RoomDetail = ({navigation, route}) => {
  const {params} = route
  return (
    <Container>
      <View style={{backgroundColor:'#2A2A37'}}>
        <NavBar>
          <Icon name='chevron-left' size={28} color='white' onPress={()=>navigation.goBack()}/>
          <Title>{params?.greeting}</Title>
          <Icon name='plus' size={28} color='white' onPress={()=>navigation.navigate('AddRoom', {add: 'device'})}/>
        </NavBar>
      </View>
      <Devices>
        <Device device={{name:'test'}}/>
        <Device device={{name:'test'}}/>
        <Device device={{name:'test'}}/>
      </Devices>
    </Container>
  )
}

const Title = styled.Text`
  color: white;
  font-size: 18px;
`
const NavBar =styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #2A2A37;
  padding: 10px;
`
const Devices = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 5px 10px;
`
const Container = styled.View`
  flex: 1;
  background-color: white;
`
export default RoomDetail