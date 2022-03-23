import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{props.title}</Text>
      <Image style={styles.avatar} source={require('./images/avatar.jpg')} />
    </View>
  )
}

Header.defaultProps = {
  title: 'Hello World'
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: '#2A2A37',
    height: 60,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "white"
  }
})

export default Header