import { useState } from 'react'
import { isInvalidOperation } from '../utils/helpers'

export const useCalculator = () => {
  const [output, setOutput] = useState('')

  const updateOutput = (value) => {
    if (isInvalidOperation(value, output)) {
      return
    }
    setOutput(output + value)
  }

  const deleteLastChar = () => {
    if (output === '') return
    setOutput(output.slice(0, -1))
  }

  const calculate = () => {
    setOutput(eval(output).toString())
  }

  const reset = () => {
    setOutput('')
  }

  return { output, updateOutput, deleteLastChar, calculate, reset }
}
