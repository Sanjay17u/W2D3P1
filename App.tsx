import { useEffect, useState } from 'react'
import React, { Text, View } from 'react-native'


function App() {

  const [showText, setShowText] = useState(false)

  useEffect(function () {
    setTimeout(function () {
      setShowText(true)
    }, 5000)
  },[])  

  return (
    <>
      <View>
        {showText && <Text>Hello</Text>}
      </View>
    </>
  )
}


export default App