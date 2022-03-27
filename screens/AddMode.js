import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'
import styled from 'styled-components'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const AddMode = ({navigation, route}) => {
  const roomIcons = [
    {
      id: 0,
      name: 'Light',
      icon: 'lightbulb-on-outline'
    },
    {
      id: 1,
      name: 'Security',
      icon: 'security'
    },
    {
      id: 2,
      name: 'Temperature',
      icon: 'thermometer'
    },
    {
      id: 3,
      name: 'Fire',
      icon: 'fire'
    },
    {
      id: 4,
      name: 'Humidity',
      icon: 'water-percent'
    },
    {
      id: 5,
      name: 'Fan',
      icon: 'fan'
    },
    {
      id: 6,
      name: 'Door',
      icon: 'door'
    },
    {
      id: 7,
      name: 'Smoke detector',
      icon: 'smoke-detector'
    },
    {
      id: 8,
      name: 'Another',
      icon: 'alert'
    }
  ]
  const [name, setName] = useState('')
  const [desc, setDesc] = useState('')
  const [targetIcon, setTagetIcon] = useState(0)
  return (
    <Container>
      <View style={{backgroundColor:'#2A2A37'}}>
        <NavBar>
          <Icon name='chevron-left' size={28} color='white'
            onPress={()=>navigation.goBack()}/>
          <Title>Add Mode</Title>
          <Text/>
        </NavBar>
      </View>
      <Form>
        <Field>Enter mode name</Field>
        <Input 
          onChangeText={setName}
          value={name}
          placeholder={"Your room name..."}
        />
        <Field>Description for mode</Field>
        <Input 
          onChangeText={setDesc}
          value={desc}
          placeholder={"Your room name..."}
        />
        <Field>Select mode icon</Field>
        {roomIcons.map((roomIcon) => {
          return (
            <RoomItem key={roomIcon.id} onPress={()=>setTagetIcon(roomIcon.id)}>
              <RoomIcon style={{backgroundColor: targetIcon===roomIcon.id ? 'orange':'#F0F0F0', color:targetIcon===roomIcon.id ? 'white':'gray'}} size={60} name={roomIcon.icon}/>
              <Text style={{fontWeight:'bold', color: targetIcon===roomIcon.id? 'orange':'black'}}>{roomIcon.name}</Text>
            </RoomItem>)
        })}
      </Form>
      <SaveBtn><Button color={'#2A2A37'} title='Save' onPress={()=> alert(name)}/></SaveBtn>
    </Container>
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
const Container = styled.View`
  flex: 1;
  background-color: white;
`

export default AddMode