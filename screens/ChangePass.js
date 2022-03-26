import { View, Text, Image } from 'react-native'
import React, {useState} from 'react'
import styled from 'styled-components'

const ChangePass = (props) => {
  const [targetInput, setTargetInput] = useState('')
  const [curPass, setCurPass] = useState('')
  const [newPass, setNewPass] = useState('')
  const [confirmNewPass, setConfirmNewPass] = useState('')
  return (
    <>
      <View style={{padding: 10}}>
        <Field>Current Password</Field>
        <Input 
          style={{borderBottomColor: targetInput===0?'black':'#e1e1e1'}}
          onChangeText={setCurPass}
          value={curPass}
          secureTextEntry={true}
          onFocus={ () => setTargetInput(0) }
        />
        <Field>New Password</Field>
        <Input 
          style={{borderBottomColor: targetInput===1?'black':'#e1e1e1'}}
          onChangeText={setNewPass}
          value={newPass}
          secureTextEntry={true}
          onFocus={ () => setTargetInput(1) }
        />
        <Field>Confirm New</Field>
        <Input 
          style={{borderBottomColor: targetInput===2?'black':'#e1e1e1'}}
          onChangeText={setConfirmNewPass}
          value={confirmNewPass}
          secureTextEntry={true}
          onFocus={ () => setTargetInput(2) }
        />
      </View>
      <ComboBtn>
        <BtnSave color='#AFAFAF'><Text style={{color: 'white'}} onPress={()=>props.onBack()}>Back</Text></BtnSave>
        <BtnSave onPress={()=>{alert('Your new pass: '+ newPass)}}><Text style={{color: 'white'}}>Save</Text></BtnSave>
      </ComboBtn>
    </>
  )
}
const BtnSave = styled.Pressable`
  width: 100px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: ${props=>props.color?props.color:'orange'};
`
const Field = styled.Text`
  color: gray;
  font-size: 16px;
`
const Input = styled.TextInput`
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-color: #e1e1e1;
  padding: 10px 0;
  margin-bottom: 10px;
  font-size: 16px;
`
// const Avatar = styled.View`
//   padding: 20px;
//   background-color: #2A2A37;
// `
// const Title = styled.Text`
//   color: white;
//   font-size: 20px;
//   font-weight: bold;
// `
// const Img = styled(Image)`
//   width: 150px;
//   height: 150px;
//   border-radius: 100px;
//   margin: 0 auto;
// `
const ComboBtn = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
`
export default ChangePass