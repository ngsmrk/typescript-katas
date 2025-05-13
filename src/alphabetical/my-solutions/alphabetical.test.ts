import { describe, it, expect } from 'vitest'
import { getAlphabeticallySorted } from './alphabetical'

describe('getAlphabeticallySorted', () => {
  it('should sort an array of words alphabetically', () => {
    const input = ['banana', 'apple', 'orange', 'grape']
    const expected = ['apple', 'banana', 'grape', 'orange']
    expect(getAlphabeticallySorted(input)).toEqual(expected)
  })

  it('should sort words regardless of case', () => {
    const input = ['Banana', 'apple', 'Orange', 'grape']
    const expected = ['apple', 'Banana', 'grape', 'Orange']
    expect(getAlphabeticallySorted(input)).toEqual(expected)
  })

  it('should handle an empty array', () => {
    expect(getAlphabeticallySorted([])).toEqual([])
  })

  it('should handle an array with one element', () => {
    expect(getAlphabeticallySorted(['test'])).toEqual(['test'])
  })

  it('should handle an array with duplicate words', () => {
    const input = ['banana', 'apple', 'banana', 'grape']
    const expected = ['apple', 'banana', 'banana', 'grape']
    expect(getAlphabeticallySorted(input)).toEqual(expected)
  })
})
