import { useState } from 'react'
import { isInvalidOperation } from '../utils/helpers'

export const useCalculator = () => {
  const [output, setOutput] = useState('')

  const updateOutput = (value) => {
    if (isInvalidOperation(value, output)) {
      return
    }
    setOutput((prevOutput) => prevOutput + value)
  }

  const deleteLastChar = () => {
    setOutput((prevOutput) => prevOutput.slice(0, -1))
  }

  const calculate = () => {
    setOutput((prevOutput) => eval(prevOutput).toString())
  }

  const reset = () => {
    setOutput('')
  }

  return { output, updateOutput, deleteLastChar, calculate, reset }
}
