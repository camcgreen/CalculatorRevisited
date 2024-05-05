import React from 'react'
import { View, StyleSheet } from 'react-native'
import { useFonts } from 'expo-font'
import Calculator from './components/Calculator.js'

export default function App() {
  const [loaded] = useFonts({
    // Spartan no longer available on Google Fonts
    'LeagueSpartan-Bold': require('./assets/fonts/LeagueSpartan-Bold.ttf'),
  })

  if (!loaded) {
    return null
  }

  return (
    <View style={styles.container}>
      <Calculator />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'hsl(222, 26%, 31%)',
    fontFamily: 'LeagueSpartan-Bold',
  },
})
