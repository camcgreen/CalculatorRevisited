import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { OPERATIONS } from '../utils/constants'

const Calculator = () => {
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

  return (
    <View style={styles.container}>
      <Text style={styles.output}>{output}</Text>
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
    fontSize: 40,
    width: '100%',
    marginBottom: 20,
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 50,
    backgroundColor: '#181f32',
    color: '#fcfdff',
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    flex: 1,
    aspectRatio: 1 / 1,
    margin: 4,
    borderRadius: 10,
    backgroundColor: '#e9e3d9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  delButton: {
    backgroundColor: '#647299',
  },
  resetButton: {
    backgroundColor: '#647299',
    aspectRatio: 2 / 1,
  },
  equalsButton: {
    backgroundColor: '#d13f30',
    aspectRatio: 2 / 1,
  },
  lightText: {
    color: '#fcfdff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  darkText: {
    color: '#181f32',
    fontWeight: 'bold',
    fontSize: 20,
  },
})

export default Calculator
