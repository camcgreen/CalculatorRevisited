export const isInvalidOperation = (value, output) => {
  // 1. Prevent consecutive operators
  if (/[+\-\*\/]/.test(value) && /[+\-\*\/]/.test(output.slice(-1))) {
    return true
  }

  // 2. Prevent multiple decimal points in a number
  if (value === '.' && output.slice(-1) === '.') {
    return true
  }
}
