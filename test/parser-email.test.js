import { parse } from '../src/parser'

describe('Emails', () => {
  it('should return true for one email', async () => {
    expect(await parse('foo@bar.com', '{email}')).toEqual(true)
  })

  it('should return object containing variable for one email', async () => {
    expect(await parse('foo@bar.com', '{email:foo}')).toEqual({
      foo: 'foo@bar.com',
    })
  })

  it('should return object when an email and a word', async () => {
    expect(await parse('Save foo@bar.com!', 'save {email:foo}')).toEqual({
      foo: 'foo@bar.com',
    })
  })
})
