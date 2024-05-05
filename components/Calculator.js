import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useFonts } from 'expo-font'
import { OPERATIONS } from '../utils/constants'

const Calculator = () => {
  const [loaded] = useFonts({
    'LeagueSpartan-Bold': require('../assets/fonts/LeagueSpartan-Bold.ttf'),
  })

  const [output, setOutput] = useState('0')
  const [operand, setOperand] = useState(null)
  const [operator, setOperator] = useState(null)
  const [newOperand, setNewOperand] = useState(false)

  const handlePress = (value) => {
    if (output === '0' || newOperand) {
      setOutput(value)
      setNewOperand(false)
    } else {
      setOutput(output + value)
    }
  }

  const handleOperator = (op) => {
    setOperand(parseFloat(output))
    setOperator(op)
    setNewOperand(true)
  }

  const calculate = () => {
    if (operator && operand !== null) {
      switch (operator) {
        case OPERATIONS.plus:
          setOutput(String(operand + parseFloat(output)))
          break
        case OPERATIONS.minus:
          setOutput(String(operand - parseFloat(output)))
          break
        case OPERATIONS.multiply:
          setOutput(String(operand * parseFloat(output)))
          break
        case OPERATIONS.divide:
          setOutput(String(operand / parseFloat(output)))
          break
      }
      setOperator(null)
      setOperand(null)
    }
  }

  const clearOutput = () => {
    setOutput('0')
    setOperator(null)
    setOperand(null)
  }

  const deletePrevChar = () => {
    setOutput(output.slice(0, -1) || '0')
  }

  const generateButtons = (buttons) => {
    return buttons.map((button) => (
      <TouchableOpacity
        key={button.value}
        style={StyleSheet.flatten([
          styles.button,
          button.value === 'DEL' && styles.delButton,
          button.value === 'RESET' && styles.resetButton,
          button.value === '=' && styles.equalsButton,
        ])}
        onPress={() => button.handler(button.value)}
      >
        <Text
          style={
            button.value === 'RESET' ||
            button.value === '=' ||
            button.value === 'DEL'
              ? styles.lightText
              : styles.darkText
          }
        >
          {button.value}
        </Text>
      </TouchableOpacity>
    ))
  }

  if (!loaded) {
    return null
  }

  return (
    <View style={styles.container}>
      <View style={styles.output}>
        <Text style={styles.outputText}>{output}</Text>
      </View>
      <View style={styles.input}>
        <View style={styles.row}>
          {generateButtons([
            { value: '7', handler: handlePress },
            { value: '8', handler: handlePress },
            { value: '9', handler: handlePress },
            { value: 'DEL', handler: deletePrevChar },
          ])}
        </View>
        <View style={styles.row}>
          {generateButtons([
            { value: '4', handler: handlePress },
            { value: '5', handler: handlePress },
            { value: '6', handler: handlePress },
            { value: OPERATIONS.plus, handler: handleOperator },
          ])}
        </View>
        <View style={styles.row}>
          {generateButtons([
            { value: '1', handler: handlePress },
            { value: '2', handler: handlePress },
            { value: '3', handler: handlePress },
            { value: OPERATIONS.minus, handler: handleOperator },
          ])}
        </View>
        <View style={styles.row}>
          {generateButtons([
            { value: '.', handler: handlePress },
            { value: '0', handler: handlePress },
            { value: OPERATIONS.divide, handler: handleOperator },
            { value: OPERATIONS.multiply, handler: handleOperator },
          ])}
        </View>
        <View style={styles.row}>
          {generateButtons([
            { value: 'RESET', handler: clearOutput },
            { value: '=', handler: calculate },
          ])}
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  output: {
    width: '100%',
    marginBottom: 20,
    // padding: 40,
    padding: 25,
    paddingLeft: 0,
    borderRadius: 10,
    backgroundColor: 'hsl(224, 36%, 15%)',
  },
  outputText: {
    fontSize: 32,
    color: '#fcfdff',
    textAlign: 'right',
    fontFamily: 'LeagueSpartan-Bold',
  },
  input: {
    width: '100%',
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'hsl(223, 31%, 20%)',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  button: {
    flex: 1,
    aspectRatio: 1 / 1,
    margin: 5,
    borderRadius: 10,
    backgroundColor: 'hsl(30, 25%, 89%)',
    shadowColor: 'hsl(28, 16%, 65%)',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  delButton: {
    backgroundColor: 'hsl(225, 21%, 49%)',
    shadowColor: 'hsl(224, 28%, 35%)',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 1,
  },
  resetButton: {
    backgroundColor: 'hsl(225, 21%, 49%)',
    shadowColor: 'hsl(224, 28%, 35%)',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 1,
    aspectRatio: 2 / 1,
  },
  equalsButton: {
    backgroundColor: 'hsl(6, 63%, 50%)',
    shadowColor: 'hsl(6, 70%, 34%)',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 1,
    aspectRatio: 2 / 1,
  },
  lightText: {
    color: '#fcfdff',
    fontWeight: 'bold',
    fontSize: 20,
    fontFamily: 'LeagueSpartan-Bold',
  },
  darkText: {
    color: 'hsl(221, 14%, 31%)',
    fontWeight: 'bold',
    fontSize: 32,
    fontFamily: 'LeagueSpartan-Bold',
  },
})

export default Calculator
