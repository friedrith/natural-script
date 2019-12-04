const isExactWord = script => {
  const match = script.match(/^"([a-zA-Z]+)"/)

  return match ? match[1] : false
}

export default (english, expected) => {
  const expectedWord = isExactWord(expected)
  if (!expectedWord) {
    return false
  }

  if (english.startsWith(expectedWord)) {
    return {
      englishLeft: english.replace(expectedWord, ''),
      expectedLeft: expected.replace(expectedWord, ''),
    }
  }

  return false
}
