import { parse } from '../src/parser'

describe('Simple strings', () => {
  it('should return true for one word', async () => {
    expect(await parse('Hello', 'hello')).toEqual(true)
  })

  it('should return true for two words', async () => {
    expect(await parse('Hello You!', 'hello you')).toEqual(true)
  })

  it('should return true for three words', async () => {
    expect(await parse('Who are you?', 'who are you')).toEqual(true)
  })

  it('should return true when a light typing mistake', async () => {
    expect(await parse('Hello', 'helo')).toEqual(true)
  })

  it('should return true for one word with spaces', async () => {
    expect(await parse(' Hello  ', 'hello')).toEqual(true)
  })
})
