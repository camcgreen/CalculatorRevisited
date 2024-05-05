import { renderHook, act } from '@testing-library/react-hooks'
import { useCalculator } from './useCalculator'

test('Calculator should initialize with empty output', () => {
  const { result } = renderHook(() => useCalculator())
  expect(result.current.output).toBe('')
})

test('Calculator should update output correctly', () => {
  const { result } = renderHook(() => useCalculator())

  act(() => {
    result.current.updateOutput('2')
    result.current.updateOutput('+')
    result.current.updateOutput('2')
  })

  expect(result.current.output).toBe('2+2')
})

test('useCalculator should delete last character correctly', () => {
  const { result } = renderHook(() => useCalculator())

  act(() => {
    result.current.updateOutput('2')
    result.current.updateOutput('+')
    result.current.updateOutput('2')
    result.current.deleteLastChar()
  })

  expect(result.current.output).toBe('2+')
})

test('Calculator should calculate correctly', () => {
  const { result } = renderHook(() => useCalculator())

  act(() => {
    result.current.updateOutput('2')
    result.current.updateOutput('/')
    result.current.updateOutput('2')
    result.current.calculate()
  })

  expect(result.current.output).toBe('1')
})

test('Calculator should reset correctly', () => {
  const { result } = renderHook(() => useCalculator())

  act(() => {
    result.current.updateOutput('2')
    result.current.updateOutput('+')
    result.current.updateOutput('2')
    result.current.reset()
  })

  expect(result.current.output).toBe('')
})
