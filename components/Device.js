import { View, Text, Switch } from 'react-native'
import React, {useState} from 'react'
import styled from 'styled-components'
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const Device = (props) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <Container>
      <Row>
        <Icon>
          <MCIcon name='lightbulb-outline' color={'white'} size={30}/>
        </Icon>
        <Switch
          style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }], marginRight:5 }}
          trackColor={{ false: "gray", true: "orange" }}
          thumbColor={isEnabled ? "white" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </Row>
      <Name>{props.device.name}</Name>
    </Container>
  )
}

const Name = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-top: 10px;
  margin-left: 5px;
`
const Icon = styled.View`
  background-color: orange;
  border-radius: 100px;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Row = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const Container = styled.View`
  width: 49%;
  background-color: #F0F0F0;
  border-radius: 5px;
  margin: 5px 0;
  padding: 10px;
`

export default Device