import { describe, it, expect } from 'vitest'
import { getHighestNumber } from './highest-number'

describe('getHighestNumber', () => {
  it('should get the highest number given an array of one number', () => {
    const given = [42]

    const actual = getHighestNumber(given)

    expect(actual).toBe(42)
  })

  it('should get the highest number given an array of negative numbers', () => {
    const given = [-5, -10, -1, -20]

    const actual = getHighestNumber(given)

    expect(actual).toBe(-1)
  })

  it('should get the highest number given an array of mixed positive and negative numbers', () => {
    const given = [-5, 10, -1, 3, -20, 8]

    const actual = getHighestNumber(given)

    expect(actual).toBe(10)
  })
})
