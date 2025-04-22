import { describe, it, expect } from 'vitest'
import { getHighestNumber } from './highest-number'

describe('getHighestNumber', () => {
  it('should get the highest number given an array of one number', () => {
    const given = [42]

    const actual = getHighestNumber(given)

    expect(actual).toBe(42)
  })
})
