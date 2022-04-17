import { View, Text } from 'react-native'
import React, {useEffect, useState} from 'react'
import Header from '../components/Header'
import styled from 'styled-components'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Device from '../components/Device'
import { loadDevicesByArea } from "../service/axios"
const RoomDetail = ({navigation, route}) => {
  const {params} = route
  const [listDevice, setlistDevice] = useState([])
  useEffect( () => {
    setTimeout( async () => {
      const listDevices = await loadDevicesByArea(params.targetRoomId)
      if (listDevices != "NOT OK") {
        setlistDevice(listDevices)
        // console.log(listDevices)
      }
    }, 1000)
  }, [params.targetRoomId, listDevice])

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
        {listDevice.map((device)=> {
          if(device.typeName !== 'light-sensor' && device.typeName !== 'buzzer')
          return (<Device key={device._id} setlistDevice={setlistDevice} listDevice={listDevice} device={device}/>)
        })}
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