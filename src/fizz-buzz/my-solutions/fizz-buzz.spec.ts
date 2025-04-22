import { describe, it, expect } from 'vitest'
import { fizzBuzz } from './fizz-buzz'

describe('fizzBuzz', () => {
  it('should return an empty array if zero is provided', () => {
    expect(fizzBuzz(0)).toEqual([])
  })

  it('should return an empty array if a negative number is provided', () => {
    expect(fizzBuzz(-1)).toEqual([])
  })

  it('should return an array with numbers from 1 to the input number', () => {
    expect(fizzBuzz(2)).toEqual([1, 2])
  })

  it('should replace the number 3 with "fizz"', () => {
    expect(fizzBuzz(3)).toEqual([1, 2, 'fizz'])
  })

  it('should replace the number 5 with "buzz"', () => {
    expect(fizzBuzz(5)).toEqual([1, 2, 'fizz', 4, 'buzz'])
  })

  it('should replace all numbers divisible by 3 with "fizz"', () => {
    expect(fizzBuzz(6)).toEqual([1, 2, 'fizz', 4, 'buzz', 'fizz'])
  })

  it('should replace all numbers divisible by 5 with "buzz"', () => {
    expect(fizzBuzz(10)).toEqual([1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz'])
  })

  it('should replace numbers divisible by both 3 and 5 with "fizzbuzz"', () => {
    expect(fizzBuzz(15)).toEqual([
      1,
      2,
      'fizz',
      4,
      'buzz',
      'fizz',
      7,
      8,
      'fizz',
      'buzz',
      11,
      'fizz',
      13,
      14,
      'fizzbuzz'
    ])
  })
})
