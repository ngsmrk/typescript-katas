import { describe, it, expect } from 'vitest'
import { getEvenNumbers } from './filter-even-numbers'

describe('filterEvenNumbers', () => {
  it('should filter the even numbers', () => {
    const given = [1, 24, 3, 8, 10]

    const actual = getEvenNumbers(given)

    expect(actual).toEqual([24, 8, 10])
  })

  it('should filter even numbers from a mixture of negative and positive numbers', () => {
    const given = [-6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6]

    const actual = getEvenNumbers(given)

    expect(actual).toEqual([-6, -4, -2, 0, 2, 4, 6])
  })

  it('should treat NaN as an odd number', () => {
    const given = [NaN]

    const actual = getEvenNumbers(given)

    expect(actual).toEqual([])
  })
})
