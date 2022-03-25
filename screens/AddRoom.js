import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const AddRoom = ({navigation, route}) => {
  const {params} = route
  const addType = params.add
  const roomIcons = [
    {
      id: 0,
      name: 'Kitchen',
      icon: 'microwave'
    },
    {
      id: 1,
      name: 'Bedroom',
      icon: 'bed-queen-outline'
    },
    {
      id: 2,
      name: 'Bathroom',
      icon: 'shower'
    },
    {
      id: 3,
      name: 'Office',
      icon: 'desk'
    },
    {
      id: 4,
      name: 'TV Room',
      icon: 'television'
    },
    {
      id: 5,
      name: 'Living Room',
      icon: 'table-chair'
    },
    {
      id: 6,
      name: 'Garage',
      icon: 'garage'
    },
    {
      id: 7,
      name: 'Toilet',
      icon: 'toilet'
    },
    {
      id: 8,
      name: 'Kid Room',
      icon: 'baby'
    }
  ]
  const deviceIcons = [
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
  const [name, setName] = useState('')
  const [targetIcon, setTagetIcon] = useState(0)
  return (
    <View>
      <View style={{backgroundColor:'#2A2A37'}}>
        <NavBar>
          <Icon name='chevron-left' size={28} color='white'
            onPress={()=>navigation.goBack()}/>
          <Title>{addType==='room'? 'Add Room':'Add Device'}</Title>
          <Text/>
        </NavBar>
      </View>
      <Form>
        <Field>{addType==='room'? "Enter room's name":"Enter device's name"}</Field>
        <Input 
          onChangeText={setName}
          value={name}
          placeholder={addType==='room'? "Your room name...":"Your device name..."}
        />
        <Field>{addType==='room'? "Select room's icon":"Select device's icon"}</Field>
        {addType==='room' ? roomIcons.map((roomIcon) => {
          return (
            <RoomItem key={roomIcon.id} onPress={()=>setTagetIcon(roomIcon.id)}>
              <RoomIcon style={{backgroundColor: targetIcon===roomIcon.id ? 'orange':'#F0F0F0', color:targetIcon===roomIcon.id ? 'white':'gray'}} size={60} name={roomIcon.icon}/>
              <Text style={{fontWeight:'bold', color: targetIcon===roomIcon.id? 'orange':'black'}}>{roomIcon.name}</Text>
            </RoomItem>)
        }) :
        deviceIcons.map((deviceIcon) => {
          return (
            <RoomItem key={deviceIcon.id} onPress={()=>setTagetIcon(deviceIcon.id)}>
              <RoomIcon style={{backgroundColor: targetIcon===deviceIcon.id ? 'orange':'#F0F0F0', color:targetIcon===deviceIcon.id ? 'white':'gray'}} size={60} name={deviceIcon.icon}/>
              <Text style={{fontWeight:'bold', color: targetIcon===deviceIcon.id? 'orange':'black'}}>{deviceIcon.name}</Text>
            </RoomItem>)
        })}
      </Form>
      <SaveBtn><Button color={'#2A2A37'} title='Save' onPress={()=> alert(name)}/></SaveBtn>
    </View>
  )
}

const Field = styled.Text`
  color: gray;
  width: 100%;
  margin-bottom: 10px;
`
const Input = styled.TextInput`
  width: 100%;
  border: 1px solid #e1e1e1;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
`
const RoomIcon = styled(Icon)`
  border-radius: 50px;
  padding: 20px;
`
const RoomItem = styled.Pressable `
  display: flex;
  align-items: center;
  width: 33%;
  margin-bottom: 15px;
`
const Form = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 10px;
`
const SaveBtn = styled.View`
  width: 40%;
  margin: 20px auto;
  font-size: 16px;
`
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

export default AddRoom