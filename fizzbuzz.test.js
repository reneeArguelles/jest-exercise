import { expect, describe, test } from '@jest/globals'
import fizzbuzz from './fizzbuzz.js'

describe('Number argument tests for fizzbuzz function', () => {
  test('Number argument must be an integer', () => {
    expect(() => fizzbuzz(true).toThrow('Invalid Argument: must be a positive integer'))
    expect(() => fizzbuzz('77').toThrow('Invalid Argument: must be a positive integer'))
    expect(() => fizzbuzz(32.1234).toThrow('Invalid Argument: must be a positive integer'))
  })

  test('Number argument must be positive', () => {
    expect(() => fizzbuzz(-7)).toThrow('Invalid Argument: must be a positive integer')
  })
})

describe('Return value tests for fizzbuzz function', () => {
  test('Divisible by 3 returns "fizz"', () => {
    expect(fizzbuzz(12)).toBe('fizz')
  })

  test('Divisible by 5 returns "buzz"', () => {
    expect(fizzbuzz(25)).toBe('buzz')
  })

  test('Divisible by 3 and 5 returns "fizzbuzz"', () => {
    expect(fizzbuzz(15)).toBe('fizzbuzz')
  })

  test('Not divisible by either 3 or 5 returns an empty string', () => {
    expect(fizzbuzz(23)).toBe('')
  })
})
