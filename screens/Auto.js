import { ScrollView, View, Text } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import styled from 'styled-components/native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import ModeItem from '../components/ModeItem';

const autoItems = [
  {
    id: 0,
    title: 'Auto Light Mode',
    description: 'You can switch the auto mode light here'
  },
  {
    id: 1,
    title: 'Security Mode',
    description: 'You can switch the security mode here'
  },
  {
    id: 2,
    title: 'Auto Light Mode',
    description: 'You can switch the auto mode light here'
  },{
    id: 3,
    title: 'Auto Light Mode',
    description: 'You can switch the auto mode light here'
  },{
    id: 4,
    title: 'Auto Light Mode',
    description: 'You can switch the auto mode light here'
  }
 
]

const Auto = () => {

  const addSomething = () => {
    alert('add something');
  }
  return (
    <ScrollView>
      <Header title="Mode"/>
      <AddBtn >
        <IonIcon name="add-circle" size={34} color="orange" onPress={()=>addSomething()}/>
      </AddBtn>
      <ModeContainer style={{shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,}}>
        {
          autoItems.map((item)=>{
            return(
            <ModeItem
              title = {item.title}
              description = {item.description}
              key = {item.id}
            />)
          })
        }
      </ModeContainer>
    </ScrollView>
  )
}

const AddBtn = styled.View`
  display: flex;
  align-items: flex-end;
  padding-right:10px;
  background-color: #2A2A37;
  width: 100%;
`
const ModeContainer = styled.View`
  
  background-color: white;
`
export default Auto