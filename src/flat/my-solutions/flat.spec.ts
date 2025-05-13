import { describe, it, expect } from 'vitest'
import { flat } from './flat'

describe('flat', () => {
  it('takes two one-dimensional arrays and combines them into one', () => {
    expect(flat([1, 2], [3, 4])).toEqual([1, 2, 3, 4])
  })
})
