import { View, Text } from 'react-native'
import React from 'react'
import styled from 'styled-components'
import Device from './Device'

const BoxRoom = (props) => {
  return (
    <Container style={{shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,}}>
      <Text style={{fontSize: 18, width: '100%'}}>{props.room.name}</Text>
      {props.room.devices.map((device, key)=> {
        return (
          <Device key={key} device={device}/>
        )
      })}
    </Container>
  )
}

const Container = styled.View`
  padding: 5px 10px;
  margin: 5px 10px;
  background-color: white;
  border-radius: 5px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
`
export default BoxRoom