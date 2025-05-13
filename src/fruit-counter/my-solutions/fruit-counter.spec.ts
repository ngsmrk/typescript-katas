import { describe, expect, it } from 'vitest'
import { fruitCounter } from './fruit-counter'

describe('fruitCounter', () => {
  it('returns empty array given an empty array', () => {
    const given = []
    const actual = fruitCounter(given)
    expect(actual).toEqual({})
  })

  it('returns the correct list of fruits and the correct count for each', () => {
    const given = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple']
    const actual = fruitCounter(given)
    expect(actual).toEqual({
      apple: 3,
      banana: 2,
      orange: 1
    })
  })
})
