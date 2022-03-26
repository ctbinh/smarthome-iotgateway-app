import { ScrollView, View, Text, Dimensions } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import styled from 'styled-components/native';
import {
  LineChart,
} from "react-native-chart-kit";
import Icon from 'react-native-vector-icons/FontAwesome5';

const chartData = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      data: [
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100
      ]
    }
  ]
};

const Dashboard = () => {
  return (
    <ScrollView>
      <Header title='Statics' />
      <Container>
        <ChartContainer>
          <TitleContainer>
            <Title>Temperature Chart
            </Title>
            <IconChart>
              <Icon name="temperature-low" size={25} color='orange' />
            </IconChart>
          </TitleContainer>
          <LineChart
            data={chartData}
            width={Dimensions.get("window").width} // from react-native
            height={220}
            yAxisSuffix="&#8451;"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              decimalPlaces: 1, // optional, defaults to 2dp
              color: (opacity = 1) => `orange`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16
              },
              propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: "#ffa726"
              }
            }}
            bezier
            style={{
              marginVertical: 20,
              borderRadius: 16
            }}
          />

        </ChartContainer>
        <ChartContainer>
        <TitleContainer>
            <Title>Humidity Chart
            </Title>
            <IconChart>
              <Icon name="hand-holding-water" size={25} color='orange' />
            </IconChart>
          </TitleContainer>
          <LineChart
            data={chartData}
            width={Dimensions.get("window").width} // from react-native
            height={220}
            // yAxisLabel="$"
            yAxisSuffix="%"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              decimalPlaces: 1, // optional, defaults to 2dp
              color: (opacity = 1) => `orange`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16
              },
              propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: "#ffa726"
              }
            }}
            bezier
            style={{
              marginVertical: 20,
              borderRadius: 16
            }}
          />
        </ChartContainer>
      </Container>
    </ScrollView>
  )
}

const Container = styled.View`
  display: flex;
  width: 100%;

`
const TitleContainer = styled.View`
display: flex;
flex-direction: row;
align-items: center;
margin: 10px 0 10px 10px;
`

const Title = styled.Text`
  font-size: 20px;
  font-weight: 600;
`

const ChartContainer = styled.View``

const IconChart = styled.View`  
  margin-left: 15px;

`
export default Dashboard