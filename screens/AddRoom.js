import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const AddRoom = () => {
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
  const [roomName, setRoomName] = useState('')
  const [targetIcon, setTagetIcon] = useState(0)
  return (
    <View>
      <Header title='Your Home'/>
      <NavBar>
        <Icon name='chevron-left' size={28} color='white'/>
        <Title>Add Room</Title>
        <Text/>
      </NavBar>
      <Form>
        <Field>Enter room's name</Field>
        <Input 
          onChangeText={setRoomName}
          value={roomName}
          placeholder="Your room name..."
          keyboardType="text"
        />
        <Field>Select room's icon</Field>
        {roomIcons.map((roomIcon) => {
          return (
            <RoomItem onPress={()=>setTagetIcon(roomIcon.id)}>
              <RoomIcon style={{backgroundColor: targetIcon===roomIcon.id ? 'orange':'#F0F0F0', color:targetIcon===roomIcon.id ? 'white':'gray'}} size={60} name={roomIcon.icon}/>
              <Text style={{fontWeight:'bold', color: targetIcon===roomIcon.id? 'orange':'black'}}>{roomIcon.name}</Text>
            </RoomItem>)
        })}
      </Form>
      <SaveBtn><Button color={'#2A2A37'} title='Save' onPress={()=> alert(roomName)}/></SaveBtn>
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
  padding: 5px 10px;
`

export default AddRoom