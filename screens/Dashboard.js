import { ScrollView, View, Text, Dimensions } from 'react-native'
import React, { useState } from 'react'
import Header from '../components/Header'
import styled from 'styled-components/native';
import {
  LineChart,
} from "react-native-chart-kit";
import Icon from 'react-native-vector-icons/FontAwesome5';

const chartData = [
  {
    labels: ["0", "2", "4", "6", "8", "10", "12", "14", "16", "18", "20", "22"],
    datasets: [
      {
        data: [
          1,2,3,4,5,6,7,8,9,10,11,12
        ]
      }
    ]
  },
  {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      data: [
        1,2,3,4,5,6,7
      ]
    }
  ]
},{
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [
    {
      data: [
        1,2,3,4,5,6,7,8,9,10,11,12
      ]
    }
  ]
},{
  labels: ["0", "2", "4", "6", "8", "10", "12", "14", "16", "18", "20", "22"],
  datasets: [
    {
      data: [
        1,2,3,4,5,6,7,8,9,10,11,12
      ]
    }
  ]
},
{
labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
datasets: [
  {
    data: [
      1,2,3,4,5,6,7
    ]
  }
]
},{
labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
datasets: [
  {
    data: [
      1,2,3,4,5,6,7,8,9,10,11,12
    ]
  }
]
}];

const Dashboard = () => {
  const [timeOptionTemp, setTimeOptionTemp] = useState(1);
  const [timeOptionHumi, setTimeOptionHumi] = useState(4);
  const [dataChartTemp, setDataChartTemp] = useState(chartData[0]);
  const [dataChartHumi, setDataChartHumi] = useState(chartData[3]);
  const handlePressTemp = (key)=>{
    setTimeOptionTemp(key);
    setDataChartTemp(chartData[key-1]);
  }

  const handlePressHumi = (key)=>{
    setTimeOptionHumi(key);
    setDataChartHumi(chartData[key-1]);
  }


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
            <TimeOptions>
              <TimeOption onPress={()=>handlePresstemp(1)}
              >
                <Text style={{ color: timeOptionTemp === 1 ? 'orange' : 'white' }}>Day</Text>
              </TimeOption>
              <TimeOption onPress={()=>handlePressTemp(2)}

              >
                <Text style={{ color: timeOptionTemp === 2 ? 'orange' : 'white'}}>Week</Text>
              </TimeOption>
              <TimeOption onPress={()=>handlePressTemp(3)}

              >
                <Text style={{ color: timeOptionTemp === 3 ? 'orange' : 'white' }}>Month</Text>
              </TimeOption>
            </TimeOptions>
          </TitleContainer>
          <LineChart
            data={dataChartTemp}
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
            <TimeOptions>
              <TimeOption onPress={()=>handlePressHumi(4)}
              >
                <Text style={{ color: timeOptionHumi === 4 ? 'orange' : 'white' }}>Day</Text>
              </TimeOption>
              <TimeOption onPress={()=>handlePressHumi(5)}

              >
                <Text style={{ color: timeOptionHumi === 5 ? 'orange' : 'white'}}>Week</Text>
              </TimeOption>
              <TimeOption onPress={()=>handlePressHumi(6)}

              >
                <Text style={{ color: timeOptionHumi === 6 ? 'orange' : 'white' }}>Month</Text>
              </TimeOption>
            </TimeOptions>
          </TitleContainer>
          <LineChart
            data={dataChartHumi}
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
const TimeOptions = styled.View`
  display: flex;
  flex-direction: row;
  margin-left: 40px;
`
const TimeOption = styled.TouchableOpacity`
  padding: 0 5px;
`

const ChartContainer = styled.View``

const IconChart = styled.View`  
  margin-left: 15px;

`
export default Dashboard