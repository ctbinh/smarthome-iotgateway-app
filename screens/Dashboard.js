import { ScrollView, View, Text, Dimensions } from 'react-native'
import React, {useState, useEffect} from 'react'
import Header from '../components/Header'
import styled from 'styled-components/native';
import {
  LineChart,
} from "react-native-chart-kit";
import Icon from 'react-native-vector-icons/FontAwesome5';

import {loadDatasByDevice} from "../service/axios"

const Dashboard = () => {
  const [tempChartData, setTempChartData] = useState({
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
          Math.random() * 100,
          Math.random() * 100
        ]
      }
    ]
  });

  const [humidChartData, setHumidChartData] = useState({
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
          Math.random() * 100,
          Math.random() * 100
        ]
      }
    ]
  });

  const [dataForm, setData] = useState({
    temperature_1: 0,
    humidity_1: 0,
    gas_1: 0,
    temperature_chart_1: {
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
            Math.random() * 100,
            Math.random() * 100
          ]
        }
      ]
    },
    humid_chart_1: {
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
            Math.random() * 100,
            Math.random() * 100
          ]
        }
      ]
    }
  })  
  useEffect(() => {
    setTimeout( () => {
        Promise.all([
            loadDatasByDevice("temperature-1"),
            loadDatasByDevice("humidity-1"),
            loadDatasByDevice("gas-1")
        ]).then((data) => {
            const [tempNew, humidNew, gasNew] = data
            tempNew.reverse()
            humidNew.reverse()
            // console.log(tempNew.map(item => item.created.slice(11,19)))
            // console.log(tempNew.map(item => parseFloat(item.dataValue)))
            // console.log(tempList)
            // console.log(tempNew)            
            // // if (gas_1 >= 120 ) alert()
            // setTempChartData({
            //   // labels: tempList.map((item, index) => {
            //   //   if (index % 5 == 0)
            //   //     return item.created.slice(11,19)
            //   //   else return ""
            //   // }),
            //   labels: tempNew.map(item => item.created.slice(11,19)),
            //   datasets: [
            //     {
            //       data: tempNew.map(item => item.dataValue)
            //     }
            //   ]
            // })
            // setHumidChartData({
            //   // labels: humidList.map((item, index) => {
            //   //   if (index % 5 == 0)
            //   //     return item.created.slice(11,19)
            //   //   else return ""
            //   // }),
            //   labels: humidNew.map(item => item.created.slice(11,19)),
            //   datasets: [
            //     {
            //       data: humidNew.map(item => item.dataValue)
            //     }
            //   ]
            // })
            setData({
                temperature_1: tempNew[tempNew.length-1].dataValue,
                humidity_1: humidNew[humidNew.length-1].dataValue,
                gas_1: Math.ceil(gasNew[0].dataValue/10.23),
                temperature_chart_1: {
                  labels: tempNew.map((item, index) => {
                    if (index % 5 == 0)
                      return item.created.slice(11,19)
                    else return ""
                  }),
                  datasets: [
                    {
                      data: tempNew.map(item => parseFloat(item.dataValue))
                    }
                  ]
                },
                humid_chart_1: {
                  labels: humidNew.map((item, index) => {
                    if (index % 5 == 0)
                      return item.created.slice(11,19)
                    else return ""
                  }),
                  datasets: [
                    {
                      data: humidNew.map(item => parseFloat(item.dataValue))
                    }
                  ]
                }
            })
        })
    }, 1000)
    // console.log(dataForm)
  }, [dataForm])
  return (
    <ScrollView>
      <Header title='Statics' />
      <Container>
        <TitleContainer>
          <Title>Temperature: {dataForm.temperature_1}
          </Title>
          <IconChart>
            <Icon name="temperature-low" size={25} color='orange' />
          </IconChart>
        </TitleContainer>
        <TitleContainer>
          <Title>Humidity: {dataForm.humidity_1}
          </Title>
          <IconChart>
            <Icon name="hand-holding-water" size={25} color='orange' />
          </IconChart>
        </TitleContainer>
        <TitleContainer>
          <Title>Gas: {dataForm.gas_1}%
          </Title>
        </TitleContainer>
        <ChartContainer>
          <TitleContainer>
            <Title>Temperature Chart
            </Title>
            <IconChart>
              <Icon name="temperature-low" size={25} color='orange' />
            </IconChart>
          </TitleContainer>
          <LineChart
            data={dataForm.temperature_chart_1}
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
            data={dataForm.humid_chart_1}
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