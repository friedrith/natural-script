import { parse } from '../src/parser'

describe('Urls', () => {
  it('should return true for one url', async () => {
    expect(await parse('www.google.com', '{url}')).toEqual(true)
  })

  it('should return true for one url with https', async () => {
    expect(await parse('https://www.google.com', '{url}')).toEqual(true)
  })

  it('should return true for one url with http', async () => {
    expect(await parse('http://www.google.com', '{url}')).toEqual(true)
  })

  it('should return true for one url with punctuation', async () => {
    expect(await parse('www.google.com!', '{url}')).toEqual(true)
  })

  it('should return true for two urls ', async () => {
    expect(
      await parse('www.google.com http://facebook.com', '{url} {url}')
    ).toEqual(true)
  })

  it('should return an object with content detected for two urls', async () => {
    expect(
      await parse(
        'www.google.com http://facebook.com',
        '{url:google} {url:facebook}'
      )
    ).toEqual({
      google: 'www.google.com',
      facebook: 'http://facebook.com',
    })
  })

  it('should return true for one url ', async () => {
    expect(await parse('go to http://foo.com', 'go to {url}')).toEqual(true)
  })

  it('should return an url ', async () => {
    expect(await parse('go to http://foo.com', 'go to {url:bar}')).toEqual({
      bar: 'http://foo.com',
    })
  })
})
