export const isInvalidOperation = (value, output) => {
  const operators = ['/', '*', '+', '-', '.']
  return (
    (operators.includes(value) && output === '') ||
    (operators.includes(value) && operators.includes(output.slice(-1)))
  )
}
