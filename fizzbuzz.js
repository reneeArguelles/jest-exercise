const fizzbuzz = (number) => {
  if (!(Number.isInteger(number)) || number < 0) {
    throw new Error('Invalid Argument: must be a positive integer')
  }
  return `${number % 3 === 0 ? 'fizz' : ''}${number % 5 === 0 ? 'buzz' : ''}`
}

export default fizzbuzz
