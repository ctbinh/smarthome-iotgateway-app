import { View, Text, Switch } from 'react-native'
import React, {useState} from 'react'
import styled from 'styled-components'
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
// import ModeFanOffIcon from '@mui/icons-material/ModeFanOff';
// import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
// import ThermostatIcon from '@mui/icons-material/Thermostat';
// import InvertColorsIcon from '@mui/icons-material/InvertColors';
// import LightbulbIcon from '@mui/icons-material/Lightbulb';
// import GasMeterIcon from '@mui/icons-material/GasMeter';
// import SensorsIcon from '@mui/icons-material/Sensors';
// import SpeakerIcon from '@mui/icons-material/Speaker';

import {updateData} from "../service/axios"

const Device = (props) => {
  const [isEnabled, setIsEnabled] = useState(props.device.isActive);
  const handleChange = async (deviceName, data) => {
    setIsEnabled(!isEnabled)
    const res = await updateData(deviceName, data)
    console.log(res)
  };
  return (
    <Container>
      <Row>
        <Icon>
          <MCIcon name='lightbulb-outline' color={'white'} size={30}/>
          {/* {props.device.typeName==='fan'&& <ModeFanOffIcon/>}
          {props.device.typeName==='door'&& <MeetingRoomIcon/>}
          {props.device.typeName==='temperature'&& <ThermostatIcon/>}
          {props.device.typeName==='humidity'&& <InvertColorsIcon/>}
          {props.device.typeName==='room-light'&& <LightbulbIcon/>}
          {props.device.typeName==='gas'&& <GasMeterIcon/>}
          {props.device.typeName==='light-sensor'&& <SensorsIcon/>}
          {props.device.typeName==='buzzer'&& <SpeakerIcon/>} */}
        </Icon>
        <Switch
          style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }], marginRight:5 }}
          trackColor={{ false: "gray", true: "orange" }}
          thumbColor={isEnabled ? "white" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={()=>handleChange(props.device.name, {isActive: !props.device.isActive})}
          value={isEnabled}
          disabled={props.device.isModded}
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