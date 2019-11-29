import { parse } from '../src/parser'

describe('Regexp', () => {
  it('should return true for one regex', async () => {
    expect(await parse('foobar', '{.*}')).toEqual(true)
  })

  it('should return object containing variable for one regex', async () => {
    expect(await parse('foobar', '{.*:foo}')).toEqual({
      foo: 'foobar',
    })
  })

  it('should return object when a regex and a word', async () => {
    expect(await parse('Save foobar!', 'save {.*:foo}')).toEqual({
      foo: 'foobar',
    })
  })
})
