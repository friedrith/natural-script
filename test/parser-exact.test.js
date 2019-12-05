import { parse } from '../src/parser'

describe('exact strings', () => {
  it('should return false when there is little mistake', async () => {
    expect(await parse('Hello', 'helo')).toEqual(false)
  })

  it('should return true for exact same word', async () => {
    expect(await parse('hello', 'hello')).toEqual(true)
  })

  it('should return false for exact same words but with uppercase', async () => {
    expect(await parse('Hello', 'hello')).toEqual(false)
  })

  it('should return true with several exact same words', async () => {
    expect(await parse('hello word', 'hello word')).toEqual(true)
  })
})
