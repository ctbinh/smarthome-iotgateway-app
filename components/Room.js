import React from 'react'
import styled from 'styled-components'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text } from 'react-native';

const Room = (props) => {
  return (
    <Container style={{shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,}}
      onPress={props.onPress}    
    >
      <Icon name={props.room.icon} size={70} color='orange'/>
      <Text style={{fontWeight:'bold', fontSize: 18}}>{props.room.name}</Text>
      {/* <Text style={{color:'gray'}}>x{props.room.devices.length} Devices</Text> */}
    </Container>
  )
}

const Container = styled.Pressable`
  margin: 5px 0;
  width: 49%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: white;
  border-radius: 10px;
  height: 140px;
`

export default Room