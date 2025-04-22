import { describe, it, expect } from 'vitest'
import { getTotal } from './add-all-numbers'

describe('addAllNumbers', () => {
  it('should add all the numbers in an array', () => {
    expect(getTotal([1, 2, 3])).toBe(6)
  })

  it('should return 0 for an empty array', () => {
    expect(getTotal([])).toBe(0)
  })

  it('handles a mixture of negative and positive numbers', () => {
    expect(getTotal([1, -2])).toBe(-1)
  })

  it('handles a mixture of negative numbers', () => {
    expect(getTotal([-1, -2])).toBe(-3)
  })
})
