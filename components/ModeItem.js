import React, { useState } from 'react'
import { View, Text, Switch } from 'react-native'
import styled from 'styled-components/native';


const ModeItem = (props) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = ()=> setIsEnabled(prev => !prev)

    return (
        <ModeContainerItem>
            <TitleContainer>
                <Title>{props.title}</Title>
                <Switch
                    style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }], marginRight: 20 }}
                    trackColor={{ false: "gray", true: "orange" }}
                    thumbColor={isEnabled ? "white" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </TitleContainer>
            <DescriptionContainer>
                <ItemDescription>
                    {props.description}
                </ItemDescription>
            </DescriptionContainer>
        </ModeContainerItem>
    )
}

const ModeContainerItem = styled.View`
    width: 90%;
    background-color: #F0F0F0;
    margin: 20px auto;
    padding:10px 0 50px 20px;
    border-radius: 10px;
`


const TitleContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`

const Title = styled.Text`
    font-size: 20px;
    font-weight: 600;
    
`

const DescriptionContainer = styled.View`

`

const ItemDescription = styled.Text`

`
export default ModeItem