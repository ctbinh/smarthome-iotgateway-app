import React, { useState } from 'react'
import Header from '../components/Header'
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';
import Room from '../components/Room';
import { Text, View} from 'react-native';
import Device from '../components/Device';

const Home = (props) => {
  const [targetTab, setTargetTab] = useState(1)
  const [targetDevice, setTargetDevice] = useState('Light')
  const changeTab = (num) => {
    setTargetTab(num);
  }
  const addSomething = () => {
    alert('add something');
  }
  const changeDevice = (device) => {
    setTargetDevice(device)
  }
  const devices = [
    {
      id: 0,
      name: 'Light',
      icon: 'lightbulb-outline'
    },
    {
      id: 1,
      name: 'Thermostat',
      icon: 'thermometer'
    },
    {
      id: 2,
      name: 'Fan',
      icon: 'fan'
    },
    {
      id: 3,
      name: 'Speaker',
      icon: 'speaker'
    },
    {
      id: 4,
      name: 'Door',
      icon: 'door'
    }
  ]
  const rooms = [
    {
      id: 0,
      name: 'Living Room',
      devices: [
        {
        type:'light',
        status: 0,
        name: 'Single led 1',
        icon: 'light'
        },
        {
          type:'fan',
          status: 1,
          name: 'Fan 1',
          icon: 'fan'
        }
      ]
    }
  ]
  
  return (
    <Container>
      <View style={{backgroundColor:'#2A2A37'}}>
        <Header title='Your Home'/>
        <NavBar>
          <ComboBtn>
            <Btn onPress={()=>changeTab(0)} style={{zIndex: 0.5}} target={targetTab===0}>ROOMS</Btn>
            <Btn onPress={()=>changeTab(1)} style={{zIndex: 0.5}} target={targetTab===1}>DEVICES</Btn>
          </ComboBtn>
          <AddBtn name="add-circle" size={34} color="orange" 
            onPress={()=>props.navigation.navigate('AddRoom', {add: 'room'})}/>
        </NavBar>
      </View>
      {targetTab===0 ? 
        <Rooms>
          <Room name='Living Room' numDevice={1} logo='table-chair' 
            onPress={()=>props.navigation.navigate('RoomDetail', {greeting:'this is params'})}/>
          <Room name='Kitchen' numDevice={2} logo='microwave'
            onPress={()=>props.navigation.navigate('RoomDetail', {greeting:'this is params'})}/>
          <Room name='Bathroom' numDevice={0} logo='shower'
            onPress={()=>props.navigation.navigate('RoomDetail', {greeting:'this is params'})}/>
        </Rooms> :
        <View >
          <Devices style={{shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,}}>
            { devices.map((device, key) => 
                <DeviceNav key={key} onPress={()=>changeDevice(device.name)}>
                  <Icon style={{color: targetDevice===device.name?'orange':'gray'}} name={device.icon} size={34}/>
                  <Text style={{color: targetDevice===device.name?'orange':'gray'}}>{device.name}</Text>
                </DeviceNav>
            )}
          </Devices>
          <BoxRoom style={{shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,}}>
            <Text style={{fontSize: 18, width: '100%'}}>Living Room</Text>
            <Device device={devices[0]}/>
            <Device device={devices[0]}/>
            <Device device={devices[0]}/>
          </BoxRoom>
          <BoxRoom style={{shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,}}>
            <Text style={{fontSize: 18, width: '100%'}}>Living Room</Text>
            <Device device={devices[0]}/>
            <Device device={devices[0]}/>
            <Device device={devices[0]}/>
          </BoxRoom>
          <BoxRoom style={{shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,}}>
            <Text style={{fontSize: 18, width: '100%'}}>Living Room</Text>
            <Device device={devices[0]}/>
            <Device device={devices[0]}/>
            <Device device={devices[0]}/>
          </BoxRoom>
        </View >
      }
    </Container>
  )
}

const BoxRoom = styled.View`
  padding: 5px 10px;
  margin: 5px 10px;
  background-color: white;
  border-radius: 5px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
`
const DeviceNav = styled.TouchableOpacity`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  width: 80px;
  padding: 15px 0;
  background-color: white;
`
const Devices = styled.View`
  display: flex;
  flex-direction: row;
  max-height: 80px;
  background-color: white;
  justify-content: space-between;
  margin-bottom: 5px;
`
const Rooms = styled.View`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 10px;
  justify-content: space-between;
  width: 100%;
`
const Container = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
`
const Btn = styled.Text`
  color: ${props => props.target?'white':'gray'};
  border-bottom-width: ${props=>props.target? '4px':'0px'};
  border-color: ${props=>props.target?'#FF9900':'white'};
  padding: 10px 10px;
  width: 100px;
  text-align: center;
`
const ComboBtn = styled.View`
  display: flex;
  flex-direction: row;
`
const NavBar = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #2A2A37;
`
const AddBtn = styled(IonIcon)`
  margin-right: 10px;
`

export default Home