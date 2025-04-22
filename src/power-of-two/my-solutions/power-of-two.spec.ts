import { describe, it, expect } from 'vitest'
import { getPowerOfTwo } from './power-of-two'

describe('isPowerOfTwo', () => {
  it('should return the power of two given a single number', () => {
    const given = [4]

    const actual = getPowerOfTwo(given)
    expect(actual).toEqual([16])
  })

  it('returns an empty array when given an empty array', () => {
    const given: number[] = []

    const actual = getPowerOfTwo(given)
    expect(actual).toEqual([])
  })

  it('returns an array of numbers to the power of two given an array of numbers', () => {
    const given = [1, 2, 3]

    expect(getPowerOfTwo(given)).toEqual([2, 4, 8])
  })

  it('handles a mixture of positive and negative numbers correctly', () => {
    const given = [-1, 2, -3]

    expect(getPowerOfTwo(given)).toEqual([0.5, 4, 0.125])
  })
})
