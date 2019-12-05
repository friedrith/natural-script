import { parse } from '../src/parser'

describe('Word', () => {
  it('should return true for one word', async () => {
    expect(await parse('Hello', '{word}')).toEqual(true)
  })

  it('should return true for one word', async () => {
    expect(await parse('Hello', '{word:foo}')).toEqual({ foo: 'Hello' })
  })

  it('should return true for one word and a string', async () => {
    expect(await parse('hello thibault', 'hello {word:foo}')).toEqual({
      foo: 'thibault',
    })
  })
})
