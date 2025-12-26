import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'


function App() {

  const [showText, setShowText] = useState('Hello')

  useEffect(function () {
    setTimeout(function () {
      setShowText('Welcome Boiii')
    }, 5000)
  },[])  

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.mainText}>{ showText }</Text>
      </View>
    </>
  )
}


export default App



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center'
  },

  mainText: {
    color: 'white',
    fontWeight: '800',
    fontSize: 20
  }
})