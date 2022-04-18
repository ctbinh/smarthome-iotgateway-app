import { ScrollView, View, Text } from 'react-native'
import React, {useState, useEffect} from 'react'
import Header from '../components/Header'
import styled from 'styled-components/native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import ModeItem from '../components/ModeItem';

import { loadModesByUser, updateMode } from "../service/axios"

const Auto = (props) => {
  const {id} = props
  const [ModeData, setModeData] = useState([
    {
      id: "0",
      isActive: false,
      title: 'Light Mode',
      icon: 'lightbulb-on-outline',
      description: 'You can switch auto mode on light here'
    }
  ])
  useEffect( () => {
    setTimeout(async()=> {
    const listModes = await loadModesByUser(id)
    const lisst = listModes.map( item => {
        let form = {}
        if (item.name == "light-mode") {
            form = {
                title : 'Light Mode',
                icon : 'lightbulb-on-outline',
                description : 'You can switch light mode here'
            }
        } else if (item.name == "security-mode") {
            form = {
                title : 'Security Mode',
                icon : 'security',
                description : 'You can switch security mode here'
            }
        } else if (item.name == "fan-mode") {
            form = {
                title : 'Fan Mode',
                icon : 'security',
                description : 'You can switch fan mode here'
            }
        }
        return {
            id: item._id,
            isActive: item.isActive,
            ...form
        }
    })
    setModeData(lisst)
    // console.log(lisst)
  }, 1000)
  },[ModeData])

  const handleChange = async (modeId, formData) => {
    setModeData(ModeData.map( item => {
        if (item.id == modeId) item.isActive = formData.isActive
        return {
            id: item.id,
            isActive: item.isActive,
            ...item
        }
    }))
    const res = await updateMode(modeId, formData)
    // console.log(res)
}

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
          ModeData.map((item)=>{
            return(
            <ModeItem
              icon= {item.icon}
              title = {item.title}
              description = {item.description}
              key = {item.id}
              id = {item.id}
              isActive = {item.isActive}
              handleChange = {handleChange}
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