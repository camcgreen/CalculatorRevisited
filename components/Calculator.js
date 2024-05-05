import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { BUTTON_VALUES } from '../utils/constants'
import { useCalculator } from '../hooks/useCalculator'

const Calculator = () => {
  const { output, updateOutput, deleteLastChar, calculate, reset } =
    useCalculator()

  return (
    <View style={styles.container}>
      <View style={styles.output}>
        <Text style={styles.outputText}>{output || '0'}</Text>
      </View>
      <View style={styles.input}>
        {BUTTON_VALUES.map((buttonRow, rowIndex) => (
          <View style={styles.row} key={rowIndex}>
            {buttonRow.map((buttonValue) => (
              <TouchableOpacity
                title={buttonValue}
                style={StyleSheet.flatten([
                  styles.button,
                  buttonValue === 'DEL' && styles.delButton,
                  buttonValue === 'RESET' && styles.resetButton,
                  buttonValue === '=' && styles.equalsButton,
                ])}
                onPress={() => {
                  switch (buttonValue) {
                    case 'DEL':
                      deleteLastChar()
                      break
                    case 'RESET':
                      reset()
                      break
                    case '=':
                      calculate()
                      break
                    default:
                      updateOutput(buttonValue)
                  }
                }}
                key={buttonValue}
              >
                <Text
                  style={
                    buttonValue === 'RESET' ||
                    buttonValue === '=' ||
                    buttonValue === 'DEL'
                      ? styles.lightText
                      : styles.darkText
                  }
                >
                  {buttonValue}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
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
