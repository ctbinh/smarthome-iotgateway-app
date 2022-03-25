import { View, Text } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Header from '../components/Header'
import styled from 'styled-components'

const AddDevice = (props) => {
  return (
    <View>
      <View style={{backgroundColor:'#2A2A37'}}>
        <NavBar>
          <Icon name='chevron-left' size={28} color='white'
            onPress={()=>props.navigation.goBack()}/>
          <Title>Add Device</Title>
          <Text/>
        </NavBar>
      </View>
    </View>
  )
}

const NavBar = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #2A2A37;
  padding: 10px;
`
const Title = styled.Text`
  color: white;
  font-size: 18px;
`

export default AddDevice