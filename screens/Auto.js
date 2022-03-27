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
    description: 'You can switch the auto mode light here',
    icon: 'lightbulb-on-outline'
  },
  {
    id: 1,
    title: 'Security Mode',
    description: 'You can switch the security mode hereYou can switch the security mode here',
    icon: 'security'
  },
  {
    id: 2,
    title: 'Auto Light Mode',
    description: 'You can switch the auto mode light here',
    icon: 'lightbulb-on-outline'
  },{
    id: 3,
    title: 'Auto Light Mode',
    description: 'You can switch the auto mode light here',
    icon: 'lightbulb-on-outline'
  },{
    id: 4,
    title: 'Auto Light Mode',
    description: 'You can switch the auto mode light here',
    icon: 'lightbulb-on-outline'
  }
]

const Auto = (props) => {
  return (
    <>
      <Header title="Mode"/>
      <AddBtn >
        <IonIcon name="add-circle" size={34} color="orange" onPress={()=>props.navigation.navigate('AddMode')}/>
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
              icon= {item.icon}
              title = {item.title}
              description = {item.description}
              key = {item.id}
            />)
          })
        }
      </ModeContainer>
    </>
  )
}

const AddBtn = styled.View`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-right:10px;
  background-color: #2A2A37;
  width: 100%;
  height: 40px;
`
const ModeContainer = styled.ScrollView`
  flex: 1;
  padding: 10px;
  background-color: white;
`
export default Auto