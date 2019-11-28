import { WordTokenizer, JaroWinklerDistance } from 'natural'

const tokenizer = new WordTokenizer()

const isWord = script => {
  const match = script.match(/^[a-zA-Z]+/)

  return match ? match[0] : false
}

export default (english, expected, options) => {
  const expectedWord = isWord(expected)
  if (!expectedWord) {
    return false
  }

  const words = tokenizer.tokenize(english)

  if (words.length === 0) {
    return false
  }

  const distance = JaroWinklerDistance(words[0], expectedWord)

  if (distance > options.maxDistance) {
    return {
      englishLeft: english.replace(english.split(' ')[0], ''),
      expectedLeft: expected.replace(expectedWord, ''),
      details: { distance },
    }
  }

  return false
}
