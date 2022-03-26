import { View, Text, Image, Button} from 'react-native'
import React, {useState} from 'react'
import styled from 'styled-components'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {Picker} from '@react-native-picker/picker';
import ChangePass from './ChangePass';

const Account = () => {
  const user = {
    username: 'ctbinh',
    email: 'binh@gmail.com',
    phone: '(264)-748-9228',
    gender: 'male',
    birthday: '01/01/2001'
  }
  const [email, setEmail] = useState(user.email)
  const [phone, setPhone] = useState(user.phone)
  const [gender, setGender] = useState(user.gender);
  const [targetInput, setTargetInput] = useState('')
  const [date, setDate] = useState(user.birthday)
  const [targetTab, setTargetTab] = useState(0)

  const changeGender = (gender) => {
    setGender(gender)
    setTargetInput(2)
  }
  const onBack = () => {
    setTargetTab(0)
  }
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Avatar>
        <Title>{targetTab===0? 'Information':'Change Password'}</Title>
        <Img source={require('../components/images/avatar.jpg')} />
      </Avatar>
      {targetTab===0? 
      <>
      <View style={{padding: 10}}>
        <Field>Username</Field>
        <Input 
          value={user.username}
          editable={false}
        />
        <Field>Email</Field>
        <Input 
          style={{borderBottomColor: targetInput===0?'black':'#e1e1e1'}}
          onChangeText={setEmail}
          value={email}
          onFocus={ () => setTargetInput(0) }
        />
        <Field>Phone</Field>
        <Input 
          style={{borderBottomColor: targetInput===1?'black':'#e1e1e1'}}
          onChangeText={setPhone}
          value={phone}
          onFocus={ () => setTargetInput(1) }
          keyboardType='number-pad'
        />
        <Field>Gender</Field>
        <Select 
          style={{borderBottomColor: targetInput===2?'black':'#e1e1e1'}}>
          <Picker
            selectedValue={gender}
            onValueChange={(itemValue, itemIndex) => changeGender(itemValue)}
          >
            <Picker.Item onFocus={ () => setTargetInput(2) } label="Male" value="male" />
            <Picker.Item label="Female" value="female" />
            <Picker.Item label="Other" value="other" />
          </Picker>
        </Select>
        <Field>Date of birth</Field>
        <Input 
          style={{borderBottomColor: targetInput===3?'black':'#e1e1e1'}}
          onChangeText={setDate}
          value={date}
          onFocus={ () => setTargetInput(3) }
        />
        <BtnSave onPress={()=>{alert('Saving information')}}><Text style={{color: 'white'}}>Save</Text></BtnSave>
      </View>
      <Btn onPress={()=>setTargetTab(1)}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon name='lock-outline' size={28}/>
          <Text style={{fontSize: 16, marginLeft: 10}}>Change password</Text>
        </View>
        <Icon name='chevron-right' size={30}/>
      </Btn>
      <Signout onPress={()=>{alert('Logging out')}}><Text style={{fontSize: 16, color:'red'}}>Sign out</Text></Signout>
      </> : <ChangePass onBack={()=>onBack()}/>
    }
    </View>
  )
}

const BtnSave = styled.Pressable`
  width: 100px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin-left: auto;
  background-color: ${props=>props.color?props.color:'#2A2A37'};
`
const Signout = styled.Pressable`
  padding: 10px;
  align-items: center;
  justify-content: center;
  border: 1px solid #e1e1e1;
  border-top-width: 0;
  height: 60px;
`
const Btn = styled.Pressable`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px;
  height: 60px;
  border: 1px solid #e1e1e1;
`
const Field = styled.Text`
  color: gray;
  font-size: 16px;
`
const Avatar = styled.View`
  padding: 20px;
  background-color: #2A2A37;
`
const Title = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: bold;
`
const Img = styled(Image)`
  width: 150px;
  height: 150px;
  border-radius: 100px;
  margin: 0 auto;
`
const Input = styled.TextInput`
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-color: #e1e1e1;
  padding: 10px 0;
  margin-bottom: 10px;
  font-size: 16px;
`
const Select = styled.Pressable`
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-color: #e1e1e1;
  margin-bottom: 10px;
  font-size: 16px;
`

export default Account