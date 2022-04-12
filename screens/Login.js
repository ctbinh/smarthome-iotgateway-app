import { View, Text, Image, ImageBackground, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import styled from 'styled-components'
import Icon from 'react-native-vector-icons/Ionicons'
import {login} from '../service/axios'

const LoginPage = (props) => {
  const [targetInput, setTargetInput] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [targetTab, setTargetTab] = useState(0)

  const handleSubmit = async () => {
    const formData = {
        username: username,
        password: password
    }
    const res = await login(formData);
    if (res.status == "OK") props.navigation.navigate('Navigation')
    else alert("Wrong input")
  }

  return (
    <Container source={require('../components/images/bg.jpg')} resizeMode="cover">
      <Layer></Layer>
      <Box>
        <View style={{alignItems: 'center'}}>
          <Icon name='home-outline' size={120} color='orange'/>
          <Text style={{color: 'white', fontSize: 22, fontWeight: 'bold'}}>Smart Home</Text>
        </View>
          {targetTab===0 ? 
          <>
            <BoxInput>
              <Input 
                style={{borderBottomColor: targetInput===0?'white':'gray'}}
                onChangeText={setUsername}
                value={username}
                onFocus={ () => setTargetInput(0) }
                placeholder="Username"
                placeholderTextColor="#c1c1c1"
              />
              <Input 
                style={{borderBottomColor: targetInput===1?'white':'gray'}}
                onChangeText={setPassword}
                value={password}
                onFocus={ () => setTargetInput(1) }
                placeholder="Password"
                placeholderTextColor="#c1c1c1"
                secureTextEntry={true}
              />
            </BoxInput>
            
            <Btn color='orange' onPress={handleSubmit}>
              <Text style={{color:'white', fontSize: 16}}>Login</Text>
            </Btn>
            <Text style={{color:'white', fontSize:16}}>
              New here? <Text style={{color:'orange'}} onPress={()=>setTargetTab(1)}>Sign Up</Text>
            </Text>
          </> : 
          <>
            <BoxInput>
              <Input 
                style={{borderBottomColor: targetInput===0?'white':'gray'}}
                onChangeText={setUsername}
                value={username}
                onFocus={ () => setTargetInput(0) }
                placeholder="Username"
                placeholderTextColor="#c1c1c1"
              />
              <Input 
                style={{borderBottomColor: targetInput===1?'white':'gray'}}
                onChangeText={setPassword}
                value={password}
                onFocus={ () => setTargetInput(1) }
                placeholder="Password"
                placeholderTextColor="#c1c1c1"
                secureTextEntry={true}
              />
              <Input 
                style={{borderBottomColor: targetInput===2?'white':'gray'}}
                onChangeText={setConfirmPassword}
                value={confirmPassword}
                onFocus={ () => setTargetInput(2) }
                placeholder="Confirm Password"
                placeholderTextColor="#c1c1c1"
                secureTextEntry={true}
              />
            </BoxInput>
            <Btn color='orange' ><Text style={{color:'white', fontSize: 16}}>Create Account</Text></Btn>
            <Text style={{color:'white', fontSize:16}}>
              Already have an account? <Text style={{color:'orange'}} onPress={()=>setTargetTab(0)}>Sign In</Text>
            </Text>
          </>}
      </Box>
    </Container>
  )
}

const Btn = styled.Pressable`
  width: 70%;
  border-radius: 10px;
  margin: 0 auto;
  padding: 20px;
  align-items: center;
  background-color: ${props=>props.color?props.color:'#2A2A37'};
`
const BoxInput = styled.View`
  width: 100%;
  padding: 20px;
`
const Input = styled.TextInput`
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-color: #e1e1e1;
  padding: 10px 0;
  margin-bottom: 10px;
  font-size: 16px;
  color: white;
`
const Box = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  position: absolute;
  padding: 100px 10px;
`
const Layer = styled.View`
  background-color: black;
  flex: 1;
  opacity: 0.4;
`
const Container = styled.ImageBackground`
  flex: 1;
`
export default LoginPage