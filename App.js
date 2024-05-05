import React from 'react'
import { View, StyleSheet } from 'react-native'
import Calculator from './components/Calculator.js'

export default function App() {
  return (
    <View style={styles.container}>
      <Calculator />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3b4664',
  },
})
