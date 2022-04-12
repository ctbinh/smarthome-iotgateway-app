import React, { useState } from 'react'
import { View, Text, Switch } from 'react-native'
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const ModeItem = (props) => {
    return (
        <ModeContainerItem>
            <ModeIcon name={props.icon} size={50}/>
            <View style={{width: '80%'}}>
                <TitleContainer>
                    <Title>{props.title}</Title>
                    <Switch
                        style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }], width:'20%' }}
                        trackColor={{ false: "gray", true: "orange" }}
                        thumbColor={props.isActive ? "white" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={() => props.handleChange(props.id, {isActive: !props.isActive})}
                        value={props.isActive}
                    />
                </TitleContainer>
                <ItemDescription>
                    {props.description}
                </ItemDescription>
            </View>
        </ModeContainerItem>
    )
}

const ModeIcon = styled(Icon)`
    width: 20%;
`
const ModeContainerItem = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    background-color: #F0F0F0;
    margin-bottom: 10px;
    padding: 20px;
    border-radius: 10px;
`
const TitleContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    width: 100%;
`

const Title = styled.Text`
    font-size: 20px;
    width: 80%;
    font-weight: 600;
`

const ItemDescription = styled.Text`
    width: 100%;
`
export default ModeItem