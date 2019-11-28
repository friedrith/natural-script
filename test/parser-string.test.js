import { parse } from '../src/parser'

describe('Simple strings', () => {
  it('should return true for one word', () => {
    expect(parse('Hello', 'hello')).toEqual(true)
  })
})
