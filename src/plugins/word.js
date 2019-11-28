import startsWith from '../utils/expression'

const isWord = word => {
  const match = word.match(/([a-zA-Z]+)/)

  return match ? match[0] : false
}

export default (english, expected) => {
  const wantWord = startsWith('word', expected)
  if (!wantWord) {
    return false
  }

  const words = english.split(/[!?,;\s]+/)
  if (words.length === 0) {
    return false
  }

  const word = isWord(words[0])

  const vars = {}
  if (wantWord[1]) {
    vars[wantWord[1]] = word
  }

  if (word) {
    return {
      englishLeft: english.replace(word, ''),
      expectedLeft: expected.replace(wantWord[0], ''),
      vars,
    }
  }

  return false
}
