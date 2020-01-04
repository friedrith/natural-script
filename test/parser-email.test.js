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

  it('should return true for an email with a sentence', async () => {
    expect(await parse('my email is', 'my email is')).toEqual(true)
  })

  it('should return object when an email and a word', async () => {
    expect(await parse('save foo@bar.com!', 'save {email:foo}')).toEqual({
      foo: 'foo@bar.com',
    })
  })

  it('should return false', async () => {
    expect(await parse('TOKEN', '{email:foo}')).toEqual(false)
  })
})
