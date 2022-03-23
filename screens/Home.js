import React, { useState } from 'react'
import Header from '../components/Header'
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import Room from '../components/Room';

const Home = () => {
  const [targetTab, setTargetTab] = useState(0)
  const changeTab = (num) => {
    setTargetTab(num);
  }
  const addSomething = () => {
    alert('add something');
  }
  return (
    <Container>
      <Header title='Your Home'/>
      <NavBar>
        <ComboBtn>
          <Btn onPress={()=>changeTab(0)} target={targetTab===0}>ROOMS</Btn>
          <Btn onPress={()=>changeTab(1)} target={targetTab===1}>DEVICES</Btn>
        </ComboBtn>
        <AddBtn name="add-circle" size={34} color="orange" onPress={()=>addSomething()}/>
      </NavBar>
      {targetTab===0 ? 
        <Rooms>
          <Room name='Living Room' numDevice={1} logo='table-chair'/>
          <Room name='Kitchen' numDevice={2} logo='microwave'/>
          <Room name='Bathroom' numDevice={0} logo='shower'/>
        </Rooms> :
        <Devices></Devices>
      }
    </Container>
  )
}

const Devices = styled.View`
  display: flex;
  flex-wrap: wrap;
  background-color: red;
  min-height: 100px;
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
  border-bottom-width: ${props=>props.target? 4:0};
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
const AddBtn = styled(Icon)`
  margin-right: 10px;
`

export default Home